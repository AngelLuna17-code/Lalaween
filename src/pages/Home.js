import React from 'react';
import Footer from "../components/Footer.jsx"
import AnimatedText from "../components/AnimatedText.jsx"

const Home = () => {
    return <div>
        {/* Stars */}
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        {/* Stars */}
        {/* Hero */}
        <div className='container mx-auto'>
            <div className='grid grid-cols-2'>
                <div className='flex items-center'>
                    <img style={{ height: "80%", width: "100%" }} src="/logo.svg" alt="logo" />
                </div>
                <div className='text-white text-center flex items-center justify-center'>
                    <div>
                        <h1>Impulsamos</h1>
                        <AnimatedText />
                        <h1>conservando tu esencia</h1>
                        <a href="">
                            <button className='bg-[#066a69] hover:bg-[#01a09a] px-[90px] py-[10px] font-black rounded-lg'>Nuestros paquetes</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* Hero */}
        {/* Footer */}
        <Footer />
        {/* Footer */}
    </div >
}

export default Home;
