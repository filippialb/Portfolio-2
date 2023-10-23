import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header/Header';
import Job_done from './jobDone/Job_done';
import Skills from './skills/Skills';
import Get_in_touch from './getInTouch/Get_in_touch';
import Footer from './footer/Footer';
import Nav_logo from './navLogo/Nav_logo';



const header = ReactDOM.createRoot(document.getElementById('header'));
header.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);


const job_done = ReactDOM.createRoot(document.getElementById('job_done'));
job_done.render(
  <React.StrictMode>
    <Job_done />
  </React.StrictMode>
);


const skills = ReactDOM.createRoot(document.getElementById('skills'));
skills.render(
  <React.StrictMode>
    <Skills />
  </React.StrictMode>
);


const get_in_touch = ReactDOM.createRoot(document.getElementById('get_in_touch'));
get_in_touch.render(
  <React.StrictMode>
    <Get_in_touch />
  </React.StrictMode>
);


const footer = ReactDOM.createRoot(document.getElementById('footer'));
footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);



const nav_logo = ReactDOM.createRoot(document.getElementById('nav_logo'));
nav_logo.render(
  <React.StrictMode>
    <Nav_logo />
  </React.StrictMode>
);

