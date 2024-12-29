import React, { useState, ChangeEvent } from 'react';

const UseStateHookExample: React.FC = () => {
  const [username, setUsername] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <h2>UseState Hook Example (TypeScript)</h2>
      <label htmlFor="usernameInput">Enter Username: </label>
      <input
        type="text"
        id="usernameInput"
        value={username}
        onChange={handleInputChange}
        placeholder="Type your username here"
      />
      <p>Username: {username}</p>
    </div>
  );
};

export default UseStateHookExample;
