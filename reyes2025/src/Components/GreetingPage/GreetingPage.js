import './GreetingPage.css';
import * as React from 'react';
import EmailMeButton from '../EmailMeButton/EmailMeButton';
import FadeInSection from '../FadeInSection/FadeInSection.js';
import {motion, spring} from 'framer-motion';
import {useTypewriter, Cursor} from 'react-simple-typewriter';

function GreetingPage() {
  const [text] = useTypewriter({
    words: ['a uc irvine computer science graduate who loves the endless knowledge that comes with tech'],
    loop: 1,
    typespeed: 200
    
  })
  return (
    <div id="greeting-page" className="flex flex-col w-full items-center justify-center min-h-screen bg-black text-white ">
      <div className="flex flex-col items-center justify-center p-4">

        <div className="text-left w-full">
          <p className="text-lg md:text-2xl font-Inter">
            hello, i'm
          </p>
        
        </div>

        <div className="text-center">
          <motion.p drag dragSnapToOrigin
            initial={{ opacity: 0, scale: 1.2}}
            whileInView={{ opacity: 1, scale: 1}}
            whileHover={{scale: 0.9}}
            transition={{
              type: spring,
              stiffness: 75,
              damping: 7,
              mass: 1
            }}
            className="text-7xl font-bold md:text-9xl lg:text-[170px] text-[#C9E843] font-Bebas">
            ALYSSA REYES
          </motion.p>   

          <p className="text-sm md:text-base italic font-mono">
            {text}<Cursor/>
          </p>
          
            
            
        </div> 

      </div>
    </div>
  );
}

export default GreetingPage;
