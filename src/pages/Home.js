import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import { useNavigate, useLocation } from 'react-router-dom';
import Stars from "../components/Stars.jsx";
import Hero from "../components/Hero.jsx";
import ServicesSlider from "../components/ServicesSlider.jsx";
import ServiceCards from "../components/ServiceCards.jsx";
import SliderComponent from "../components/SliderComponent.jsx";
import Mapa from "../components/Mapa.jsx";
import Contacto from "../components/Contacto.jsx";
import Footer from "../components/Footer.jsx";
import FloatingButton from "../components/FloatingButton.jsx";
import ScrollToTopButton from "../components/ScrollToTopButton.jsx";

const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const scrollTo = params.get('scrollTo');

        if (scrollTo) {
            const targetElement = document.getElementById(scrollTo);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location.search]);

    return (
        <section>
            {/* Stars */}
            <Stars />
            {/* Stars */}
            {/* Hero */}
            <Hero />
            {/* Hero */}
            {/* Servicios */}
            <Element name="servicios-section">
                <ServiceCards />
            </Element>
            {/* Servicios */}
            {/* Slider */}
            <Element name="portafolio-section">
                <SliderComponent />
            </Element>
            {/* Slider */}
            {/* Mapa */}
            <Mapa />
            {/* Mapa */}
            {/* Contacto */}
            <Contacto />
            {/* Contacto */}
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

export default Home;
