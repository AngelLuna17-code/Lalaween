import React from 'react';
import Footer from "../components/Footer.jsx"
import AnimatedText from "../components/AnimatedText.jsx"
import ServiceCards from "../components/ServiceCards.tsx"

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
        <div className='container mx-auto py-[100px] sm:px-8 md:px-4'>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2'>
                <div className='text-white text-center'>
                    <h2 className='title-container'>Mira nuestro</h2>
                    <h2 className='title-container title'>Portafolio</h2>
                    <p className='pt-5'>
                        Nosotros somos LalaWeen, agencia de publicidad y diseño. El creative team de diseño y marketing, que tu negocio necesita. Con la experiencia que nos respalda llevaremos tu negocio al siguiente nivel.
                    </p>
                </div>
                <div>
                    <p className='text-white text-center'>aqui va un carousel juas juas</p>
                </div>
            </div>
        </div>
        {/* Carrucel */}
        {/* Mapa */}
        <div className='conteiner mx-auto sm:px-8 md:px-4'>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2'>
                <div>
                    <p className='text-white text-center'>Aqui va un mapa</p>
                </div>
                <div className='text-white text-center'>
                    <h2 className='title-container'>Aquí nos</h2>
                    <h2 className='title-container title'>encontramos</h2>
                </div>
            </div>
        </div>
        {/* Mapa */}
        {/* Contacto */}
        <div className='contact-container'>
            <div className='text-white text-center'>
                <h2 className='title-container'>Será un gusto</h2>
                <h2 className='title-container title'>trabajar contigo</h2>
                <a href=''>creativeteam@lalaween.com</a>
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
