import React from 'react';
import AnimatedText from "../components/AnimatedText.jsx"
import { Link } from "react-router-dom"

const ServicesSlider = () => {
    return (
        <div className='container mx-auto pt-[150px] pb-[50px]'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='flex items-center justify-center'>
                    <img style={{ height: "auto", width: "65%" }} src="logo.webp" alt="logo" loading="lazy" />
                </div>
                <div className='text-white text-center flex items-center justify-center mt-3 lg:mt-0'>
                    <div>
                        <h1>Impulsamos</h1>
                        <AnimatedText />
                        <h1>conservando tu esencia</h1>
                        <button className=' w-[80%] lg:w-[70%] bg-[#066a69] hover:bg-[#01a09a] px-[95px] py-[10px] font-black rounded-lg mt-3'>
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