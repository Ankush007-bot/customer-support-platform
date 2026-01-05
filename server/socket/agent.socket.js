const agents = require("../data/agent");

function initAgentSocket(io) {
  io.on("connection", (socket) => {
    socket.on("agent:login", ({ agentId }) => {
      const agent = agents.get(agentId);
      if (!agent) return;

      agent.online = true;
      agent.socketId = socket.id;

      console.log("[Agent ONLINE]", agent.name);

      // future: notify admin
      io.emit("agent:status", {
        agentId,
        online: true,
      });
    });

    socket.on("disconnect", () => {
      for (let agent of agents.values()) {
        if (agent.socketId === socket.id) {
          agent.online = false;
          delete agent.socketId;

          console.log("[Agent OFFLINE]", agent.name);

          io.emit("agent:status", {
            agentId: agent.agentId,
            online: false,
          });
        }
      }
    });
  });
}

module.exports = initAgentSocket;
