# 🎲 Seeded Random - OSL Package

A seeded random number generator for OSL with predictable, reproducible random sequences.

## 🚀 Installation

```sh
opal install seeded_random
```

## 📖 Usage

```osl
import 'seeded_random/v1' from 'packages' as 'rng'

// Generate random float between 0 and 1
local value = rng.random()
log value  // Output: 0.37454011928749084

// Generate random integer between min and max (inclusive)
local dice = rng.randint(1, 6)
log dice  // Output: 3

// Set custom seed for reproducible sequences
rng.seed = 12345
local first = rng.random()
rng.seed = 12345
local second = rng.random()
// first === second (true)
```

## 🔧 API Reference

### Methods

#### `random()`

Generates a pseudo-random float between 0.0 and 1.0.

**Returns:** `number` - Random float between 0.0 and 1.0

#### `randint(a, b)`

Generates a random integer between `a` and `b` (inclusive).

**Parameters:**

- `a` (number) - Minimum value (inclusive)
- `b` (number) - Maximum value (inclusive)

**Returns:** `number` - Random integer between a and b

### Properties

#### `seed`

The current seed value for the random number generator.

**Default:** `42`

**Example:**
```osl
rng.seed = 98765
```

### Constants

- `modulus` - 2^31 - 1 (2147483647)
- `multiplier` - 1664525
- `increment` - 1013904223

## 📝 Examples

### Basic Random Numbers

```osl
import 'seeded_random/v1' from 'packages' as 'rng'

// Generate 10 random numbers
for i 10 (
  log rng.random()
)
```

### Reproducible Sequences

```osl
import 'seeded_random/v1' from 'packages' as 'rng'

// Set seed for reproducible results
rng.seed = 1337

local values = []
for i 5 (
  values.push(rng.randint(1, 100))
)
log values  // Always: [same sequence]
```

### Dice Rolling

```osl
import 'seeded_random/v1' from 'packages' as 'rng'

// Roll two six-sided dice
local die1 = rng.randint(1, 6)
local die2 = rng.randint(1, 6)
local total = die1 + die2

log "Rolled: " + die1 + " + " + die2 + " = " + total
```

## 📄 License

This package is part of the OSL standard library collection.
