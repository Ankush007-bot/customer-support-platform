// Perfect. Task 3.14 – Assign free agent to session
// ab real support-system ka core logic likhte hain.
// Point-to-point, backend-focused 👇

// 🧠 GOAL (clear rakh)

// Multiple agents hon

// Jo ONLINE + FREE ho → usko session assign ho

// Ek agent = ek session (for now)

// Session ko pata ho: mera agent kaun hai

// 1️⃣ DATA STRUCTURE (sabse important)
// Agents map
// const agents = new Map();
// /*
// agentId → {
//   agentId,
//   socketId,
//   online: true,
//   busy: false,
// }
// */

// Sessions map (already hai, thoda extend)
// sessions.set(sessionId, {
//   sessionId,
//   socketId,
//   messages: [],
//   mode: "bot",      // bot | agent
//   agentId: null,    // 👈 assigned agent
//   createdAt: Date.now(),
// });

// 2️⃣ AGENT LOGIN (already working, bas thoda clean)
// socket.on("agent:login", ({ agentId }) => {
//   agents.set(agentId, {
//     agentId,
//     socketId: socket.id,
//     online: true,
//     busy: false,
//   });

//   socket.agentId = agentId;

//   console.log("[Agent ONLINE]", agentId);
// });


// Disconnect:

// socket.on("disconnect", () => {
//   if (socket.agentId) {
//     agents.delete(socket.agentId);
//     console.log("[Agent OFFLINE]", socket.agentId);
//   }
// });

// 3️⃣ CORE LOGIC — Find free agent
// function getFreeAgent() {
//   for (const agent of agents.values()) {
//     if (agent.online && !agent.busy) {
//       return agent;
//     }
//   }
//   return null;
// }

// 4️⃣ CONNECT AGENT → ASSIGNMENT (🔥 MAIN PART)
// socket.on("connect-agent", () => {
//   const session = sessions.get(socket.sessionId);
//   if (!session) return;

//   const agent = getFreeAgent();

//   if (!agent) {
//     socket.emit("agent:message", {
//       text: "All agents are busy right now. Please wait.",
//     });
//     return;
//   }

//   // ✅ assign
//   session.mode = "agent";
//   session.agentId = agent.agentId;

//   agent.busy = true;

//   console.log(
//     `[SESSION ${session.sessionId}] assigned to agent ${agent.agentId}`
//   );

//   // notify user
//   socket.emit("agent:typing");

//   setTimeout(() => {
//     socket.emit("agent:message", {
//       text: "Hi 👋 I’m Alex from support.",
//     });
//   }, 1200);
// });

// 5️⃣ MESSAGE ROUTING (agent mode only)
// socket.on("chat:message", ({ text }) => {
//   const session = sessions.get(socket.sessionId);
//   if (!session) return;

//   session.messages.push({ from: "user", text });

//   if (session.mode !== "agent") return;

//   const agent = agents.get(session.agentId);
//   if (!agent) return;

//   // send to agent socket
//   io.to(agent.socketId).emit("user:message", {
//     sessionId: session.sessionId,
//     text,
//   });
// });

// 6️⃣ AGENT REPLY → USER
// socket.on("agent:reply", ({ sessionId, text }) => {
//   const session = sessions.get(sessionId);
//   if (!session) return;

//   session.messages.push({ from: "agent", text });

//   io.to(session.socketId).emit("agent:message", { text });
// });

// ✅ AB HUM KYA ACHIEVE KAR CHUKE HAIN

// ✔ Multiple agents supported
// ✔ Free agent selection
// ✔ One session → one agent
// ✔ Proper message routing
// ✔ Future DB-ready structure