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

          <div className="flex flex-col items-center justify-center h-screen w-[95%] max-w-[400px] mx-auto">
            {/* HEADER PORTION */}
            <div id="header-portion" className="w-[95%]">
                <p className="font-['Orbit'] text-sm mb-1">LAST UPDATED: 3 March 2026</p>
                <div className="text-white font-['Silkscreen'] text-4xl bg-black py-2 px-4 shadow-[0.375rem_0.375rem_0_black]">
                    ALYRE.DEV
                </div>
                <div className="font-['Orbit'] text-center bg-[#6D6D6D] text-black shadow-[0.375rem_0.375rem_0_black]">
                    <p className="drop-shadow-lg font-bold">
                       <span>LINKEDIN</span> | <span>GITHUB</span> | <span>RESUME</span>  
                    </p>
                    
                </div>
            </div>

            {/* ABOUT ME PORTION */}
            <div className="mt-3 flex items-center justify-center w-full min-h-[15%] max-h-[15%] mb-12">
              <div className="grid grid-cols-[1.5fr_3fr] w-[95%] h-full">

                <div id="profile-pic-box" className="bg-gray-300 border-4 border-black z-10 relative w-[115%] h-[120%] shadow-[0.2rem_0.2rem_0_black]">
                </div>

                <div id="about-me-box" className="">
                  <h1 className="font-['Silkscreen'] text-[#B2D365] flex items-center justify-center text-[2.5rem] relative z-50 translate-x-2 -translate-y-3 [text-shadow:.2rem_.2rem_0_black] [-webkit-text-stroke:.1rem_black] font-medium">
                    ABOUT ME
                  </h1>
                  
                  <div className="bg-gray-300 border-black relative -translate-y-10 h-[110%] flex items-center justify-center shadow-[0.375rem_0.375rem_0_black] border-4">
                    <p className="font-['Orbit'] text-sm text-center text-black">
                      Hello!
                    </p>
                  </div>
                 
                </div>
                
                

              </div>
            </div>

            <div>
              hello
            </div>


          </div>

        </div>
        
      )}

    </div>
  );
}

export default LandingPage;