// src/utils/validate.js

/**
 * Validates chatbot configuration
 * @param {Object} config
 */
export function validateConfig(config) {
  if (!config.productId) {
    throw new Error('[Chatbot] productId is required');
  }

  if (config.theme && !['light', 'dark'].includes(config.theme)) {
    throw new Error('[Chatbot] theme must be "light" or "dark"');
  }

  if (config.position && !['left', 'right'].includes(config.position)) {
    throw new Error('[Chatbot] position must be "left" or "right"');
  }
}
