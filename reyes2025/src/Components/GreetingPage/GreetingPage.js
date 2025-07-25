import './GreetingPage.css';
import * as React from 'react';
import EmailMeButton from '../EmailMeButton/EmailMeButton';

function GreetingPage() {
  return (
    <div id="greeting-page" className="flex flex-col w-full items-center justify-center min-h-screen bg-black text-white ">
      <div className="flex flex-col items-center justify-center p-4">
        <div className="text-left w-full">
          <p className="text-lg md:text-2xl font-Inter">
            hello, i'm
          </p>
        </div>
        <div className="text-center">
          <p className="text-7xl font-bold md:text-9xl lg:text-[170px] text-[#C9E843] font-Bebas">
            ALYSSA REYES
          </p>
          <p className="text-sm md:text-base italic font-mono">
            a uc irvine computer science graduate who loves the endless knowledge that comes with tech
          </p>
        </div> 
      </div>
    </div>
  );
}

export default GreetingPage;
