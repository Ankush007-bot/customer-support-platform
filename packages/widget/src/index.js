import { bootstrap } from "./core/bootstrap";
import { createChatButton } from "./ui/chatbutton";
import { socket } from "./socket";
import { addAgentMessage, showTyping, hideTyping } from "./ui/messages";
import { createChatWindow } from "./ui/ChatWindow";


let shadowRoot = null;

function bindSocketEvents() {
  socket.on("connect", () => console.log("[Chatbot] Socket connected"));

  socket.on("agent:typing", () => {
    if (!shadowRoot) return;
    showTyping(shadowRoot);
  });

  socket.on("agent:message", (data) => {
    if (!shadowRoot) return;
    hideTyping(shadowRoot);
    addAgentMessage(shadowRoot, data.text);
  });
}

function init() {
  if (window.__CHATBOT_INITIALIZED__) return;
  window.__CHATBOT_INITIALIZED__ = true;

  const result = bootstrap();
  if (!result) return;

  shadowRoot = result.shadowRoot;
  createChatButton(shadowRoot, result.config);
  createChatWindow(shadowRoot, socket);

  bindSocketEvents();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
