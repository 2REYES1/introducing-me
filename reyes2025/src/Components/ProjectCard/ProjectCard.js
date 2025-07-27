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
    <div id="project-card" className="flex flex-col items-center justify-center py-2 font-mono text-white">
      <div className="border-y-4 px-2 w-full">
        <p className="text-left text-2xl pt-2 uppercase font-Bebas">{props.projectTitle}</p>
        <p className="text-left text-sm italic font-Inter">{props.projectSponsor}</p>
        <p className="text-right text-sm italic pb-4">{props.projectDate}</p>
        <div className="flex justify-end p-4">
          <button 
            onClick={handleOpenInfo} 
            className="border-2 py-2 px-5 text-xs font-bold font-Inter uppercase">
              more info
          </button>
        </div>
      </div>
        
      {showInfo && (
        <div className="fixed bottom-0 left-0 right-0 h-1/2 flex flex-col items-center justify-start z-50 bg-gray-200 text-black">
          <div className="flex flex-row items-center justify-between w-full py-3 px-5 font-Bebas">
            <p className="text-3xl md:text-5xl font-bold">{props.projectTitle}</p>
            <button onClick={handleCloseInfo} className="border-4 py-2 text-2xl ">
              X
            </button>
          </div>
          <div className="overflow-y-auto w-full">
            <div className="w-full px-5 items-center flex-wrap pb-4">
              <span className="text-left italic text-md md:text-xl mr-2 font-bold font-Inter">
                TECHNOLOGIES:
              </span>
              <span>
                {props.projectTools.join(', ')}
              </span>
            </div>
            <div className="flex flex-row items-center justify-between w-full px-5">
              <p className="text-left italic text-md md:text-xl font-bold font-Inter">
              INFORMATION:
              </p>
            </div>
            <div className="flex flex-row px-5 text-md pb-2">
              <ul className="list-disc list-inside text-black">
                {props.projectInfo.map((point, index)=>
                  <li key={index}>
                    {point}
                  </li>
                  
                )}
              </ul>
            </div>

          </div>
          

          <div className="flex flex-row px-5 py-2 text-sm mt-auto w-full flex justify-center md:justify-end">
            <a 
              href={props.projectLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border-4 border-blue-200 font-bold font-Inter uppercase">
            view project
            </a>  
          </div>
          
          
        </div>

      )}
    </div>
  );
}

export default ProjectCard;
