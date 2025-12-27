// 🟢 SPRINT 1 — CHAT WIDGET SDK

// Duration: 2 weeks
// Sprint Goal:
// 👉 Client apni website/app me single script se fully functional chatbot widget embed kar sake.

// 🔹 SPRINT 1 SCOPE (FREEZE)
// In Scope ✅

// Floating chat widget UI

// Open / close behavior

// Theme support

// Embed SDK (UMD build)

// Session persistence (local)

// Backend handshake (session init)

// Out of Scope ❌

// Live agent chat

// Admin panel

// Analytics

// 📌 DEFINITION OF DONE (DoD)

// Sprint 1 tab complete mana jayega jab:

// Widget any website me embed ho jaaye

// CSS host app se conflict na kare

// Refresh pe chat session restore ho

// Backend se session ID generate ho

// Production build CDN-ready ho

// 🧱 EPICS – SPRINT 1
// E1.1 – Widget UI & UX
// E1.2 – Embed SDK & Bootstrap
// E1.3 – Session Management & API Handshake
// 📘 USER STORIES & TASKS (EXECUTION READY)
// 🟦 E1.1 – Widget UI & UX
// Story 1: Floating Chat Button

// As an end user, I want a floating chat icon so I can open support easily.

// Tasks

// Design floating button (bottom-right)

// Hover + pulse animation

// Mobile responsive spacing

// Click handler → open widget

// Story 2: Chat Window Layout

// As a user, I want a clean chat UI.

// Tasks

// Header (title + close)

// Message list container

// Input area (disabled for now)

// Scroll behavior

// Story 3: Theme Support

// As a client, I want my brand colors.

// Tasks

// Theme config via window.ChatbotConfig

// CSS variables for colors

// Light & dark presets

// 🟦 E1.2 – Embed SDK & Bootstrap
// Story 4: SDK Loader

// As a client, I want to embed chatbot using a script.

// Tasks

// Read global config

// Validate productId

// Bootstrap widget

// Story 5: CSS Isolation

// As a client, widget should not break my site.

// Tasks

// Shadow DOM implementation

// Font isolation

// Z-index safety

// Story 6: Build & Distribution

// As a platform, SDK should be CDN deployable.

// Tasks

// Vite build (UMD)

// Tree shaking

// Minification

// Source maps (optional)

// 🟦 E1.3 – Session Management & API
// Story 7: Session Initialization

// As a system, each user needs a unique session.

// Tasks

// Generate UUID (frontend fallback)

// Call backend /session/init

// Store sessionId locally

// Story 8: Session Persistence

// As a user, chat should persist on refresh.

// Tasks

// LocalStorage strategy

// Restore UI state

// Session expiry handling

// 🧑‍💻 EXECUTION ORDER (IMPORTANT)

// 1️⃣ SDK Loader + Config
// 2️⃣ Floating Button
// 3️⃣ Chat Window UI
// 4️⃣ Shadow DOM
// 5️⃣ Theme system
// 6️⃣ Session init API
// 7️⃣ Persistence logic
// 8️⃣ Build & test embed on dummy site

// 📂 EXPECTED FOLDER STRUCTURE (Sprint 1)
// packages/
//  └── widget/
//      ├── src/
//      │   ├── core/
//      │   ├── ui/
//      │   ├── styles/
//      │   ├── utils/
//      │   └── index.ts
//      ├── public/
//      ├── vite.config.ts
//      └── package.json











// TASK-1 (FINAL RESET – JS VERSION)
// Task-1.1 → Config Reader (JavaScript)

// 👉 Goal:

// window.ChatbotConfig read karna

// Defaults apply karna

// Safe & production ready

// 📂 FILE
// packages/widget/src/core/config.js

// 🧠 CODE (SIRF YE HI)
// // src/core/config.js

// /**
//  * Reads global Chatbot configuration
//  * @returns {Object}
//  */
// export function getConfig() {
//   if (!window.ChatbotConfig) {
//     throw new Error('[Chatbot] window.ChatbotConfig is missing');
//   }

//   return {
//     theme: 'light',
//     position: 'right',
//     apiBaseUrl: 'https://api.yourbot.com',
//     ...window.ChatbotConfig
//   };
// }

// 🧩 KYA KIYA HUMNE (SIMPLE)

// window.ChatbotConfig → client deta hai

// Agar nahi mila → error

// Default values set ki

// Client ke values ko overwrite karne diya

// 🧪 CLIENT SIDE TEST
// <script>
//   window.ChatbotConfig = {
//     productId: "prod_123",
//     theme: "dark"
//   };
// </script>
// <script src="widget.js"></script>

// ✅ TASK-1.1 DONE

// ✔ No TypeScript

// ✔ Clean JS

// ✔ Future TS conversion friendly

// ✔ Production safe






// 👍 Task-1.4 START
// Bootstrap Logic (JavaScript – DOM injection, no UI yet)

// 🎯 Task-1.4 Goal

// Widget ka entry point

// Config read + validate

// Safe tarike se base container DOM me inject

// Abhi UI render nahi, sirf foundation

// 📂 FILE
// packages/widget/src/core/bootstrap.js

// 🧠 CODE (sirf ye step)
// // src/core/bootstrap.js

// import { getConfig } from './config';
// import { validateConfig } from '../utils/validate';
// import { logger } from './logger';

// export function bootstrap() {
//   try {
//     // 1️⃣ Config read
//     const config = getConfig();

//     // 2️⃣ Config validate
//     validateConfig(config);

//     logger.info('Bootstrapping widget for product:', config.productId);

//     // 3️⃣ Base container create
//     const root = document.createElement('div');
//     root.id = '__chatbot_root__';

//     // 4️⃣ Base positioning (UI baad me)
//     root.style.position = 'fixed';
//     root.style.bottom = '20px';

//     if (config.position === 'left') {
//       root.style.left = '20px';
//     } else {
//       root.style.right = '20px';
//     }

//     root.style.zIndex = '999999';

//     // 5️⃣ DOM me attach
//     document.body.appendChild(root);

//     logger.info('Widget bootstrap completed');
//   } catch (err) {
//     logger.error(err.message || err);
//   }
// }

// 🧩 STEP-BY-STEP EXPLANATION
// 🔹 1️⃣ Config read
// const config = getConfig();


// Client ka window.ChatbotConfig

// Defaults already applied

// 🔹 2️⃣ Validation
// validateConfig(config);


// Yahin pe galat input fail fast

// Aage ka code safe rehta hai

// 🔹 3️⃣ Root container
// const root = document.createElement('div');


// Ye pure widget ka parent

// Aage Shadow DOM / React yahin mount hoga

// 🔹 4️⃣ Positioning
// root.style.position = 'fixed';


// Widget viewport ke saath stick rahe

// left / right config respected

// 🔹 5️⃣ DOM attach
// document.body.appendChild(root);


// Widget live ho gaya (abhi empty)

// 🧪 ABHI RESULT KYA HOGA

// Page load pe:

// Console logs aayenge

// DOM me #__chatbot_root__ dikhega

// UI nahi dikhegi (by design)

// ✅ TASK-1.4 DONE

// ✔ Safe bootstrap

// ✔ Error handling

// ✔ Config-driven positioning

// ✔ UI-independent foundation