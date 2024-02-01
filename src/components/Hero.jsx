import React from 'react';
import AnimatedText from '../components/AnimatedText.jsx';
import { Link } from 'react-router-dom';

const Hero = () => {
    const logoSrc = 'logo.webp';
    const promoLink = 'promo';

    return (
        <div className='container mx-auto pt-16 pb-8 lg:pt-32 lg:pb-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='flex items-center justify-center'>
                    <img
                        src={logoSrc}
                        alt="logo"
                        loading="lazy"
                        style={{ height: "auto", width: "60%" }}
                    />
                </div>
                <div className='text-white text-center flex items-center justify-center mt-3 lg:mt-0'>
                    <div>
                        <h1>Impulsamos</h1>
                        <AnimatedText />
                        <h1>conservando tu esencia</h1>
                        <button className='w-full lg:w-3/4 bg-[#066a69] hover:bg-[#01a09a] px-12 py-3 font-black rounded-lg mt-3'>
                            <Link to={promoLink}>
                                Nuestros Paquetes
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
