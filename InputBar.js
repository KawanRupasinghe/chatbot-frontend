import React, { useState } from 'react';

const InputBar = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSendClick = () => {
    onSendMessage(inputValue);
    setInputValue('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendClick();
    }
  };

  return (
    <div className="input-bar">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type your message..."
      />
      <button onClick={handleSendClick}>Send</button>
    </div>
  );
};

export default InputBar;
