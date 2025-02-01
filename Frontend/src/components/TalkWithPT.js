// TalkWithPT.js
import React, { useState } from "react";

function TalkWithPT() {
  const [messages, setMessages] = useState([
    { from: "system", text: "Hello, I'm your virtual PT assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  function handleSend() {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input.trim() }]);
    // Here you’d call your AI or some backend endpoint
    setInput("");
  }

  return (
    <div>
      <h3>Talk with a Physical Therapist</h3>
      <div style={{
        border: "1px solid #ccc",
        borderRadius: "4px",
        height: "300px",
        overflowY: "auto",
        marginBottom: "1rem",
        padding: "0.5rem"
      }}>
        {messages.map((msg, i) => (
          <div key={i} style={{
            textAlign: msg.from === "user" ? "right" : "left",
            marginBottom: "0.5rem"
          }}>
            <strong>{msg.from === "user" ? "You" : "PT"}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ width: "80%" }}
          placeholder="Type a message..."
        />
        <button onClick={handleSend} style={{ marginLeft: "1rem" }}>
          Send
        </button>
      </div>
    </div>
  );
}

export default TalkWithPT;
