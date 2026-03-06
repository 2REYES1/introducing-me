import ExperienceCard from "../ExperienceCard/ExperienceCard";

function ExperiencePanel(){
    const experiences = [
  { company: "Super Cool Company", role: "Software Engineer Intern", date: "jan 2026 - present", description: ["bullet1","bullet2","bullet3", "bullet2","bullet3", "bullet4"], tech: ["tech1","tech2","tech"] },
  { company: "2", role: "Software Engineer Intern", date: "jan 2026 - present", description: ["bullet1","bullet2","bullet3"], tech: ["tech1","tech2","tech"] },
  { company: "3", role: "Software Engineer Intern", date: "jan 2026 - present", description: ["bullet1","bullet2","bullet3", "bullet4","bullet2","bullet3", "bullet4"], tech: ["tech1","tech2","tech"] }
];

    return(
        <div>
            {experiences.map(experiences => (
                <div key={experiences.company}>
                    <ExperienceCard company={experiences.company} role={experiences.role} date={experiences.date} description={experiences.description} tech={experiences.tech}/>
                </div>
            ))}
        </div>
    )
}

export default ExperiencePanel;