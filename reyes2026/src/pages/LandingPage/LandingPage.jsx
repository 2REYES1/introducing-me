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
            <div class="mt-2 flex items-center justify-center w-full">
              <div class="grid grid-cols-6 grid-rows-4 gap-0 w-[95%] bg-black ">

                <h1 class="col-start-3 col-span-3 row-start-1 
                          font-['Silkscreen'] text-3xl 
                          translate-y-3 z-20">
                  ABOUT ME
                </h1>
                
                <div class="col-start-2 col-span-4 row-start-2 row-span-2
                            bg-gray-300 border-4 border-black 
                            shadow-[6px_6px_0_black] p-8">
                  <p class="font-['Orbit'] text-sm text-center mt-4">
                    Hello!
                  </p>
                </div>
                
                <div class="col-start-1 col-span-2 row-start-1 row-span-3
                            bg-gray-300 border-4 border-black 
                            rounded-xl z-10">
                </div>

              </div>
            </div>
        </div>
      )}

    </div>
  );
}

export default LandingPage;