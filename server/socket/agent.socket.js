const agents = require("../data/agent");

function initAgentSocket(io) {
    io.on("connection", (socket) => {
        socket.on("agent:login", ({ agentId }) => {

            agents.set(agentId, {
                agentId,
                socketId: socket.id,
                online: true,
                busy: false,
            });
            socket.agentId = agentId;
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
            if (socket.agentId) {
                // agents.delete(socket.agentId);
                // console.log("[Agent OFFLINE]", socket.agentId);

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
            }

            
        });


        
    });
}

function getFreeAgent() {
  for (const agent of agents.values()) {
    if (agent.online && !agent.busy) {
      return agent;
    }
  }
  return null;
}
module.exports = {initAgentSocket, getFreeAgent};
