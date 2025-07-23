import './ProjectsPage.css';
import React, { useState, useEffect } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import {getProjects} from '../../firebase.js';


function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedProjects = await getProjects();
        setProjects(fetchedProjects);
      } catch (err) {
        console.error("Error fetching projects: ", err);
        setError(err.message || "Failed to load projects.");
      } finally {
        setLoading(false);
      }
    };
    fetchAllProjects();
  }, [])

  return (
    <div id="projects-page" className="flex flex-col items-center justify-center min-h-screen w-full p-4 bg-black text-white">
      <p className="text-3xl sm:text-4xl md:text-6xl text-[#C9E843] font-bold py-10">PROJECT SHOWCASE</p>
      {projects.map((project) => (
        <ProjectCard
        key={project.id}
        projectTitle={project.projectTitle}
        projectSponsor={project.projectSponsor}
        projectDate={project.projectDate}
        projectInfo={project.projectInfo}
        projectLink={project.projectLink}
        projectTools={project.projectTools}
      >
      </ProjectCard>
      ))}
     
           
    </div>
  );
}

export default ProjectsPage;
