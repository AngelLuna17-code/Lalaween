import React from 'react';
import Promociones from "../components/Promociones.tsx"
import Footer from "../components/Footer.jsx"

const Promo = () => {
    return <div>
        {/* Stars */}
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        {/* Stars */}
        {/* Presentacion */}
        <div className='text-center container mx-auto mt-[150px]'>
            <div>
                <h1 className='text-white font-black'>
                    "¡Despega en Digital! Descubre Nuestras Ofertas Exclusivas para Potenciar tu Presencia en Línea"
                </h1>
            </div>
            <div>
                <p className='text-white'>
                    ¡Potencia tu presencia en línea con nuestras irresistibles promociones y descuentos en servicios de marketing digital! En [Nombre de tu empresa], entendemos la importancia de destacar en el mundo digital, por lo que hemos creado ofertas exclusivas para impulsar tu marca.
                </p>
            </div>
        </div>
        {/* Presentacion */}
        {/* Promociones */}
        <div className='container mx-auto px-4 pb-8'>
            <div className='mt-[100px] mb-[120px]'>
                <Promociones />
            </div>
        </div>
        {/* Promociones */}
        {/* Footer */}
        <Footer />
        {/* Footer */}
    </div>
}

export default Promo;