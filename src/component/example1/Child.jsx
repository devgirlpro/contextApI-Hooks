import React from 'react';
import GrandChild from './GrandChild';

const component = ({setUsername}) => {
  return (
    <div>
      <div>Child Component</div>
      <GrandChild  />
    </div>
  );
};

export default component;
