const crypto = require("crypto");
const agents = require("../data/agent");

exports.addAgent = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: "name & email required" });
  }

  const agentId = crypto.randomUUID();

  agents.set(agentId, {
    agentId,
    name,
    email,
    online: false,
    createdAt: Date.now(),
  });

  res.json({
    message: "Agent added",
    agent: agents.get(agentId),
  });
};

exports.listAgents = (req, res) => {
  res.json({
    agents: Array.from(agents.values()),
  });
};
