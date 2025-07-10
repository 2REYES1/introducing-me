import './MyNavBar.css';

function MyNavBar(props){
    return(
        <nav className="fixed top-0 left-0 right-0 bg-gray-800 text-white py-4 shadow-lg">
          <div className="container mx-auto flex justify-center items-center space-x-8">
            <a className="font-mono text-lg uppercase tracking-wide hover:text-blue-300 tranistion duration-300 ease-in-out" href={props.greetingHref}>
              Greeting
            </a>

            <a className="font-mono text-lg uppercase tracking-wide hover:text-blue-300 tranistion duration-300 ease-in-out" href={props.greetingHref}>
              Alyssa
            </a>

            <a className="font-mono text-lg uppercase tracking-wide hover:text-blue-300 tranistion duration-300 ease-in-out" href={props.greetingHref}>
              Projects
            </a>
          </div>
        </nav>
    );
}

export default MyNavBar;
