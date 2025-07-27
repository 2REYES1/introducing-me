import './ProjectsPage.css';
import React, { useState, useEffect } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import {getProjects} from '../../firebase.js';
import FadeInSection from '../FadeInSection/FadeInSection.js';


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
      <FadeInSection>
        <p className="text-7xl md:text-8xl lg:text-9xl text-[#C9E843] font-bold py-3 font-Bebas">PROJECT SHOWCASE</p>
        {projects.length === 0 ?(
                <p>No projects found.</p>
              ) : (
                <div className="grid grid-cols-1 w-full md:grid-cols-2 md:gap-4 max-w-6xl md:mx-auto md:px-4">
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
              )}
            
      </FadeInSection>


      
     
           
    </div>
  );
}

export default ProjectsPage;
