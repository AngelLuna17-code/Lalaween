import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Paquete1 = () => {

    return (
        <section>
            <Navbar />
            <div className='container mx-auto py-[100px]'>
                <h1>Paquete 1</h1>
            </div>
            <Footer />
        </section>
    );
};

export default Paquete1;