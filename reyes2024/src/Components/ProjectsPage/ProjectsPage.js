import './ProjectsPage.css';
import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

function ProjectsPage() {
  return (
    <div className='container main-wrapper-proj-page' id="projects-page">
      <div className='row justify-content-center nanum-pen-proj-page'>
        Project Showcase
      </div>

      <div className='row justify-content-center align-items-center'>

        <div className='col-lg-12'>
          <div className='row justify-content-center align-items-center'>
            <ProjectCard 
              projectTitle="Snap & Safe" 
              summary="a medication and label idenitification website for people with accessibility challenges"
              moreInfo={["informationt1", "information2"]} 
              contributions={["this is my contribution", "this is my other contribution"]}
              languagesAndTools={["React, JavaScript, Figma, Google Gemini API"]}
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProjectsPage;
