import './GreetingPage.css';
import * as React from 'react';
import EmailMeButton from '../EmailMeButton/EmailMeButton';

function GreetingPage() {
  return (
    <div className="container main-wrapper-gp" id="greeting-page">
      <div className="row h-100 align-items-center justify-content-center">
        <div className="flex-column-xs-12 justify-content-center text-center">
          <h1 className="nanum-pen-gp nanum-headers-gp">Hello, I'm Alyssa!</h1>
          <p className="roboto-mono-gp roboto-body-text-gp">a uc irvine computer science student who loves the endless knowledge that comes with tech</p>
          <EmailMeButton />
        </div>
      </div>
    </div>
  );
}

export default GreetingPage;