// src/core/bootstrap.js

import { getConfig } from './config';
import { validateConfig } from '../utils/validate';
import { logger } from './logger';

import { createChatButton } from '../ui/chatbutton';

export function bootstrap() {
  try {
    // 1️⃣ Config read
    const config = getConfig();

    // 2️⃣ Config validate
    validateConfig(config);

    logger.info('Bootstrapping widget for product:', config.productId);

    // 3️⃣ Base container create
    const root = document.createElement('div');
    root.id = '__chatbot_root__';

    // 4️⃣ Base positioning (UI baad me)
    root.style.position = 'fixed';
    root.style.bottom = '20px';

    if (config.position === 'left') {
      root.style.left = '20px';
    } else {
      root.style.right = '20px';
    }

    root.style.zIndex = '999999';

    // 5️⃣ DOM me attach
    document.body.appendChild(root);

    createChatButton(root, config);

    logger.info('Widget bootstrap completed');
  } catch (err) {
    logger.error(err.message || err);
  }
}




