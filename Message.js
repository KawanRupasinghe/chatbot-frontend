import React from 'react';

const Message = ({ sender, text }) => {
  const messageClass = sender === 'user' ? 'user-message' : 'bot-message';
  return (
    <div className={`message ${messageClass}`}>
      <div className="message-content">{text}</div>
    </div>
  );
};

export default Message;
