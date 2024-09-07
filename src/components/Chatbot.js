import React, { useState } from 'react';
import { Button, Form, Container, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChatSquareDots } from 'react-bootstrap-icons'; // Import chat icon

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! How can I assist you today?' }
  ]);
  const [userMessage, setUserMessage] = useState('');
  const [showChat, setShowChat] = useState(false);

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
    <>
      <Button
        variant="primary"
        className="position-fixed bottom-0 end-0 m-5 rounded-circle p-3"
        onClick={() => setShowChat(true)}
        style={{
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
          backgroundColor: '#007bff',
          border: 'none',
          zIndex: 1050, // Ensure it stays on top
        }}
      >
        <ChatSquareDots size={24} color="white" />
      </Button>
      <Offcanvas
        show={showChat}
        onHide={() => setShowChat(false)}
        placement="end"
        style={{
          width: '350px',
          height: '500px',
          marginRight: '20px', // Ensure it doesn’t touch the edge of the screen
          marginBottom: '20px', // Ensure it doesn’t touch the bottom of the screen
          borderRadius: '15px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        }}
        className="rounded-3"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Chatbot</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column">
          <div
            className="chat-window flex-grow-1 overflow-auto"
            style={{
              backgroundColor: '#f8f9fa',
              padding: '10px',
              borderRadius: '10px',
              marginBottom: '10px', // Ensure spacing above input
            }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={msg.sender === 'bot' ? 'bot-message p-2 mb-2 bg-light rounded' : 'user-message p-2 mb-2 bg-primary text-white rounded'}
                style={{
                  alignSelf: msg.sender === 'bot' ? 'flex-start' : 'flex-end',
                  maxWidth: '70%',
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <Form.Group className="mt-auto">
            <Form.Control
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Type your message..."
              style={{
                borderRadius: '20px',
                border: '1px solid #ced4da',
              }}
            />
            <Button
              variant="primary"
              onClick={handleSend}
              className="mt-2 w-100"
              style={{ borderRadius: '20px' }}
            >
              Send
            </Button>
          </Form.Group>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Chatbot;
