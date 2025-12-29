import { createChatWindow } from "./ChatWindow";

export function createChatButton(shadowRoot, config) {
  // 👉 Chat window first
  const chatWindow = createChatWindow(shadowRoot);

  // 👉 Floating button
  const button = document.createElement("button");
  button.id = "chat-button";
  button.textContent = "💬";

  const style = document.createElement("style");
  style.textContent = `
    #chat-button {
      position: absolute;
      bottom: 0;
      ${config.position === "left" ? "left: 0;" : "right: 0;"}
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #007bff;
      color: white;
      font-size: 28px;
      border: none;
      cursor: pointer;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      z-index: 1000001;
    }
    #chat-button:hover { opacity:0.9; }
  `;

  shadowRoot.appendChild(style);
  shadowRoot.appendChild(button);

  // 👉 Toggle chat window
  let chatOpen = false;
  button.addEventListener("click", () => {
    chatOpen = !chatOpen;
    chatWindow.style.display = chatOpen ? "flex" : "none";
    button.textContent = chatOpen ? "❌" : "💬";
  });
}
