// 👍 Perfect — ab hum bilkul sahi jagah pe hain

// 🟦 Task 3.6 – Message Routing

// Goal (crystal clear):

// ✅ User ka message sirf agent ko jaye

// ❌ Bot / fake / default reply completely band

// 🧠 Routing server decide kare, frontend dumb rahe

// 🧠 CURRENT STATE (recap)

// sessionId per user ✔

// connect-agent event ✔

// session.mode = "agent" backend me set ho raha ✔

// Frontend sirf chat:message bhej raha ✔

// Ab hume routing logic add karna hai.

// 🟦 STEP 1 — Backend: Session mode default
// server/index.js (connection ke time)
// sessions.set(sessionId, {
//   sessionId,
//   socketId: socket.id,
//   messages: [],
//   mode: "bot",        // 👈 default
//   createdAt: Date.now(),
// });


// 👉 matlab:

// jab tak user agent nahi maangta → bot mode

// agent click ke baad → agent mode

// 🟦 STEP 2 — Backend: chat:message routing
// ❌ OLD (wrong now)
// socket.on("chat:message", (payload) => {
//   // direct reply / fake logic
// });

// ✅ NEW (correct)
// socket.on("chat:message", (payload) => {
//   const session = sessions.get(socket.sessionId);
//   if (!session) return;

//   session.messages.push({
//     from: "user",
//     text: payload.text,
//     time: Date.now(),
//   });

//   // 🧠 ROUTING
//   if (session.mode === "agent") {
//     // agent typing
//     socket.emit("agent:typing");

//     setTimeout(() => {
//       socket.emit("agent:message", {
//         text: "Thanks for reaching out! How can I help you?",
//       });
//     }, 1200);
//   }

//   // ❌ NO BOT RESPONSE
// });


// 👉 Bot logic yahin khatam
// 👉 Ab sirf agent mode me reply aayega

// 🟦 STEP 3 — connect-agent event (already almost correct)
// socket.on("connect-agent", () => {
//   const session = sessions.get(socket.sessionId);
//   if (!session) return;

//   session.mode = "agent";   // 🔥 THIS IS THE SWITCH

//   socket.emit("agent:typing");

//   setTimeout(() => {
//     socket.emit("agent:message", {
//       text: "Hi 👋 I’m Alex from support.",
//     });
//   }, 1500);
// });

// 🟦 STEP 4 — Frontend: NOTHING EXTRA

// ⚠️ Important point
// Frontend:

// ❌ koi if/else

// ❌ koi mode state

// ❌ koi bot disable logic

// Frontend sirf yeh kare:

// socket.emit("chat:message", { text });


// Routing = backend ka kaam

// 🧪 WHAT YOU CAN TEST NOW (UI)
// ✅ Case 1: Without agent

// Open chat

// Send message

// ❌ No reply (expected)

// ✅ Case 2: With agent

// Click Connect to agent

// Agent typing

// Greeting message

// Send message

// Agent typing again

// Agent reply

// 🧠 WHAT YOU ACHIEVED (IMPORTANT)

// ✔ Single source of truth → server
// ✔ Future-ready for real agents
// ✔ Clean separation
// ✔ No fake UI hacks
// ✔ Production-grade flow