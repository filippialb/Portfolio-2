import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hire from './App';
import Header from './Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hire />
  </React.StrictMode>
);


const header = ReactDOM.createRoot(document.getElementById('header'));
header.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);

