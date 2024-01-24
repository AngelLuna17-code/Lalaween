import React from 'react';
import Stars from "../components/Stars.jsx"
import Hero from "../components/Hero.jsx"
import ServicesSlider from "../components/ServicesSlider.jsx"
import Modal from "../components/Modal.jsx"
import SliderComponent from "../components/SliderComponent.jsx"
import Mapa from "../components/Mapa.jsx"
import Contacto from "../components/Contacto.jsx"
import Footer from "../components/Footer.jsx"
import FloatingButton from "../components/FloatingButton.jsx"
import ScrollToTopButton from "../components/ScrollToTopButton.jsx"

const Home = () => {
    return (
        <div>
            {/* Stars */}
            <Stars />
            {/* Stars */}
            {/* Hero */}
            <Hero />
            {/* Hero */}
            {/* Servicios */}
            <ServicesSlider />
            <Modal />
            {/* Servicios */}
            {/* Slider */}
            <SliderComponent />
            {/* Slider */}
            {/* Mapa */}
            <Mapa />
            {/* Mapa */}
            {/* Contacto */}
            <Contacto />
            {/* Contacto */}
            {/* Footer */}
            <div>
                <Footer />
            </div>
            {/* Footer */}
            {/* Floating Buttons */}
            <ScrollToTopButton />
            <FloatingButton />
            {/* Floating Buttons */}
        </div >
    );
};

export default Home;