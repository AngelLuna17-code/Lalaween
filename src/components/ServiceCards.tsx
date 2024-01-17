import React, { useState } from 'react';
import CardAnimatedText from "../components/CardAnimatedText.jsx"

export default function App() {
    const [showModal, setShowModal] = useState(false);

    const list = [
        {
            title: "DISEÑO DE MARCA",
            subTitle: "Abarcamos el branding y la identidad corporativa de tu marca.",
            service: "Englobando una serie de elementos clave como la creación de su logotipo, desde su tipografía, figura, estilo y pantones que le brinden una esencia visual distintiva.",
            image: "cards/card-1.webp",
            icon: "icons/LalaWeen-WEB-08.webp",
            showInModal: true
        },
        {
            title: "IDENTIDAD GRAFICA",
            subTitle: "Diseñamos y definimos el aspecto visual de una marca.",
            service: "En base al logotipo, misión, visión y objetivo de la empresa, se realiza el diseño adecuado para impreso o digital de una manera que sea fácil de identificar para el espectador y logre relacionarlo con la marca.",
            image: "cards/card-2.webp",
            icon: "icons/LalaWeen-WEB-09_1.webp",
            showInModal: false
        }
    ];

    return (
        <div className='grid grid-cols-3 gap-5 md:gap-2 lg:gap-3 xl:gap-5 xl:gap-3 2xl:gap-12 overflow-hidden'>
            {list.map((item, index) => (
                <div>
                    <div key={index} className='rounded-t-[15px] rounded-b-[15px] text-white text-center' style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                        <div className='h-[350px] px-5 flex items-center justify-center'>
                            <div>
                                <div>
                                    <p className='title text-2xl'>
                                        {item.title}
                                    </p>
                                </div>
                                <div className='mt-3'>
                                    <img className='mx-auto' style={{ height: "auto", width: "20%" }} src={process.env.PUBLIC_URL + "/" + item.icon} alt={item.title} loading="lazy" />
                                </div>
                                <div className='mt-3'>
                                    <p className='font-black'>
                                        {item.subTitle}
                                    </p>
                                </div>
                                <div className='mt-3'>
                                    <p>
                                        {item.service}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img className='h-[247.63px] w-[322.67px] xl:h-[309.02px] xl:w-[402.67px] 2xl:h-[360.17px] 2xl:w-[469.33px] rounded-b-[15px]' src={process.env.PUBLIC_URL + "/" + item.image} alt={item.title} loading="lazy" />
                        </div>
                    </div>
                </div>
            ))}
            <div className='rounded-t-[15px] rounded-b-[15px] text-white text-center' style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                <div className='h-[350px] px-5 flex items-center justify-center'>
                    <div>
                        <div>
                            <p className='title text-2xl'>
                                REDES SOCIALES Y DISEÑO WEB
                            </p>
                        </div>
                        <div className='mt-3'>
                            <img className='mx-auto' style={{ height: "auto", width: "20%" }} src="icons/LalaWeen-WEB-10.webp" alt="diseño" loading="lazy" />
                        </div>
                        <div>
                        </div>
                        <div className='mt-3'>
                            <CardAnimatedText />
                        </div>
                        <div className='mt-3'>
                            <p>
                                Identificación del público objetivo, creación de contenido en redes sociales para construir relaciones sólidas, y facilitación de adquisiciones a través de una página web atractiva y amigable.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='h-[247.63px] w-[322.67px] xl:h-[309.02px] xl:w-[402.67px] 2xl:h-[360.17px] 2xl:w-[469.33px] rounded-b-[15px]' src="/cards/card-3.webp" alt="diseño" loading="lazy" />
                </div>
            </div>
        </div>
    );
}
