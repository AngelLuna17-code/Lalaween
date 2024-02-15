import React from 'react';
import SmallStars from "../components/SmallStars.jsx"
import Facturar from "../components/Facturar.jsx"
import Footer from "../components/Footer.jsx"
import FloatingButton from "../components/FloatingButton.jsx"
import ScrollToTopButton from "../components/ScrollToTopButton.jsx"

const Facturas = () => {
    return (
        <section>
            {/* Stars */}
            <SmallStars />
            {/* Stars */}
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