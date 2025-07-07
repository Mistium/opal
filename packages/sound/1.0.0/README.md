# 🔊 Sound - OSL Package

A simple sound object wrapper for OSL, supporting playback, pause, volume, and more.

## 🚀 Installation

```sh
opal install sound
```

## 📖 Usage

```osl
import 'sound/v1' from 'packages' as 'Sound'

// Create a new sound object
local s = Sound.new("/sounds/music.mp3")

// Play the sound
s.start()

// Pause and unpause
s.pause()
s.unpause()

// Set volume (0.0 to 1.0)
s.volume = 0.5

// Seek to 10 seconds
s.currentTime = 10

// Get current time, duration, percent played
log s.currentTime
log s.duration
log s.percent

// Check if loaded or playing
log s.loaded
log s.playing

// Unload the sound
s.unload()
```

## 🔧 API Reference

### Methods

- `new(url)` — Create a new sound object from a URL
- `start()` — Play the sound
- `pause()` — Pause playback
- `unpause()` — Resume playback
- `unload()` — Unload the sound from memory

### Properties

- `currentTime` (get/set) — Get/set playback position (seconds)
- `duration` (get) — Total duration (seconds)
- `percent` (get) — Fraction played (0.0–1.0)
- `volume` (get/set) — Volume (0.0–1.0)
- `loaded` (get) — Whether the sound is loaded
- `playing` (get) — Whether the sound is currently playing

## 📝 Example

```osl
import 'sound/v1' from 'packages' as 'Sound'
local s = Sound.new("/sounds/music.mp3")
s.start()
```
