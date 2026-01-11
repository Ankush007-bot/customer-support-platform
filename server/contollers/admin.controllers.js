const jwt = require("jsonwebtoken");
const admin = require("../data/admin");

exports.adminLogin = (req, res) => {
  const { email, password } = req.body;

  if (email !== admin.email || password !== admin.password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { role: "admin", email },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({
    message: "Login successful",
    token,
  });
};
