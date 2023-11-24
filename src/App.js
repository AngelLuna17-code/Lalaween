import React from 'react';
import './App.css';
import Navbar from "./components/Navbar.jsx";
import Promociones from "./components/Promociones.tsx"
import Promociones2 from "./components/Promociones2.tsx"

function App() {
  return (
    <div className="App">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div>
        <Navbar />
      </div>
      <div className='container mx-auto'>
        <div className='mt-20'>
          <Promociones />

        </div>
      </div>
    </div>
  );
}

export default App;
