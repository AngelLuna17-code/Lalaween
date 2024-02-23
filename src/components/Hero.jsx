import React from 'react';
import AnimatedText from '../components/AnimatedText.jsx';
import { Link } from 'react-router-dom';

const Hero = () => {
    const logoSrc = 'logo.webp';
    const promoLink = 'promo';

    return (
        <div className='container mx-auto px-[15px] sm:px-0 pt-[125px] pb-8 lg:pt-32 lg:pb-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='flex items-center justify-center'>
                    {/* Componente de logo */}
                    <Logo src={logoSrc} />
                </div>
                <div className='text-white text-center flex items-center justify-center overflow-hidden'>
                    <div>
                        <h1>Impulsamos</h1>
                        <AnimatedText />
                        <h1>conservando tu esencia</h1>
                        <Link to={promoLink}>
                            <button className='w-full lg:w-3/4 bg-[#066a69] hover:bg-[#01a09a] px-12 py-3 font-black rounded-lg mt-3'>
                                Nuestros Paquetes
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Componente de logo memoizado
const Logo = React.memo(({ src }) => (
    <img
        src={src}
        alt="logo"
        loading='Lazy'
        width="400"
        height="160"
        style={{ objectFit: "cover" }}
    />
));


export default Hero;
