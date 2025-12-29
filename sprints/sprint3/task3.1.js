// 🟦 Task 3.1 – Backend Project Setup
// 🎯 Goal

// Node + Express server run ho

// Socket.IO ready ho

// Health route se confirm ho backend alive hai

// 1️⃣ Folder Structure (exact)
// server/
//  ├─ index.js
//  ├─ package.json
//  ├─ routes/
//  │   └─ health.js
//  ├─ socket/
//  │   └─ chat.socket.js

// 2️⃣ Initialize backend
// cd server
// npm init -y
// npm install express socket.io cors

// 3️⃣ server/index.js
// const express = require("express");
// const http = require("http");
// const cors = require("cors");
// const { Server } = require("socket.io");

// const healthRoute = require("./routes/health");
// const initChatSocket = require("./socket/chat.socket");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // routes
// app.use("/health", healthRoute);

// // server + socket
// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: "*",
//   },
// });

// initChatSocket(io);

// const PORT = 4000;
// server.listen(PORT, () => {
//   console.log("[Server] running on port", PORT);
// });

// 4️⃣ server/routes/health.js
// const router = require("express").Router();

// router.get("/", (req, res) => {
//   res.json({
//     status: "ok",
//     message: "Chatbot backend is healthy",
//   });
// });

// module.exports = router;

// 5️⃣ server/socket/chat.socket.js
// function initChatSocket(io) {
//   io.on("connection", (socket) => {
//     console.log("[Socket] client connected:", socket.id);

//     socket.on("disconnect", () => {
//       console.log("[Socket] client disconnected:", socket.id);
//     });
//   });
// }

// module.exports = initChatSocket;

// 6️⃣ Run server
// node index.js

// 7️⃣ Verify (VERY IMPORTANT)

// Browser → http://localhost:4000/health

// Expected:

// {
//   "status": "ok",
//   "message": "Chatbot backend is healthy"
// }


// Console:

// [Server] running on port 4000

// ✅ Task 3.1 DONE when:

// Server start ho

// Health route working

// Socket connection log aa raha ho

// 👉 Next step: