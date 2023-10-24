import './App.css';
import { NavLogo } from "./navLogo/Nav_logo";
import { Header } from "./header/Header";
import { JobDone } from "./jobDone/JobDone";
import { Skills } from "./skills/Skills";
import { GetInTouch } from "./getInTouch/GetInTouch";
import { Footer } from "./footer/Footer";



  function App() { 
    return (
      <div>
        <div><NavLogo /></div>
  
        <div id="header"><Header /></div>
    
        <div id="job_done"><JobDone /></div>
    
        <div id="skills"><Skills /></div>
    
        <div id="get_in_touch"><GetInTouch /></div>
    
        <div id="footer"><Footer /></div>
      </div>
    );
  };




export default App;
