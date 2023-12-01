import React from 'react';
import Footer from "../components/Footer.jsx"
import AnimatedText from "../components/AnimatedText.jsx"
import ServiceCards from "../components/ServiceCards.tsx"
import Mapa from "../components/Mapa.jsx"

const Home = () => {
    return <div>
        {/* Stars */}
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        {/* Stars */}
        {/* Hero */}
        <div className='container mx-auto mt-[50px]'>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2'>
                <div className='flex items-center'>
                    <img style={{ height: "80%", width: "100%" }} src="/logo.svg" alt="logo" />
                </div>
                <div className='text-white text-center flex items-center justify-center'>
                    <div>
                        <h1>Impulsamos</h1>
                        <AnimatedText />
                        <h1>conservando tu esencia</h1>
                        <a href="">
                            <button className='bg-[#066a69] hover:bg-[#01a09a] px-[95px] py-[10px] font-black rounded-lg mt-[20px]'>Nuestros paquetes</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* Hero */}
        {/* Servicios */}
        <div className='container mx-auto flex justify-center items-center sm:mt-[100px] sm:px-8 md:px-4'>
            <ServiceCards />
        </div>
        {/* Servicios */}
        {/* Footer */}
        {/* Carrucel */}
        <div className='container mx-auto  sm:px-8 md:px-4 py-12'>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2'>
                <div className='text-white text-center'>
                    <h2 className='title-container'>Mira nuestro</h2>
                    <h2 className='title-container title'>Portafolio</h2>
                    <p className='mt-5'>
                        Nosotros somos LalaWeen, agencia de publicidad y diseño. El creative team de diseño y marketing, que tu negocio necesita. Con la experiencia que nos respalda llevaremos tu negocio al siguiente nivel.
                    </p>
                </div>
                <div>
                </div>
            </div>
        </div>
        {/* Carrucel */}
        {/* Mapa */}
        <div className='container mx-auto  sm:px-8 md:px-4 overflow-hidden py-12'>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2'>
                <div className='text-white text-center map-title-sm sm:py-[50px]'>
                    <h2 className='title-container'>Aquí nos</h2>
                    <h2 className='title-container title'>encontramos</h2>
                </div>
                <div>
                    <div className='flex items-center justify-center'>
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
                    <div className='text-white text-center map-title-lg'>
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
                <div className='mt-8'>
                    <a className='hover:text-[#00cac4] text-[27px]' href="mailto:CreativeTeam@LalaWeen.com" target="blank">creativeteam@lalaween.com</a>
                </div>
            </div>
        </div>
        {/* Contacto */}
        {/* Footer */}
        <div>
            <Footer />
        </div>
        {/* Footer */}
    </div >
}

export default Home;
