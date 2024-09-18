import './GreetingPage.css';
import * as React from 'react';
import EmailMeButton from '../EmailMeButton/EmailMeButton';

function GreetingPage() {
  return (
    <div className="container main-wrapper-gp d-flex justify-content-center align-items-center" id="greeting-page">
      <div className="text-center">
        <p className="nanum-pen-gp nanum-headers-gp">Hello, I'm Alyssa!</p>
        <p className="roboto-mono-gp roboto-body-text-gp">a UC Irvine computer science student who loves the endless knowledge that comes with tech</p>
        <EmailMeButton />
      </div>
    </div>
  );
}

export default GreetingPage;
