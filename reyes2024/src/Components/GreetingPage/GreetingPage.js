import './GreetingPage.css';
import * as React from 'react';

function GreetingPage(){
  return(
    <div class="container main-wrapper-gp" id="greeting-page">

      <div class="row h-100 align-items-center justify-content-center">
        <div class="flex-column-xs-12 justify-content-center text-center">
          <h1 class="nanum-pen-gp">Hello, I'm Alyssa!</h1>
          <p class="roboto-mono-gp">a uc irvine computer science student who loves the endless knowledge that comes with tech</p>
          <button href="mailto:alyssalareyes@gmail.com" class="nanum-pen">Contact Me</button>
        </div>

      </div>
    </div>
  )
}

export default GreetingPage;