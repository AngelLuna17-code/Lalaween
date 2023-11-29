import React from 'react';
import Promociones from "../components/Promociones.tsx"
import Footer from "../components/Footer.jsx"

const Promo = () => {
    return <div>
        {/* Stars */}
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        {/* Stars */}
        {/* Promociones */}
        <div className='container mx-auto px-4 pb-8'>
            <div className='mt-[100px]'>
                <Promociones />
            </div>
        </div>
        {/* Promociones */}
        {/* Footer */}
        <Footer />
        {/* Footer */}
    </div>
}

export default Promo;