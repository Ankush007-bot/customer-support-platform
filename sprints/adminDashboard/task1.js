// 👍 Perfect. Seedha code pe aate hain.
// Main minimum + correct + production-safe code de raha hoon.
// (assumption: Express + JWT + bcrypt + PostgreSQL / Mongo — DB generic rakhta hoon)

// ✅ STEP 1: Admin Auth (login)
// 📁 routes/admin.auth.js
// const express = require("express");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

// const router = express.Router();

// // ⚠️ hardcoded admin (abhi ke liye)
// const ADMIN = {
//   id: "admin_1",
//   email: "admin@company.com",
//   passwordHash: bcrypt.hashSync("admin123", 10),
// };

// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   if (email !== ADMIN.email) {
//     return res.status(401).json({ error: "Invalid credentials" });
//   }

//   const ok = await bcrypt.compare(password, ADMIN.passwordHash);
//   if (!ok) {
//     return res.status(401).json({ error: "Invalid credentials" });
//   }

//   const token = jwt.sign(
//     { adminId: ADMIN.id, role: "admin" },
//     process.env.JWT_SECRET,
//     { expiresIn: "1d" }
//   );

//   res.json({ token });
// });

// module.exports = router;

// ✅ STEP 2: Admin Auth Middleware
// 📁 middleware/adminAuth.js
// const jwt = require("jsonwebtoken");

// module.exports = function adminAuth(req, res, next) {
//   const auth = req.headers.authorization;
//   if (!auth) return res.sendStatus(401);

//   const token = auth.split(" ")[1];

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     if (decoded.role !== "admin") return res.sendStatus(403);

//     req.admin = decoded;
//     next();
//   } catch (err) {
//     return res.sendStatus(401);
//   }
// };

// ✅ STEP 3: Add Agent API (CORE FEATURE)
// 📁 routes/admin.agents.js
// const express = require("express");
// const bcrypt = require("bcrypt");
// const adminAuth = require("../middleware/adminAuth");

// const router = express.Router();

// // TEMP in-memory store (DB baad me)
// const agents = new Map();

// /**
//  * ➕ Add new agent
//  */
// router.post("/", adminAuth, async (req, res) => {
//   const { name, email, password } = req.body;

//   if (!name || !email || !password) {
//     return res.status(400).json({ error: "Missing fields" });
//   }

//   // prevent duplicate
//   for (let agent of agents.values()) {
//     if (agent.email === email) {
//       return res.status(409).json({ error: "Agent already exists" });
//     }
//   }

//   const agentId = "agent_" + crypto.randomUUID();
//   const passwordHash = await bcrypt.hash(password, 10);

//   const agent = {
//     id: agentId,
//     name,
//     email,
//     passwordHash,
//     isActive: true,
//     createdAt: Date.now(),
//   };

//   agents.set(agentId, agent);

//   res.status(201).json({
//     id: agent.id,
//     name: agent.name,
//     email: agent.email,
//     isActive: agent.isActive,
//   });
// });

// module.exports = { router, agents };

// ✅ STEP 4: Wire routes in server
// 📁 server/index.js (important part only)
// const adminAuthRoutes = require("./routes/admin.auth");
// const { router: adminAgentRoutes } = require("./routes/admin.agents");

// app.use("/admin", adminAuthRoutes);
// app.use("/admin/agents", adminAgentRoutes);

// 🔍 ABHI HUM KYA VERIFY KAR SAKTE HAIN
// 1️⃣ Admin login
// POST /admin/login


// ✔ JWT mil raha hai ya nahi

// 2️⃣ Add agent
// POST /admin/agents
// Authorization: Bearer <token>


// ✔ Agent create ho raha
// ✔ Duplicate email block ho raha
// ✔ Admin ke bina call → 401/403

// 🧠 ABHI KYA NAHI HAI (INTENTIONALLY)

// ❌ Agent login
// ❌ Agent socket
// ❌ DB persistence
// ❌ UI

// Ye sab next steps hain.

// 📍 CURRENT STAGE STATUS
// ✔ Admin auth ready
// ✔ Agent creation ready
// ✔ Role-based security
// ✔ Base for multi-agent system