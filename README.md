
# 🌸 Opal – The OSL Package Manager

**Opal** is the official package manager for the OSL programming language. It helps you install, manage, and publish OSL packages with ease.

## ✨ Features

- Lightweight and fast
- Clean CLI interface
- Local and remote package resolution
- Human-readable manifests

---

## 📦 Installation

`opal` comes with originOS v6.0.0 and later, previously it was named `package`

## 🛠️ Usage

### Install a package

```sh
opal install <package>
# attempts to install latest
opal install <package>:<version>
# attempts to install a specific version
````

Downloads and installs a package into your local environment.

Example:

```sh
opal install rotur
```

---

### View info about a package

```sh
opal describe <package>
```

Shows metadata about a package: description, version, dependencies, author, etc.

---

### Uninstall a package

```sh
opal uninstall <package>
```

Removes a package from the project.

---

### List installed packages

```sh
opal list
```

Shows all packages currently installed in the project.

---

### Search for packages

```sh
opal search <query>
```

Looks up packages by name or tag from the registry.

---

### Update packages

```sh
opal sync
```

Updates all packages to their latest compatible versions.

---

```sh
opal sync <package>
```

Updates a specific package.

---

### Start a new osl package project

```sh
opal init
```

### Publish an osl package

```sh
opal export
```

Looks in your current directory and builds your osl package and exports it to your computer.
