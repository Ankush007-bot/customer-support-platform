
// 🧪 JEST kya hai?

// Jest = Testing Framework

// 👉 Kaam:

// Tests run karta hai

// Result batata hai (PASS / FAIL)

// Assertions deta hai (expect())

// Example
// expect(res.statusCode).toBe(200);


// Matlab:

// “Agar status 200 nahi hai → test fail”

// Jest kya-kya karta hai?

// Test cases chalata hai

// Mocking (jest.mock)

// Coverage nikalta hai

// CI/CD ke liye perfect

// 👉 Jest bina supertest ke bhi chal sakta hai

// 🌐 SUPERTEST kya hai?

// Supertest = HTTP API testing tool

// 👉 Kaam:

// Express app ko fake HTTP request bhejna

// Real server start nahi karta

// Fast + safe

// Example
// request(app).get("/health");


// Matlab:

// “Express app ko GET /health bhejo”









// 🎯 Problem Samjho (Important)

// Abhi tumhari file:

// Server start bhi karti hai

// Sockets init bhi karti hai

// Routes bhi register karti hai

// 👉 Direct is file ko test karna ❌ galat practice
// 👉 Hume testable Express app alag nikalna hoga

// ✅ STEP 1: Proper Refactor (Mandatory)
// 1️⃣ app.js banao (TESTABLE UNIT)
// require("dotenv").config();

// const express = require("express");
// const cors = require("cors");

// const healthRoute = require("./routes/health");
// const adminAuthRoutes = require("./routes/admin.auth");
// const { router: adminAgentRoutes } = require("./routes/admin.agents");
// const agentRoutes = require("./routes/agent.routes");
// const adminRoutes = require("./routes/admin.routes");

// const app = express();

// app.use(cors());
// app.use(express.json());

// // routes
// app.use("/health", healthRoute);
// app.use("/admin", adminAuthRoutes);
// app.use("/admin/agents", adminAgentRoutes);
// app.use("/api/admin", adminRoutes);
// app.use("/api/agents", agentRoutes);

// module.exports = app;


// 🚫 No server
// 🚫 No socket
// 🚫 No listen










// 2️⃣ index.js (Server + Socket only)
// const http = require("http");
// const { Server } = require("socket.io");

// const app = require("./app");
// const initChatSocket = require("./socket/chat.socket");
// const { initAgentSocket } = require("./socket/agent.socket");

// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: { origin: "*" },
// });

// initChatSocket(io);
// initAgentSocket(io);

// const PORT = 4000;
// server.listen(PORT, () => {
//   console.log("[Server] running on port", PORT);
// });


// ✅ Ye production ready bhi hai
// ✅ Ye test friendly bhi hai










// ✅ STEP 2: Pehla Test Case (Health Route)

// Tum already route use kar rahe ho:

// /health

// 📁 tests/health.test.js
// const request = require("supertest");
// const app = require("../app");

// describe("Health API", () => {
//   it("should return 200 OK", async () => {
//     const res = await request(app).get("/health");

//     expect(res.statusCode).toBe(200);
//   });
// });


// 👉 Simple
// 👉 No DB
// 👉 No socket
// 👉 CI/CD sanity check

// ✅ STEP 3: Run Test
// npm test


// Expected:

// PASS  tests/health.test.js


// 🎉 Industry-level first test done