// 🔜 NEXT STEPS (Correct Order)
// STEP 2️⃣ – Auth API Tests (MOST IMPORTANT)

// Reason:

// Security critical

// JWT logic validate hota hai

// 90% backend interviews yahin se judge hote hain

// Tests likhenge:

// ✅ Admin login success

// ❌ Wrong password → 401

// ❌ Missing fields → 400

// 👉 DB ko mock karenge

// STEP 3️⃣ – Protected Route Test

// Token ke bina → 401

// Token ke sath → 200

// 👉 Ye prove karta hai auth middleware sahi kaam kar raha hai

// STEP 4️⃣ – Chat API Test

// OpenAI service mock

// Prompt pass ho raha hai ya nahi

// Response structure test

// STEP 5️⃣ – CI/CD Gate

// npm test pipeline me mandatory

// Test fail → deploy stop ❌