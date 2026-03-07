import { useState } from "react";
import FolderIcon from "../FolderIcon/FolderIcon.jsx";

function ProjectCard(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">

      {/* Folder Icon */}
      <FolderIcon onClick={() => setOpen(true)} className="w-40 h-40 text-black hover:scale-110 transition drop-shadow-[4px_5px_0_rgba(0,0,0,0.25)]" />
      <p className={"text-black font-['Orbit']"}>{props.projectName}</p>

      {/* Popup */}
      {open && (
        <div
          className="z-70 fixed inset-0 flex items-center justify-center bg-black/40 text-black"
          onClick={() => setOpen(false)}
        >
          <div id="popup-box"
            className="bg-gray-300 border-2 border-black p-4 shadow-lg rounded-lg flex flex-col items-center justify-center w-[95vw] max-w-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <div id="project-card-header" className="flex justify-between items-center w-full">
              <p className="font-['Silkscreen'] text-3xl text-[#B2D365] [text-shadow:.2rem_.2rem_0_black] [-webkit-text-stroke:.1rem_black] font-medium">
                {props.projectName}
              </p>

              <button
                onClick={() => setOpen(false)}
                className="font-['Silkscreen'] bg-[#B2D365] border-2 border-black px-2 text-md hover:bg-gray-400 hover:scale-110 transition"
              >
                X
              </button>

            
            </div>

            <p className="py-1 text-left">
              <span className="text-black font-bold">Tags: </span>
              {props.technologies?.join(", ")}
            </p>

            <div id="projects-content-section" className="bg-[#6D6D6D] border-2 border-black font-['Orbit'] max-h-[200px] overflow-y-auto text-sm shadow-[0.375rem_0.375rem_0_rgba(0,0,0,0.25)] my-2 w-full">
                
                
                <p className="px-3 pb-2 text-left">
                  {props.description?.map((item, index) => (
                    <div key={index} className="py-1">∘ {item}</div>
                  ))} 
                </p>
                
            
            </div>


            <div className="w-full flex justify-end pt-2">
              <a className="bg-[#B2D365] py-1 px-2 text-xs border-2 border-black font-['Orbit'] shadow-[0.2rem_0.2rem_0_rgba(0,0,0,0.25)] hover:bg-gray-400 hover:scale-110 transition" href={props.githubLink} target="_blank" rel="noopener noreferrer">VIEW PROJECT</a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default ProjectCard;