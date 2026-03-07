import { getExperience } from "../../services/firestore.js"
import { useEffect, useState } from "react";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

function ExperiencePanel(){

    // const [experiences, setExp] = useState([]);

    // useEffect(
    //     () => {
    //         const fetchExp = async () => {
    //             const expData = await getExperience();
    //             setExp(expData);
    //         };

    //         fetchExp()
    //     }, [] 
    // );


    const experiences = [
  { company: "Super Cool Company", role: "Software Engineer Intern", date: "jan 2026 - present", description: ["bullet1","bullet2","bullet3", "bullet2","bullet3", "bullet4"], tech: ["tech1","tech2","tech"] },
  { company: "2", role: "Software Engineer Intern", date: "jan 2026 - present", description: ["bullet1","bullet2","bullet3"], tech: ["tech1","tech2","tech"] },
  { company: "3", role: "Software Engineer Intern", date: "jan 2026 - present", description: ["bullet1","bullet2","bullet3", "bullet4","bullet2","bullet3", "bullet4"], tech: ["tech1","tech2","tech"] }
];

    return(
        <div className="flex flex-col items-center">
            {experiences.map(experiences => (
                <div key={experiences.company} className="flex flex-col items-center w-full">
                    <ExperienceCard company={experiences.company} role={experiences.role} startDate={experiences.startDate} endDate={experiences.endDate} description={experiences.description} technologies={experiences.technologies}/>
                </div>
            ))}
        </div>
    )
}

export default ExperiencePanel;