// 🧪 Testing Strategy (Realistic)
// Backend (Node + Express)

// Jest → test runner

// Supertest → API testing

// Kya test karenge (must-have)

// Health check

// Auth (login)

// Chat API

// Lead save API

// Negative cases (400 / 401)

// ❌ DB, OpenAI ko real hit nahi karenge
// ✅ Mocks use karenge

// 1️⃣ Install Testing Tools
// npm install --save-dev jest supertest


// package.json

// "scripts": {
//   "test": "jest --runInBand",
//   "test:watch": "jest --watch"
// }

// 2️⃣ Project Structure (Clean)
// src/
//  ├── app.js        // express app
//  ├── server.js     // listen
//  ├── routes/
//  ├── controllers/
//  ├── services/
// tests/
//  ├── health.test.js
//  ├── auth.test.js
//  ├── chat.test.js
//  ├── lead.test.js


// 👉 Important: app.js me app.listen() nahi hona chahiye

// 3️⃣ Health Check Test (Easy Start)
// Route
// GET /health

// Test
// // tests/health.test.js
// const request = require('supertest');
// const app = require('../src/app');

// describe('Health Check', () => {
//   it('should return 200', async () => {
//     const res = await request(app).get('/health');
//     expect(res.statusCode).toBe(200);
//   });
// });

// 4️⃣ Auth Test (Mock DB)
// // tests/auth.test.js
// jest.mock('../src/models/User');

// it('should login user', async () => {
//   User.findOne.mockResolvedValue({
//     email: 'test@mail.com',
//     password: 'hashed',
//     comparePassword: () => true
//   });
// });

// 5️⃣ Chat API Test (Mock OpenAI 🔥)
// jest.mock('../src/services/openai.service');

// it('should return chatbot reply', async () => {
//   getAIResponse.mockResolvedValue('Hello, how can I help?');
// });


// 👉 This is industry standard – no real API cost

// 6️⃣ Lead API Test
// it('should save lead', async () => {
//   Lead.create.mockResolvedValue({ email: 'a@test.com' });
// });

// 7️⃣ Coverage Setup (Optional but Pro)
// npm test -- --coverage


// Target:

// Statements ≥ 70%

// Branches ≥ 60%

// 8️⃣ CI/CD me Test Gate (IMPORTANT)
// GitHub Actions
// - name: Run Tests
//   run: npm test


// ❌ Tests fail → ❌ deploy stop
// ✅ Tests pass → 🚀 deploy