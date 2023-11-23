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

      {/* Contenedor centrado para el contenido */}
      <div className=''>
        <Navbar />
      </div>
      <div className='container mx-auto'>
          <Accordion1 />
      </div>
    </div>
  );
}

export default App;
