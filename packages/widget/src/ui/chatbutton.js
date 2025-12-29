// src/ui/ChatButton.js

import { createChatWindow } from "./ChatWindow";

export function createChatButton(root, config) {
    console.log('[Chatbot] ChatButton.js loaded');
  // 1️⃣ Create Shadow DOM root
  const shadow = root.attachShadow({ mode: 'open' });

  // 👉 create chat window first
  const chatWindow = createChatWindow(shadow);

  // 2️⃣ Create floating button
  const button = document.createElement('button');
  button.id = 'chat-button';
  button.textContent = '💬';
  
  // 3️⃣ Basic styles
  const style = document.createElement('style');
  style.textContent = `
    #chat-button {
      position: fixed;
      bottom: 20px;
      ${config.position === 'left' ? 'left: 20px;' : 'right: 20px;'}
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #007bff;
      color: white;
      font-size: 28px;
      border: none;
      cursor: pointer;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      transition: transform 0.2s;
      z-index: 1000000;
    }
    #chat-button:hover {
      transform: scale(1.1);
    }
  `;

  // 4️⃣ Append style + button to shadow root
  shadow.appendChild(style);
  shadow.appendChild(button);

  // 5️⃣ Click toggle placeholder (chat window future)
  let chatOpen = false;
  button.addEventListener('click', () => {
    chatOpen = !chatOpen;
    // task 2.2
    chatWindow.style.display = chatOpen ? 'flex' : 'none';

    console.log('[Chatbot] Chat window', chatOpen ? 'opened' : 'closed');
    // TODO: Open actual chat window
  });
}
