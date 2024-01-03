import React, { useState } from 'react';
import CardAnimatedText from "../components/CardAnimatedText.jsx"

export default function App() {
    const [showModal, setShowModal] = useState(false);

    const list = [
        {
            title: "MARKETING DIGITAL",
            subTitle: "Tu negocio en contacto con el mundo.",
            service: "Creación de contenido y manejo de tus redes sociales.",
            image: "cards/card-1.webp",
            icon: "icons/LalaWeen-WEB-08.webp",
            showInModal: true
        },
        {
            title: "DISEÑO WEB",
            subTitle: "Tu negocio al alcance de un click",
            service: "Programación y diseño de tu sitio web a tu medida.",
            image: "cards/card-3.webp",
            icon: "icons/LalaWeen-WEB-10.webp",
            showInModal: false
        }
    ];

    return (
        <div className='grid grid-cols-3 gap-5 md:gap-2 lg:gap-3 xl:gap-5 xl:gap-3 2xl:gap-12 overflow-hidden'>
            {list.map((item, index) => (
                <div>
                    <div key={index} className='rounded-t-[15px] rounded-b-[15px] text-white text-center' style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                        <div className='lg:min-h-[230px] py-8 px-2 flex items-center justify-center lg:max-h-[230px] xl:max-h-[245px] 2xl:min-h-[260px]'>
                            <div>
                                <div>
                                    <p className='title text-2xl'>
                                        {item.title}
                                    </p>
                                </div>
                                <div>
                                    <img className='mx-auto' style={{ height: "auto", width: "20%" }} src={process.env.PUBLIC_URL + "/" + item.icon} alt={item.title} loading="lazy"/>
                                </div>
                                <div>
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
                            <img className='h-[247.63px] w-[322.67px] xl:h-[309.02px] xl:w-[402.67px] 2xl:h-[360.17px] 2xl:w-[469.33px] rounded-b-[15px]' src={process.env.PUBLIC_URL + "/" + item.image} alt={item.title} loading="lazy"/>
                        </div>
                    </div>
                </div>
            ))}
            <div className='rounded-t-[15px] rounded-b-[15px] text-white text-center ' style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                <div className='lg:max-h-[230px] xl:max-h-[245px] 2xl:min-h-[260px] py-8 px-2 flex items-center justify-center'>
                    <div>
                        <div>
                            <p className='title text-2xl'>
                                DISEÑO GRAFICO
                            </p>
                        </div>
                        <div>
                            <img className='mx-auto' style={{ height: "auto", width: "20%" }} src="/icons/LalaWeen-WEB-09_1.webp" alt="diseño" loading="lazy"/>
                        </div>
                        <div>
                        </div>
                        <div>
                            <p className='font-black '>
                                Tu imagen corporativa importa.
                            </p>
                        </div>
                        <div>
                            <CardAnimatedText />
                        </div>
                        <div className='mt-3'>
                            <p>
                                Diseños atractivos y personalizados.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='h-[247.63px] w-[322.67px] xl:h-[309.02px] xl:w-[402.67px] 2xl:h-[360.17px] 2xl:w-[469.33px] rounded-b-[15px]' src="/cards/card-2.webp" alt="diseño" loading="lazy"/>
                </div>
            </div>
        </div>
    );
}
