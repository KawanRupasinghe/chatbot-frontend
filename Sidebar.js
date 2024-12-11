import React from 'react';

const Sidebar = ({ chats, onSwitchChat, onStartNewChat }) => {
  return (
    <div className="sidebar">
      <h3>Chats</h3>
      <button onClick={onStartNewChat}>New Chat</button>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id} onClick={() => onSwitchChat(chat.id)}>
            Chat {chat.id + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
