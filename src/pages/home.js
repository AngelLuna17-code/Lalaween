import React from 'react';
import Footer from "../components/Footer.jsx"

const Home = () => {
    return <div>
        {/* Stars */}
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        {/* Stars */}
        <div className='container mx-auto px-4 pb-8'>
            <h1 className='text-white'>Lalaween</h1>
        </div>
        {/* Footer */}
        <Footer />
        {/* Footer */}
    </div >
}

export default Home;