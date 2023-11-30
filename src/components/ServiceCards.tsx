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
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-2 lg:gap-5 xl:gap-5 xl:gap-3 2xl:gap-5 overflow-hidden'>
            {list.map((item, index) => (
                <div className='p-5 rounded-lg text-white text-center' style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
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
                    <div>
                        <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.title} />                    </div>
                </div>
            ))}
        </div>
    );
}
