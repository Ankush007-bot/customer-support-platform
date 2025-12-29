// 🚀 Sprint 3 – Real Integration & SDK Ready
// 🎯 Sprint 3 Goal

// Widget ko real product-ready SDK banana
// (backend + config + client usage)

// 🧩 Sprint 3 – Tasks / Steps
// ✅ Task 3.1 – Client Configuration

// Client apni website se config pass kare:

// window.ChatbotWidget.init({
//   productId: "prod_123",
//   userId: "user_456",
//   theme: "dark"
// });


// 👉 SDK configurable banega

// ✅ Task 3.2 – Theming Support

// Primary color

// Button color

// Font

// Dark / Light mode

// Client apne brand ke hisaab se customize kare

// ✅ Task 3.3 – Backend Integration (API calls)

// SDK ye data backend ko bheje:

// productId

// userId

// chat messages

// APIs:

// /init-chat

// /send-message

// /get-agent-message

// ✅ Task 3.4 – Real-time / Polling

// Option 1 (basic):

// Polling every 3–5 sec for agent reply

// Option 2 (advance):

// WebSocket / Socket.IO

// ✅ Task 3.5 – Events & Callbacks

// Client ko events milenge:

// onOpen()
// onClose()
// onMessageSend()
// onAgentConnected()

// ✅ Task 3.6 – Production SDK Build

// Minified bundle

// Versioned build

// CDN ready

// Example:

// <script src="https://cdn.yourcompany.com/chatbot-widget/v1/widget.js"></script>

// ✅ Task 3.7 – Client Integration Docs

// 5 min setup guide

// Copy-paste code

// Do & Don’t

// 📦 End of Sprint 3

// Client can:

// Plug SDK in any website

// Brand it

// Get real chats

// Track users

























// 🧠 Sprint 3 – Backend (REAL CHAT LOGIC)
// 🟦 Task 3.1 – Backend project setup

// Node.js + Express

// Folder structure

// /health test route

// 📁

// server/
//  ├─ index.js
//  ├─ routes/
//  ├─ controllers/
//  ├─ socket/

// 🟦 Task 3.2 – Socket.IO integration

// WebSocket connection

// User ↔ Server live connection

// Replace setTimeout fake replies

// Events:

// connect
// chat:message
// agent:typing
// agent:message

// 🟦 Task 3.3 – Chat session system

// sessionId generate

// One widget = one session

// Future DB ready structure

// 🟦 Task 3.4 – Agent simulation (server side)

// Server se delayed replies

// Typing event from backend

// UI becomes dumb

// 🟦 Task 3.5 – Connect Agent event

// connect-agent → backend

// agent assigned

// state change from server