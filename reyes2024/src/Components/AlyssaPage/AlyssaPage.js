import './AlyssaPage.css';
import React from 'react';
import AlyssaPicture from './imgs/ally.JPG';




function AlyssaPage() {
  return (
    <div className="container main-wrapper-ap" id="alyssa-page">


      <div className="row g-0 h-100 align-items-center justify-content-center">

        <div className="col-md-3 justify-content-center text-center p-0 m-0">
          <h3 className="nanum-pen-ap nanum-headers-ap">ALYSSA REYES</h3>
          <img src={AlyssaPicture} className="img-fluid rounded img-responsive" alt="Alyssa Reyes headshot" />
          {/* <a href="REYES-RESUME.pdf" download="REYES-RESUME" className="roboto-mono-ap m-2">RESUME</a>
          <a href="https://github.com/2REYES1" className="roboto-mono-ap m-2 ">GITHUB</a> */}
        </div>

        <div className="col-sm justify-content-center text-left">

          <p className="roboto-mono-ap roboto-headers-ap">INTERESTS</p>
          <p className="roboto-mono-ap roboto-body-text-ap">
            front-end web development, full-stack web development, ui/ux design, game development, game design, artificial intelligence.
          </p>
        </div>

        <div className="col-sm justify-content-center text-left">
          <h3 className="roboto-mono-ap roboto-headers-ap">ABOUT</h3>
          <p className="roboto-mono-ap roboto-body-text-ap">
            21 | she/her | entp-a
            <br />
            CS student at UC Irvine. From the Bay Area. Loves chocolate.
          </p>
          <h3 className="roboto-mono-ap roboto-headers-ap">HOBBIES</h3>
          <p className="roboto-mono-ap roboto-body-text-ap">
            basketball, volleyball, photography, videography, video editing, valorant, call of duty, pokemon.
          </p>
        </div>

      </div>
    </div>
  );
}

export default AlyssaPage;
