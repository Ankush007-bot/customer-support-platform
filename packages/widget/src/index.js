// src/index.js

import { bootstrap } from './core/bootstrap';
import { createChatButton } from './ui/chatbutton';

(function init() {
    console.log('[Chatbot] index.js loaded');
  // Prevent double initialization
  if (window.__CHATBOT_INITIALIZED__) return;
  window.__CHATBOT_INITIALIZED__ = true;

   // Task-2.1 → Add floating chat button
    // createChatButton(root, config);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
  } else {
    bootstrap();
  }
})();
