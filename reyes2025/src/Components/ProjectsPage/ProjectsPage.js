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
        projectInfo={[
          "Designed and implemented UI for game menus, HUDs, and in-game interfaces using C# and Figma, optimizing player engagement and experience",
          "Conducted monthly user testing and gathered feedback to refine the user interface",
          "Contributed to the successful launch of multiple games on itch.io",
          "Conducted monthly user testing and gathered feedback to refine the user interface",
          "Contributed to the successful launch of multiple games on itch.io",
          "Conducted monthly user testing and gathered feedback to refine the user interface",
          "Contributed to the successful launch of multiple games on itch.io",
          "Conducted monthly user testing and gathered feedback to refine the user interface",
          "Contributed to the successful launch of multiple games on itch.io"
        ]}
      >
      </ProjectCard>
      <ProjectCard
        projectTitle="Project 1 superlong title number"
        projectDate="jan 2025-present"
        projectInfo={[
          "Designed and implemented UI for game menus, HUDs, and in-game interfaces using C# and Figma, optimizing player engagement and experience",
          "Conducted monthly user testing and gathered feedback to refine the user interface",
          "Contributed to the successful launch of multiple games on itch.io",
          "Conducted monthly user testing and gathered feedback to refine the user interface",
          "Contributed to the successful launch of multiple games on itch.io",
          "Conducted monthly user testing and gathered feedback to refine the user interface",
          "Contributed to the successful launch of multiple games on itch.io",
          "Conducted monthly user testing and gathered feedback to refine the user interface",
          "Contributed to the successful launch of multiple games on itch.io"
        ]}
      >
      </ProjectCard>
           
    </div>
  );
}

export default ProjectsPage;
