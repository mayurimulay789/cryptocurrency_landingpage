// Chatbot.jsx
import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Prefilled questions and answers
  const prefilledQA = [
    { question: 'What is your service about?', answer: 'Our service is about providing secure transactions and investment options in cryptocurrency.' },
    { question: 'How do I connect my wallet?', answer: 'To connect your wallet, click on the Connect Wallet button at the top right of the page.' },
    { question: 'Can you explain the roadmap?', answer: 'Our roadmap outlines our future goals, including new features and expansions planned for the next year.' },
    { question: 'What are the benefits of using this service?', answer: 'The benefits include low transaction fees, high security, and access to exclusive features.' },
    { question: 'How can I contact support?', answer: 'You can contact support through our support page or email us directly at support@fincrypt.com.' },
  ];

  const handleSend = () => {
    if (input.trim()) {
      // Add user message
      setMessages([...messages, { sender: 'user', text: input }]);
      const answer = prefilledQA.find(item => item.question === input) 
        ? prefilledQA.find(item => item.question === input).answer 
        : 'Sorry, I did not understand that.';
      
      setInput('');

      // Simulate a response from the bot
      setTimeout(() => {
        setMessages(prevMessages => [
          ...prevMessages,
          { sender: 'bot', text: answer },
        ]);
      }, 1000);
    }
  };

  const handlePrefill = (question) => {
    setInput(question);
  };

  return (
    <div className="fixed p-4 bg-white rounded-lg shadow-lg bottom-4 right-4 w-80">
      <h2 className="text-lg font-bold">Chatbot</h2>
      <div className="h-64 p-2 mb-2 overflow-y-auto border border-gray-300">
        {messages.map((msg, index) => (
          <div key={index} className={`my-1 ${msg.sender === 'bot' ? 'text-blue-500' : 'text-black'}`}>
            <strong>{msg.sender === 'bot' ? 'Bot' : 'You'}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="mb-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 mt-2 text-white bg-teal-500 rounded"
        >
          Send
        </button>
      </div>
      <div className="grid grid-cols-2 gap-1">
        {prefilledQA.map((item, index) => (
          <button
            key={index}
            onClick={() => handlePrefill(item.question)}
            className="p-1 border border-gray-300 rounded hover:bg-teal-100"
          >
            {item.question}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Chatbot;
