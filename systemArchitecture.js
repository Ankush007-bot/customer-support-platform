// 1️⃣ SYSTEM ARCHITECTURE (INDUSTRY STANDARD)
// [ Client Website / App ]
//         |
//    (Chat Widget SDK)
//         |
//    HTTPS / WSS
//         |
// [ API Gateway ]
//         |
// ---------------------------------
// | Bot Service | Agent Service   |
// | (FAQs)     | (Live Chat)     |
// ---------------------------------
//         |
//      Database

// 2️⃣ TECH STACK (NO EXPERIMENTS)
// Frontend (Chat Widget SDK)

// React + Vite (build as SDK)

// Tailwind CSS (isolated styles)

// Shadow DOM (CSS collision protection)

// iFrame optional (enterprise clients)

// Backend

// Node.js + Express

// PostgreSQL (structured, scalable)

// Redis (agent availability, sessions)

// Socket.io (live agent chat)

// Infra

// Docker

// Nginx reverse proxy

// PM2

// ENV-based multi-tenant setup

// 3️⃣ CHAT WIDGET (CLIENT SIDE – REAL PRODUCT FEEL)
// Embed Script (Client ko sirf ye chahiye)
// <script>
//   window.ChatbotConfig = {
//     productId: "abc123",
//     theme: "dark"
//   }
// </script>
// <script src="https://cdn.yourbot.com/widget.js"></script>

// Widget Features (Non-Negotiable)

// Floating icon

// Minimize / close

// Session persistence (localStorage)

// Mobile responsive

// Offline message fallback

// 4️⃣ BOT FLOW (STRICT RULE-BASED)
// Step-1: Widget open
// "Hi 👋 How can I help you?"
// [ Order Issue ]
// [ Payment Issue ]
// [ Refund ]
// [ Something else ]

// Step-2: Question click
// User clicks → "Payment Issue"
// Bot shows sub-questions

// Step-3: Answer render

// HTML / Markdown support

// CTA buttons inside answers

// Step-4: Escalation Trigger
// ❌ Not helpful
// ➡️ Connect to Agent

// 5️⃣ BOT ENGINE (NO AI – FULL CONTROL)
// APIs
// GET /bot/categories
// GET /bot/questions/:categoryId
// GET /bot/answer/:questionId

// Admin panel se:

// Questions add/update

// Answer versioning

// Enable / disable flows

// 6️⃣ LIVE AGENT SYSTEM (REAL ENTERPRISE GRADE)
// Agent Allocation Logic
// User clicks "Connect to Agent"
// ↓
// Check Redis → online agents
// ↓
// Assign least busy agent
// ↓
// Create socket room

// Socket Events
// USER_JOIN
// AGENT_JOIN
// MESSAGE
// TYPING
// END_CHAT

// Fail Safe

// No agent online → ticket creation

// Email / webhook notify agent

// 7️⃣ ADMIN PANEL (CLIENT DELIVERABLE MUST)
// Modules

// FAQ Manager

// Agent Manager

// Live Chats Dashboard

// Chat History

// Analytics

// 8️⃣ SECURITY (VERY IMPORTANT FOR CLIENT TRUST)

// JWT auth (admin + agent)

// Rate limiting

// XSS sanitization

// CORS whitelist

// Tenant isolation (productId)

// 9️⃣ MULTI-TENANT (YOU SCALE THIS)

// Each client has:

// product_id
// custom theme
// own FAQs
// own agents

// 🔟 DEPLOYMENT SETUP
// Docker Compose

// api

// socket

// redis

// postgres

// nginx

// CI/CD

// GitHub Actions

// Zero downtime (PM2 reload)

// 1️⃣1️⃣ DELIVERY PLAN (CLIENT KO DIKHANE LAYAK)
// Phase-1

// Widget SDK

// Bot FAQs

// Admin panel

// Phase-2

// Live agent chat

// Agent dashboard

// Phase-3

// Analytics

// Webhooks

// SLA metrics