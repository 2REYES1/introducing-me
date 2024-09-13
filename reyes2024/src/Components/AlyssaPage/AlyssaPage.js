import './AlyssaPage.css';
import * as React from 'react';
import AlyssaPicture from './imgs/ally.JPG';

function AlyssaPage(){
  return(
    <div class="container main-wrapper-ap" id="about-me-page">
      <div class="row h-100 align-items-center justify-content-center">
        <div class="col-md-4 justify-content-center text-center">
          <h3 class="nanum-pen-ap">ALYSSA REYES</h3>
          <img src={AlyssaPicture} class="img-fluid rounded" alt="Alyssa Reyes headshot"/>
          <a href="REYES-RESUME.pdf" download="REYES-RESUME" class="roboto-mono-ap">RESUME</a>
          <a href="https://github.com/2REYES1" class="roboto-mono-ap">GITHUB</a>
        </div>
        <div class="col-md-4 justify-content-center text-left">
          <h3 class="roboto-mono-ap">INTERESTS</h3>
          <p class="roboto-mono-ap">front-end web development, full-stack web development, ui/ux design, game development, game design, artificial intelligence.</p>
        </div>
        <div class="col-md-4 justify-content-center text-left">
          <h3 class="roboto-mono-ap">ABOUT</h3>
          <p class="roboto-mono-ap">21 | she/her | entp-a<br />cs student at UC Irvine. from the Bay Area. loves chocolate.</p>
          <h3 class="roboto-mono-ap">HOBBIES</h3>
          <p class="roboto-mono-ap">basketball, volleyball, photography, videography, video editing, valorant, call of duty, pokemon.</p>
        </div>

      </div>
    </div>
  )
}

export default AlyssaPage;