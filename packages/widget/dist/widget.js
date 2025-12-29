(function(c){typeof define=="function"&&define.amd?define(c):c()})(function(){"use strict";function c(){if(!window.ChatbotConfig)throw new Error("[Chatbot] window.ChatbotConfig is missing");return{theme:"light",position:"right",apiBaseUrl:"https://api.yourbot.com",...window.ChatbotConfig}}function b(t){if(!t.productId)throw new Error("[Chatbot] productId is required");if(t.theme&&!["light","dark"].includes(t.theme))throw new Error('[Chatbot] theme must be "light" or "dark"');if(t.position&&!["left","right"].includes(t.position))throw new Error('[Chatbot] position must be "left" or "right"')}const g="[Chatbot]",y={info(...t){console.info(g,...t)},warn(...t){console.warn(g,...t)},error(...t){console.error(g,...t)}},w=[{id:1,question:"How do I reset my password?",answer:"You can reset your password from the account settings page."},{id:2,question:"Where can I check my orders?",answer:"You can view all orders in the My Orders section."},{id:3,question:"How do I contact customer support?",answer:"You can connect with a live agent using this chat."}];function v(t){const n=document.createElement("div");n.id="chat-window",n.style.position="relative",n.style.bottom="90px",n.style.right="20px",n.style.width="320px",n.style.height="400px",n.style.background="#ffffff",n.style.borderRadius="12px",n.style.boxShadow="0 8px 24px rgba(0,0,0,0.2)",n.style.display="none",n.style.flexDirection="column",n.style.zIndex="1000000",n.innerHTML=`
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


  
  `,t.appendChild(n);function a(o){const i=o.getElementById("question-list"),e=o.getElementById("answer-box");i&&(i.innerHTML="",w.forEach(l=>{const s=document.createElement("button");s.innerText=l.question,s.style.display="block",s.style.width="100%",s.style.margin="6px 0",s.style.padding="6px",s.style.cursor="pointer",s.style.border="1px solid #ddd",s.style.borderRadius="6px",s.style.background="#fff",s.onclick=()=>{e.style.display="block",e.innerHTML=`
        <div>${l.answer}</div>
        <div class="connect-agent" style="
          margin-top:10px;
          color:#007bff;
          cursor:pointer;
          font-size:13px;
        ">
          ❓ Not helpful? Connect to live agent
        </div>
      `;const k=e.querySelector(".connect-agent");k.onclick=()=>{const m=o.getElementById("chat-content"),x=o.getElementById("agent-screen");m&&x&&(console.log("[Chatbot] Switching to agent mode"),m.style.display="none",x.style.display="block",u(o))}},i.appendChild(s)}))}a(t);function u(o){const i=o.getElementById("agent-messages"),e=o.getElementById("typing-indicator");!i||!e||(e.style.display="block",setTimeout(()=>{e.style.display="none";const l=document.createElement("div");l.style.marginBottom="8px",l.innerText="Hi 👋 I’m Alex from support. How can I help you today?",i.appendChild(l)},2e3))}const d=t.getElementById("chat-text-input"),p=t.getElementById("chat-send-btn");t.getElementById("chat-content");function r(o){const i=t.getElementById("messages"),e=document.createElement("div");e.innerText=o,e.style.margin="8px 0",e.style.padding="8px 10px",e.style.background="#007bff",e.style.color="#fff",e.style.borderRadius="10px",e.style.maxWidth="80%",e.style.marginLeft="auto",i.appendChild(e),i.scrollTop=i.scrollHeight}function E(o){const i=t.getElementById("messages"),e=document.createElement("div");e.innerText=o,e.style.margin="8px 0",e.style.padding="8px 10px",e.style.background="#f1f1f1",e.style.color="#000",e.style.borderRadius="10px",e.style.maxWidth="80%",e.style.marginRight="auto",i.appendChild(e),i.scrollTop=i.scrollHeight}function I(){const o=t.getElementById("bot-typing");o&&(o.style.display="block")}function B(){const o=t.getElementById("bot-typing");o&&(o.style.display="none")}function h(){const o=d.value.trim();o&&(r(o),d.value="",I(),setTimeout(()=>{B(),E("Thanks for reaching out! How can I assist you further?")},1200))}return p.onclick=h,d.addEventListener("keydown",o=>{o.key==="Enter"&&h()}),n}function C(t,n){console.log("[Chatbot] ChatButton.js loaded");const a=t.attachShadow({mode:"open"}),u=v(a),d=document.createElement("button");d.id="chat-button",d.textContent="💬";const p=document.createElement("style");p.textContent=`
    #chat-button {
      position: fixed;
      bottom: 20px;
      ${n.position==="left"?"left: 20px;":"right: 20px;"}
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
  `,a.appendChild(p),a.appendChild(d);let r=!1;d.addEventListener("click",()=>{r=!r,u.style.display=r?"flex":"none",console.log("[Chatbot] Chat window",r?"opened":"closed")})}function f(){try{const t=c();b(t),y.info("Bootstrapping widget for product:",t.productId);const n=document.createElement("div");n.id="__chatbot_root__",n.style.position="fixed",n.style.bottom="20px",t.position==="left"?n.style.left="20px":n.style.right="20px",n.style.zIndex="999999",document.body.appendChild(n),C(n,t),y.info("Widget bootstrap completed")}catch(t){y.error(t.message||t)}}(function(){console.log("[Chatbot] index.js loaded"),!window.__CHATBOT_INITIALIZED__&&(window.__CHATBOT_INITIALIZED__=!0,document.readyState==="loading"?document.addEventListener("DOMContentLoaded",f):f())})()});
