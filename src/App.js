import React from 'react';
import './App.css';
import Navbar from "./components/Navbar.jsx";
import Promociones from "./components/Promociones.tsx"

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
        <div className=''>
          <Promociones/>
        </div>
      </div>
    </div>
  );
}

export default App;
