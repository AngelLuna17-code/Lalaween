import React from 'react';

export default function App() {
    const list = [
        {
            title: "MARKETING DIGITAL",
            subTitle: "Tu negocio en contacto con el mundo.",
            service: "Creación de contenido y manejo de tus redes sociales.",
            image: "cards/card-1.webp"
        },
        {
            title: "DISEÑO GRAFICO",
            subTitle: "Tu imagen corporativa importa.",
            service: "Diseños atractivos y personalizados.",
            image: "cards/card-2.webp"
        },
        {
            title: "DISEÑO WEB",
            subTitle: "Tu negocio al alcance de un click",
            service: "Programación y diseño de tu sitio web a tu medida.",
            image: "cards/card-3.webp"
        }
    ];

    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5 md:gap-2 lg:gap-3 xl:gap-5 xl:gap-3 2xl:gap-12 overflow-hidden'>
            {list.map((item, index) => (
                <div className='rounded-t-[15px] text-white text-center' style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                    <div className='lg:min-h-[230px] py-8 px-2 flex items-center justify-center'>
                        <div>
                            <div>
                                <h2 className='title'>
                                    {item.title}
                                </h2>
                            </div>
                            <div>
                                <p>
                                    {item.subTitle}
                                </p>
                            </div>
                            <div>
                                <p>
                                    {item.service}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-b-lg'>
                        <img className='rounded-b-[15px]' src={process.env.PUBLIC_URL + "/" + item.image} alt={item.title} />
                    </div>
                </div>
            ))}
        </div>
    );
}
