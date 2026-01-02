const crypto = require("crypto")

const sessions = new Map();


function initChatSocket(io) {
  io.on("connection", (socket) => {
    console.log("[Socket] client connected:", socket.id);

  // ✅ create session
  const sessionId = crypto.randomUUID();

  sessions.set(sessionId, {
    sessionId,
    socketId: socket.id,
     mode: "bot",        // 👈 default
    messages: [],
    createdAt: Date.now(),
  });

  socket.sessionId = sessionId;

  // client ko sessionId bhejo
  socket.emit("session:init", { sessionId });
  

// client → server
    socket.on("chat:message", (payload) => {
     // console.log("[chat:message]", payload);
     const sessionId = socket.sessionId;
      const session = sessions.get(sessionId);
  if (!session) return;



   if (session.mode === "agent") {
    // agent typing
    socket.emit("agent:typing");

    setTimeout(() => {
      socket.emit("agent:message", {
        text: "Thanks for reaching out! How can I help you?",
      });
    }, 1200);
  }

  // session.messages.push({
  //   from: "user",
  //   text: payload.text,
  //   time: Date.now(),
  // });


  
      // agent typing
    //  socket.emit("agent:typing");
     
    //   const reply ="Thanks for reaching out! How can I help you?"
    //   setTimeout(() => {
    //     session.messages.push({
    //       from: "agent",
    //       text: reply,
    //     });


    //     socket.emit("agent:message", {
    //       text: reply,
    //     });
         
        

    //   }, 1200);



    });



    

    socket.on("connect-agent", () => {
  const session = sessions.get(socket.sessionId);
  if (!session) return;

  session.mode = "agent";

  socket.emit("agent:typing");

  setTimeout(() => {
    socket.emit("agent:message", {
      text: "Hi 👋 I’m Alex from support.",
    });
  }, 1500);
});


    
   socket.on("disconnect", () => {
  if (socket.sessionId) {
    sessions.delete(socket.sessionId);
  }
  console.log("[Socket] client disconnected:", socket.id);
});


  });
}

module.exports = initChatSocket;
