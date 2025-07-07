# 📡 Rotur - Real-Time Messaging for OSL

A full-featured real-time messaging and account service for OSL, supporting room-based communication, presence, and direct messaging.

## 🚀 Installation

```sh
opal install rotur
```

## 📖 Usage

```osl
import 'rotur/v1' from 'packages' as 'rotur'

// Subscribe to a room with a username
client @= rotur.subscribe('my_room', 'rtr-username')

requests = 0

// Handle incoming messages
client.onMessage @= def(msg) -> (
  log msg.origin.username + ' sent me: ' + msg.val.payload
  if msg.val.payload == 'ping' (
    rotur.pMessage(client.room, msg.origin.username, 'pong')
  )
  requests ++
)

mainloop:
  goto window.left + 10 window.top - 20
  text 'Requests: ' ++ requests 10 : c#fff

import 'win-buttons'
```

## 🔧 API Reference

### Methods

- `subscribe(room, username)` — Join a room and get a client object
- `unSubscribe(room)` — Leave a room
- `isLinked(room)` — Check if the client is linked to the room
- `listConnected(room)` — List users connected to a room
- `pMessage(room, name, value)` — Send a private message to a user
- `gMessage(room, value)` — Send a message to all users in a room

### Client Object Events

- `onMessage(msg)` — Called when a message is received
- `onlink()` — Called when the client is linked
- `onclose()` — Called when the connection closes
- `onjoin()` — Called when a user joins
- `onleave()` — Called when a user leaves

## 📝 Example

```osl
import 'rotur/v1' from 'packages' as 'rotur'

client @= rotur.subscribe('chat', 'alice')

client.onMessage @= def(msg) -> (
  log msg.origin.username + ': ' + msg.val.payload
)

rotur.gMessage('chat', 'Hello everyone!')
```
