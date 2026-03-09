import ProjectCard from "../ProjectCard/ProjectCard";   
import { getProjects } from "../../services/firestore.js";
import { useEffect, useState, useMemo } from "react";

const randomDelay = () => `${(Math.random() * 20 - 10).toFixed(2)}s`;


function ProjectsPanel(){

    const [projects, setProjects] = useState([]);

    useEffect(
        () => {
        const fetchProjects = async () => {
            const projectsData = await getProjects();
            setProjects(projectsData);
        };

        fetchProjects()
        },
        []
    );

    // const projects = [ 
    //     {projectName: "golf-tracker", description: ["point1", "point2","point3", "point4", "point5","point3", "point4", "point5"], technologies: ["tech1", "tech2", "tech3", "tech4", "tech5"], githubLink: "https://2reyes1.github.io/introducing-me/", demo: "https://2reyes1.github.io/introducing-me/", date: "july 2027"},
    //     {projectName: "golf-tracker", description: ["point1", "point2","point3", "point4", "point5","point3", "point4", "point5"], technologies: ["tech1", "tech2", "tech3", "tech4", "tech5"], githubLink: "https://2reyes1.github.io/introducing-me/", demo: "https://2reyes1.github.io/introducing-me/", date: "july 2027"},
    //     {projectName: "golf-tracker", description: ["point1", "point2","point3", "point4", "point5","point3", "point4", "point5"], technologies: ["tech1", "tech2", "tech3", "tech4", "tech5"], githubLink: "https://2reyes1.github.io/introducing-me/", demo: "https://2reyes1.github.io/introducing-me/", date: "july 2027"}
        
    // ];

    return(
        <div className="flex flex-col items-center">
            {projects.map(projects => (
                <div key={projects.projectName} className="flex flex-col items-center w-full animate-float" style={{ animationDelay: randomDelay() }}>
                    <ProjectCard projectName={projects.projectName} description={projects.description} technologies={projects.technologies} githubLink={projects.githubLink} videoLink={projects.videoLink}/>
                </div>
            ))}
        </div>
    )
}

export default ProjectsPanel;