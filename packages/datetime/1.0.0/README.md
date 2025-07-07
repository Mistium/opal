# 📅 DateTime - OSL Package

A comprehensive datetime utility library for OSL with formatting, manipulation, and relative time functionality.

## 🚀 Installation

```sh
opal install datetime
```

## 📖 Usage

```osl
import 'datetime/v1' from 'packages' as 'dt'

// Get current timestamp
local now = dt.now()

// Format a timestamp
local formatted = dt.format(now, "YYYY-MM-DD HH:mm:ss")
log formatted  // Output: 2025-07-06 14:30:25

// Make timestamp relative
local relative = dt.makeRelative(now)
log relative  // Output: "just now" or "2 minutes ago"

// Add ordinal suffix to numbers
local suffix = dt.addSuffix(21)
log suffix  // Output: "21st"
```

## 🔧 API Reference

### Methods

#### `now()`

Returns the current timestamp.

**Returns:** `number` - Current timestamp

#### `format(timestamp, format)`

Formats a timestamp according to the provided format string.

**Parameters:**

- `timestamp` (number) - The timestamp to format
- `format` (string) - Format string with tokens

**Format Tokens:**

- `YYYY` - 4-digit year (e.g., 2025)
- `YY` - 2-digit year (e.g., 25)
- `MMMM` - Full month name (e.g., January)
- `MMM` - Short month name (e.g., Jan)
- `MM` - 2-digit month (e.g., 01)
- `M` - Month number (e.g., 1)
- `DD` - 2-digit day (e.g., 06)
- `Do` - Day with ordinal suffix (e.g., 6th)
- `D` - Day number (e.g., 6)
- `HH` - 2-digit hour (e.g., 14)
- `H` - Hour number (e.g., 14)
- `mm` - 2-digit minute (e.g., 30)
- `m` - Minute number (e.g., 30)
- `ss` - 2-digit second (e.g., 25)
- `s` - Second number (e.g., 25)
- `SSS` - 3-digit milliseconds (e.g., 123)
- `SS` - 2-digit milliseconds (e.g., 12)
- `S` - 1-digit milliseconds (e.g., 1)
- `X` - Unix timestamp in seconds
- `x` - Unix timestamp in milliseconds

**Returns:** `string` - Formatted date string

#### `makeRelative(timestamp)`

Converts a timestamp to a relative time string.

**Parameters:**

- `timestamp` (number) - The timestamp to convert

**Returns:** `string` - Relative time string (e.g., "2 minutes ago")

#### `addSuffix(num)`

Adds ordinal suffix to a number (1st, 2nd, 3rd, 4th, etc.).

**Parameters:**

- `num` (number|string) - The number to add suffix to

**Returns:** `string` - Number with ordinal suffix

### Properties

#### `months`

Array of month names:

```osl
["January", "February", "March", "April", "May", "June",
 "July", "August", "September", "October", "November", "December"]
```

#### `mul`

Time multiplication constants:

```osl
{
  second: 1,
  minute: 60,
  hour: 3600,
  day: 86400,
  year: 31557600
}
```

## 📝 Examples

### Basic Formatting

```osl
import 'datetime/v1' from 'packages' as 'dt'

local now = dt.now()

// Different format examples
log dt.format(now, "YYYY-MM-DD")          // 2025-07-06
log dt.format(now, "MMMM Do, YYYY")       // July 6th, 2025
log dt.format(now, "MMM DD, YY")          // Jul 06, 25
log dt.format(now, "HH:mm:ss")            // 14:30:25
log dt.format(now, "h:mm A")              // 2:30 PM
```

### Working with Ordinals

```osl
import 'datetime/v1' from 'packages' as 'dt'

log dt.addSuffix(1)   // "1st"
log dt.addSuffix(2)   // "2nd"
log dt.addSuffix(3)   // "3rd"
log dt.addSuffix(4)   // "4th"
log dt.addSuffix(11)  // "11th"
log dt.addSuffix(21)  // "21st"
log dt.addSuffix(22)  // "22nd"
```

### Time Calculations

```osl
import 'datetime/v1' from 'packages' as 'dt'

local now = dt.now()
local oneHourAgo = now - dt.mul.hour
local oneDayFromNow = now + dt.mul.day

log dt.format(oneHourAgo, "HH:mm")     // One hour ago
log dt.format(oneDayFromNow, "YYYY-MM-DD")  // Tomorrow's date
```
