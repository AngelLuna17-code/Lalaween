import React from 'react';
import './App.css';
import Navbar from "./components/Navbar.jsx";
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
