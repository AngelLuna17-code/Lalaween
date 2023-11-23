import React from 'react';
import './App.css';
import Navbar from "./components/Navbar.jsx";
import Accordion1 from "./components/Accordion1.jsx";

function App() {
  return (
    <div className="App w-screen">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div>
        <Navbar />
      </div>
      <div className='container mx-auto'>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-5'>
          <Accordion1 />
        </div>
      </div>
    </div>
  );
}

export default App;
