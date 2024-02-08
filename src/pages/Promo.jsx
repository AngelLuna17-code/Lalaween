import React from 'react';
import SmallStars from '../components/SmallStars.jsx';
import Promociones from "../components/Promociones.tsx"
import Terminos from "../components/Terminos.jsx"
import Footer from "../components/Footer.jsx"
import ScrollToTopButton from "../components/ScrollToTopButton.jsx"
import FloatingButton from "../components/FloatingButton.jsx";

const Promo = () => {
    return (
        <section>
            {/* Stars */}
            <SmallStars />
            {/* Stars */}
            {/* Promociones */}
            <Promociones />
            {/* Promociones */}
            {/* Terminos y condiciones */}
            <Terminos />
            {/* Terminos y condiciones */}
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

export default Promo;