// 🔹 STEP 1: Chat Window file create karo
// 📁 File
// packages/widget/src/ui/ChatWindow.js

// 🧩 Code (ONLY THIS FILE)
// // packages/widget/src/ui/ChatWindow.js

// export function createChatWindow(shadowRoot) {
//   const chatWindow = document.createElement("div");
//   chatWindow.id = "__chatbot_window__";

//   chatWindow.style.position = "fixed";
//   chatWindow.style.bottom = "90px";
//   chatWindow.style.right = "20px";
//   chatWindow.style.width = "320px";
//   chatWindow.style.height = "420px";
//   chatWindow.style.background = "#ffffff";
//   chatWindow.style.borderRadius = "12px";
//   chatWindow.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
//   chatWindow.style.display = "none";
//   chatWindow.style.zIndex = "1000000";
//   chatWindow.style.fontFamily = "Arial, sans-serif";

//   chatWindow.innerHTML = `
//     <div style="
//       padding:12px;
//       font-weight:bold;
//       border-bottom:1px solid #eee;
//     ">
//       💬 Support Chat
//     </div>

//     <div id="chat-content" style="padding:12px; font-size:14px;">
//       <p>How can we help you?</p>
//       <div id="question-list"></div>
//       <div id="answer-box" style="
//         margin-top:12px;
//         display:none;
//         background:#f5f5f5;
//         padding:8px;
//         border-radius:6px;
//       "></div>
//     </div>
//   `;

//   shadowRoot.appendChild(chatWindow);
// }


// ❗ Yaha:

// ❌ koi button logic nahi

// ❌ koi toggle nahi
// Sirf chat window structure



// src/ui/ChatWindow.js

//   const QUESTIONS = [
//   {
//     id: 1,
//     question: "How do I reset my password?",
//     answer: "You can reset your password from the account settings page."
//   },
//   {
//     id: 2,
//     question: "Where can I check my orders?",
//     answer: "You can view all orders in the My Orders section."
//   },
//   {
//     id: 3,
//     question: "How do I contact customer support?",
//     answer: "You can connect with a live agent using this chat."
//   }
// ];


// export function createChatWindow(shadowRoot) {



  

//   // chat container
//   const chatWindow = document.createElement('div');
//   chatWindow.id = 'chat-window';

//   chatWindow.style.position = 'fixed';
//   chatWindow.style.bottom = '90px';
//   chatWindow.style.right = '20px';
//   chatWindow.style.width = '320px';
//   chatWindow.style.height = '400px';
//   chatWindow.style.background = '#ffffff';
//   chatWindow.style.borderRadius = '12px';
//   chatWindow.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)';
//   chatWindow.style.display = 'none';
//   chatWindow.style.flexDirection = 'column';
//   chatWindow.style.zIndex = '1000000';


  
//   chatWindow.innerHTML = `
//     <div style="
//       padding:12px;
//       font-weight:bold;
//       border-bottom:1px solid #eee;
//     ">
//       💬 Support Chat
//     </div>

//     <div id="chat-content" style="padding:12px; font-size:14px;">
//       <p>How can we help you?</p>
//       <div id="question-list"></div>
//       <div id="answer-box" style="
//         margin-top:12px;
//         display:none;
//         background:#f5f5f5;
//         padding:8px;
//         border-radius:6px;
//       "></div>
//     </div>
//   `;


// //   // header
// //   const header = document.createElement('div');
// //   header.innerText = 'Support Chat';
// //   header.style.padding = '12px';
// //   header.style.background = '#007bff';
// //   header.style.color = '#fff';
// //   header.style.fontWeight = 'bold';
// //   header.style.borderTopLeftRadius = '12px';
// //   header.style.borderTopRightRadius = '12px';

// //   chatWindow.appendChild(header);
//   shadowRoot.appendChild(chatWindow);

  


//   function renderQuestions(shadowRoot) {
//   const list = shadowRoot.getElementById("question-list");
//   const answerBox = shadowRoot.getElementById("answer-box");

//   if (!list) return;

//   list.innerHTML = "";

//   QUESTIONS.forEach(item => {
//     const btn = document.createElement("button");

//     btn.innerText = item.question;
//     btn.style.display = "block";
//     btn.style.width = "100%";
//     btn.style.margin = "6px 0";
//     btn.style.padding = "6px";
//     btn.style.cursor = "pointer";
//     btn.style.border = "1px solid #ddd";
//     btn.style.borderRadius = "6px";
//     btn.style.background = "#fff";

//     btn.onclick = () => {
//       answerBox.style.display = "block";
//       answerBox.innerText = item.answer;
//     };

//     list.appendChild(btn);
//   });
// }
// renderQuestions(shadowRoot);
// return chatWindow;

// }
