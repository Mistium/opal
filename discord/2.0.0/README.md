# 🤖 Discord - OSL Package

Discord bot integration for OSL with message handling, commands, and real-time communication.

## 🚀 Installation

```sh
opal install discord
```

## 📖 Usage

```osl
import 'discord/v2' from 'packages' as 'discord'

// Login with your bot token
discord.login("YOUR_BOT_TOKEN")

// Register a command
discord.register("!ping", def(content, msg) -> (
  return "Pong! " + content
))

// Main loop to handle events
mainloop:
  discord.run()
```

## 🔧 API Reference

### Methods

#### `login(token)`

Login to Discord with a bot token.

**Parameters:**

- `token` (string) - Your Discord bot token

#### `register(command, func)`

Register a command handler.

**Parameters:**

- `command` (string) - Command prefix (e.g., "!ping")
- `func` (function) - Handler function that receives (content, message)

#### `run()`

Process Discord events. Call this in your main loop.

#### `sendmessage(content, channel)`

Send a message to a Discord channel.

**Parameters:**

- `content` (string) - Message content
- `channel` (string) - Channel ID

#### `send_message(content, channel)`

Alias for `sendmessage()`.

#### `senderOf(msg)`

Get the username of a message sender.

**Parameters:**

- `msg` (object) - Discord message object

**Returns:** `string` - Username

#### `pfpOf(msg)`

Get the profile picture URL of a message author.

**Parameters:**

- `msg` (object) - Discord message object

**Returns:** `string` - Avatar URL

#### `myself()`

Get bot user information.

**Returns:** `object` - Bot user data

#### `guilds()`

Get list of connected guilds.

**Returns:** `array` - Guild list

#### `connection()`

Get the Discord WebSocket connection.

**Returns:** `object` - WebSocket connection

## 📝 Example

```osl
import 'discord/v2' from 'packages' as 'discord'

// Login
discord.login("YOUR_BOT_TOKEN")

// Echo command
discord.register("!echo", def(content, msg) -> (
  return "You said: " + content
))

// User info command
discord.register("!userinfo", def(content, msg) -> (
  local username = discord.senderOf(msg)
  local avatar = discord.pfpOf(msg)
  return "User: " + username + "\nAvatar: " + avatar
))

// Main loop
mainloop:
  discord.run()
  // Your other game/app logic here
```

## 🔒 Security

- Keep your bot token secure and never commit it to version control
- Use environment variables or secure configuration files
- Validate all user inputs in command handlers

## 📄 License

This package is part of the OSL standard library collection.
