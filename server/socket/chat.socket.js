function initChatSocket(io) {
  io.on("connection", (socket) => {
    console.log("[Socket] client connected:", socket.id);
// client → server
    socket.on("chat:message", (payload) => {
      console.log("[chat:message]", payload);

      // agent typing
      socket.emit("agent:typing");

      setTimeout(() => {
        socket.emit("agent:message", {
          text: "Thanks for reaching out! How can I help you?",
        });
      }, 1200);
    });
    socket.on("disconnect", () => {
      console.log("[Socket] client disconnected:", socket.id);
    });
  });
}

module.exports = initChatSocket;
