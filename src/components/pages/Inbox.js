import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '../UI/Card';
import Button from '../UI/Button';

const InboxPage = () => {
  const navigate = useNavigate();

  const messages = [
    {
      sender: 'John Doe',
      message: 'Can you send me the latest update on the project?',
      time: '2 hours ago',
      chatId: 1,
    },
    {
      sender: 'Client X',
      message: 'Great job on the last task! Let\'s discuss the next steps.',
      time: '1 day ago',
      chatId: 2,
    },
    {
      sender: 'Project Manager',
      message: 'Please provide the status of the development work.',
      time: '3 days ago',
      chatId: 3,
    },
  ];

  return (
    <div className='min-h-screen bg-gray-100'>
      <header className='bg-gray-800 text-white p-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>WorkSphere</h1>
        <div className='flex gap-4'>
          <Button onClick={() => navigate('/dashboard')} className='bg-blue-500'>
            Dashboard
          </Button>
          <Button onClick={() => navigate('/')} className='bg-red-500'>
            Logout
          </Button>
        </div>
      </header>

      <h1 className='text-3xl font-bold text-center mt-6 text-gray-800 underline'>
        Inbox
      </h1>

      <main className='max-w-6xl mx-auto p-6 mt-6'>
        <div className='space-y-6'>
          {messages.map((msg, index) => (
            <Card key={index}>
              <CardContent>
                <h2 className='text-xl font-bold text-blue-600'>{msg.sender}</h2>
                <p className='text-gray-600'>{msg.message}</p>
                <p className='text-gray-500 text-sm'>{msg.time}</p>
                <Button
                  onClick={() => navigate(`/chat/${msg.chatId}`)}
                  className='bg-blue-500 mt-4'
                >
                  Open Chat
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className='bg-gray-800 text-white p-6 text-center w-full mt-10'>
        <p className='text-base'>WorkSphere 2023. All rights reserved.</p>
        <h2 className='text-sm'>Ziion Technology, Mohali</h2>
      </footer>
    </div>
  );
};

export default InboxPage;