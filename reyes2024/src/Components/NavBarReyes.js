import "./NavBarReyes.css";
import * as React from "react";

function NavBarReyes() {
  return(
    <nav class="navbar fixed-top navbar-light bg-light">
      <div class="container-fluid justify-content-center">
        <a class="navbar-brand roboto-mono" href="#greeting-page">
          greeting
        </a>
        <a class="navbar-brand roboto-mono" href="#about-me-page">
          alyssa
        </a>
      </div>
    </nav>
  )
}

export default NavBarReyes;
