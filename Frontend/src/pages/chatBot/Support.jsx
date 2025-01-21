// src/components/SupportChat.js

import React, { useState } from 'react';
import { IconButton, Box, TextField, Button, Paper, Typography, Avatar } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const SupportChat = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { user: 'Support', message: 'Hello! How can I help you today?', avatar: 'support-avatar-url' },
    { user: 'You', message: 'I need some assistance with my account.', avatar: 'your-avatar-url' },
    { user: 'Support', message: 'Sure, I am here to help. What seems to be the issue?', avatar: 'support-avatar-url' },
  ]);

  const handleIconClick = () => {
    setOpen(!open);
  };

  const handleMessageSend = () => {
    if (message.trim()) {
      setChatHistory([...chatHistory, { user: 'You', message, avatar: 'your-avatar-url' }]);
      setMessage('');
    }
  };

  return (
    <div>
      <IconButton
        onClick={handleIconClick}
        style={{ position: 'fixed', bottom: 20, right: 20, backgroundColor: '#007bff', color: 'white', zIndex: 1000 }}
      >
        <ChatIcon />
      </IconButton>
      {open && (
        <Paper
          style={{
            position: 'fixed',
            bottom: 80,
            right: 20,
            width: 300,
            maxHeight: 400,
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            animation: 'slideUp 0.5s ease-in-out',
            zIndex: 1000
          }}
        >
          <Box
            style={{
              padding: 10,
              backgroundColor: '#007bff',
              color: 'white',
              textAlign: 'center',
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4
            }}
          >
            <Typography variant="h6"><SupportAgentIcon/> Support Chat</Typography>
          </Box>
          <Box
            style={{
              flexGrow: 1,
              padding: 10,
              overflowY: 'auto',
              backgroundColor: '#f1f1f1',
            }}
          >
            {chatHistory.map((chat, index) => (
              <Box key={index} display="flex" alignItems="flex-start" mb={2}>
                <Avatar src={chat.avatar} alt={chat.user} style={{ marginRight: 10 }} />
                <Box>
                  <Typography variant="body2" style={{ fontWeight: 'bold' }}>{chat.user}</Typography>
                  <Typography variant="body1">{chat.message}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <Box
            style={{
              display: 'flex',
              padding: 10,
              borderTop: '1px solid #ccc',
              backgroundColor: 'white',
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message"
              style={{ marginRight: 5 }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleMessageSend}
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </Box>
        </Paper>
      )}
      <style>
        {`
          @keyframes slideUp {
            from {
              transform: translateY(100%);
            }
            to {
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default SupportChat;
