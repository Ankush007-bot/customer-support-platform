// 🎯 Goal (Task 3.4)

// Agent typing event backend se emit

// Agent reply backend se delayed

// Frontend me NO setTimeout / fake logic

// 1️⃣ Server side – events flow (FINAL)

// जब user message aaye:

// agent:typing emit

// delay

// agent:message emit

// 2️⃣ Backend code (socket logic)

// server/socket/index.js

// import crypto from "crypto";
// import { sessions } from "../sessionStore.js";

// export function initSocket(io) {
//   io.on("connection", (socket) => {
//     console.log("Socket connected:", socket.id);

//     const sessionId = crypto.randomUUID();

//     sessions.set(sessionId, {
//       socketId: socket.id,
//       messages: [],
//     });

//     socket.emit("session:init", { sessionId });

//     // 👇 USER MESSAGE
//     socket.on("chat:message", (data) => {
//       const session = sessions.get(sessionId);
//       if (!session) return;

//       session.messages.push({
//         from: "user",
//         text: data.text,
//       });

//       // ✅ STEP 1: agent typing
//       socket.emit("agent:typing");

//       // ✅ STEP 2: delayed reply
//       setTimeout(() => {
//         const reply =
//           "Thanks for reaching out! How can I help you?";

//         session.messages.push({
//           from: "agent",
//           text: reply,
//         });

//         // stop typing + send message
//         socket.emit("agent:message", {
//           text: reply,
//         });
//       }, 1500);
//     });

//     socket.on("disconnect", () => {
//       sessions.delete(sessionId);
//       console.log("Session removed:", sessionId);
//     });
//   });
// }

// 3️⃣ VERY IMPORTANT CHECK (frontend)

// Frontend me sirf yeh hona chahiye:

// socket.on("agent:typing", () => {
//   showTyping(shadowRoot);
// });

// socket.on("agent:message", (data) => {
//   hideTyping(shadowRoot);
//   addAgentMessage(shadowRoot, data.text);
// });


// ❌ Frontend me:

// setTimeout

// fake agent

// startFakeAgentChat

// सब DELETE.

// 4️⃣ UI test checklist ✅

// अब UI pe yeh sequence dikhe:

// User message send

// Agent is typing... (backend event)

// 1–2 sec baad

// Agent reply message

// Agar typing nahi aa rha:

// backend se agent:typing emit ho rha?

// event name match (agent:typing)

// correct shadowRoot pass?

// ✅ Task 3.4 DONE when:

// Typing backend se aa raha

// Reply backend se aa raha

// Frontend dumb (sirf render)