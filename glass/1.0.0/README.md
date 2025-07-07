# 🪟 Glass - OSL Package

A glass transparency effect utility for OSL UI elements with blur and frame rendering.

## 🚀 Installation

```sh
opal install glass
```

## 📖 Usage

```osl
import 'glass/v1' from 'packages' as 'glass'

// Create a glass frame with transparency effect
glass.frame(10, 10, 200, 100, 80, "my-frame")
```

## 🔧 API Reference

### Methods

#### `frame(left, top, right, bottom, contentheight, id)`

Creates a glass frame with transparency and blur effects.

**Parameters:**

- `left` (number) - Left position of the frame
- `top` (number) - Top position of the frame  
- `right` (number) - Right position of the frame
- `bottom` (number) - Bottom position of the frame
- `contentheight` (number) - Height of the content area
- `id` (string) - Unique identifier for the frame

**Effects:**
- Applies 50% transparency
- Renders blurred wallpaper background
- Positions frame content with negative offset

## 📝 Example

```osl
import 'glass/v1' from 'packages' as 'glass'

// Create a glass panel at position (50, 50) with size 300x200
glass.frame(50, 50, 350, 250, 180, "sidebar")

// Continue with your UI content...
text "Glass Panel Content" 60 70 : c#fff
```

## 📄 License

This package is part of the OSL standard library collection.
