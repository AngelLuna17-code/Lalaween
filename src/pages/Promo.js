import React from 'react';
import Promociones from "../components/Promociones.tsx"
import Terminos from "../components/Terminos.jsx"
import Footer from "../components/Footer.jsx"
import ScrollToTopButton from "../components/ScrollToTopButton.jsx"
import FloatingButton from "../components/FloatingButton.jsx";

const Promo = () => {
    return (
        <section>
            {/* Stars */}
            {/* Stars */}
            {/* Presentacion */}
            <div className='text-center container mx-auto mt-[150px]'>
                <div>
                    <h1 className='text-white font-black text-[25px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl-[44px] 2xl:text-[48px]'>
                        "¡Despega en Digital! Descubre Nuestras Ofertas Exclusivas para Potenciar tu Presencia en Línea"
                    </h1>
                </div>
                <div>
                    <p className='text-white text-[20px]'>
                        ¡Potencia tu presencia en línea con nuestras irresistibles promociones y descuentos en servicios de marketing digital! En [Nombre de tu empresa], entendemos la importancia de destacar en el mundo digital, por lo que hemos creado ofertas exclusivas para impulsar tu marca.
                    </p>
                </div>
            </div>
            {/* Presentacion */}
            {/* Promociones */}
            <Promociones />
            {/* Promociones */}
            {/* Terminos y condiciones */}
            <Terminos />
            {/* Terminos y condiciones */}
            {/* Footer */}
            <Footer />
            {/* Footer */}
            {/* Floating Buttons */}
            <ScrollToTopButton />
            <FloatingButton />
            {/* Floating Buttons */}
        </section>
    );
};

export default Promo;