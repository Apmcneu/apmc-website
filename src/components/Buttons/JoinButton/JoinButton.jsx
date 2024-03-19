import React from 'react';
import "./styles.css";

const JoinButton = ({children}) => {
  return (
    <button className="join-button">
        {children}
  </button>
  );
};

export default JoinButton;