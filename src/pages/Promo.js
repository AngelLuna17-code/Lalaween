import React from 'react';
import SmallStars from '../components/SmallStars.jsx';
import Footer from "../components/Footer.jsx"
import ScrollToTopButton from "../components/ScrollToTopButton.jsx"
import FloatingButton from "../components/FloatingButton.jsx";
import Paquetes from '../components/Paquetes.jsx';
const Promo = () => {
    return (
        <section>
            {/* Stars */}
            <SmallStars />
            {/* Stars */}
            {/* Promociones */}
            <Paquetes />
            {/* Promociones */}
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