import React from 'react';
import Facturar from "../components/Facturar.jsx"
import Footer from "../components/Footer.jsx"
import FloatingButton from "../components/FloatingButton.jsx"
import ScrollToTopButton from "../components/ScrollToTopButton.jsx"

const Facturas = () => {
    return (
        <section>
            {/* Facturar */}
            <Facturar />
            {/* Facturar */}
            {/* Footer */}
            <Footer />
            {/* Footer */}
            {/* Floating Buttons */}
            <ScrollToTopButton />
            <FloatingButton />
            {/* Floating Buttons */}
        </section>
    );
};

export default Facturas;