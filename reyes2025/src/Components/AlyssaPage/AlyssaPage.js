import './AlyssaPage.css';
import React from 'react';
import AlyssaPicture from './imgs/ally.JPG';
import FadeInSection from '../FadeInSection/FadeInSection.js';
import {motion} from 'framer-motion';




function AlyssaPage() {
  return (
    <div id="alyssa-page" className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white">
      <div className="flex flex-col md:flex md:flex-row md:m-4 md:space-x-4 items-center justify-center p-2 max-w-7xl">
        <motion.img 
        whileInView={{ opacity: 1}}
        initial={{ opacity: 0}}
        transition={{duration: 0.6}}
        src={AlyssaPicture} alt="Alyssa Reyes" className="object-cover w-[250px] h-[250px] sm:w-[400px] sm:h-[250px] md:w-[300px] md:h-[400px] lg:w-[500px] lg:h-[600px]"/>
        <div className="flex flex-col justify-center text-center sm:text-center md:text-left p-4 font-mono">
          <p className="text-7xl text-left font-bold lg:text-9xl text-[#C9E843] font-Bebas">ABOUT ME</p>
          <p className="text-sm md:text-base text-left italic">uc irvine computer science co '25</p>
          <p className="text-sm md:text-base mb-[2rem] text-left italic">she/her</p>
          
          <div className="text-sm space-y-2">
            <motion.div 
              whileInView={{ opacity: 1, x: 0}}
              initial={{ opacity: 0, x: -50}}
              transition={{duration: 0.6}}
              className="text-[#82C3FF]">
              <p className="font-bold text-left sm:text-left italic text-lg lg:text-xl font-Inter">INTERESTS:</p>
              <p className="text-right md:text-base lg:ml-[10rem]">front-end web development, full-stack web development, machine learning, ui/ux design, game development, game design, data science</p>              
            </motion.div>
            <motion.div  
              whileInView={{ opacity: 1, x: 0}}
              initial={{ opacity: 0, x: -50}}
              transition={{duration: 0.6,}}
              className="text-[#A477FF]">
              <p className="font-bold text-left sm:text-left italic text-lg lg:text-xl font-Inter">HOBBIES:</p>
              <p className="text-right md:text-base lg:ml-[10rem]">basketball, volleyball, photography, filmmaking, video editing, video games</p>              
            </motion.div >
          </div>
          
          
        </div>

      </div>
    </div>
  );
}

export default AlyssaPage;
