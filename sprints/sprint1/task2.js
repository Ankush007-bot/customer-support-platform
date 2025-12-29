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













// 🔹 Task-2.2 ka Goal (high level)

// Floating button click pe chat window open / close

// Simple chat container UI

// Abhi static UI (questions next step me)

// Shadow DOM ke andar hi sab (CSS safe)

// ✅ Task-2.2 – STEP-1
// 👉 Chat window container create + toggle logic
// 📁 File

// src/ui/ChatWindow.js (new file)

// 🧩 CODE (STEP-1 ONLY)
// // src/ui/ChatWindow.js

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

//   // header
//   const header = document.createElement('div');
//   header.innerText = 'Support Chat';
//   header.style.padding = '12px';
//   header.style.background = '#007bff';
//   header.style.color = '#fff';
//   header.style.fontWeight = 'bold';
//   header.style.borderTopLeftRadius = '12px';
//   header.style.borderTopRightRadius = '12px';

//   chatWindow.appendChild(header);
//   shadowRoot.appendChild(chatWindow);

//   return chatWindow;
// }

// 🧠 KYA KIYA IS STEP ME

// Chat window ka base container banaya

// display: none → initially hidden

// Floating button ke upar position (bottom: 90px)

// Header add kiya (basic branding feel)

// ❗ Abhi:

// ❌ messages nahi

// ❌ questions nahi

// ❌ close button nahi
// Bas UI shell












// Task-2.2 → STEP-2 start
// (iss step me sirf button ↔ chat window toggle wiring karenge, UI me aur kuch nahi)

// 🔹 STEP-2 Goal

// Floating 💬 button pe click

// Chat window open / close ho

// Same button se toggle

// Shadow DOM ke andar hi sab

// 📁 Files involved

// src/ui/ChatButton.js

// src/ui/ChatWindow.js (jo humne STEP-1 me banaya)

// 🧩 STEP-2 CODE
// 🔹 ChatButton.js (UPDATE)
// // src/ui/ChatButton.js
// import { createChatWindow } from './ChatWindow';

// export function createChatButton(root, config) {
//   console.log('[Chatbot] createChatButton called');

//   const shadow = root.attachShadow({ mode: 'open' });

//   // 👉 create chat window first
//   const chatWindow = createChatWindow(shadow);

//   // 👉 floating button
//   const button = document.createElement('button');
//   button.textContent = '💬';

//   button.style.position = 'fixed';
//   button.style.bottom = '20px';
//   button.style.right = config.position === 'left' ? 'auto' : '20px';
//   button.style.left = config.position === 'left' ? '20px' : 'auto';
//   button.style.width = '60px';
//   button.style.height = '60px';
//   button.style.borderRadius = '50%';
//   button.style.backgroundColor = '#007bff';
//   button.style.color = '#fff';
//   button.style.fontSize = '28px';
//   button.style.border = 'none';
//   button.style.cursor = 'pointer';
//   button.style.zIndex = '1000000';

//   let isOpen = false;

//   // 👉 toggle logic
//   button.addEventListener('click', () => {
//     isOpen = !isOpen;
//     chatWindow.style.display = isOpen ? 'flex' : 'none';
//     console.log('[Chatbot] Chat window', isOpen ? 'opened' : 'closed');
//   });

//   shadow.appendChild(button);
// }

// 🧠 IS STEP ME KYA HUA

// createChatWindow(shadow)

// Chat window shadow DOM me ready

// Button click pe:

// chatWindow.style.display = isOpen ? 'flex' : 'none';


// Same button:

// Open chat

// Close chat
// (industry standard behaviour)

// ✅ EXPECTED RESULT AB

// Page load → 💬 floating button visible

// Button click →

// Chat window open

// Button dobara click →

// Chat window close

// Console logs:

// [Chatbot] Chat window opened
// [Chatbot] Chat window closed