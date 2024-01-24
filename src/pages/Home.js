import React from 'react';
import Hero from "../components/Hero.jsx"
import Mapa from "../components/Mapa.jsx"
import SliderComponent from "../components/SliderComponent.jsx"
import ServicesSlider from "../components/ServicesSlider.jsx"
import Footer from "../components/Footer.jsx"
import FloatingButton from "../components/FloatingButton.jsx"
import ScrollToTopButton from "../components/ScrollToTopButton.jsx"
import Modal from "../components/Modal.jsx"


const Home = () => {
    return (
        <div>
            {/* Stars */}
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
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
            <div className='container mx-auto overflow-hidden py-8'>
                <Mapa />
            </div>
            {/* Mapa */}
            {/* Contacto */}
            <div className='contact-container'>
                <div className='text-white text-center'>
                    <div>
                        <h2 className='title-container text-[25px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl-[44px] 2xl:text-[48px]'>Será un gusto</h2>
                        <h2 className='title-container title text-[25px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl-[44px] 2xl:text-[48px]'>trabajar contigo</h2>
                    </div>
                    <div className='mt-2'>
                        <a className='hover:text-[#00cac4] text-2xl' href="mailto:CreativeTeam@LalaWeen.com" target="blank">creativeteam@lalaween.com</a>
                    </div>
                </div>
            </div>
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