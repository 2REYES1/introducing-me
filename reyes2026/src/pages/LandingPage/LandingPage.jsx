import { useState } from "react";
import WelcomeButton from "../../components/WelcomeButton/WelcomeButton";

function LandingPage() {
  const [entered, setEntered] = useState(false);

  const handleEnter = () => {
    setEntered(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#B2D365] text-white">

      {/* Show popup if user hasn't entered */}
      {!entered && <WelcomeButton onEnter={handleEnter} />}

      {/* Main landing page content */}
      {entered && (
        <div className="flex flex-col items-center justify-center h-screen">
            <div id="header-portion" className="w-[95%]">
                <p className="font-['Orbit'] text-sm mb-1">LAST UPDATED: 3 March 2026</p>
                <div className="text-white font-['Silkscreen'] text-4xl bg-black py-2 px-4">
                    ALYRE.DEV
                </div>
                <div className="font-['Orbit'] text-center bg-[#6D6D6D] text-black shadow-md">
                    <p className="drop-shadow-lg font-bold">
                       <span>LINKEDIN</span> | <span>GITHUB</span> | <span>RESUME</span>  
                    </p>
                    
                </div>
            </div>
            <div id="about-me-portion" className="my-2">
                hello
            </div>
        </div>
      )}

    </div>
  );
}

export default LandingPage;