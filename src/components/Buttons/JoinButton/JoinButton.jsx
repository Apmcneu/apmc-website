import React from 'react';
import "./styles.css";

const JoinButton = ({children}) => {
  const redirectToGoogleForm = () => {
    window.location.href = 'https://forms.office.com/pages/responsepage.aspx?id=gcLuqKOqrk2sm5o5i5IV5y2eU7UxhlxLtYNLUzoz85RUOEpZU04yQjBDTE5ENFJQWFVIWlE3WUY3VS4u';
  };

  return (
    <button className="join-button" onClick={redirectToGoogleForm}>
        {children}
  </button>
  );
};

export default JoinButton;