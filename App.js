import React, { useEffect, useState } from 'react';
import './App.css';
import ChatWindow from './components/ChatWindow';
import Profile from './components/Profile'; // Import Profile
import Sidebar from './components/Sidebar';

const App = () => {
  const [currentChatId, setCurrentChatId] = useState(null);
  const [chats, setChats] = useState([]);
  const [isProfileVisible, setIsProfileVisible] = useState(false);  // State for profile visibility

  // Initialize the chat on first load with only the bot's welcome message
  useEffect(() => {
    const initialChat = { id: 0, messages: [{ sender: 'bot', text: 'Welcome! How can I assist you today?' }] };
    setChats([initialChat]);
    setCurrentChatId(0);
  }, []);

  const handleSendMessage = (userInput) => {
    if (userInput.trim()) {
      const newMessage = { sender: 'user', text: userInput.trim() };
      const updatedChats = [...chats];
      
      if (currentChatId !== null) {
        updatedChats[currentChatId].messages.push(newMessage);  // Add user message
        
        // Simulate bot response
        const botResponse = { sender: 'bot', text: `You said: "${userInput.trim()}"` };
        updatedChats[currentChatId].messages.push(botResponse);  // Add bot response
      }
      
      setChats(updatedChats);
    }
  };

  const handleStartNewChat = () => {
    // Start a new chat with only the bot's welcome message (no user's first message)
    const newChat = { id: chats.length, messages: [{ sender: 'bot', text: 'Welcome! How can I assist you today?' }] };
    setChats((prevChats) => [...prevChats, newChat]);
    setCurrentChatId(newChat.id);
  };

  const handleSwitchChat = (chatId) => {
    setCurrentChatId(chatId);
  };

  const handleProfileClick = () => {
    setIsProfileVisible(!isProfileVisible);  // Toggle profile visibility
  };

  // Dummy user data
  const user = {
    name: 'Chat User',
    email: 'chatuser@example.com',
    avatar: 'https://www.w3schools.com/w3images/avatar2.png',  // Example avatar URL
  };

  return (
    <div className="app">
      <Sidebar
        chats={chats}
        onSwitchChat={handleSwitchChat}
        onStartNewChat={handleStartNewChat}
      />
      <ChatWindow
        messages={currentChatId !== null ? chats[currentChatId].messages : []}
        onSendMessage={handleSendMessage}
      />
      <button className="profile-button" onClick={handleProfileClick}>
        <img src={user.avatar} alt="Profile Avatar" />
      </button>
      {isProfileVisible && <Profile user={user} onClose={handleProfileClick} />}
    </div>
  );
};

export default App;
