require("dotenv").config();

const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

//import crypto from "crypto";


const healthRoute = require("./routes/health");
const initChatSocket = require("./socket/chat.socket");

const adminAuthRoutes = require("./routes/admin.auth");
const { router: adminAgentRoutes } = require("./routes/admin.agents");
const agentRoutes = require("./routes/agent.routes");

const adminRoutes = require("./routes/admin.routes");

const {initAgentSocket} = require("./socket/agent.socket");


const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use("/health", healthRoute);

app.use("/admin", adminAuthRoutes);
app.use("/admin/agents", adminAgentRoutes)

app.use("/api/admin", adminRoutes);
app.use("/api/agents", agentRoutes);



// server + socket
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

initChatSocket(io);
initAgentSocket(io);



const PORT = 4000;
server.listen(PORT, () => {
  console.log("[Server] running on port", PORT);
});
