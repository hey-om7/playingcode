
import './App.scss';
import Home from "./home/Home";
import Topbar from './topbar/Topbar';
import Projects1 from './projects1/Projects1';
import Projects2 from './projects2/Projects2';
import Intro from './intro/Intro';
import LearnTables from './projects/learnTables/LearnTables';
// import bgImg from "../public/assets/ocean_bg.png";


function App() {

  return (
    <div className="App">
      <Topbar></Topbar>
      <div className="sections">
        <Home></Home>
        <Intro></Intro>
        <Projects1></Projects1>
        <LearnTables></LearnTables>

      </div>


    </div>
  );
}

export default App;
