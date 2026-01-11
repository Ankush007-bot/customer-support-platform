const http = require("http");
const { Server } = require("socket.io");

const app = require("./app");
const initChatSocket = require("./socket/chat.socket");
const { initAgentSocket } = require("./socket/agent.socket");

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" },
});

initChatSocket(io);
initAgentSocket(io);

const PORT = 4000;
server.listen(PORT, () => {
  console.log("[Server] running on port", PORT);
});
