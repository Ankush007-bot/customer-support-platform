(function(c){typeof define=="function"&&define.amd?define(c):c()})(function(){"use strict";function c(){if(!window.ChatbotConfig)throw new Error("[Chatbot] window.ChatbotConfig is missing");return{theme:"light",position:"right",apiBaseUrl:"https://api.yourbot.com",...window.ChatbotConfig}}function b(t){if(!t.productId)throw new Error("[Chatbot] productId is required");if(t.theme&&!["light","dark"].includes(t.theme))throw new Error('[Chatbot] theme must be "light" or "dark"');if(t.position&&!["left","right"].includes(t.position))throw new Error('[Chatbot] position must be "left" or "right"')}const u="[Chatbot]",g={info(...t){console.info(u,...t)},warn(...t){console.warn(u,...t)},error(...t){console.error(u,...t)}},w=[{id:1,question:"How do I reset my password?",answer:"You can reset your password from the account settings page."},{id:2,question:"Where can I check my orders?",answer:"You can view all orders in the My Orders section."},{id:3,question:"How do I contact customer support?",answer:"You can connect with a live agent using this chat."}];function v(t){const e=document.createElement("div");e.id="chat-window",e.style.position="relative",e.style.bottom="90px",e.style.right="20px",e.style.width="320px",e.style.height="400px",e.style.background="#ffffff",e.style.borderRadius="12px",e.style.boxShadow="0 8px 24px rgba(0,0,0,0.2)",e.style.display="none",e.style.flexDirection="column",e.style.zIndex="1000000",e.innerHTML=`
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


  
  `,t.appendChild(e);function l(o){const s=o.getElementById("question-list"),n=o.getElementById("answer-box");s&&(s.innerHTML="",w.forEach(a=>{const i=document.createElement("button");i.innerText=a.question,i.style.display="block",i.style.width="100%",i.style.margin="6px 0",i.style.padding="6px",i.style.cursor="pointer",i.style.border="1px solid #ddd",i.style.borderRadius="6px",i.style.background="#fff",i.onclick=()=>{n.style.display="block",n.innerHTML=`
        <div>${a.answer}</div>
        <div class="connect-agent" style="
          margin-top:10px;
          color:#007bff;
          cursor:pointer;
          font-size:13px;
        ">
          ❓ Not helpful? Connect to live agent
        </div>
      `;const E=n.querySelector(".connect-agent");E.onclick=()=>{const m=o.getElementById("chat-content"),x=o.getElementById("agent-screen");m&&x&&(console.log("[Chatbot] Switching to agent mode"),m.style.display="none",x.style.display="block",y(o))}},s.appendChild(i)}))}l(t);function y(o){const s=o.getElementById("agent-messages"),n=o.getElementById("typing-indicator");!s||!n||(n.style.display="block",setTimeout(()=>{n.style.display="none";const a=document.createElement("div");a.style.marginBottom="8px",a.innerText="Hi 👋 I’m Alex from support. How can I help you today?",s.appendChild(a)},2e3))}const d=t.getElementById("chat-text-input"),p=t.getElementById("chat-send-btn");t.getElementById("chat-content");function r(o){const s=t.getElementById("messages"),n=document.createElement("div");n.innerText=o,n.style.margin="8px 0",n.style.padding="8px 10px",n.style.background="#007bff",n.style.color="#fff",n.style.borderRadius="10px",n.style.maxWidth="80%",n.style.marginLeft="auto",s.appendChild(n),s.scrollTop=s.scrollHeight}function h(){const o=d.value.trim();o&&(r(o),d.value="")}return p.onclick=h,d.addEventListener("keydown",o=>{o.key==="Enter"&&h()}),e}function C(t,e){console.log("[Chatbot] ChatButton.js loaded");const l=t.attachShadow({mode:"open"}),y=v(l),d=document.createElement("button");d.id="chat-button",d.textContent="💬";const p=document.createElement("style");p.textContent=`
    #chat-button {
      position: fixed;
      bottom: 20px;
      ${e.position==="left"?"left: 20px;":"right: 20px;"}
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
  `,l.appendChild(p),l.appendChild(d);let r=!1;d.addEventListener("click",()=>{r=!r,y.style.display=r?"flex":"none",console.log("[Chatbot] Chat window",r?"opened":"closed")})}function f(){try{const t=c();b(t),g.info("Bootstrapping widget for product:",t.productId);const e=document.createElement("div");e.id="__chatbot_root__",e.style.position="fixed",e.style.bottom="20px",t.position==="left"?e.style.left="20px":e.style.right="20px",e.style.zIndex="999999",document.body.appendChild(e),C(e,t),g.info("Widget bootstrap completed")}catch(t){g.error(t.message||t)}}(function(){console.log("[Chatbot] index.js loaded"),!window.__CHATBOT_INITIALIZED__&&(window.__CHATBOT_INITIALIZED__=!0,document.readyState==="loading"?document.addEventListener("DOMContentLoaded",f):f())})()});
