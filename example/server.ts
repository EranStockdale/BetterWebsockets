import { WebSocketClient, WebSocketServer } from "../lib/websocket.ts";

const wss = new WebSocketServer(1234);
wss.on("connection", function (ws: WebSocketClient) {
  console.log("socket connected!");
  ws.on("message", function (eventName: string, data: object) {
    console.log(eventName, data);
    ws.send(eventName, data)
  });
});