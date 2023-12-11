import React from 'react';
import Footer from "../components/Footer.jsx"
import AnimatedText from "../components/AnimatedText.jsx"
import CardAnimatedText from "../components/CardAnimatedText.jsx"
import ServiceCards from "../components/ServiceCards.tsx"
import Mapa from "../components/Mapa.jsx"
import SliderComponent from "../components/SliderComponent.jsx"
import ServicesSlider from '../components/ServicesSlider.jsx'
import ScrollToTopButton from "../components/ScrollToTopButton.jsx"
import FloatingButton from "../components/FloatingButton.jsx";

const Home = () => {
    return <div>
        {/* Stars */}
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        {/* Stars */}
        {/* Hero */}
        <div className='xs:container sm:container md:container lg:container xl:container 2xl:container container mx-auto mt-[50px]'>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2'>
                <div className='flex items-center'>
                    <img style={{ height: "75%", width: "100%" }} src="/logo.svg" alt="logo" />
                </div>
                <div className='text-white text-center flex items-center justify-center'>
                    <div>
                        <h1 className='xs:text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px] 2xl:text-[52px]'>Impulsamos</h1>
                        <AnimatedText />
                        <h1 className='xs:text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px] 2xl:text-[52px]'>conservando tu esencia</h1>
                        <a href="">
                            <button className='bg-[#066a69] hover:bg-[#01a09a] px-[95px] py-[10px] font-black rounded-lg mt-[20px]'>Nuestros paquetes</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* Hero */}
        {/* Servicios */}
        <div className='container xs:container sm:container md:container lg:container xl:container 2xl:container mx-auto sm:py-[50px] xs:py-8 lg:hidden'>
            <ServicesSlider />
        </div>
        <div className='container xs:container sm:container md:container lg:container xl:container 2xl:container mx-auto flex justify-center items-center sm:mt-[100px] sm:px-8 md:px-4 xs:hidden lg:block'>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5 md:gap-2 lg:gap-3 xl:gap-5 xl:gap-3 2xl:gap-12 overflow-hidden'>
                <ServiceCards />
                <div className='rounded-t-[15px] rounded-b-[15px] text-white text-center ' style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                    <div className='lg:max-h-[230px] xl:max-h-[245px] 2xl:min-h-[260px] py-8 px-2 flex items-center justify-center'>
                        <div>
                            <div>
                                <p className='title text-2xl'>
                                    DISEÑO GRAFICO
                                </p>
                            </div>
                            <div >
                                <img className='mx-auto' style={{ height: "auto", width: "20%" }} src="/icons/LalaWeen-WEB-09_1.webp" alt="diseño" />
                            </div>
                            <div>
                            </div>
                            <div>
                                <p className='font-black '>
                                    Tu imagen corporativa importa.
                                </p>
                            </div>
                            <div>
                                <CardAnimatedText />
                            </div>
                            <div className='mt-3'>
                                <p>
                                    Diseños atractivos y personalizados.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className='rounded-b-[15px]' src="/cards/card-2.webp" alt="diseño" />
                    </div>
                </div>
            </div>
        </div>
        {/* Servicios */}
        {/* Slider */}
        <div className='container xs:container sm:container md:container lg:container xl:container 2xl:container mx-auto xs:py-8 sm:py-[50px]'>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2'>
                <div className='text-white text-center flex items-center justify-center'>
                    <div>
                        <div>
                            <h2 className='title-container'>Mira nuestro</h2>
                            <h2 className='title-container title'>portafolio</h2>
                        </div>
                        <div className='xs:w-[90%] 2xl:w-[75%] mt-8 mx-auto'>
                            <p>Nosotros somos LalaWeen, agencia de publicidad y diseño. El creative team de diseño y marketing, que tu negocio necesita. Con la experiencia que nos respalda llevaremos tu negocio al siguiente nivel.</p>
                        </div>
                    </div>
                </div>
                <div className='container xs:container sm:container md:container lg:container xl:container 2xl:container xs:mt-8'>
                    <SliderComponent />
                </div>
            </div>
        </div>
        {/* Slider */}
        {/* Mapa */}
        <div className='container mx-auto overflow-hidden xs:py-8'>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2'>
                <div className='text-white text-center lg:hidden'>
                    <h2 className='title-container'>Aquí nos</h2>
                    <h2 className='title-container title'>encontramos</h2>
                </div>
                <div>
                    <div className='flex items-center justify-center xs:mt-5 lg:mt-0'>
                        <Mapa />
                    </div>
                    <div className='mt-5'>
                        <p className='text-white text-center'>
                            Lago Erie 77, Lagos del Country, 63175 Tepic, Nay.
                        </p>
                        <a href='https://maps.app.goo.gl/qwFmJHHRY3W8afux7' target='blank'>
                            <p className='text-white text-center font-bold hover:text-[#00cac4]'>Ver mapa</p>
                        </a>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='text-white text-center xs:hidden lg:block'>
                        <h2 className='title-container'>Aquí nos</h2>
                        <h2 className='title-container title'>encontramos</h2>
                    </div>
                </div>
            </div>
        </div>
        {/* Mapa */}
        {/* Contacto */}
        <div className='contact-container'>
            <div className='text-white text-center'>
                <h2 className='title-container'>Será un gusto</h2>
                <h2 className='title-container title'>trabajar contigo</h2>
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
}

export default Home;
