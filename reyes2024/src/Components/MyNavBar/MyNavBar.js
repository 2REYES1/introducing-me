import './MyNavBar.css';

function MyNavBar({ greetingHref, aboutHref }){
    return(

        <nav class="navbar fixed-top navbar-light bg-light">
        <div class="container-fluid justify-content-center">
          <a class="navbar-brand roboto-mono-mnb" href={greetingHref}>greeting</a>
          <a class="navbar-brand roboto-mono-mnb" href={aboutHref}>alyssa</a>
        </div>
      </nav>

    );
}

export default MyNavBar;