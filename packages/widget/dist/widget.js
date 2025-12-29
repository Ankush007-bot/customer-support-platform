(function(c){typeof define=="function"&&define.amd?define(c):c()})(function(){"use strict";function c(){if(!window.ChatbotConfig)throw new Error("[Chatbot] window.ChatbotConfig is missing");return{theme:"light",position:"right",apiBaseUrl:"https://api.yourbot.com",...window.ChatbotConfig}}function w(t){if(!t.productId)throw new Error("[Chatbot] productId is required");if(t.theme&&!["light","dark"].includes(t.theme))throw new Error('[Chatbot] theme must be "light" or "dark"');if(t.position&&!["left","right"].includes(t.position))throw new Error('[Chatbot] position must be "left" or "right"')}const g="[Chatbot]",u={info(...t){console.info(g,...t)},warn(...t){console.warn(g,...t)},error(...t){console.error(g,...t)}},C=[{id:1,question:"How do I reset my password?",answer:"You can reset your password from the account settings page."},{id:2,question:"Where can I check my orders?",answer:"You can view all orders in the My Orders section."},{id:3,question:"How do I contact customer support?",answer:"You can connect with a live agent using this chat."}];function I(t){const o=document.createElement("div");o.id="chat-window",o.style.position="relative",o.style.bottom="90px",o.style.right="20px",o.style.width="320px",o.style.height="400px",o.style.background="#ffffff",o.style.borderRadius="12px",o.style.boxShadow="0 8px 24px rgba(0,0,0,0.2)",o.style.display="none",o.style.flexDirection="column",o.style.zIndex="1000000",o.innerHTML=`
    <div style="
      padding:12px;
      font-weight:bold;
      border-bottom:1px solid #eee;
    ">
      💬 Support Chat
    </div>

    <div id="chat-content"  style="
      padding:12px;
      font-size:14px;
      height:260px;
      overflow-y:auto;
    ">
      <p>How can we help you?</p>


    



      <div id="question-list"></div>

      <div id="answer-box" style="
        margin-top:12px;
        display:none;
        background:#f5f5f5;
        padding:8px;
        border-radius:6px;
      "></div>

      <div
        id="messages"
        style="
           margin-top:8px;
    padding-right:4px;
        "
        ></div>

    </div>


    <div
  id="bot-typing"
  style="
    display:none;
    margin-top:8px;
    font-size:12px;
    color:#777;
  "
>
  🤖 Bot is typing...
</div>


        




    <div id="chat-input" style="
  position:absolute;
  bottom:0;
  left:0;
  width:100%;
  display:flex;
  border-top:1px solid #eee;
">
  <input
    id="chat-text-input"
    type="text"
    placeholder="Type your message..."
    style="
      flex:1;
      border:none;
      padding:10px;
      outline:none;
      font-size:14px;
    "
  />
  <button
    id="chat-send-btn"
    style="
      border:none;
      padding:0 16px;
      cursor:pointer;
      background:#007bff;
      color:#fff;
      font-size:14px;
    "
  >
    Send
  </button>
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


  
  `,t.appendChild(o);function a(n){const i=n.getElementById("question-list"),e=n.getElementById("answer-box");i&&(i.innerHTML="",C.forEach(l=>{const s=document.createElement("button");s.innerText=l.question,s.style.display="block",s.style.width="100%",s.style.margin="6px 0",s.style.padding="6px",s.style.cursor="pointer",s.style.border="1px solid #ddd",s.style.borderRadius="6px",s.style.background="#fff",s.onclick=()=>{e.style.display="block",e.innerHTML=`
        <div>${l.answer}</div>
        <div class="connect-agent" style="
          margin-top:10px;
          color:#007bff;
          cursor:pointer;
          font-size:13px;
        ">
          ❓ Not helpful? Connect to live agent
        </div>
      `;const _=e.querySelector(".connect-agent");_.onclick=()=>{const b=n.getElementById("chat-content"),v=n.getElementById("agent-screen");b&&v&&(console.log("[Chatbot] Switching to agent mode"),b.style.display="none",v.style.display="block",f(n))}},i.appendChild(s)}))}a(t);function f(n){const i=n.getElementById("agent-messages"),e=n.getElementById("typing-indicator");!i||!e||(e.style.display="block",setTimeout(()=>{e.style.display="none";const l=document.createElement("div");l.style.marginBottom="8px",l.innerText="Hi 👋 I’m Alex from support. How can I help you today?",i.appendChild(l)},2e3))}const d=t.getElementById("chat-text-input"),p=t.getElementById("chat-send-btn");t.getElementById("chat-content");function r(n){const i=t.getElementById("messages"),e=document.createElement("div");e.innerText=n,e.style.margin="8px 0",e.style.padding="8px 10px",e.style.background="#007bff",e.style.color="#fff",e.style.borderRadius="10px",e.style.maxWidth="80%",e.style.marginLeft="auto",i.appendChild(e),i.scrollTop=i.scrollHeight}function B(n){const i=t.getElementById("messages"),e=document.createElement("div");e.innerText=n,e.style.margin="8px 0",e.style.padding="8px 10px",e.style.background="#f1f1f1",e.style.color="#000",e.style.borderRadius="10px",e.style.maxWidth="80%",e.style.marginRight="auto",i.appendChild(e),i.scrollTop=i.scrollHeight}const h=n=>{const i=t.getElementById("chat-text-input"),e=t.getElementById("chat-send-btn");!i||!e||(i.disabled=n,e.disabled=n,e.style.opacity=n?"0.6":"1",e.style.cursor=n?"not-allowed":"pointer")};function k(){const n=t.getElementById("bot-typing");n&&(n.style.display="block")}function T(){const n=t.getElementById("bot-typing");n&&(n.style.display="none")}let y=null;function x(){const n=d.value.trim();n&&(r(n),d.value="",h(!0),k(),y&&clearTimeout(y),y=setTimeout(()=>{T(),B("Thanks for reaching out! How can I assist you further?"),y=null,h(!1)},1200))}return p.onclick=x,d.addEventListener("keydown",n=>{n.key==="Enter"&&x()}),o}function E(t,o){console.log("[Chatbot] ChatButton.js loaded");const a=t.attachShadow({mode:"open"}),f=I(a),d=document.createElement("button");d.id="chat-button",d.textContent="💬";const p=document.createElement("style");p.textContent=`
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
  `,a.appendChild(p),a.appendChild(d);let r=!1;d.addEventListener("click",()=>{r=!r,f.style.display=r?"flex":"none",console.log("[Chatbot] Chat window",r?"opened":"closed")})}function m(){try{const t=c();w(t),u.info("Bootstrapping widget for product:",t.productId);const o=document.createElement("div");o.id="__chatbot_root__",o.style.position="fixed",o.style.bottom="20px",t.position==="left"?o.style.left="20px":o.style.right="20px",o.style.zIndex="999999",document.body.appendChild(o),E(o,t),u.info("Widget bootstrap completed")}catch(t){u.error(t.message||t)}}(function(){console.log("[Chatbot] index.js loaded"),!window.__CHATBOT_INITIALIZED__&&(window.__CHATBOT_INITIALIZED__=!0,document.readyState==="loading"?document.addEventListener("DOMContentLoaded",m):m())})()});
