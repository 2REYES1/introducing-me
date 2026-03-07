import ProjectCard from "../ProjectCard/ProjectCard";   

function ProjectsPanel(){

    const projects = [ 
        {projectName: "golf-tracker", description: ["point1", "point2","point3", "point4", "point5","point3", "point4", "point5"], technologies: ["tech1", "tech2", "tech3", "tech4", "tech5"], githubLink: "https://2reyes1.github.io/introducing-me/", demo: "https://2reyes1.github.io/introducing-me/", date: "july 2027"},
        {projectName: "golf-tracker", description: ["point1", "point2","point3", "point4", "point5","point3", "point4", "point5"], technologies: ["tech1", "tech2", "tech3", "tech4", "tech5"], githubLink: "https://2reyes1.github.io/introducing-me/", demo: "https://2reyes1.github.io/introducing-me/", date: "july 2027"},
        {projectName: "golf-tracker", description: ["point1", "point2","point3", "point4", "point5","point3", "point4", "point5"], technologies: ["tech1", "tech2", "tech3", "tech4", "tech5"], githubLink: "https://2reyes1.github.io/introducing-me/", demo: "https://2reyes1.github.io/introducing-me/", date: "july 2027"}
        
    ];

    return(
        <div className="flex flex-col items-center">
            {projects.map(projects => (
                <div key={projects.projectName} className="flex flex-col items-center w-full">
                    <ProjectCard projectName={projects.projectName} description={projects.description} technologies={projects.technologies} githubLink={projects.githubLink} demo={projects.demo}/>
                </div>
            ))}
        </div>
    )
}

export default ProjectsPanel;