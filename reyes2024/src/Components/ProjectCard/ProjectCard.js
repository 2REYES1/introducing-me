import './ProjectCard.css';

function ProjectCard(props) {
  return (
    
    <div className='row justify-content-center align-items-center'>
      <div className="col-sm-6 card align-items-center justify-content-center">
        <div className='roboto-mono-proj-card'>
          {props.projectTitle}
        </div>

        <button className='btn btn-primary roboto-mono-proj-card'>
          more info  
        </button>
          
        
      </div>
      <div className="col-sm-6 card align-items-center justify-content-center">
        <div className='roboto-mono-proj-card'>
          {props.summary}
        </div>
      </div>
    </div>
    
  );
}

export default ProjectCard;
