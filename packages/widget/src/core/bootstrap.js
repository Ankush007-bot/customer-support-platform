import { getConfig } from "./config";
import { validateConfig } from "../utils/validate";
import { logger } from "./logger";

export function bootstrap() {
  try {
    const config = getConfig();
    validateConfig(config);

    logger.info("Bootstrapping widget for product:", config.productId);

    const root = document.createElement("div");
    root.id = "__chatbot_root__";
    root.style.position = "fixed";
    root.style.bottom = "20px";
    root.style.zIndex = "999999";

    if (config.position === "left") {
      root.style.left = "20px";
    } else {
      root.style.right = "20px";
    }

    document.body.appendChild(root);

    const shadowRoot = root.attachShadow({ mode: "open" });

    return { root, shadowRoot, config };
  } catch (err) {
    logger.error(err.message || err);
    return null;
  }
}
