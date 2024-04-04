import React from 'react';
import "./styles.css";

const LearnMoreButton = ({children}) => {
  const redirectTo = () => {
    window.location.href = '/';
  };

  return (
    <button className="learn-more-button" onClick={redirectTo}>
        {children}
  </button>
  );
};

export default LearnMoreButton;