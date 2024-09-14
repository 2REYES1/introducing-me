import './ProjectsPage.css';
import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

function ProjectsPage() {
  return (
    <div className='container main-wrapper-proj-page' id="projects-page">
      <div className='row justify-content-center nanum-pen-proj-page'>
        Project Showcase
      </div>

      <div className='row justify-content-center'>

        <div className='col-lg-3'>
          <ProjectCard 
            title="Project 1" 
            summary="a quick summary of this very cool project"
            infoList={["React", "JavaScript", "CSS", "Frontend Development"]} 
          />
        </div>

      </div>
    </div>
  );
}

export default ProjectsPage;
