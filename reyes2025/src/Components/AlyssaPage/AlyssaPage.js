import './AlyssaPage.css';
import React from 'react';
import AlyssaPicture from './imgs/ally.JPG';




function AlyssaPage() {
  return (
    <div id="alyssa-page" className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="flex flex-col md:flex md:flex-row md:m-4 md:space-x-4 items-center justify-center">
        <img src={AlyssaPicture} alt="Alyssa Reyes" className="object-cover w-[400px] h-[250px] sm:w-[400px] sm:h-[250px] md:w-[300px] md:h-[400px] lg:w-[500px] lg:h-[600px]"/>
        <div className="flex flex-col justify-center text-center sm:text-center md:text-left p-4 font-mono">
          <p className="text-4xl text-center font-bold sm:text-left lg:text-7xl">ABOUT ME</p>
          <p className="text-md text-left italic">uc irvine computer science co '25</p>
          <p className="text-md mb-[2rem] text-left italic">she/her</p>
          <div className="text-md space-y-2">
            <div>
              <p className="font-bold text-left sm:text-left italic">INTERESTS:</p>
              <p className="text-right lg:ml-[10rem]">front-end web development, full-stack web development, machine learning, ui/ux design, game development, game design, data science</p>              
            </div>
            <div>
              <p className="font-bold text-left sm:text-left italic">HOBBIES:</p>
              <p className="text-right lg:ml-[10rem]">basketball, volleyball, photography, filmmaking, video editing, video games</p>              
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AlyssaPage;
