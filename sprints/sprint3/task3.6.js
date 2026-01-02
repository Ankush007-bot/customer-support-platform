// 🧠 CURRENT REALITY (as of now)
// ✅ Backend

// sessionId ban raha hai

// connect-agent socket event READY hai

// agent typing + greeting READY hai

// ❌ Frontend

// ❌ koi Connect to agent UI

// ❌ koi socket.emit("connect-agent")

// ❌ koi mode switch UI side

// 🟦 AB NEXT TASK (REAL TASK)
// 🔥 Task 3.5 – Frontend: Connect Agent Entry Point

// Is task ka sirf ek goal hai:

// User frontend se explicitly bole
// “Mujhe live agent chahiye”

// 🟦 OPTION 1 (BEST & SIMPLE) – Button in Chat UI
// 📍 Where?

// 👉 ChatWindow footer ke upar

// 🧩 STEP 1 — UI ADD KARO (ChatWindow.js)

// messages ke niche ek button add karo:

// <div id="connect-agent" style="
//   margin-top:10px;
//   text-align:center;
//   font-size:13px;
//   color:#007bff;
//   cursor:pointer;
// ">
//   👨‍💻 Talk to a live agent
// </div>

// 🧩 STEP 2 — JS LOGIC

// ChatWindow.js me:

// const connectAgentBtn = shadowRoot.getElementById("connect-agent");

// connectAgentBtn.onclick = () => {
//   socket.emit("connect-agent");

//   connectAgentBtn.style.display = "none";
// };


// ⚠️ no UI magic
// ⚠️ no fake logic
// ⚠️ just emit

// 🟦 STEP 3 — VERIFY FLOW (VERY IMPORTANT)
// 🧪 Test Order

// Open chat

// Click “Talk to a live agent”

// Console:

// backend should log socket

// UI:

// agent typing appears

// greeting message comes

// Bot reply never appears again

// 🧠 WHY THIS IS CORRECT DESIGN

// Backend controls mode

// Frontend just sends intent

// No coupling

// Future me:

// Agent dashboard

// Real human agent

// Routing

// 🟢 CURRENT PROJECT STAGE (HONEST)

// You are here 👇

// Frontend UI ✅
// Socket infra ✅
// Sessions ✅
// Agent infra READY ✅
// Missing: Agent entry UI ❌

// 🔜 NEXT AFTER THIS

// After this task completes:

// ➡️ Task 3.6 – Message routing

// user msg → agent only

// bot completely disabled