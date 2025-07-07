# 💾 Save - OSL Package

A simple wrapper for the OSL save system, providing easy file-based persistence for your apps.

## 🚀 Installation

```sh
opal install save
```

## 📖 Usage

```osl
import 'save/v1' from 'packages' as 'save'

// Setup the app save directory you want to use
save.init("example")

// Update a file in the app's save data
save.setItem("hello", "world")

// Get an item of the save data
log save.getItem("hello")
// {
//   "filename": "hello.txt",
//   "exists": true,
//   "data": "world",
//   "size": 5
// }
```

## 🔧 API Reference

### Methods

#### `init(directory)`

Set the save directory for your app.

- `directory` (string): The directory name to use for saving files.

#### `setItem(filename, value)`

Save a value to a file in the save directory.

- `filename` (string): The file name (extension optional).
- `value` (string): The value to save.

#### `getItem(filename)`

Get a file's contents and metadata from the save directory.

- `filename` (string): The file name (extension optional).
- **Returns:** `{ filename, exists, data, size }`

#### `all()`

Return all save contents as a list.

## 📝 Example Output

```json
{
  "filename": "hello.txt",
  "exists": true,
  "data": "world",
  "size": 5
}
```
