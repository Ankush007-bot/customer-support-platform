// showTyping();

// setTimeout(() => {
//   hideTyping();
//   addAgentMessage("Thanks for reaching out! How can I assist you further?");
// }, 1200);





// 🎯 Task 2.3 Goal

// User message ke baad agent typing dikhna

// Thodi delay ke baad agent reply aaye

// UX WhatsApp-like

// 🧩 What we’ll add (exact)

// Typing indicator show/hide

// Fake agent reply after delay

// Agent message left side

// 📁 File

// src/ui/ChatWindow.js (same file)

// 🔧 Step 1 — Helper: Agent message add karna

// addUserMessage() ke neeche ye function add karo:

// function addAgentMessage(text) {
//   const messages = shadowRoot.getElementById("messages");

//   const msg = document.createElement("div");
//   msg.innerText = text;

//   msg.style.margin = "8px 0";
//   msg.style.padding = "8px 10px";
//   msg.style.background = "#f1f1f1";
//   msg.style.color = "#000";
//   msg.style.borderRadius = "10px";
//   msg.style.maxWidth = "80%";
//   msg.style.marginRight = "auto"; // left side (agent)

//   messages.appendChild(msg);
//   messages.scrollTop = messages.scrollHeight;
// }

// 🔧 Step 2 — Typing indicator control

// Ensure HTML me ye already hai (tumhare me hai 👍):

// <div id="typing-indicator" style="display:none;">
//   🧑‍💻 Agent is typing...
// </div>


// Ab JS helpers add karo:

// function showTyping() {
//   const typing = shadowRoot.getElementById("typing-indicator");
//   if (typing) typing.style.display = "block";
// }

// function hideTyping() {
//   const typing = shadowRoot.getElementById("typing-indicator");
//   if (typing) typing.style.display = "none";
// }

// 🔧 Step 3 — Send ke baad agent reply trigger

// handleSend() ke end me ye add karo:

// showTyping();

// setTimeout(() => {
//   hideTyping();
//   addAgentMessage("Thanks for reaching out! How can I assist you further?");
// }, 1200);

// ✅ Expected Result

// User send kare

// “Agent is typing…” dikhe

// ~1.2s baad agent reply aaye (left side)

// Auto-scroll bottom