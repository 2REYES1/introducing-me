import './MyNavBar.css';
import {Github, Linkedin, FileText} from 'lucide-react';

function MyNavBar(props){
    const{
      githubLink ="https://github.com/2REYES1",
      linkedInLink="https://www.linkedin.com/in/alyssalareyes/",
      resumeLink="./Alyssa_Reyes-ResumeCS.pdf"
    } = props;

    return(
        <nav className="fixed top-0 left-0 right-0 bg-black text-white py-2 shadow-lg">
          <div className="container mx-auto flex flex-row justify-center items-center space-x-4 font-mono text-sm">
            <div className="absolute flex flex-row justify-start w-full pl-4 space-x-2"> 
              <a href={linkedInLink} target="_blank" rel="noopener noreferrerr" aria-label="Alyssa's LinkedIn">
                <Linkedin size={20}/>
              </a>
              <a href={resumeLink} target="_blank" rel="noopener noreferrerr" aria-label="Alyssa's Resume">
                <FileText size={20}/>
              </a>
              <a href={githubLink}target="_blank" rel="noopener noreferrerr" aria-label="Alyssa's Github">
                <Github size={20}/>
              </a>
            </div>
            
            <a className="z-50" href={props.aboutHref}>
              ALYSSA
            </a>

            <a className="z-50" href={props.projectsHref}>
              PROJECTS
            </a>
          </div>
        </nav>
    );
}

export default MyNavBar;
