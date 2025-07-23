import GreetingPage from './Components/GreetingPage/GreetingPage';
import AlyssaPage from './Components/AlyssaPage/AlyssaPage';
import MyNavBar from './Components/MyNavBar/MyNavBar';
import ProjectsPage from './Components/ProjectsPage/ProjectsPage';
import FadeInSection from './Components/FadeInSection/FadeInSection';

function App() {
  return (
    <div className="w-full m-0 flex flex-col items-center justify-center min-h-screen w-full">
      <MyNavBar 
        greetingHref={"#greeting-page"} 
        aboutHref={"#alyssa-page"}
        projectsHref={"#projects-page"}
      />
      <GreetingPage/>
      <AlyssaPage />
      <ProjectsPage />
    </div>
  );
}

export default App;