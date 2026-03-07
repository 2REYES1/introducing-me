import { useState } from "react";
import FolderIcon from "../FolderIcon/FolderIcon.jsx";

function ProjectCard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">

      {/* Folder Icon */}
      <FolderIcon onClick={() => setOpen(true)} />

      {/* Popup */}
      {open && (
        <div
          className="z-20 fixed inset-0 flex items-center justify-center bg-black/40 text-black"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white border-2 border-black p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold mb-2 text-black">
              Project Info
            </h2>

            <p>
              This is a simple popup.
            </p>

            <button
              onClick={() => setOpen(false)}
              className="mt-4 border border-black px-3 py-1"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default ProjectCard;