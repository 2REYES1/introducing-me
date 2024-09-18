import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import GreetingPage from './Components/GreetingPage/GreetingPage';
import AlyssaPage from './Components/AlyssaPage/AlyssaPage';
import MyNavBar from './Components/MyNavBar/MyNavBar';
import ProjectsPage from './Components/ProjectsPage/ProjectsPage';


function App() {
  return (
    <div className="container main-wrapper">
      <MyNavBar greetingHref={"#greeting-page"} aboutHref={"#alyssa-page"} projectsHref={"#projects-page"}/>
      <GreetingPage />
      <AlyssaPage />
      <ProjectsPage />
    </div>
  );
}

export default App;
