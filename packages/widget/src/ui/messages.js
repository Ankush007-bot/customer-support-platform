export function addAgentMessage(shadowRoot, text) {
  const messages = shadowRoot.getElementById("messages");
  if (!messages) return;

  const msg = document.createElement("div");
  msg.innerText = "🧑‍💻 " + text;
  msg.style.margin = "8px 0";
  msg.style.padding = "8px 10px";
  msg.style.background = "#f1f1f1";
  msg.style.color = "#000";
  msg.style.borderRadius = "10px";
  msg.style.maxWidth = "80%";
  msg.style.marginRight = "auto";
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}

export function addUserMessage(shadowRoot, text) {
  const messages = shadowRoot.getElementById("messages");
  if (!messages) return;

  const msg = document.createElement("div");
  msg.innerText = "🙂 " + text;
  msg.style.margin = "8px 0";
  msg.style.padding = "8px 10px";
  msg.style.background = "#007bff";
  msg.style.color = "#fff";
  msg.style.borderRadius = "10px";
  msg.style.maxWidth = "80%";
  msg.style.marginLeft = "auto";
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}

export function showTyping(shadowRoot) {
  const typing = shadowRoot.getElementById("typing-indicator");
  if (typing) typing.style.display = "block";
}

export function hideTyping(shadowRoot) {
  const typing = shadowRoot.getElementById("typing-indicator");
  if (typing) typing.style.display = "none";
}
