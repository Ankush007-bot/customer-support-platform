(function(e){typeof define=="function"&&define.amd?define(e):e()})(function(){"use strict";function e(){if(!window.ChatbotConfig)throw new Error("[Chatbot] window.ChatbotConfig is missing");return{theme:"light",position:"right",apiBaseUrl:"https://api.yourbot.com",...window.ChatbotConfig}}function h(t){if(!t.productId)throw new Error("[Chatbot] productId is required");if(t.theme&&!["light","dark"].includes(t.theme))throw new Error('[Chatbot] theme must be "light" or "dark"');if(t.position&&!["left","right"].includes(t.position))throw new Error('[Chatbot] position must be "left" or "right"')}const i="[Chatbot]",r={info(...t){console.info(i,...t)},warn(...t){console.warn(i,...t)},error(...t){console.error(i,...t)}};function l(t,o){console.log("[Chatbot] ChatButton.js loaded");const a=t.attachShadow({mode:"open"}),n=document.createElement("button");n.id="chat-button",n.textContent="💬";const c=document.createElement("style");c.textContent=`
    #chat-button {
      position: fixed;
      bottom: 20px;
      ${o.position==="left"?"left: 20px;":"right: 20px;"}
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
  `,a.appendChild(c),a.appendChild(n);let d=!1;n.addEventListener("click",()=>{d=!d,console.log("[Chatbot] Chat window",d?"opened":"closed")})}function s(){try{const t=e();h(t),r.info("Bootstrapping widget for product:",t.productId);const o=document.createElement("div");o.id="__chatbot_root__",o.style.position="fixed",o.style.bottom="20px",t.position==="left"?o.style.left="20px":o.style.right="20px",o.style.zIndex="999999",document.body.appendChild(o),l(o,t),r.info("Widget bootstrap completed")}catch(t){r.error(t.message||t)}}(function(){console.log("[Chatbot] index.js loaded"),!window.__CHATBOT_INITIALIZED__&&(window.__CHATBOT_INITIALIZED__=!0,document.readyState==="loading"?document.addEventListener("DOMContentLoaded",s):s())})()});
