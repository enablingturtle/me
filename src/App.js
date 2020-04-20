import React from 'react';
import './App.css';
import Home from './components/home.jsx';
import About from './components/about.jsx';
import CV from './components/resume.jsx';
import Footer from './components/footer';

function App() {
  return (
      <div>
        <div id="header">
          <Home></Home>
        </div>
        <div id="about">
          <About></About>
        </div>
        <div id="resume">
          <CV></CV>
        </div>
        <div id="footer">
          <Footer></Footer>
        </div>
      </div>
  );
}

export default App;
