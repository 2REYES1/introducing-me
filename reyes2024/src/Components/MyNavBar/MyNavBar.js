import './MyNavBar.css';

function MyNavBar(props){
    return(

        <nav class="navbar fixed-top navbar-light bg-light">
        <div class="container-fluid justify-content-center">
          <a class="navbar-brand roboto-mono-mnb" href={props.greetingHref}>greeting</a>
          <a class="navbar-brand roboto-mono-mnb" href={props.aboutHref}>alyssa</a>
        </div>
      </nav>

    );
}

export default MyNavBar;