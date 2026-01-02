// 🧠 BIG PICTURE (clear kar le pehle)

// Tumhara final system 3 roles ka hoga:

// 1️⃣ User (Website visitor)
// 2️⃣ Agent (Support person)
// 3️⃣ Admin (Company owner / manager)

// 👉 Ye teeno alag UI + alag backend logic rakhte hain.

// 🧩 REQUIRED DASHBOARDS (No compromise)
// 1️⃣ Agent Dashboard (MUST)

// Agent ke paas hona chahiye:

// 🔐 Agent Login

// Email / password

// JWT based auth

// Role = agent

// 🖥 Agent Dashboard features

// Online / Offline toggle

// Incoming chat request

// Active chat window

// End chat button

// Status: Available / Busy

// 👉 Agent user site pe nahi hota,
// 👉 Agent alag dashboard pe hota hai.

// 2️⃣ Admin Dashboard (MUST)

// Admin ke paas hona chahiye:

// 🔐 Admin Login

// Role = admin

// 🛠 Admin powers

// Add new agent

// Enable / disable agent

// See active sessions

// See chat logs (later)

// Agent status monitoring

// 👉 Agent ka creation ADMIN hi karega
// 👉 Agent khud signup nahi karega (security reason)

// 3️⃣ User Chat Widget (Already building)

// Anonymous user

// No login

// Session based

// Connect to agent button

// ✔ Ye part hum already bana rahe hain

// 🔐 AUTH STRUCTURE (IMPORTANT)

// Backend pe roles honge:

// User (anonymous) → sessionId
// Agent → JWT + role=agent
// Admin → JWT + role=admin

// 🗂 DATABASE (minimum tables)
// 👤 agents
// id
// name
// email
// password_hash
// status (active / disabled)
// created_at

// 🧑 admins
// id
// email
// password_hash

// 💬 sessions
// session_id
// user_socket_id
// agent_id (nullable)
// status (bot / waiting / agent / closed)
// created_at

// 🧠 REAL-TIME FLOW (with dashboards)
// 1️⃣ Agent logs in

// Agent dashboard loads

// Opens socket

// Emits: agent:online

// Server:

// agents.set(agentSocketId, {
//   agentId,
//   status: "available",
// });

// 2️⃣ User clicks “Connect to agent”

// Server:

// Finds available agent

// Assigns session

// Notifies agent dashboard

// io.to(agentSocketId).emit("chat:assigned", sessionData);

// 3️⃣ Agent replies

// Agent sends message

// Server routes to user

// 4️⃣ Admin adds agent

// Admin dashboard:

// POST /admin/agents


// Backend:

// Hash password

// Save agent

// Done

// 🚨 IMPORTANT REALITY CHECK

// ❌ Without Agent Dashboard
// → Multi-agent system impossible

// ❌ Without Admin Dashboard
// → Security + scalability impossible

// Tu bilkul sahi time pe bol raha hai.
// Agar ye baat client ko baad me yaad aati → project fail.

// 🟢 Where we are NOW (honest status)

// ✔ User widget infra ready
// ✔ Socket + session ready
// ✔ Backend base ready

// ❌ Agent auth
// ❌ Agent dashboard
// ❌ Admin dashboard
// ❌ Agent assignment logic (depends on agent dashboard)

// 🧭 NEXT CORRECT ORDER (NO JUGAAD)
// 🔥 STEP 1 (NOW)

// 👉 Backend auth system

// Admin login

// Agent login

// JWT + roles

// 🔥 STEP 2

// 👉 Admin dashboard (basic)

// Add agent

// List agents

// 🔥 STEP 3

// 👉 Agent dashboard (basic)

// Login

// Online/offline

// Receive chats

// 🔥 STEP 4

// 👉 Plug agent pool into existing socket logic

// ❓Next move?

// Bol clearly:

// 👉 “Step 1: Admin + Agent auth backend start kar”
// ya
// 👉 “Pehle sirf Agent dashboard ka backend bana”

// Is baar hum ek bhi galat direction nahi lenge.