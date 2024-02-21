import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Paquete4 = () => {

    return (
        <section>
            <Navbar />
            <div className='container mx-auto py-[100px]'>
                <div className='p-5 rounded-lg' style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                    <div className='text-white'>
                        <div>
                            <h3 className='text-[#00a09b] font-black text-[23px] typing'></h3>
                            <p></p>
                        </div>
                        <div className='mt-5'>
                            <p className='text-[#00a09b] font-thin typing'>Proposito</p>
                            <p className='text-justify'></p>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='typing'>
                            <p className='text-[#00a09b] font-thin typing'>
                                Que implica?
                            </p>
                            <div>
                                <ul className='font-thin'>
                                </ul>
                            </div>
                        </div>
                        <div className='mt-5 typing'>
                            <p className='text-[#00a09b] font-thin typing'>
                                ¿Qué servicios incluye?"
                            </p>
                            <div>
                                <ul className='font-thin'>
                                </ul>
                            </div>
                        </div>
                        <div className='mt-5 typing'>
                            <p className='text-[#00a09b] font-thin typing'>
                                ¿Qué beneficios incluye?
                            </p>
                            <div>
                                <ul className='font-thin'>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='text-center text-white mt-5 typing font-thin'>
                        <p className='line-through'>COSTO REAL</p>
                        <p className='text-[#00a09b]'>COSTO PROMOCIONAL</p>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Paquete4;