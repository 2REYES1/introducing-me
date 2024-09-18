import './MyNavBar.css';

function MyNavBar(props){
    return(

        <nav className="navbar fixed-top navbar-light bg-light">
        <div className="container-fluid justify-content-center">
          <a className="navbar-brand roboto-mono-mnb" href={props.greetingHref}>greeting</a>
          <a className="navbar-brand roboto-mono-mnb" href={props.aboutHref}>alyssa</a>
          <a className="navbar-brand roboto-mono-mnb" href={props.projectsHref}>projects</a>
        </div>
      </nav>

    );
}

export default MyNavBar;