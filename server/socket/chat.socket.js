const sessions = new Map();


function initChatSocket(io) {
  io.on("connection", (socket) => {
    console.log("[Socket] client connected:", socket.id);

  // ✅ create session
  const sessionId = crypto.randomUUID();

  sessions.set(sessionId, {
    socketId: socket.id,
    messages: [],
    createdAt: Date.now(),
  });

  // client ko sessionId bhejo
  socket.emit("session:init", { sessionId });
  

// client → server
    socket.on("chat:message", (payload) => {
     // console.log("[chat:message]", payload);

      const session = sessions.get(sessionId);
  if (!session) return;

  session.messages.push({
    from: "user",
    text: payload.text,
    time: Date.now(),
  });
      // agent typing
      socket.emit("agent:typing");
     
      const reply ="Thanks for reaching out! How can I help you?"
      setTimeout(() => {
        session.messages.push({
          from: "agent",
          text: reply,
        });


        socket.emit("agent:message", {
          text: reply,
        });
         
        

      }, 1200);
    });
    socket.on("disconnect", () => {
         sessions.delete(sessionId);
      console.log("[Socket] client disconnected:", socket.id);
      
    });
  });
}

module.exports = initChatSocket;
