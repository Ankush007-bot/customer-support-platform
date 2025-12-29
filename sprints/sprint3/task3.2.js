// 🟦 Task 3.2 – Socket.IO integration
// 🎯 Goal

// Widget ↔ Backend live WebSocket connection

// Fake setTimeout replies ❌

// Real events via socket ✅

// 1️⃣ Backend – Socket events add karo

// 📁 server/socket/chat.socket.js

// function initChatSocket(io) {
//   io.on("connection", (socket) => {
//     console.log("[Socket] connected:", socket.id);

//     // client → server
//     socket.on("chat:message", (payload) => {
//       console.log("[chat:message]", payload);

//       // agent typing
//       socket.emit("agent:typing");

//       setTimeout(() => {
//         socket.emit("agent:message", {
//           text: "Thanks for reaching out! How can I help you?",
//         });
//       }, 1200);
//     });

//     socket.on("disconnect", () => {
//       console.log("[Socket] disconnected:", socket.id);
//     });
//   });
// }

// module.exports = initChatSocket;


// ✅ Backend now supports:

// chat:message

// agent:typing

// agent:message

// 2️⃣ Widget – Socket.IO client install
// cd packages/widget
// npm install socket.io-client

// 3️⃣ Widget – socket init

// 📁 src/socket.js (NEW FILE)

// import { io } from "socket.io-client";

// export const socket = io("http://localhost:4000");

// 4️⃣ Widget – socket listeners

// 📁 src/index.js

// import { socket } from "./socket";
// import { addAgentMessage, showTyping, hideTyping } from "./ui/messages";

// socket.on("connect", () => {
//   console.log("[Chatbot] Socket connected");
// });

// socket.on("agent:typing", () => {
//   showTyping();
// });

// socket.on("agent:message", (data) => {
//   hideTyping();
//   addAgentMessage(data.text);
// });

// 5️⃣ Replace fake reply (IMPORTANT)

// 📁 handleSend() function

// ❌ REMOVE this:

// setTimeout(() => {
//   hideTyping();
//   addAgentMessage("Thanks...");
// }, 1200);


// ✅ ADD this:

// socket.emit("chat:message", {
//   text: value,
// });

// 6️⃣ Flow NOW (REAL)
// User types → socket.emit(chat:message)
// Server → agent:typing
// Server → agent:message
// UI just listens (dumb UI ✅)

// 7️⃣ Verify

// Backend console:

// [Socket] connected
// [chat:message] { text: "hi" }


// Widget:

// “Agent is typing…” shows

// Message comes from server

// ✅ Task 3.2 DONE when:

// No setTimeout in frontend

// Agent replies ONLY from backend

// Typing indicator comes via socket