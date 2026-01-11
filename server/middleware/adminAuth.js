const jwt = require("jsonwebtoken");

module.exports = function adminAuth(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth) return res.sendStatus(401);

  const token = auth.split(" ")[1];
console.log("Received Token:", token);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") return res.sendStatus(403);

    req.admin = decoded;
    next();
  } catch (err) {
    return res.sendStatus(401);
  }
};
