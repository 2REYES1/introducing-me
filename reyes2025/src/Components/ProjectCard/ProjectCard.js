import './ProjectCard.css';
import React, { useState } from 'react';


function ProjectCard(props) {
  const { projectTitle, projectDate, projectInfo = [] } = props;
  const [showInfo, setShowInfo] = useState(false);

  const handleOpenInfo = () => {
    setShowInfo(true);
  }

  const handleCloseInfo = () => {
    setShowInfo(false);
  }

  return (
    <div id="project-card" className="flex flex-col items-center justify-center">
      <div className="border-y-4 px-2 w-[350px]">
        <p className="text-left text-3xl py-2">{props.projectTitle}</p>
        <p className="text-right text-md italic pb-4">{props.projectDate}</p>
        <div className="flex justify-end p-4">
          <button 
            onClick={handleOpenInfo} 
            className="border-4 p-2">
              more info
          </button>
        </div>
      </div>
        
      {showInfo && (
        <div className="fixed bottom-0 left-0 right-0 h-1/2 flex flex-col items-center justify-start z-50 bg-gray-200">
          <div className="flex flex-row items-center justify-between w-full px-5">
            <p className="text-xl font-bold">{props.projectTitle}</p>
            <button onClick={handleCloseInfo} className="border-4 py-2">
              X
            </button>
          </div>
          <div className="flex flex-row items-center justify-between w-full px-5">
            <p className="text-left italic">
            INFORMATION:
            </p>
          </div>
          <div className="flex flex-row px-5 overflow-y-auto">
            <ul className="list-disc list-inside text-black">
              {props.projectInfo.map((point, index)=>
                <li key={index}>
                  {point}
                </li>
                
              )}
            </ul>
          </div>
          
        </div>

      )}
    </div>
  );
}

export default ProjectCard;
