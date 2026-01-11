const express = require("express");
const bcrypt = require("bcrypt");
const adminAuth = require("../middleware/adminAuth");

const router = express.Router();

// TEMP in-memory store (DB baad me)
const agents = new Map();

/**
 * ➕ Add new agent
 */
router.post("/", adminAuth, async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Missing fields" });
  }

  // prevent duplicate
  for (let agent of agents.values()) {
    if (agent.email === email) {
      return res.status(409).json({ error: "Agent already exists" });
    }
  }

  const agentId = "agent_" + crypto.randomUUID();
  const passwordHash = await bcrypt.hash(password, 10);

  const agent = {
    id: agentId,
    name,
    email,
    passwordHash,
    isActive: true,
    createdAt: Date.now(),
  };

  agents.set(agentId, agent);

  res.status(201).json({
    id: agent.id,
    name: agent.name,
    email: agent.email,
    isActive: agent.isActive,
  });
});

module.exports = { router, agents };
