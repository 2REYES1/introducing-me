import { useState } from "react";
import ExperiencePanel from "../ExperiencePanel/ExperiencePanel.jsx";
import NewsPanel from "../NewsPanel/NewsPanel.jsx";
import ProjectsPanel from "../ProjectsPanel/ProjectsPanel.jsx"; 


function ShowPanel() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Projects");

  const options = ["Projects", "News", "Experience"];

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
  };

  const renderPanel = () => {
    switch (selected) {
      case "Experience":
        return <ExperiencePanel />;
      case "News":
        return <NewsPanel />;
      case "Projects":
      default:
        return <ProjectsPanel />;
    }
  };

  return (
    <div className="w-full max-w-[500px] border-4 border-black bg-gray-300 h-full">

      {/* Top Bar */}
      <div className="bg-[#6D6D6D] border-b-4 border-black p-2 relative">

        {/* Dropdown */}
        <div className="relative inline-block">
          <button
            onClick={() => setOpen(!open)}
            className="font-['Silkscreen'] bg-gray-200 border-2 border-black px-3 py-1 flex items-center gap-2 shadow-[3px_3px_0_black] text-black"
          >
            {selected}
            <span>▼</span>
          </button>

          {open && (
            <div className="absolute left-0 mt-1 bg-gray-200 border-2 border-black shadow-[3px_3px_0_black] text-black z-10">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  className="block w-full text-left px-3 py-1 font-['Silkscreen'] hover:bg-gray-400"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Content Area */}
      <div className="max-h-[400px] bg-gray-300 p-4 overflow-y-auto">
        {renderPanel()}
      </div>

    </div>
  );
}

export default ShowPanel;