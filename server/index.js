const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
//import crypto from "crypto";

const crypto = require("crypto")

const healthRoute = require("./routes/health");
const initChatSocket = require("./socket/chat.socket");

const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use("/health", healthRoute);

// server + socket
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

initChatSocket(io);




const PORT = 4000;
server.listen(PORT, () => {
  console.log("[Server] running on port", PORT);
});
