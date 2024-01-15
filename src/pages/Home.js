import React from 'react';
import AnimatedText from "../components/AnimatedText.jsx"
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
            <div className='container mx-auto mt-[100px]'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className='flex items-center justify-center'>
                        <picture className='h-auto w-[80%]'>
                            <source media="(min-width: 1024px)" srcset="LOgo.webp.webp" loading='lazy' alt='logo' />
                            <source media="(min-width: 360px)" srcset="/logo-xs.webp" loading='lazy' alt='logo' />
                            <img className='rounded-[15px]' src="/slider/logo-xs.webp" loading='lazy' alt='logo' />
                        </picture>
                    </div>
                    <div className='text-white text-center flex items-center justify-center'>
                        <div>
                            <h1>Impulsamos</h1>
                            <AnimatedText />
                            <h1>conservando tu esencia</h1>
                            <button className='bg-[#066a69] hover:bg-[#01a09a] px-[95px] py-[10px] font-black rounded-lg mt-[20px]'>
                                <a href="/Promo">
                                    Nuestros Paquetes
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Hero */}
            {/* Servicios */}
            <div id='servicios-m' className='container mx-auto py-[50px] py-8 lg:hidden'>
                <ServicesSlider />
            </div>
            <div id='servicios' className='container mx-auto flex justify-center items-center sm:mt-[100px] sm:px-8 md:px-4 hidden lg:block'>
                <Modal />
            </div>
            {/* Servicios */}
            {/* Slider */}
            <div id='productos' className='container mx-auto overflow-hidden lg:py-[80px]'>
                <SliderComponent />
            </div>
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
