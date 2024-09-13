import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GreetingPage from './Components/GreetingPage/GreetingPage';
import AlyssaPage from './Components/AlyssaPage/AlyssaPage';


function App() {
  return (
    <div className="container main-wrapper">
      <GreetingPage />
      <AlyssaPage />
    </div>
  );
}

export default App;
