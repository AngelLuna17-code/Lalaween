import React from 'react';
import Promociones from "../components/Promociones.tsx"
import Footer from "../components/Footer.jsx"

const About = () => {
    return <div>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className='container mx-auto px-4 pb-8'>
            <div className='mt-10'>
                <Promociones />
            </div>
            {/* Footer */}
            <div className=''>
                <Footer />
            </div>
            {/* Footer */}
        </div>
    </div>
}

export default About;