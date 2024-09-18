import './MyNavBar.css';

function MyNavBar(props){
    return(
        <nav className="navbar custom-navbar fixed-top">
        <div className="container-fluid justify-content-center">
          <a className="navbar-brand roboto-mono-mnb" href={props.greetingHref}>greeting</a>
          <a className="navbar-brand roboto-mono-mnb" href={props.aboutHref}>alyssa</a>
          <a className="navbar-brand roboto-mono-mnb" href={props.projectsHref}>projects</a>
        </div>
      </nav>
    );
}

export default MyNavBar;
