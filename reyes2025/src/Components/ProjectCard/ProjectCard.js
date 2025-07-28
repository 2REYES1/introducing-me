import './ProjectCard.css';
import React, { useState } from 'react';


function ProjectCard(props) {
  const{
    projectTitle,
    projectSponsor,
    projectDate,
    projectInfo = [],
    projectLink,
    projectTools = [],
    onOpenInfo
  } = props;

  return (
    <div id="project-card" className="flex flex-col items-center justify-center py-2 font-mono text-white">
      <div className="border-y-4 px-2 w-full">
        <p className="text-left text-2xl pt-2 uppercase font-Bebas">{props.projectTitle}</p>
        <p className="text-left text-sm italic font-Inter">{props.projectSponsor}</p>
        <p className="text-right text-sm italic pb-4">{props.projectDate}</p>
        <div className="flex justify-end p-4">
          <button 
            onClick={onOpenInfo} 
            className="border-2 py-2 px-5 text-xs font-bold font-Inter uppercase">
              more info
          </button>
        </div>
      </div>
        
      
    </div>
  );
}

export default ProjectCard;
