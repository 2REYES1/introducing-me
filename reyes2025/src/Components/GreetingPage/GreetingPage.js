import './GreetingPage.css';
import * as React from 'react';
import EmailMeButton from '../EmailMeButton/EmailMeButton';

function GreetingPage() {
  return (
    <div id="greeting-page" className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="text-center">
        <p className="font-nanum-pen font-semibold text-black-4xl md:text-5xl lg-text-7xl mb-4">
          Hello, I'm{' '}
          <span className="font-nanum-pen relative inline-block">
           Alyssa Reyes
          </span>
        </p>
        <p className="font-roboto-mono italic text-sm md:text-base lg:text-lg mb-4 md:mb-6 max-w-lg md:max-w-2xl mx-auto">
          a uc irvine computer science graduate who loves the endless knowledge that comes with tech
        </p>

      </div>

    </div>
  );
}

export default GreetingPage;
