import './ProjectsPage.css';
import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

function ProjectsPage() {
  return (
    <div className='container main-wrapper-proj-page' id="projects-page">
      <div className='row justify-content-center nanum-pen-proj-page nanum-headers-proj-page'>
        PROJECT SHOWCASE
      </div>

      <div className='row justify-content-center align-items-center'>

        <div className='col-lg-12 h-100 overflow-auto'>
            <div className='mb-3'>
              <ProjectCard
                projectTitle="snap & safe" 
                summary="a medication and label idenitification website for people with accessibility challenges"
                moreInfo={["informationt1", "information2"]} 
                contributions={["this is my contribution", "this is my other contribution"]}
                languagesAndTools={["React", "JavaScript", "Figma", "Google Gemini API"]}
              />
            </div>
            <div className='mb-3'>
              <ProjectCard
                projectTitle="plan-it" 
                summary="a travel itinerary website where people have the ability to simultaneously visually map their itinerary"
                date="2024"
                moreInfo={[
                  "project for the Irvine-Hacks 2024 hackathon",
                  "collaborated in a group of 4",
                  { type: 'link', text: 'devpost link', url: 'https://devpost.com/software/plan-it-fmuwpq' }, "implemented real-time data synchronization and user authentication for the login page", "helped design the ui/ux", "implemented the ui/ux for the login page", "assisted in implementing the ui/ux for the other pages"
                ]}
                languagesAndTools={["React", "JavaScript", "Figma", "Google Places API"]}
              />
            </div>
            <div className='mb-3'>
              <ProjectCard
                projectTitle="snap & safe" 
                summary="a medication and label idenitification website for people with accessibility challenges"
                moreInfo={["informationt1", "information2"]} 
                contributions={["this is my contribution", "this is my other contribution"]}
                languagesAndTools={["React", "JavaScript", "Figma", "Google Gemini API"]}
              />
            </div>
            <div className='mb-3'>
              <ProjectCard
                projectTitle="snap & safe" 
                summary="a medication and label idenitification website for people with accessibility challenges"
                moreInfo={["informationt1", "information2"]} 
                contributions={["this is my contribution", "this is my other contribution"]}
                languagesAndTools={["React", "JavaScript", "Figma", "Google Gemini API"]}
              />
            </div>
            <div className='mb-3'>
              <ProjectCard
                projectTitle="snap & safe" 
                summary="a medication and label idenitification website for people with accessibility challenges"
                moreInfo={["informationt1", "information2"]} 
                contributions={["this is my contribution", "this is my other contribution"]}
                languagesAndTools={["React", "JavaScript", "Figma", "Google Gemini API"]}
              />
            </div>
        </div>

      </div>
    </div>
  );
}

export default ProjectsPage;
