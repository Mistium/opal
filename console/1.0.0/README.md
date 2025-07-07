# 🖥️ Console - OSL Package

A debugging console utility for OSL applications with logging, scrolling, and toggle functionality.

## 🚀 Installation

```sh
opal install console
```

## 📖 Usage

```osl
import 'console/v1' from 'packages' as 'console'

// Log messages to the console
console.log("Hello, world!")
console.log("Debug information")
console.log("Error: Something went wrong")

// Use in your main loop
mainloop:
  console.mainloop(def() -> (
    // Your main application code here
    goto 100 100
    text "My App" 12
  ))
```

## 🔧 API Reference

### Methods

#### `log(data)`

Add a message to the console log.

**Parameters:**

- `data` (string) - The message to log

#### `replace_line(line, data)`

Replace a specific line in the console with new data.

**Parameters:**

- `line` (number) - The line number to replace (0-indexed)
- `data` (string) - The new data for that line

#### `remove_line(line)`

Remove a specific line from the console.

**Parameters:**

- `line` (number) - The line number to remove (0-indexed)

#### `clear()`

Clear all messages from the console.

#### `mainloop(callback)`

Main loop wrapper that handles console display and your application logic.

**Parameters:**

- `callback` (function) - Your main application loop function

### Keyboard Shortcuts

- **Ctrl + Shift + C** - Toggle console visibility


## 📝 Example

```osl
import 'console/v1' from 'packages' as 'console'

local counter = 0

mainloop:
  console.mainloop(def() -> (
    // Your app code
    loc 2 2 20 -20
    text "Counter: " ++ counter 10
    
    if "space".onKeyDown() (
      counter ++
      console.log("Counter incremented to " ++ counter)
    )
    
    if counter > 10 (
      console.log("Warning: Counter is getting high!")
    )
  ))
```
