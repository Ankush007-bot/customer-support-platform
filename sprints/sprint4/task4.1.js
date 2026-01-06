// // A️⃣ Task 3.8 – Multi-message ordering & queue safety
// // B️⃣ Task 3.9 – Session cleanup / TTL
// // C️⃣ Task 4.1 – Real agent join architecture (admin side)









// Next = Task 3.13 — Agent socket connect → online/offline tracking

// Ab hum real-time agent presence add karenge (logic only, no UI).

// 🧩 Task 3.13 — Agent Online / Offline via Socket
// 🎯 Goal

// Agent jab socket se connect kare → online: true

// Disconnect pe → online: false

// Admin dashboard future-ready ho jaye

// 1️⃣ Agent socket flow (concept)

// Agent alagh socket namespace / event se connect karega

// Agent apna agentId bhejega

// Server us agent ko online mark karega

// 2️⃣ Update agents store (already Map hai)
// // agent object structure (already)
// {
//   agentId,
//   name,
//   email,
//   online: false
// }

// 3️⃣ Socket logic (IMPORTANT)
// 📁 server/socket/agent.socket.js
// const agents = require("../data/agents");

// function initAgentSocket(io) {
//   io.on("connection", (socket) => {
//     socket.on("agent:login", ({ agentId }) => {
//       const agent = agents.get(agentId);
//       if (!agent) return;

//       agent.online = true;
//       agent.socketId = socket.id;

//       console.log("[Agent ONLINE]", agent.name);

//       // future: notify admin
//       io.emit("agent:status", {
//         agentId,
//         online: true,
//       });
//     });

//     socket.on("disconnect", () => {
//       for (let agent of agents.values()) {
//         if (agent.socketId === socket.id) {
//           agent.online = false;
//           delete agent.socketId;

//           console.log("[Agent OFFLINE]", agent.name);

//           io.emit("agent:status", {
//             agentId: agent.agentId,
//             online: false,
//           });
//         }
//       }
//     });
//   });
// }

// module.exports = initAgentSocket;

// 4️⃣ Register agent socket
// 📁 server/index.js
// const initAgentSocket = require("./socket/agent.socket");

// initAgentSocket(io);

// 🧪 TEST (NO UI NEEDED)
// From browser / Postman socket / console:
// socket.emit("agent:login", {
//   agentId: "PASTE_AGENT_ID"
// });

// Expected logs
// [Agent ONLINE] Alex
// [Agent OFFLINE] Alex

// ✅ ABHI KYA ACHIEVE HUA

// ✔ Agents added by admin

// ✔ Agent online/offline tracked

// ✔ Real-time presence system ready

// ✔ Multiple agents possible