import ProjectCard from "../ProjectCard/ProjectCard";   

function ProjectsPanel(){

    const projects = [
        { company: "Super Cool Company", role: "Software Engineer Intern", date: "jan 2026 - present", description: ["bullet1","bullet2","bullet3", "bullet2","bullet3", "bullet4"], tech: ["tech1","tech2","tech"] },
        { company: "2", role: "Software Engineer Intern", date: "jan 2026 - present", description: ["bullet1","bullet2","bullet3"], tech: ["tech1","tech2","tech"] },
        { company: "3", role: "Software Engineer Intern", date: "jan 2026 - present", description: ["bullet1","bullet2","bullet3", "bullet4","bullet2","bullet3", "bullet4"], tech: ["tech1","tech2","tech"] }
];

    return(
        <div className="flex flex-col items-center">
            {projects.map(projects => (
                <div key={projects.company} className="flex flex-col items-center w-full">
                    <ProjectCard/>
                </div>
            ))}
        </div>
    )
}

export default ProjectsPanel;