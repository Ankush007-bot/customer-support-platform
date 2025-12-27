// src/core/logger.js

const PREFIX = '[Chatbot]';

export const logger = {
  info(...args) {
    console.info(PREFIX, ...args);
  },
  warn(...args) {
    console.warn(PREFIX, ...args);
  },
  error(...args) {
    console.error(PREFIX, ...args);
  }
};
