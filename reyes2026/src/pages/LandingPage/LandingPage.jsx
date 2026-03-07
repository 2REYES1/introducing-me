import { useState, useEffect } from "react";
import WelcomeButton from "../../components/WelcomeButton/WelcomeButton";
import ShowPanel from "../../components/ShowPanel/ShowPanel";
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
    <div className="min-h-screen bg-gradient-to-b from-black to-[#B2D365] text-white">

      {/* Show popup if user hasn't entered */}
      {!entered && <WelcomeButton onEnter={handleEnter} />}

      {/* Main landing page content */}
      {entered && (
        <div className="flex flex-col items-center justify-center h-screen">

          <div className="flex flex-col items-center justify-center h-screen w-[95%] max-w-[400px] mx-auto">
            {/* HEADER PORTION */}
            <div id="header-portion" className="w-[95%] mt-10">
                <p className="font-['Orbit'] text-sm mb-1">LAST UPDATED: {lastUpdatedDate}</p>
                <div className="text-white font-['Silkscreen'] text-4xl bg-black py-2 shadow-[0.375rem_0.375rem_0_black]">
                    ALYSSA REYES
                </div>
                <div className="font-['Orbit'] text-center bg-[#6D6D6D] text-black shadow-[0.375rem_0.375rem_0_black]">
                    <p className="drop-shadow-lg font-bold">
                       <span><a href={linkedInLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#B2D365] hover:text-lg transition">
                        LINKEDIN</a></span> | <span><a href={githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#B2D365] hover:text-lg transition">GITHUB</a></span> | <span><a href={resumeLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#B2D365] hover:text-lg transition">RESUME</a></span>  
                    </p>
                    
                </div>
            </div>

            {/* ABOUT ME PORTION */}
            <div id="about-me-row" className="mt-3 flex items-center justify-center w-full mb-3 gap-4">

              <div
                id="profile-pic-box"
                className="h-[200px] aspect-[3/4] bg-gray-300 border-4 border-black z-10 relative shadow-[0.2rem_0.2rem_0_black] overflow-hidden rounded-lg shrink-0"
              >
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 h-[200px] relative flex flex-col">

                <p className="font-['Silkscreen'] z-20 text-4xl text-[#B2D365] [-webkit-text-stroke:2px_black] drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
                  ABOUT ME
                </p>

                <div className="absolute top-5 right-0 h-[170px] w-2xs overflow-y-auto font-['Orbit'] text-sm py-5 pl-12 pr-4 py-2 bg-gray-300 text-black font-black border-5 border-black shadow-[0.2rem_0.2rem_0_black]">
                  {aboutMeInfo}
                </div>

              </div>

            </div>

            {/* SHOW PANEL PORTION */}
            <div id="show-panel-section" className="w-[95%] shadow-[0.375rem_0.375rem_0_black] h-full mb-10 flex-1 max-h-[500px]">
              <ShowPanel/>
            </div>


          </div>

        </div>
        
      )}

    </div>
  );
}

export default LandingPage;