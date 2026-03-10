import { useState, useEffect } from "react";
import WelcomeButton from "../../components/WelcomeButton/WelcomeButton";
import ShowPanel from "../../components/ShowPanel/ShowPanel";
import Dither from "../../components/Dither/Dither"; 
import { getAboutMeInfo, getImportantLinks, getLastUpdatedDate } from "../../services/firestore.js"
import profilePic from "../../assets/me-picture.jpg";

function LandingPage() {
  const [entered, setEntered] = useState(false);
  const [aboutMeInfo, setAboutMeInfo] = useState("");
  const [resumeLink, setResumeLink] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [linkedInLink, setLinkedInLink] = useState("");
  const [lastUpdatedDate, setLastUpdatedDate] = useState("");

  const handleEnter = () => {
    setEntered(true);
  };

  useEffect(
    () => {
      const fetchAboutMe = async () => {
        const [aboutMeInfoData, linksData, lastUpdatedDateData] = await Promise.all([
          getAboutMeInfo(),
          getImportantLinks(),
          getLastUpdatedDate()
        ]);



        setAboutMeInfo(aboutMeInfoData.content);
        setResumeLink(linksData.resumeLink);
        setGithubLink(linksData.githubLink);
        setLinkedInLink(linksData.linkedInLink);
        setLastUpdatedDate(lastUpdatedDateData.date)
      };

      fetchAboutMe()
    },
    []
  )


  return (
    <div className="min-h-screen bg-gradient-to-b from-[#B2D365] to-black text-white">


    {/* Dither Background */}
    <div className="fixed inset-0 z-0">
      <Dither
        waveColor={[0.55, 0.65, 0.45]} // muted sage green
        disableAnimation={false}
        enableMouseInteraction={true}
        mouseRadius={0.3}
        colorNum={4}
        waveAmplitude={0.3}
        waveFrequency={3}
        waveSpeed={0.05}
      />
    </div>
    
      {/* Show popup if user hasn't entered */}
      {!entered && <WelcomeButton onEnter={handleEnter} />}

      {/* Main landing page content */}
      {entered && (
        <div className="flex flex-col items-center justify-center min-h-screen">

          <div className="flex flex-col items-center justify-center min-h-screen w-[95%] max-w-[400px] mx-auto z-2">
            {/* HEADER PORTION */}
            <div id="header-portion" className="w-[95%] mt-10" >
                <p className="font-['Orbit'] text-sm mb-1 text-white drop-shadow-[0px_0px_6px_rgba(255,255,255,0.9)]">LAST UPDATED: {lastUpdatedDate}</p>
                <div className="text-white font-['Silkscreen'] text-4xl bg-black py-2 shadow-[0.375rem_0.375rem_0_black] pl-2">
                  <span className="inline-block scale-y-170 origin-center py-3 animate-float -translate-y-1" style={{ animationDelay: '-1.5s' }}>
                    ALYSSA REYES
                  </span>
                </div>
                <div className="font-['Orbit'] text-center bg-[#6D6D6D] text-black shadow-[0.375rem_0.375rem_0_black] realtive z-70">
                    <p className="drop-shadow-lg font-bold text-left px-2 py-1 z-70">
                       <span><a href={linkedInLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#B2D365] hover:text-lg transition">
                        LINKEDIN</a></span> | <span><a href={githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#B2D365] hover:text-lg transition">GITHUB</a></span> | <span><a href={resumeLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#B2D365] hover:text-lg transition">RESUME</a></span>  
                    </p>
                    
                </div>
            </div>

            {/* ABOUT ME PORTION */}
            <div className="mt-3 w-full mb-3 px-2 grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-x-3">

              {/* Profile Picture — spans both rows */}
              <div className="row-span-2 h-[230px] aspect-[3/4] bg-gray-300 border-4 border-black shadow-[0.2rem_0.2rem_0_black] overflow-hidden rounded-lg shrink-0 z-10 ">
                <img 
                  src={profilePic} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(30%) sepia(100%) hue-rotate(60deg) saturate(30%)' }} 
                />
              </div>

              {/* Title — row 1, col 2 */}
              <p className="font-['Silkscreen'] text-[2.4rem] -ml-18 sm:text-[3rem] translate-y-2 text-white scale-y-170 origin-center [-webkit-text-stroke:2px_black] drop-shadow-[4px_4px_0_rgba(255,255,255,.7)] z-10 self-end inline-block animate-float">
                ABOUT ME
              </p>

              {/* Content Box — row 2, col 2 */}
              <div className="flex-1 bg-gray-300 border-4 border-black shadow-[0.2rem_0.2rem_0_black] font-['Orbit'] text-sm font-black text-black overflow-y-auto max-h-[200px] pl-4 -ml-4 pt-2 ">
                {aboutMeInfo}
              </div>

            </div>

            {/* SHOW PANEL PORTION */}
            <div id="show-panel-section" className="w-[95%] shadow-[0.375rem_0.375rem_0_black] mb-10 flex">
              <ShowPanel/>
            </div>


          </div>

        </div>
        
      )}

    </div>
  );
}

export default LandingPage;