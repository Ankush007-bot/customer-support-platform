// 🚀 Sprint 2 – Task 2.2
// 🧩 Messages container + clean structure
// 🎯 Problem abhi kya hai?

// Messages chat-content me direct add ho rahe hain

// Input box fixed bottom hai → messages mix ho sakte hain

// Scroll control future me mess karega

// 👉 Industry-level fix:
// Messages ke liye dedicated container

// 📁 File

// src/ui/ChatWindow.js

// 🟢 Task 2.2 – Step 1
// Message list container add karna
// 🔧 Change

// chatWindow.innerHTML me
// <p>How can we help you?</p> ke neeche ye add karo

// <div
//   id="messages"
//   style="
//     margin-top:8px;
//     overflow-y:auto;
//     height:220px;
//     padding-right:4px;
//   "
// ></div>


// 📌 Ab:

// Questions

// User messages

// Agent messages
// sab #messages ke andar jayenge

// 🟢 Task 2.2 – Step 2
// User messages ko messages container me bhejna
// 🔧 Replace code

// addUserMessage() function ko update karo

// function addUserMessage(text) {
//   const messages = shadowRoot.getElementById("messages");

//   const msg = document.createElement("div");
//   msg.innerText = text;

//   msg.style.margin = "8px 0";
//   msg.style.padding = "8px 10px";
//   msg.style.background = "#007bff";
//   msg.style.color = "#fff";
//   msg.style.borderRadius = "10px";
//   msg.style.maxWidth = "80%";
//   msg.style.marginLeft = "auto";

//   messages.appendChild(msg);
//   messages.scrollTop = messages.scrollHeight;
// }

// 🎯 Expected Output

// User messages alag scrollable area me

// Input box safe rahega

// Chat window clean lagega

// Status

// ✅ Sprint 2

// ✅ Task 2.2 COMPLETED

// Agar ye sahi chal raha hai, bolo: