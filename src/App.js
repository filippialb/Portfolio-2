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
  
        <div><Header /></div>
    
        <div><JobDone /></div>
    
        <div><Skills /></div>
    
        <div><GetInTouch /></div>
    
        <div><Footer /></div>
      </div>
    );
  };




export default App;
