(function(a){typeof define=="function"&&define.amd?define(a):a()})(function(){"use strict";function a(){if(!window.ChatbotConfig)throw new Error("[Chatbot] window.ChatbotConfig is missing");return{theme:"light",position:"right",apiBaseUrl:"https://api.yourbot.com",...window.ChatbotConfig}}function y(e){if(!e.productId)throw new Error("[Chatbot] productId is required");if(e.theme&&!["light","dark"].includes(e.theme))throw new Error('[Chatbot] theme must be "light" or "dark"');if(e.position&&!["left","right"].includes(e.position))throw new Error('[Chatbot] position must be "left" or "right"')}const l="[Chatbot]",c={info(...e){console.info(l,...e)},warn(...e){console.warn(l,...e)},error(...e){console.error(l,...e)}},f=[{id:1,question:"How do I reset my password?",answer:"You can reset your password from the account settings page."},{id:2,question:"Where can I check my orders?",answer:"You can view all orders in the My Orders section."},{id:3,question:"How do I contact customer support?",answer:"You can connect with a live agent using this chat."}];function m(e){const t=document.createElement("div");t.id="chat-window",t.style.position="fixed",t.style.bottom="90px",t.style.right="20px",t.style.width="320px",t.style.height="400px",t.style.background="#ffffff",t.style.borderRadius="12px",t.style.boxShadow="0 8px 24px rgba(0,0,0,0.2)",t.style.display="none",t.style.flexDirection="column",t.style.zIndex="1000000",t.innerHTML=`
    <div style="
      padding:12px;
      font-weight:bold;
      border-bottom:1px solid #eee;
    ">
      💬 Support Chat
    </div>

    <div id="chat-content" style="padding:12px; font-size:14px;">
      <p>How can we help you?</p>

      <div id="question-list"></div>

      <div id="answer-box" style="
        margin-top:12px;
        display:none;
        background:#f5f5f5;
        padding:8px;
        border-radius:6px;
      "></div>

    </div>


          <div id="agent-screen" style="
  display:none;
  padding:12px;
  font-size:14px;
  text-align:center;
">
  <div style="margin-bottom:10px;">🧑‍💻 Connecting you to a live agent...</div>
  <div style="font-size:12px;color:#777;">
    Please wait, this may take a few seconds
  </div>


  <div id="agent-messages"></div>

  <div id="typing-indicator" style="
    margin-top:10px;
    font-size:12px;
    color:#777;
    display:none;
  ">
    🧑‍💻 Agent is typing...
  </div>
</div>


  
  `,e.appendChild(t);function r(n){const s=n.getElementById("question-list"),o=n.getElementById("answer-box");s&&(s.innerHTML="",f.forEach(d=>{const i=document.createElement("button");i.innerText=d.question,i.style.display="block",i.style.width="100%",i.style.margin="6px 0",i.style.padding="6px",i.style.cursor="pointer",i.style.border="1px solid #ddd",i.style.borderRadius="6px",i.style.background="#fff",i.onclick=()=>{o.style.display="block",o.innerHTML=`
        <div>${d.answer}</div>
        <div class="connect-agent" style="
          margin-top:10px;
          color:#007bff;
          cursor:pointer;
          font-size:13px;
        ">
          ❓ Not helpful? Connect to live agent
        </div>
      `;const b=o.querySelector(".connect-agent");b.onclick=()=>{const g=n.getElementById("chat-content"),h=n.getElementById("agent-screen");g&&h&&(console.log("[Chatbot] Switching to agent mode"),g.style.display="none",h.style.display="block",p(n))}},s.appendChild(i)}))}r(e);function p(n){const s=n.getElementById("agent-messages"),o=n.getElementById("typing-indicator");!s||!o||(o.style.display="block",setTimeout(()=>{o.style.display="none";const d=document.createElement("div");d.style.marginBottom="8px",d.innerText="Hi 👋 I’m Alex from support. How can I help you today?",s.appendChild(d)},2e3))}return t}function x(e,t){console.log("[Chatbot] ChatButton.js loaded");const r=e.attachShadow({mode:"open"}),p=m(r),n=document.createElement("button");n.id="chat-button",n.textContent="💬";const s=document.createElement("style");s.textContent=`
    #chat-button {
      position: fixed;
      bottom: 20px;
      ${t.position==="left"?"left: 20px;":"right: 20px;"}
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
  `,r.appendChild(s),r.appendChild(n);let o=!1;n.addEventListener("click",()=>{o=!o,p.style.display=o?"flex":"none",console.log("[Chatbot] Chat window",o?"opened":"closed")})}function u(){try{const e=a();y(e),c.info("Bootstrapping widget for product:",e.productId);const t=document.createElement("div");t.id="__chatbot_root__",t.style.position="fixed",t.style.bottom="20px",e.position==="left"?t.style.left="20px":t.style.right="20px",t.style.zIndex="999999",document.body.appendChild(t),x(t,e),c.info("Widget bootstrap completed")}catch(e){c.error(e.message||e)}}(function(){console.log("[Chatbot] index.js loaded"),!window.__CHATBOT_INITIALIZED__&&(window.__CHATBOT_INITIALIZED__=!0,document.readyState==="loading"?document.addEventListener("DOMContentLoaded",u):u())})()});
