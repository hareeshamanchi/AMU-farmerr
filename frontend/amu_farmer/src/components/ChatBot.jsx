import React, { useState } from "react";
import "./ChatBot.css";

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
    // You can add API integration here for AI response
    setMessages((prev) => [...prev, { from: "bot", text: "This is a demo reply!" }]);
  };

  return (
    <div className={`chatbot ${open ? "open" : ""}`}>
      <div className="chatbot-header" onClick={() => setOpen(!open)}>
        {open ? "ChatBot ✖" : "ChatBot 💬"}
      </div>
      {open && (
        <div className="chatbot-body">
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.from}`}>{msg.text}</div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
