#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function getDirectorySize(dirPath) {
  let totalSize = 0;
  try {
    const files = fs.readdirSync(dirPath, { withFileTypes: true });
    for (const file of files) {
      const filePath = path.join(dirPath, file.name);
      if (file.isDirectory()) {
        totalSize += getDirectorySize(filePath);
      } else {
        totalSize += fs.statSync(filePath).size;
      }
    }
  } catch (err) {
    console.error(`Error reading directory ${dirPath}:`, err.message);
  }
  return totalSize;
}

function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return Math.round(bytes / 1024) + ' KB';
  return Math.round(bytes / (1024 * 1024)) + ' MB';
}

function generatePackageMetadata() {
  const packagesDir = './packages';
  const packages = {};
  const repoMetadata = {
    name: "Opal Package Registry",
    description: "Official package registry for the OSL programming language",
    packages: []
  };
  
  try {
    // Check if packages directory exists
    if (!fs.existsSync(packagesDir)) {
      console.error(`Packages directory ${packagesDir} does not exist`);
      process.exit(1);
    }
    
    const items = fs.readdirSync(packagesDir, { withFileTypes: true });
    
    for (const item of items) {
      if (!item.isDirectory() || item.name.startsWith('.') || item.name === 'node_modules') {
        continue;
      }
      
      const packagePath = path.join(packagesDir, item.name);
      const packageData = {
        title: item.name,
        versions: []
      };
      
      try {
        const versionDirs = fs.readdirSync(packagePath, { withFileTypes: true });
        
        for (const versionDir of versionDirs) {
          if (!versionDir.isDirectory()) continue;
          
          const versionPath = path.join(packagePath, versionDir.name);
          const infoJsonPath = path.join(versionPath, 'info.json');
          
          if (fs.existsSync(infoJsonPath)) {
            try {
              const infoContent = fs.readFileSync(infoJsonPath, 'utf8');
              const infoData = JSON.parse(infoContent);
              const size = getDirectorySize(versionPath);
              
              packageData.versions.push({
                ...infoData,
                tags: infoData.tags || [],
                size: formatSize(size),
                sizeBytes: size
              });
            } catch (err) {
              console.error(`Error processing ${infoJsonPath}:`, err.message);
            }
          }
        }
        
        // Sort versions by version number (descending)
        packageData.versions.sort((a, b) => {
          const versionA = a.version.split('.').map(n => parseInt(n));
          const versionB = b.version.split('.').map(n => parseInt(n));
          for (let i = 0; i < Math.max(versionA.length, versionB.length); i++) {
            const numA = versionA[i] || 0;
            const numB = versionB[i] || 0;
            if (numA !== numB) return numB - numA;
          }
          return 0;
        });
        if (packageData.versions.length > 0) {
          // Add top-level tags for the package (from the latest version)
          packageData.tags = packageData.versions[0].tags || [];
          packages[item.name] = packageData;
          repoMetadata.packages.push(packageData);
          // Write individual package metadata
          const packageMetadataPath = path.join(packagePath, 'package.json');
          fs.writeFileSync(packageMetadataPath, JSON.stringify(packageData, null, 2));
          console.log(`Generated metadata for ${item.name}`);
        }
      } catch (err) {
        console.error(`Error processing package ${item.name}:`, err.message);
      }
    }
    
    // Write repository-wide metadata
    fs.writeFileSync('packages.json', JSON.stringify(repoMetadata, null, 2));
    fs.writeFileSync('packages-min.json', JSON.stringify(repoMetadata));
    console.log('Generated repository metadata');
    
    // Generate package index
    const packageIndex = {
      packages: Object.keys(packages).map(pkgName => {
        const pkg = packages[pkgName];
        return {
          name: pkgName,
          latestVersion: (pkg.versions && pkg.versions[0] && pkg.versions[0].version) || null
        };
      }),
      count: Object.keys(packages).length,
      lastUpdated: new Date().toISOString()
    };
    fs.writeFileSync('index.json', JSON.stringify(packageIndex, null, 2));
    console.log('Generated package index');
    
  } catch (err) {
    console.error('Error generating metadata:', err.message);
    process.exit(1);
  }
}

generatePackageMetadata();
