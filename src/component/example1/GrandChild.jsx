import React, { useContext } from 'react';
import { ParentContext } from './Parent';

const GrandChild = () => {
  const { setUsername } = useContext(ParentContext);

  return (
    <div>
      <div>GrandChild Component</div>
      <button onClick={() => setUsername('Azadeh get fully success')}>
        change username
      </button>
    </div>
  );
};

export default GrandChild;
