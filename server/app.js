require("dotenv").config();

const express = require("express");
const cors = require("cors");

const healthRoute = require("./routes/health");
const adminAuthRoutes = require("./routes/admin.auth");
const { router: adminAgentRoutes } = require("./routes/admin.agents");
const agentRoutes = require("./routes/agent.routes");
const adminRoutes = require("./routes/admin.routes");

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/health", healthRoute);
app.use("/admin", adminAuthRoutes);
app.use("/admin/agents", adminAgentRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/agents", agentRoutes);

module.exports = app;
