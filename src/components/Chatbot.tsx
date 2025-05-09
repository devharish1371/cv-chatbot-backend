import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getChatResponse, getInitialMessage } from '../services/chatService';

interface Message {
  text: string;
  isUser: boolean;
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const initialMessage = getInitialMessage();
    setMessages([{ text: initialMessage, isUser: false }]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = { text: inputValue, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    try {
      const response = await getChatResponse(userMessage.text);
      setMessages(prev => [...prev, { text: response, isUser: false }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { text: 'Sorry, something went wrong. Please try again.', isUser: false }]);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="bg-white shadow-md p-4 flex items-center">
        <button 
          onClick={() => navigate('/')} 
          className="text-gray-600 hover:text-gray-900 mr-4"
        >
          ← Back
        </button>
        <h2 className="text-xl font-semibold text-gray-900">Chat with Me</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`max-w-[80%] rounded-lg p-4 ${
              message.isUser 
                ? 'bg-blue-500 text-white ml-auto' 
                : 'bg-white text-gray-900 shadow-md'
            }`}
          >
            {message.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md">
        <div className="flex space-x-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chatbot; 