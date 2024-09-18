import './AlyssaPage.css';
import React from 'react';
import AlyssaPicture from './imgs/ally.JPG';




function AlyssaPage() {
  return (
    <div className="container main-wrapper-ap" id="alyssa-page">


      <div className="row h-100 align-items-center justify-content-center">
      
      <div className="row align-items-center justify-content-center">

        <div className="col-md-3 justify-content-center text-center p-0 m-3">
          <h3 className="nanum-pen-ap nanum-headers-ap">ALYSSA REYES</h3>
          <img src={AlyssaPicture} className="img-fluid rounded img-responsive" alt="Alyssa Reyes headshot" />
          {/* Social media icons */}
          <div className="social-icons mt-2">
            {/* LinkedIn Icon */}
            <a href="https://www.linkedin.com/in/alyssalareyes" target="_blank" rel="noopener noreferrer" className="m-2">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            {/* GitHub Icon */}
            <a href="https://github.com/2REYES1" target="_blank" rel="noopener noreferrer" className="m-2">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
        </div>

        <div className="col-sm justify-content-center text-left p-0 m-0">
          <p className="roboto-mono-ap roboto-headers-ap m-0">INTERESTS</p>
          <p className="roboto-mono-ap roboto-body-text-ap">
            front-end web development, full-stack web development, ui/ux design, game development, game design, artificial intelligence.
          </p>
        </div>

        <div className="col-sm justify-content-center text-left p-0 m-0">
          <h3 className="roboto-mono-ap roboto-headers-ap m-0">ABOUT</h3>
          <p className="roboto-mono-ap roboto-body-text-ap">
            21 | she/her | entp-a
            <br />
            CS student at UC Irvine. From the Bay Area. Loves chocolate.
          </p>
          <h3 className="roboto-mono-ap roboto-headers-ap m-0">HOBBIES</h3>
          <p className="roboto-mono-ap roboto-body-text-ap">
            basketball, volleyball, photography, videography, video editing, valorant, call of duty, pokemon.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default AlyssaPage;
