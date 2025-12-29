// ✅ Task 2.1 – User Message Input Box
// Task 2.1 Scope (exact)

// Chat ke bottom me input field

// Send button

// Enter key support

// Message DOM me add hoga (sirf user side)

// ⚠️ Abhi agent reply nahi (wo Task 2.3 me)

// 📁 Files we will touch

// src/ui/ChatWindow.js ✅ (sirf isi file me)

// 🛠 Step 1 – Input box UI add karna

// 👉 Is step ka code ONLY

// 🔧 Change location

// chatWindow.innerHTML ke andar, chat-content ke niche

// ✅ Code (add this block)
// <div id="chat-input" style="
//   position:absolute;
//   bottom:0;
//   left:0;
//   width:100%;
//   display:flex;
//   border-top:1px solid #eee;
// ">
//   <input
//     id="chat-text-input"
//     type="text"
//     placeholder="Type your message..."
//     style="
//       flex:1;
//       border:none;
//       padding:10px;
//       outline:none;
//       font-size:14px;
//     "
//   />
//   <button
//     id="chat-send-btn"
//     style="
//       border:none;
//       padding:0 16px;
//       cursor:pointer;
//       background:#007bff;
//       color:#fff;
//       font-size:14px;
//     "
//   >
//     Send
//   </button>
// </div>


// 📌 Expected result (UI only):

// Chat window ke bottom me input + send button dikhna chahiye

// Button click pe abhi kuch nahi hoga (OK hai)

// Jab ye UI dikh jaye, bas bol:





// 👍 Sprint 2 – Task 2.1 (Step 2)
// Goal: Send button / Enter key se user message DOM me add ho.

// 🔧 Change file

// src/ui/ChatWindow.js
// 👉 createChatWindow() ke end me, renderQuestions(shadowRoot); ke baad ye logic add karo.

//✅ Step 2 Code (send logic)
// --- Task 2.1: Send message logic ---

// const input = shadowRoot.getElementById("chat-text-input");
// const sendBtn = shadowRoot.getElementById("chat-send-btn");
// const chatContent = shadowRoot.getElementById("chat-content");

// function addUserMessage(text) {
//   const msg = document.createElement("div");
//   msg.innerText = text;

//   msg.style.margin = "8px 0";
//   msg.style.padding = "8px 10px";
//   msg.style.background = "#007bff";
//   msg.style.color = "#fff";
//   msg.style.borderRadius = "10px";
//   msg.style.maxWidth = "80%";
//   msg.style.marginLeft = "auto"; // right side (user)

//   chatContent.appendChild(msg);
//   chatContent.scrollTop = chatContent.scrollHeight;
// }

// function handleSend() {
//   const value = input.value.trim();
//   if (!value) return;

//   addUserMessage(value);
//   input.value = "";
// }

// sendBtn.onclick = handleSend;

// input.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     handleSend();
//   }
// });

// 🎯 Expected Output

// User input type kare

// Send click / Enter → message chat me dikhe

// Message right side (user bubble)

// Input clear ho jaye

// ⚠️ Agent reply abhi nahi (wo Task 2.3)

// Status

// ✅ Sprint 2

// ✅ Task 2.1 COMPLETED