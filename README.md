# Quick Start

## Example Demo

![demo](https://user-images.githubusercontent.com/6661165/84665958-6df6d880-af5b-11ea-91b8-24c5122ddf9a.gif)

Server side

```bash
$ deno run --allow-net https://deno.land/x/betterwebsockets@v1.0.1/example/server.ts
```

Client side

```bash
$ deno run --allow-net https://deno.land/x/betterwebsockets@v1.0.1/example/client.ts
ws connected! (type 'close' to quit)
> something
```

## Usage

Server side

```typescript
import { WebSocketClient, WebSocketServer } from "https://deno.land/x/betterwebsockets@v1.0.1/mod.ts";

const wss = new WebSocketServer(1234);
wss.on("connection", function (ws: WebSocketClient) {
  ws.on("message", function (eventname: string, data: object) {
    console.log(eventname, data);
    ws.send("hello", { "hello": "world" });
  });
});
```

Client side

```typescript
import { WebSocketClient, StandardWebSocketClient } from "https://deno.land/x/betterwebsockets@v1.0.1/mod.ts";

const endpoint = "ws://127.0.0.1:1234";
const ws: WebSocketClient = new StandardWebSocketClient(endpoint);
ws.on("open", function() {
  console.log("ws connected!");
  ws.send("connected", { "connected": true });
});

ws.on("message", function (eventName: string, data: object) {
  console.log(eventName, data);
});
```

# Documentation

## WebSocketServer

### Event

| event | detail|
| --- | --- |
| connection | Emitted when the handshake is complete |
| error | Emitted when an error occurs |

### Field

| field | detail | type |
| --- | --- | --- |
| server.clients | A set that stores all connected clients | Set\<WebSocket\> |

### Method

| method | detail |
| --- | --- |
| close() | Close the server |

## WebSocketClient

### Event

| event | detail|
| --- | --- |
| open | Emitted when the connection is established |
| close | Emitted when the connection is closed |
| message | Emitted when a message is received from the server |
| ping | Emitted when a ping is received from the server |
| pong | Emitted when a pong is received from the server |
| error | Emitted when an error occurs |

### Field

| field | detail | type |
| --- | --- | --- |
| websocket.isClosed | Get the close flag | Boolean \| undefined |

### Method

| method | detail |
| --- | --- |
| send(eventName: string, data: object) | Send a message with a payload |
| ping(message:string \| Unit8Array) | Send the ping |
| close([code:int[, reason:string]]) | Close the connection with the server |
| forceClose() | Forcibly close the connection with the server |


# LICENSE
[MIT LICENSE](./LICENSE)
