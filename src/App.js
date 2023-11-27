import React from 'react';
import './App.css';
import Navbar from "./components/Navbar.jsx";
import Promociones from "./components/Promociones.tsx"
import Footer from "./components/Footer.jsx"

function App() {
  return (
    /* Body */
    <div className="App">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      {/* Navbar */}
      <div>
        <Navbar />
      </div>
      {/* Navbar */}
      {/* Promociones */}
      <div className='container mx-auto px-4 pb-8'>
        <div className='mt-20'>
          <Promociones />
        </div>
      </div>
      {/* Promociones */}
      {/* Footer */}
      <div className='mx-auto'>
        <Footer />
      </div>
      {/* Footer */}
    </div>
    /* Body */
  );
}

export default App;
