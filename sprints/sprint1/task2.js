// Goal (Task-2):

// Floating Chat Button UI create karna

// Screen ke corner me dikhe

// Click pe chat window open ho

// Shadow DOM use karke CSS isolation

// Production-ready, reusable for multiple clients

// Step 0: Folder / File
// packages/widget/
//  ├── src/
//  │   ├── index.js         <-- Entry point
//  │   ├── core/
//  │   │   └── bootstrap.js
//  │   └── ui/
//  │       └── ChatButton.js   <-- Task-2 file


// ChatButton.js me button creation + click logic hoga

// ui/ folder me future chat window + messages component add ho sakte hain


//Agar tu ready ho, main Task-2.1 → Floating Button create + DOM inject ka JavaScript code step
//  by step dikhana start kar doon.







// 🔹 Task-2.1 Goal

// Screen ke bottom corner me floating button create karna

// Click pe chat window open/close toggle karna

// Shadow DOM use karna taaki CSS isolation ho

// Production-ready, reusable

// 📂 FILE
// packages/widget/src/ui/ChatButton.js

// 🧠 CODE STEP-1 (Button + Shadow DOM)
// // src/ui/ChatButton.js

// export function createChatButton(root, config) {
//   // 1️⃣ Create Shadow DOM root
//   const shadow = root.attachShadow({ mode: 'open' });

//   // 2️⃣ Create floating button
//   const button = document.createElement('button');
//   button.id = 'chat-button';
//   button.textContent = '💬';
  
//   // 3️⃣ Basic styles
//   const style = document.createElement('style');
//   style.textContent = `
//     #chat-button {
//       position: fixed;
//       bottom: 20px;
//       ${config.position === 'left' ? 'left: 20px;' : 'right: 20px;'}
//       width: 60px;
//       height: 60px;
//       border-radius: 50%;
//       background-color: #007bff;
//       color: white;
//       font-size: 28px;
//       border: none;
//       cursor: pointer;
//       box-shadow: 0 4px 8px rgba(0,0,0,0.2);
//       transition: transform 0.2s;
//       z-index: 1000000;
//     }
//     #chat-button:hover {
//       transform: scale(1.1);
//     }
//   `;

//   // 4️⃣ Append style + button to shadow root
//   shadow.appendChild(style);
//   shadow.appendChild(button);

//   // 5️⃣ Click toggle placeholder (chat window future)
//   let chatOpen = false;
//   button.addEventListener('click', () => {
//     chatOpen = !chatOpen;
//     console.log('[Chatbot] Chat window', chatOpen ? 'opened' : 'closed');
//     // TODO: Open actual chat window
//   });
// }

// 🧩 EXPLANATION STEP-BY-STEP

// Shadow DOM

// const shadow = root.attachShadow({ mode: 'open' });


// Button aur future chat window ka CSS isolated rahega

// Client site ke styles interfere nahi karenge

// Floating Button

// const button = document.createElement('button');
// button.textContent = '💬';


// Simple emoji button (later icon change kar sakte hain)

// Dynamic position

// ${config.position === 'left' ? 'left: 20px;' : 'right: 20px;'}


// Config se left/right adjust

// Hover animation

// #chat-button:hover { transform: scale(1.1); }


// Industry-level micro-interaction

// Click toggle

// button.addEventListener('click', () => {
//   chatOpen = !chatOpen;
//   console.log('[Chatbot] Chat window', chatOpen ? 'opened' : 'closed');
// });


// Placeholder for actual chat window logic

// 🔹 USAGE (Bootstrap me integrate)
// import { createChatButton } from './ui/ChatButton';
// import { getConfig } from './core/config';
// import { logger } from './core/logger';

// export function bootstrap() {
//   try {
//     const config = getConfig();
//     const root = document.getElementById('__chatbot_root__');

//     // Task-2.1 → Add floating chat button
//     createChatButton(root, config);

//     logger.info('Widget bootstrap completed');
//   } catch (err) {
//     logger.error(err.message || err);
//   }
// }

// ✅ ABHI RESULT

// Page load → floating 💬 button bottom corner me dikhega

// Click → console me 'Chat window opened/closed'

// Shadow DOM ensures CSS isolation







// Task-2.2 → Actual chat window open/close + questions list + basic UI

// Click pe mini chat window open ho

// Questions list dynamically show ho

// Close button add ho

// Production-ready styling