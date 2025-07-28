import './ProjectsPage.css';
import React, { useState, useEffect } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import {getProjects} from '../../firebase.js';
import FadeInSection from '../FadeInSection/FadeInSection.js';
import {motion} from 'framer-motion';


function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const [showProjectPopup, setShowProjectPopup] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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

  const handleOpenProjectPopup = (project) => {
    setSelectedProject(project);
    setShowProjectPopup(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseProjectPopup = () => {
    setShowProjectPopup(false);
    setSelectedProject(null);
    document.body.style.overflow = '';
  };
  

  if(loading){
    return(
      <div className="flex items-center justify-center min-h-screen text-xl text-white">
        loading...
      </div>
    );
  }

  if(error){
    return(
      <div className="flex items-center justify-center min-h-screen text-xl text-red-600 uppercase">
        ERROR: {error}
      </div>

    );
  }

  return (
    <div id="projects-page" className="flex flex-col items-center justify-center min-h-screen w-full p-4 bg-black text-white">
      
      <p className="text-7xl md:text-8xl lg:text-9xl text-[#C9E843] font-bold py-3 font-Bebas">PROJECT SHOWCASE</p>
      {projects.length === 0 ?(
              <p>No projects found.</p>
            ) : (
              <motion.div
              whileInView={{ opacity: 1}}
              initial={{ opacity: 0}}
              transition={{duration: 0.6}}
              className="grid grid-cols-1 w-full md:grid-cols-2 md:gap-4 max-w-6xl md:mx-auto md:px-4">
                {projects.map((project) => (
                        <ProjectCard
                          key={project.id}
                          projectTitle={project.projectTitle}
                          projectSponsor={project.projectSponsor}
                          projectDate={project.projectDate}
                          projectInfo={project.projectInfo}
                          projectLink={project.projectLink}
                          projectTools={project.projectTools}
                          onOpenInfo={() => handleOpenProjectPopup(project)}
                        >
                        </ProjectCard>
                      ))}
              </motion.div>
            )}
      

      {showProjectPopup && selectedProject && (
        <motion.div 
        whileInView={{opacity: 1, y: 1}}
        initial={{opacity: 0, y: 200}}
        transition={{duration: 0.8, ease: "easeOut"}}
        className="fixed bottom-0 left-0 right-0 h-3/4 md:h-1/2 flex flex-col items-center justify-start z-100 bg-gray-200 text-black">
          <div className="flex flex-row items-center justify-between w-full py-3 px-5 font-Bebas">
            <p className="text-3xl md:text-5xl font-bold">{selectedProject.projectTitle}</p>
            <button onClick={handleCloseProjectPopup} className="border-4 py-2 px-4 text-2xl ">
              X
            </button>
          </div>
          <div className="overflow-y-auto w-full">
            <div className="w-full px-5 items-center flex-wrap pb-4">
              <span className="text-left italic text-md md:text-xl mr-2 font-bold font-Inter">
                TECHNOLOGIES:
              </span>
              <span>
                {selectedProject.projectTools.join(', ')}
              </span>
            </div>
            <div className="flex flex-row items-center justify-between w-full px-5">
              <p className="text-left italic text-md md:text-xl font-bold font-Inter">
              INFORMATION:
              </p>
            </div>
            <div className="flex flex-row px-5 text-md pb-2">
              <ul className="list-disc list-inside text-black">
                {selectedProject.projectInfo.map((point, index)=>
                  <li key={index}>
                    {point}
                  </li>
                  
                )}
              </ul>
            </div>

          </div>
          

          <div className="flex flex-row px-5 py-2 text-sm mt-auto w-full flex justify-center md:justify-end">
            <motion.a
              whileHover={{scale:1.1, boxShadow: "0px, 8px, 15px, #FFFFFF"}}
                transition={{
                type:"spring",
                stiffness:300,
                damping:10
              }}
              href={selectedProject.projectLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border-4 border-black bg-[#C9E843] font-bold font-Inter uppercase">
            view project
            </motion.a>  
          </div>
          
          
        </motion.div>
      )}

      
     
           
    </div>
  );
}

export default ProjectsPage;
