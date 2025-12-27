// src/core/config.js

/**
 * Reads global Chatbot configuration
 * @returns {Object}
 */
export function getConfig() {
  if (!window.ChatbotConfig) {
    throw new Error('[Chatbot] window.ChatbotConfig is missing');
  }

  return {
    theme: 'light',
    position: 'right',
    apiBaseUrl: 'https://api.yourbot.com',
    ...window.ChatbotConfig
  };
}
