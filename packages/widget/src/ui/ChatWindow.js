import { addUserMessage,showTyping } from "./messages";
import { socket } from "../socket";

export function createChatWindow(shadowRoot) {
  const chatWindow = document.createElement("div");
  chatWindow.id = "chat-window";
  chatWindow.style.position = "relative";
  chatWindow.style.width = "320px";
  chatWindow.style.height = "400px";
  chatWindow.style.background = "#fff";
  chatWindow.style.borderRadius = "12px";
  chatWindow.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)";
  chatWindow.style.display = "none";
  chatWindow.style.flexDirection = "column";
  chatWindow.style.zIndex = "1000000";

  chatWindow.innerHTML = `
    <div style="padding:12px;font-weight:bold;border-bottom:1px solid #eee;">
      💬 Support Chat
    </div>
    <div id="chat-body" style="padding:12px;font-size:14px;height:260px;overflow-y:auto;">
      <div id="messages"></div>
      <div id="bot-typing" style="display:none;margin-top:8px;font-size:12px;color:#777;">🤖 Bot is typing...</div>
    </div>
    <div id="chat-input" style="position:absolute;bottom:0;left:0;width:100%;display:flex;border-top:1px solid #eee;">
      <input id="chat-text-input" type="text" placeholder="Type your message..." style="flex:1;border:none;padding:10px;outline:none;font-size:14px;" />
      <button id="chat-send-btn" style="border:none;padding:0 16px;cursor:pointer;background:#007bff;color:#fff;font-size:14px;">Send</button>
    </div>

      <div id="typing-indicator" style="margin-top:10px;font-size:12px;color:#777;display:none;">🧑‍💻 Agent is typing...</div>

    <div id="agent-screen" style="display:none;padding:12px;font-size:14px;text-align:center;">
      <div style="margin-bottom:10px;">🧑‍💻 Connecting you to a live agent...</div>
      <div style="font-size:12px;color:#777;">Please wait, this may take a few seconds</div>
      <div id="agent-messages"></div>
      <div id="typing-indicator" style="margin-top:10px;font-size:12px;color:#777;display:none;">🧑‍💻 Agent is typing...</div>
    </div>
  `;
//
  shadowRoot.appendChild(chatWindow);

  
  // --- Input handlers ---
  const input = shadowRoot.getElementById("chat-text-input");
  const sendBtn = shadowRoot.getElementById("chat-send-btn");

  function handleSend() {
    const value = input.value.trim();
    if (!value) return;

    addUserMessage(shadowRoot, value);
    input.value = "";

    //showTyping(shadowRoot);
    socket.emit("chat:message", { text: value });
  }

  sendBtn.onclick = handleSend;
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") handleSend(); });
  return chatWindow;
}
