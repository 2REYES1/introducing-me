import './ProjectsPage.css';
import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

function ProjectsPage() {
  return (
    <div id="projects-page" className="flex flex-col items-center justify-center min-h-screen p-4">
      <p className="text-4xl font-bold py-10">PROJECT SHOWCASE</p>
      <ProjectCard
        projectTitle="Project 1 superlong title number"
        projectDate="jan 2025-present"
      >
      </ProjectCard>
      
    </div>
  );
}

export default ProjectsPage;
