import './GreetingPage.css';
import * as React from 'react';
import EmailMeButton from '../EmailMeButton/EmailMeButton';

function GreetingPage() {
  return (
    <div id="greeting-page" className="flex flex-col w-full items-center justify-center min-h-screen bg-black text-white">
      <div className="flex flex-col items-center justify-center p-4">
        <div className="text-left font-mono w-full">
          <p className="text-sm">
            hello, i'm
          </p>
        </div>
        <div className="text-center font-mono">
          <p className="text-5xl font-bold mb-2 md:text-7xl text-[#C9E843]">
            ALYSSA REYES
          </p>
          <p className="text-sm italic">
            a uc irvine computer science graduate who loves the endless knowledge that comes with tech
          </p>
        </div> 
      </div>
    </div>
  );
}

export default GreetingPage;
