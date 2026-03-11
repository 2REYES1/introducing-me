import { useState, useEffect } from "react";
import WelcomeButton from "../../components/WelcomeButton/WelcomeButton";
import ShowPanel from "../../components/ShowPanel/ShowPanel";
import Dither from "../../components/Dither/Dither"; 
import { getAboutMeInfo, getImportantLinks, getLastUpdatedDate, getSkillsTags, getSpecialtyTags } from "../../services/firestore.js"
import profilePic from "../../assets/me-picture.jpg";

const randomDelay = () => `${(Math.random() * -9 - 1).toFixed(2)}s`;

function LandingPage() {
  const [entered, setEntered] = useState(false);
  const [aboutMeInfo, setAboutMeInfo] = useState([]);
  const [specialtyTags, setSpecialtyTags] = useState([]);
  const [skillsTags, setSkillsTags] = useState([]);
  const [showAllSkills, setShowAllSkills] = useState(false);
  const VISIBLE_COUNT = 10;
  const visibleSkills = showAllSkills ? skillsTags : skillsTags.slice(0, VISIBLE_COUNT);

  const [resumeLink, setResumeLink] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [linkedInLink, setLinkedInLink] = useState("");
  const [lastUpdatedDate, setLastUpdatedDate] = useState("");

  const handleEnter = () => {
    setEntered(true);
  };

  useEffect(() => {
    const fetchAboutMe = async () => {
      const [aboutMeInfoData, linksData, lastUpdatedDateData, specialtyTagsData, skillsTagsData] = await Promise.all([
        getAboutMeInfo(),
        getImportantLinks(),
        getLastUpdatedDate(),
        getSpecialtyTags(),
        getSkillsTags(),
      ]);
      setAboutMeInfo(aboutMeInfoData.content);
      setResumeLink(linksData.resumeLink);
      setGithubLink(linksData.githubLink);
      setLinkedInLink(linksData.linkedInLink);
      setLastUpdatedDate(lastUpdatedDateData.date);
      setSpecialtyTags(specialtyTagsData.tags)
      setSkillsTags(skillsTagsData.skills)
    };
    fetchAboutMe();
  }, []);

  return (
    <div className={`min-h-screen text-white ${!entered ? "bg-transparent" : "bg-gradient-to-b from-[#B2D365] to-black"}`}>

      {/* Dither Background */}
      <div className="fixed inset-0 z-0">
        <Dither
          waveColor={[0.55, 0.65, 0.45]}
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
      {!entered && (
        <div className="relative z-10">
          <WelcomeButton onEnter={handleEnter} />
        </div>
      )}

      {/* Main landing page content */}
      {entered && (
        <div className="relative z-10 flex flex-col min-h-screen drop-shadow-[3px_3px_0_black] ">

          {/* ── STICKY TOPBAR ── */}

          <div className="sticky top-0 z-[100] flex justify-center bg-transparent">
            <header className="w-[100%] max-w-[400px] px-0 pt-2 pb-0 border-black border-4 bg-[#8CA673]/50 m-2">

              {/* Last updated */}
              <p className="font-['Orbit'] text-[.7rem] text-black opacity-100 px-2 drop-shadow-[1px_1px_0px_rgba(0,0,0,0.3)] tracking-[1px] font-bold">
                LAST UPDATED: {lastUpdatedDate}
              </p>

              {/* Name */}
              <div className="font-['Silkscreen'] text-4xl text-black drop-shadow-[0.2rem_0.2rem_0_white]/70">
                <span className="inline-block scale-y-170 origin-center py-4 animate-float -translate-y-1 pointer-events-none pl-2 " style={{ animationDelay: randomDelay() }}>
                  ALYSSA REYES
                </span>
              </div>

              {/* Links bar */}
              <div className="flex bg-black">
                    {[
                      { label: "LINKEDIN", href: linkedInLink },
                      { label: "GITHUB",   href: githubLink   },
                      { label: "RESUME",   href: resumeLink   },
                    ].map(({ label, href }, i) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                          font-['Orbit'] text-[0.6rem] font-bold text-black bg-gray-300
                          flex-1 text-center py-[5px] tracking-wide
                          hover:bg-[#8CA673] hover:text-black transition-colors duration-150 border-x-3 border-t-3 unded-sm 
                          ${i !== 2 ? "border-black" : ""}
                        `}
                      >
                        {label}
                      </a>
                    ))}
              </div>

            </header>
          </div>
          {/* ── PAGE CONTENT ── */}
          <div className="flex flex-col items-center w-[95%] max-w-[400px] mx-auto pb-16 mt-2">

            {/* ABOUT ME PORTION */}
            <div className="w-full mb-3 px-2 grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-x-3">

              {/* Profile Picture — spans both rows */}
              <div className="row-span-2 h-[230px] aspect-[3/4] bg-gray-300 border-4 border-black shadow-[0.2rem_0.2rem_0_black] overflow-hidden rounded-lg shrink-0 z-10">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(30%) sepia(100%) hue-rotate(60deg) saturate(30%)' }}
                />
              </div>

              {/* Title — row 1, col 2 */}
              <p className="font-['Silkscreen'] text-[2.4rem] -ml-18 sm:text-[3rem] -translate-y-3 text-white scale-y-170 origin-center [-webkit-text-stroke:2px_black] drop-shadow-[4px_4px_0_rgba(255,255,255,.7)] z-10 self-end inline-block animate-float pointer-events-none" style={{ animationDelay: randomDelay() }}>
                ABOUT ME
              </p>

              {/* Content Box — row 2, col 2 */}
              <div className="flex-1 bg-gray-300 border-4 border-black shadow-[0.2rem_0.2rem_0_black] font-['Orbit'] text-sm font-black text-black -ml-4 flex flex-col justify-center items-left px-4 py-5 max-h-[200px] overflow-y-auto">
                {aboutMeInfo.map((item, index) => (
                  <p key={index} className="py-1 text-xs">{item}</p>
                ))}
              </div>

            </div>

            {/* Interests Section */}
            <div className="pl-3">
              <div className="font-['Silkscreen'] text-[1.7rem] sm:text-[2rem] text-white scale-y-170 origin-center [-webkit-text-stroke:2px_black] drop-shadow-[4px_4px_0_rgba(255,255,255,.7)] z-10 self-end inline-block animate-float pointer-events-none mb-3" style={{ animationDelay: randomDelay() }}>Interests</div>
              <div className="flex flex-wrap gap-x-4 gap-y-2 mb-3">
                {specialtyTags.map((item, index) => (
                  <span className="border-3 border-black bg-gray-300 text-black font-['Orbit'] text-sm px-3 rounded-md py-1 animate-float" key={index} style={{ animationDelay: randomDelay() }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills Section */}
            <div className="pr-3">
              <div className="font-['Silkscreen'] text-[1.7rem] sm:text-[2rem] text-white scale-y-170 origin-center [-webkit-text-stroke:2px_black] drop-shadow-[4px_4px_0_rgba(255,255,255,.7)] z-10 inline-block animate-float pointer-events-none mb-3 text-right w-full" style={{ animationDelay: randomDelay() }}>
                TECH STACK
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2 mb-3 justify-end">
                {visibleSkills.map((item, index) => (
                  <span
                    className="border-3 border-black bg-gray-300 text-black font-['Orbit'] text-sm px-3 rounded-md py-1 animate-float"
                    key={index}
                    style={{ animationDelay: randomDelay() }}
                  >
                    {item}
                  </span>
                ))}
              </div>
              {skillsTags.length > VISIBLE_COUNT && (
                <div className="flex justify-end mb-7">
                  <button
                    onClick={() => setShowAllSkills(!showAllSkills)}
                    className="font-['Orbit'] text-[0.6rem]  text-white bg-[#8CA673]/50 border-2 border-black px-3 py-1 5] transition-colors duration-150"
                  >
                    {showAllSkills ? "SHOW LESS ▲" : "SEE MORE ▼"}
                  </button>
                </div>
              )}
            </div>



            
            {/* SHOW PANEL PORTION */}
            <div id="show-panel-section" className="w-[95%] shadow-[0.375rem_0.375rem_0_black] mb-10 flex">
              <ShowPanel />
            </div>

          </div>

          {/* ── STICKY FOOTER ── */}
          <footer className="sticky bottom-0 left-0 right-0 px-3 py-[5px] flex justify-center z-[100] bg-transparent font-bold">
            <div className="w-full max-w-[400px] flex justify-between items-center bg-[#8CA673]/75 p-2 border-3 border-black">
              <span className="font-['Orbit'] text-xs text-black tracking-wide flex items-center">
                <span className="inline-block w-[5px] h-[5px] bg-black rounded-full mr-1 animate-[blink_1.2s_step-end_infinite]" />
                AVAILABLE FOR WORK
              </span>
              <span className="font-['Orbit'] text-xs text-black tracking-wide">
                SWE · DATA · ML
              </span>
            </div>
          </footer>

        </div>
      )}

    </div>
  );
}

export default LandingPage;