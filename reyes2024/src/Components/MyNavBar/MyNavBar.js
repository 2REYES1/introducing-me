import './MyNavBar.css';

function MyNavBar({ greetingHref, aboutHref }){
    return(

        <nav class="navbar fixed-top navbar-light bg-light">
        <div class="container-fluid justify-content-center">
          <a class="navbar-brand roboto-mono-mnb" href="#greeting-page">greeting</a>
          <a class="navbar-brand roboto-mono-mnb" href="#about-me-page">alyssa</a>
        </div>
      </nav>

    );
}

export default MyNavBar;