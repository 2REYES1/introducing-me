import './EmailMeButton.css';
import React from 'react';

function EmailMeButton() {
  const handleEmailClick = () => {
    window.location.href = "mailto:alyssalareyes@gmail.com";
  };

  return (
    <button className="btn roboto-mono-email-me roboto-body-text-email-me" onClick={handleEmailClick}>
      Contact Me
    </button>
  );
}

export default EmailMeButton;
