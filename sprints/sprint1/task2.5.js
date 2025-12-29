// 🚀 Sprint-1 → Story-1 → Task-2.5
// 👉 Agent Placeholder Screen (Before Real Backend)
// 🎯 Goal

// “Connect to live agent” click pe:

// Chat UI switch ho

// User ko lage: “agent join ho raha hai”

// Abhi fake / placeholder, backend baad me

// This is exactly how real products ship MVPs.

// 🧩 Kya change hoga (simple)

// Before:

// FAQ + answers

// After click:

// FAQ hide

// Agent waiting screen show

// 🔹 STEP-1: Agent screen HTML add karo
// 📁 src/ui/ChatWindow.js

// chatWindow.innerHTML ke andar
// answer-box ke baad ye add karo 👇

// <div id="agent-screen" style="
//   display:none;
//   padding:12px;
//   font-size:14px;
//   text-align:center;
// ">
//   <div style="margin-bottom:10px;">🧑‍💻 Connecting you to a live agent...</div>
//   <div style="font-size:12px;color:#777;">
//     Please wait, this may take a few seconds
//   </div>
// </div>

// 🔹 STEP-2: CTA click pe UI switch logic
// 📍 Same file → connectBtn.onclick ke andar

// console.log ko replace karo:

// connectBtn.onclick = () => {
//   const chatContent = shadowRoot.getElementById("chat-content");
//   const agentScreen = shadowRoot.getElementById("agent-screen");

//   if (chatContent && agentScreen) {
//     chatContent.style.display = "none";
//     agentScreen.style.display = "block";
//   }

//   console.log("[Chatbot] Switching to agent mode");
// };

// ✅ Expected Result

// ✔️ User clicks Connect to live agent
// ✔️ FAQ content hide
// ✔️ “Connecting to agent…” screen show
// ✔️ Looks real & professional

// No backend yet ✔️
// SDK flow correct ✔️





// 👍 Next step = Fake Live Agent Chat (typing simulation)
// Seedha, clear steps de raha hoon. Output: agent screen me “Agent is typing…” → message appear.

// 🎯 Goal

// Agent screen open hone ke baad

// 2–3 sec me fake agent reply aaye

// Typing indicator show ho

// ✅ STEP 1: agent-screen HTML update

// (isi file: ChatWindow.js)

// agent-screen ke andar ye add karo (replace nahi, just update):

// <div id="agent-screen" style="
//   display:none;
//   padding:12px;
//   font-size:14px;
// ">
//   <div id="agent-messages"></div>

//   <div id="typing-indicator" style="
//     margin-top:10px;
//     font-size:12px;
//     color:#777;
//     display:none;
//   ">
//     🧑‍💻 Agent is typing...
//   </div>
// </div>

// ✅ STEP 2: Fake agent reply function add karo

// createChatWindow ke andar, renderQuestions ke niche likho:

// function startFakeAgentChat(shadowRoot) {
//   const messagesBox = shadowRoot.getElementById("agent-messages");
//   const typing = shadowRoot.getElementById("typing-indicator");

//   if (!messagesBox || !typing) return;

//   typing.style.display = "block";

//   setTimeout(() => {
//     typing.style.display = "none";

//     const msg = document.createElement("div");
//     msg.style.marginBottom = "8px";
//     msg.innerText = "Hi 👋 I’m Alex from support. How can I help you today?";

//     messagesBox.appendChild(msg);
//   }, 2000);
// }

// ✅ STEP 3: Agent connect click ke andar call karo

// Is code me last line add karni hai:

// connectBtn.onclick = () => {
//   const chatContent = shadowRoot.getElementById("chat-content");
//   const agentScreen = shadowRoot.getElementById("agent-screen");

//   if (chatContent && agentScreen) {
//     chatContent.style.display = "none";
//     agentScreen.style.display = "block";

//     startFakeAgentChat(shadowRoot); // 👈 ADD THIS
//   }
// };

// 🧪 Expected Output

// Question click

// “Connect to live agent” click

// Agent screen opens

// “Agent is typing…”

// 2 sec baad message shows

// Exactly like real support chat ✅