import { useState } from "react";

function ShowPanel() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Projects");

  const options = ["Projects", "News", "Experience"];

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
  };

  return (
    <div className="w-full max-w-[500px] border-4 border-black bg-gray-300">

      {/* Top Bar */}
      <div className="bg-gray-500 border-b-4 border-black p-2 relative">

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
            <div className="absolute left-0 mt-1 bg-gray-200 border-2 border-black shadow-[3px_3px_0_black] text-black">
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
      <div className="h-[350px] bg-gray-300"></div>

    </div>
  );
}

export default ShowPanel;