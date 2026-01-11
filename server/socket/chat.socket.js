/**
 * Chat Socket Server
 * ------------------
 * This file handles:
 * - User chat sessions
 * - Agent assignment
 * - Message routing between user ↔ agent
 * - Session cleanup on disconnect
 */



const crypto = require("crypto");
const { getFreeAgent } = require("./agent.socket");
const agents = require("../data/agent");

/**
 * sessions Map
 * ------------
 * Key   → sessionId
 * Value → {
 *   sessionId,
 *   socketId,
 *   mode: "bot" | "agent",
 *   messages: [],
 *   agentId,
 *   createdAt
 * }
 *
 * 👉 Purpose:
 * - Har user ka isolated chat context maintain karna
 * - Messages, agent assignment & state track karna
 */

const sessions = new Map();

/**
 * initChatSocket
 * --------------
 * Socket.IO initialization for chat system
 * Har new socket connection pe ye logic chalega
 */

function initChatSocket(io) {
  io.on("connection", (socket) => {
    console.log("[Socket] client connected:", socket.id);

     /**
     * ===============================
     * SESSION CREATION (USER SIDE)
     * ===============================
     * Har new user ke liye:
     * - Ek unique sessionId generate hoti hai
     * - Session ko socket se bind kiya jata hai
     *
     * Result:
     * ✔ Multiple users safely parallel chat kar sakte hain
     * ✔ Har user ka data isolated rehta hai
     */



    // ✅ create session
    const sessionId = crypto.randomUUID();
    sessions.set(sessionId, {
      sessionId,
      socketId: socket.id,
      mode: "bot",
      messages: [],
      agentId: null,
      createdAt: Date.now(),
    });
    socket.sessionId = sessionId;

        // Client ko sessionId bhejna (debug / future use)


    socket.emit("session:init", { sessionId });
        /**
     * ==================================
     * USER → SERVER MESSAGE HANDLING
     * ==================================
     * Jab user frontend se message bhejta hai:
     * - Message session me store hota hai
     * - Agar agent mode active hai → agent ko forward hota hai
     */

    // ---------------- USER → SERVER ----------------
    socket.on("chat:message", ({ text }) => {
      const session = sessions.get(socket.sessionId);
      if (!session) return;

      session.messages.push({ from: "user", text });

      if (session.mode !== "agent") return;

         /**
       * Agar agent mode nahi hai:
       * - Bot ya idle state me user messages ignore honge
       * - (Future me bot yahan handle ho sakta hai)
       */

// session.agentId connect-agent event ke andar save hoti hai,
// aur uske baad hi user ke messages agent tak route hote hain.

      const agent = agents.get(session.agentId);
      if (!agent) return;
/**
       * User ko batana ki agent typing kar raha hai
       * UX improvement
       */
      // typing indicator to user
      io.to(session.socketId).emit("agent:typing");
        
        /**
       * User message ko agent ke socket tak forward karna
       * Agent dashboard is event ko sunega
       */
      
      // send msg to agent
      io.to(agent.socketId).emit("user:message", {
        sessionId: session.sessionId,
        text,
      });
    });

    // ---------------- AGENT → USER ----------------
    socket.on("agent:reply", ({ sessionId, text }) => {
      const session = sessions.get(sessionId);
      if (!session) return;

      session.messages.push({ from: "agent", text });

      io.to(session.socketId).emit("agent:message", { text });
    });

    // ---------------- CONNECT AGENT ----------------
    socket.on("connect-agent", () => {
      const session = sessions.get(socket.sessionId);
      if (!session) return;

      const agent = getFreeAgent();
      if (!agent) {
        socket.emit("agent:message", {
          text: "All agents are busy right now. Please wait.",
        });
        return;
      }

      session.mode = "agent";
      session.agentId = agent.agentId;
      agent.busy = true;

      console.log(
        `[SESSION ${session.sessionId}] assigned to agent ${agent.agentId}`
      );

      socket.emit("agent:typing");

      setTimeout(() => {
        socket.emit("agent:message", {
          text: "Hi 👋 I’m Alex from support.",
        });
      }, 1500);
    });

    // ---------------- CLEANUP ----------------
    socket.on("disconnect", () => {
      if (socket.agentId) {
        agents.delete(socket.agentId);
        console.log("[Agent OFFLINE]", socket.agentId);
      }
      if (socket.sessionId) {
        sessions.delete(socket.sessionId);
      }
      console.log("[Socket] client disconnected:", socket.id);
    });
  });
}

module.exports = initChatSocket;




















// 👉 session.agentId hum connect-agent event ke andar save karte hain

// 📍 Exact place (code se dikhaata hoon)
// socket.on("connect-agent", () => {
//   const session = sessions.get(socket.sessionId);
//   if (!session) return;

//   const agent = getFreeAgent();
//   if (!agent) return;

//   // 👇 YAHAN session me agentId save hoti hai
//   session.mode = "agent";
//   session.agentId = agent.agentId;   // ✅ HERE
//   agent.busy = true;
// });


// ➡️ Isi line ke baad session ko pata hota hai:

// kaunsa agent is user ke saath connected hai

// 🔁 Ab flow samjho (step-by-step)
// 1️⃣ User connect hota hai
// sessions.set(sessionId, {
//   mode: "bot",
//   agentId: null,   // ❌ agent abhi assigned nahi
// });

// 2️⃣ User normal message bhejta hai
// socket.on("chat:message")


// session.mode === "bot"

// isliye agent ko kuch forward nahi hota

// 3️⃣ User clicks Connect to Agent
// socket.emit("connect-agent");


// Server side:

// getFreeAgent() se agent milta hai

// yahi pe agent assign hota hai

// session.mode = "agent";
// session.agentId = agent.agentId; // ✅ SAVE

// 4️⃣ Ab user message bhejta hai
// const agent = agents.get(session.agentId);


// ➡️ Ab session.agentId exist karta hai
// ➡️ agents.get() successful hota hai
// ➡️ Message agent ke socket pe chala jata hai

// 🧠 Why this design is correct

// ✔ Session knows which agent
// ✔ Agent knows busy / free
// ✔ User → Agent routing deterministic
// ✔ Multiple users, multiple agents safe

// 🔴 Important edge case (interview level)

// Agar koi dev bole:

// "What if user sends message before agent assigned?"

// Tum confidently bolo 👇

// if (session.mode !== "agent") return;


// ➡️ Message ignore ho jaata hai
// ➡️ System break nahi hota