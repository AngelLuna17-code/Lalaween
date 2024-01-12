import React from 'react';
import Facturar from "../components/Facturar.jsx"

import Footer from "../components/Footer.jsx"
import FloatingButton from "../components/FloatingButton.jsx"
import ScrollToTopButton from "../components/ScrollToTopButton.jsx"

const Facturas = () => {
    return (
        <div>
            {/* Stars */}
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            {/* Stars */}
            {/* Facturar */}
            <div className="container mx-auto mt-[200px]">
                <Facturar />
            </div>
            {/* Facturar */}
            {/* Footer */}
            <div>
                <Footer />
            </div>
            {/* Footer */}
            {/* Floating Buttons */}
            <ScrollToTopButton />
            <FloatingButton />
            {/* Floating Buttons */}
        </div>
    );
};

export default Facturas;