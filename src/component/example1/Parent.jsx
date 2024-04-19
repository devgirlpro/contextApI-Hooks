import React, { useState, createContext } from 'react';
import Child from './Child';

export const ParentContext = createContext(null);
console.log(typeof ParentContext)

const Parent = () => {
  const [username, setUsername] = useState('');
  return (
    <ParentContext.Provider value={{username, setUsername}} >
      <div>
        <div>
          <label>username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <h2>{username}</h2>
        <Child  />
      </div>
    </ParentContext.Provider>
  );
};

export default Parent;
