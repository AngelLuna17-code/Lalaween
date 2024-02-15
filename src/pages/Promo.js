import React from 'react';
import SmallStars from '../components/SmallStars.jsx';
import Promociones from "../components/Promociones.tsx"
import Promociones2 from '../components/promociones2.jsx';
import Terminos from "../components/Terminos.jsx"
import Footer from "../components/Footer.jsx"
import ScrollToTopButton from "../components/ScrollToTopButton.jsx"
import FloatingButton from "../components/FloatingButton.jsx";
import Modales from '../components/Modales.jsx';

const Promo = () => {
    return (
        <section>
            {/* Stars */}
            <SmallStars />
            {/* Stars */}
            {/* Promociones */}
            <Promociones />
            <Promociones2/>
            <Modales/>
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