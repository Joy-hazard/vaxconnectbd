import React, { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! How can I assist you today?' }
  ]);
  const [userMessage, setUserMessage] = useState('');

  const handleSend = () => {
    const newMessages = [...messages, { sender: 'user', text: userMessage }];
    setMessages(newMessages);

    setTimeout(() => {
      const botResponse = getBotResponse(userMessage);
      setMessages([...newMessages, { sender: 'bot', text: botResponse }]);
    }, 1000);
    setUserMessage('');
  };

  const getBotResponse = (message) => {
    if (message.toLowerCase().includes('vaccine')) {
      return 'You can apply for vaccines by navigating to the "Apply for Vaccine" page.';
    } else {
      return "I'm here to assist you with vaccination-related information.";
    }
  };

  return (
    <Container className="chatbot-container mt-4">
      <div className="chat-window">
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.sender === 'bot' ? 'bot-message' : 'user-message'}>
            {msg.text}
          </div>
        ))}
      </div>
      <Form.Group>
        <Form.Control
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Type your message..."
        />
      </Form.Group>
      <Button variant="primary" onClick={handleSend}>
        Send
      </Button>
    </Container>
  );
};

export default Chatbot;
