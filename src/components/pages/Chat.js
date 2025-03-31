import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../UI/Button";

const Chat = () => {
  const { messageId } = useParams(); // Get the message ID from URL
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]); // Initialize with an empty array
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    // Simulated messages for different message IDs
    const chatMessages = {
      "1": [{ sender: "TechCorp", text: "Hello, we liked your profile!", type: "received" }],
      "2": [{ sender: "DesignHub", text: "We have a new project available!", type: "received" }],
    };

    setMessages(chatMessages[messageId] || []);
  }, [messageId]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "You", text: newMessage, type: "sent" },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-6">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Chat</h1>
        <Button onClick={() => navigate("/inbox")} className="bg-blue-500">Back to Inbox</Button>
      </header>

      <div className="flex-1 overflow-y-auto bg-white p-4 rounded shadow-md">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-3 ${msg.type === "sent" ? "text-right" : "text-left"}`}>
            <span className={`inline-block p-2 rounded-lg ${msg.type === "sent" ? "bg-blue-500 text-white" : "bg-gray-300"}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded-l"
        />
        <Button onClick={handleSendMessage} className="bg-green-500">Send</Button>
      </div>
    </div>
  );
};

export default Chat;