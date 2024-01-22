import React from 'react';
import Facturar from "../components/Facturar.jsx"

import Footer from "../components/Footer.jsx"
import FloatingButton from "../components/FloatingButton.jsx"
import ScrollToTopButton from "../components/ScrollToTopButton.jsx"

const Facturas = () => {
    return (
        <div>
            {/* Facturar */}
            <div className="container mx-auto py-[100px]">
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