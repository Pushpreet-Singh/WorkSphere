// src/components/pages/ChatPage.js

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '../UI/Card';
import Button from '../UI/Button';

const ChatPage = () => {
  const { chatId } = useParams();
  const navigate = useNavigate();

  // Sample messages for the chat
  const [messages, setMessages] = useState([
    { sender: "John Doe", text: "Can you send me the latest update on the project?" },
    { sender: "You", text: "Sure, I will send it shortly." },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: "You", text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">WorkSphere</h1>
        <div className="flex gap-4">
          <Button onClick={() => navigate("/dashboard")} className="bg-blue-500">
            Dashboard
          </Button>
          <Button onClick={() => navigate("/")} className="bg-red-500">
            Logout
          </Button>
        </div>
      </header>

      <h1 className="text-3xl font-bold text-center mt-6 text-gray-800 underline">
        Chat with Employer (Job {chatId})
      </h1>

      <main className="max-w-6xl mx-auto p-6 mt-6">
        <div className="space-y-6">
          <Card>
            <CardContent>
              <div className="space-y-4">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg ${
                        msg.sender === "You" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-800"
                      }`}
                    >
                      <p>{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <Button
                  onClick={handleSendMessage}
                  className="mt-4 bg-blue-500 w-full"
                >
                  Send Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-6 text-center w-full mt-10">
        <p className="text-base">WorkSphere 2023. All rights reserved.</p>
        <h2 className="text-sm">Ziion Technology, Mohali</h2>
      </footer>
    </div>
  );
};

export default ChatPage;