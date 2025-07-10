import './MyNavBar.css';

function MyNavBar(props){
    return(
        <nav className="fixed top-0 left-0 right-0 bg-black text-white py-2 shadow-lg">
          <div className="container mx-auto flex justify-center items-center space-x-8 font-mono text-sm">
            <a className="" href={props.greetingHref}>
              GREETING
            </a>

            <a className="" href={props.aboutHref}>
              ALYSSA
            </a>

            <a className="" href={props.projectsHref}>
              PROJECTS
            </a>
          </div>
        </nav>
    );
}

export default MyNavBar;
