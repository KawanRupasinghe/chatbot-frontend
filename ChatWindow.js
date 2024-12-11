import React from 'react';
import InputBar from './InputBar';
import MessageList from './MessageList';

const ChatWindow = ({ messages, onSendMessage }) => {
  return (
    <div className="chat-window">
      <div className="chat-header">MyChatBot</div>
      <MessageList messages={messages} />
      <InputBar onSendMessage={onSendMessage} />
    </div>
  );
};

export default ChatWindow;
