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
                date="2024"
                summary="a medication and label idenitification website for people with accessibility challenges"
                moreInfo={[{ type: 'link', text: 'devpost link', url: 'https://devpost.com/software/snap-safe' },"project for LA Hacks 2024", "implemented the google gemini api to detect and format uncertain medication and labels", "translated the front-end design from figma into react and javascript"]} 
                languagesAndTools={["React", "JavaScript", "Figma", "Google Gemini API"]}
              />
            </div>
            <div className='mb-3'>
              <ProjectCard
                projectTitle="plan-it" 
                summary="a travel itinerary website where people have the ability to simultaneously visually map their itinerary"
                date="2024"
                moreInfo={[
                  { type: 'link', text: 'devpost link', url: 'https://devpost.com/software/plan-it-fmuwpq' }, "project for the Irvine-Hacks 2024 hackathon",
                  "collaborated in a group of 4",
                   "implemented real-time data synchronization and user authentication for the login page", "helped design the ui/ux", "implemented the ui/ux for the login page", "assisted in implementing the ui/ux for the other pages"
                ]}
                languagesAndTools={["React", "JavaScript", "Figma", "Google Places API"]}
              />
            </div>
            <div className='mb-3'>
              <ProjectCard
                projectTitle="zot class mobile"
                date="2022" 
                summary="a mobile app that allows you to visualize and organize your class schedules for uc irvine"
                moreInfo={[{ type: 'link', text: 'devpost link', url: 'https://devpost.com/software/zot-class-mobile' },"a full-stack mobile app that displays a UCI schedule of classes using the Peter Portal API", "awarded 1st place for the ZotHacks Hackathon issued by Hack at UCI", "implemented the front-end using flutter and dart and the backend using python and flask"]} 
                languagesAndTools={["Flutter", "Dart", "Python", "Flask", "Peter Portal API"]}
              />
            </div>
            <div className='mb-3'>
              <ProjectCard
                projectTitle="uci search engine"
                date="2023" 
                summary="an efficient custom search engine tailored for UCI's webpages and resources"
                moreInfo={["developed a search engine from the ground up that is capable of handling tens of thousands of documents or webpages in Python", "designed an inverted index with complex ranking and retrieval mechanisms to have a query time of under 300ms", "designed a web crawler to retrieve over ten thousand uci webpages"]} 
                languagesAndTools={["Python"]}
              />
            </div>
            <div className='mb-3'>
              <ProjectCard
                projectTitle="valorant discord bot"
                date="2022" 
                summary="a discord bot that provides expert insights on valorant agents"
                moreInfo={["the discord bot provides users information about valorant gents via embedded messages, role managing, and message managing", "utilized the Hikari API for my Python framework and the third-party library Hikari Lightbulb for the command handlers"]} 
                languagesAndTools={["Python", "Disccord API", "Hikari API", "Hikari Lightbulb"]}
              />
            </div>
        </div>

      </div>
    </div>
  );
}

export default ProjectsPage;
