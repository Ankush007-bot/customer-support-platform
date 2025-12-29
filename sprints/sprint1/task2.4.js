// // 🎯 Task-2.4 Goal

// Chat window ke andar:

// Answer ke niche button / link

// Text: “Connect to Live Agent”

// Click pe:

// Abhi sirf console log (no backend yet)

// 🔹 STEP 1: CTA HTML add karo
// 📁 src/ui/ChatWindow.js

// answer-box ke andar ye add karo:

// <div id="connect-agent" style="
//   margin-top:10px;
//   color:#007bff;
//   cursor:pointer;
//   font-size:13px;
// ">
//   ❓ Not helpful? Connect to live agent
// </div>


// 👉 Full answer-box now:

// <div id="answer-box" style="
//   margin-top:12px;
//   display:none;
//   background:#f5f5f5;
//   padding:8px;
//   border-radius:6px;
// ">
// </div>


// (CTA dynamically add karenge next step)

// 🔹 STEP 2: CTA dynamically inject on answer click
// 📁 Same file – inside btn.onclick

// Replace this:

// answerBox.innerText = item.answer;


// With this:

// answerBox.innerHTML = `
//   <div>${item.answer}</div>
//   <div id="connect-agent" style="
//     margin-top:10px;
//     color:#007bff;
//     cursor:pointer;
//     font-size:13px;
//   ">
//     ❓ Not helpful? Connect to live agent
//   </div>
// `;

// const connectBtn = shadowRoot.getElementById("connect-agent");
// connectBtn.onclick = () => {
//   console.log("[Chatbot] User wants to connect to live agent");
// };

// ✅ Expected Result

// ✔️ Answer show
// ✔️ CTA appear
// ✔️ CTA click → console log

// No backend yet ✔️
// SDK behavior ✔️