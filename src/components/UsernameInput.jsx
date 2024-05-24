// src/components/UsernameInput.jsx

import { useState } from 'react';

function UsernameInput() {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value.toLowerCase());
  };

  return (
    <div>
      <input type="text" value={username} onChange={handleUsernameChange} />
      <p>Username: {username}</p>
    </div>
  );
}

export default UsernameInput;
