import React from 'react';
import AnimatedText from "../components/AnimatedText.jsx"
import { Link } from "react-router-dom"

const ServicesSlider = () => {
    return (
        <div className='container mx-auto mt-[100px]'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='flex items-center justify-center'>
                    <div>
                        <img class="w-full h-[281.27px] sm:h-[480.03px] md:h-[576.05] lg:h-[384.03px] xl:h-[480.03px] 2xl:h-[576.05px]" src="logo.webp" alt="logo" loading="lazy" />
                    </div>
                </div>
                <div className='text-white text-center flex items-center justify-center'>
                    <div>
                        <h1>Impulsamos</h1>
                        <AnimatedText />
                        <h1>conservando tu esencia</h1>
                        <button className='bg-[#066a69] hover:bg-[#01a09a] px-[95px] py-[10px] font-black rounded-lg mt-[20px]'>
                            <Link to="promo">
                                Nuestros Paquetes
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesSlider;