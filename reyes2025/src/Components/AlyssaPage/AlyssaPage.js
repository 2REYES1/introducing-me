import './AlyssaPage.css';
import React from 'react';
import AlyssaPicture from './imgs/ally.JPG';




function AlyssaPage() {
  return (
    <div id="alyssa-page" className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="flex flex-row">
        <img src={AlyssaPicture} className="img-fluid img-responsive w-[300px]"/>
        <div className="flex flex-col justify-center text-left p-4 font-mono">
          <p className="text-7xl font-bold">ABOUT ME</p>
          <p className="text-lg">uc irvine computer science co '25</p>
          <div className="text-base">
            <p className="font-bold italic">INTERESTS:</p>
            <p>front-end web development, full-stack web development, machine learning, ui/ux design, game development, game design, data science</p>

            <p className="font-bold italic">HOBBIES:</p>
            <p>basketball, volleyball, photography, filmmaking, video editing, video games</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AlyssaPage;
