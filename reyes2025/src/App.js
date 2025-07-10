import GreetingPage from './Components/GreetingPage/GreetingPage';
import AlyssaPage from './Components/AlyssaPage/AlyssaPage';
import MyNavBar from './Components/MyNavBar/MyNavBar';
import ProjectsPage from './Components/ProjectsPage/ProjectsPage';
import FadeInSection from './Components/FadeInSection/FadeInSection';

function App() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
      <MyNavBar 
        greetingHref={"#greeting-page"} 
        aboutHref={"#alyssa-page"}
        projectsHref={"#projects-page"}
      />
      <GreetingPage/>
      {/* <FadeInSection><AlyssaPage /></FadeInSection>
      <FadeInSection><ProjectsPage /></FadeInSection> */}
    </div>
  );
}

export default App;