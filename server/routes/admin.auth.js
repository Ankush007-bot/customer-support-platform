const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const router = express.Router();

// ⚠️ hardcoded admin (abhi ke liye)
const ADMIN = {
  id: "admin_1",
  email: "admin@company.com",
  passwordHash: bcrypt.hashSync("admin123", 10),
};

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (email !== ADMIN.email) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const ok = await bcrypt.compare(password, ADMIN.passwordHash);
  if (!ok) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  console.log("JWT_SECRET:", process.env.JWT_SECRET);

  const token = jwt.sign(
    { adminId: ADMIN.id, role: "admin" },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ token });
});

module.exports = router;
