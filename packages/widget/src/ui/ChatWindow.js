// src/ui/ChatWindow.js

  const QUESTIONS = [
  {
    id: 1,
    question: "How do I reset my password?",
    answer: "You can reset your password from the account settings page."
  },
  {
    id: 2,
    question: "Where can I check my orders?",
    answer: "You can view all orders in the My Orders section."
  },
  {
    id: 3,
    question: "How do I contact customer support?",
    answer: "You can connect with a live agent using this chat."
  }
];


export function createChatWindow(shadowRoot) {



  

  // chat container
  const chatWindow = document.createElement('div');
  chatWindow.id = 'chat-window';

  chatWindow.style.position = 'fixed';
  chatWindow.style.bottom = '90px';
  chatWindow.style.right = '20px';
  chatWindow.style.width = '320px';
  chatWindow.style.height = '400px';
  chatWindow.style.background = '#ffffff';
  chatWindow.style.borderRadius = '12px';
  chatWindow.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)';
  chatWindow.style.display = 'none';
  chatWindow.style.flexDirection = 'column';
  chatWindow.style.zIndex = '1000000';


  
  chatWindow.innerHTML = `
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


  
  `;




//   // header
//   const header = document.createElement('div');
//   header.innerText = 'Support Chat';
//   header.style.padding = '12px';
//   header.style.background = '#007bff';
//   header.style.color = '#fff';
//   header.style.fontWeight = 'bold';
//   header.style.borderTopLeftRadius = '12px';
//   header.style.borderTopRightRadius = '12px';

//   chatWindow.appendChild(header);
  shadowRoot.appendChild(chatWindow);

  


  function renderQuestions(shadowRoot) {
  const list = shadowRoot.getElementById("question-list");
  const answerBox = shadowRoot.getElementById("answer-box");

  if (!list) return;

  list.innerHTML = "";

  QUESTIONS.forEach(item => {
    const btn = document.createElement("button");

    btn.innerText = item.question;
    btn.style.display = "block";
    btn.style.width = "100%";
    btn.style.margin = "6px 0";
    btn.style.padding = "6px";
    btn.style.cursor = "pointer";
    btn.style.border = "1px solid #ddd";
    btn.style.borderRadius = "6px";
    btn.style.background = "#fff";

    btn.onclick = () => {
      answerBox.style.display = "block";
     // answerBox.innerText = item.answer;

      answerBox.innerHTML = `
        <div>${item.answer}</div>
        <div class="connect-agent" style="
          margin-top:10px;
          color:#007bff;
          cursor:pointer;
          font-size:13px;
        ">
          ❓ Not helpful? Connect to live agent
        </div>
      `;

        const connectBtn = answerBox.querySelector(".connect-agent");
      

  
         connectBtn.onclick = () => {
        // console.log("[Chatbot] User wants to connect to live agent");
            const chatContent = shadowRoot.getElementById("chat-content");
  const agentScreen = shadowRoot.getElementById("agent-screen");

  if (chatContent && agentScreen) {
    console.log("[Chatbot] Switching to agent mode");
    chatContent.style.display = "none";
    agentScreen.style.display = "block";

    startFakeAgentChat(shadowRoot) // 👈 ADD THIS
  }
      };
    };

    list.appendChild(btn);
  });
}
renderQuestions(shadowRoot);

function startFakeAgentChat(shadowRoot) {
  const messagesBox = shadowRoot.getElementById("agent-messages");
  const typing = shadowRoot.getElementById("typing-indicator");

  if (!messagesBox || !typing) return;

  typing.style.display = "block";

  setTimeout(() => {
    typing.style.display = "none";

    const msg = document.createElement("div");
    msg.style.marginBottom = "8px";
    msg.innerText = "Hi 👋 I’m Alex from support. How can I help you today?";

    messagesBox.appendChild(msg);
  }, 2000);
}


// --- Task 2.1: Send message logic ---

const input = shadowRoot.getElementById("chat-text-input");
const sendBtn = shadowRoot.getElementById("chat-send-btn");
const chatContent = shadowRoot.getElementById("chat-content");

function addUserMessage(text) {
  const msg = document.createElement("div");
  msg.innerText = text;

  msg.style.margin = "8px 0";
  msg.style.padding = "8px 10px";
  msg.style.background = "#007bff";
  msg.style.color = "#fff";
  msg.style.borderRadius = "10px";
  msg.style.maxWidth = "80%";
  msg.style.marginLeft = "auto"; // right side (user)

  chatContent.appendChild(msg);
  chatContent.scrollTop = chatContent.scrollHeight;
}

function handleSend() {
  const value = input.value.trim();
  if (!value) return;

  addUserMessage(value);
  input.value = "";
}

sendBtn.onclick = handleSend;

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleSend();
  }
});



return chatWindow;

}
