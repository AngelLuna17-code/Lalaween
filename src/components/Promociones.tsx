import React from 'react';

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-item text-white bg-[#111827] rounded-lg p-2">
            <div className="accordion-title" onClick={toggleAccordion}>
                <div className='flex justify-between'>
                    <div className='1'>
                        <h5 className='text-[#00a09b]'>{title}</h5>
                    </div>
                    <div className='2'>
                        {isOpen ? '▲' : '▼'}
                    </div>
                </div>
            </div>
            {isOpen &&
                <div className="accordion-content">
                    <div className='p-2'>
                        {content}
                    </div>
                </div>
            }
        </div>
    );
};
export default function App() {
    const list = [
        /* Pa' que le emprendas */
        {
            titlePaq: "Pa' que le emprendas",
            sub: "En sus marcas, listos... ¡¡Fuera!!",
            proposito: "Diseñar para comunicar de manera efectiva la personalidad, esencia e identidad de tu marca. Para generar un lanzamiento positivo desde la creación de su logotipo y a través de campañas publicitarias en redes sociales e impresos con diseños óptimos y atractivos para el nicho de mercado al que su negocio desee llegar, sin perder su autenticidad.",
            oldPrice: "$8,100.00 + IVA",
            newPrice: "$3,500.00 + IVA",

            li1item1: "Asesoramiento en la personalización de la idea de negocio.",
            li1item2: "Creación de Logotipo para la identidad de tu marca.",
            li1item3: "Acompañamiento en el proceso de implementación en las campañas publicitarias en redes sociales.",

            li2item1: "Diseño de Logotipo",
            li2item2: "Creación de cuentas para la marca en redes sociales (Facebook, Instagram y/o Tiktok).",
            li2item3: "Diseño de plantillas para redes sociales (Portada, Perfil y Publicaciones).",
            li2item4: "12 Publicaciones en imagen.",
            li2item5: "4 Historias (imagen y video).",
            li2item6: "1 Social video para reel o tiktok.",
            li2item7: "1 Diseño de tarjeta de presentación en formato JPG para impresión",
            li2item8: "1 Diseño de Volante en formato JPG para impresión",
            li2item9: "1 Diseño de firma para correo en PNG y JPG para uso digital.",

            li3item1: "Se realizan 3 propuestas de logotipo y se selecciona uno que será entregado en formato .JPG .PNG .Ai y .EPS.",
            li3item2: "Formato optimizado para Facebook e Instagram.",
            li3item3: "Publicación del contenido trabajado para redes y administración de redes sociales durante un mes.",
            li3item4: "Coaching de comunicación visual para la ponencia online e impresos.",
            li3item5: "Asesoramiento general para pautas en redes sociales.",
        },
        /* Pa' que le emprendas */
        /* Pa' queten bien informados */
        {
            titlePaq: "Pa' queten bien informados",
            sub: "Ante una incognita se la solución",
            proposito: "Diseñar y ejecutar de manera efectiva campañas publicitarias e informativas sin que la marca pierda su esencia y autenticidad, a través de un lanzamiento positivo en redes sociales con diseños óptimos y atractivos para el nicho de mercado al que su negocio desee llegar.",
            oldPrice: "$5,800.00 + IVA * Mes",
            newPrice: "$3,780.00 + IVA * Mes",

            li1item1: "Asesoramiento en la personalización de las redes sociales según su marca.",
            li1item2: "Acompañamiento en el proceso de implementación en las campañas publicitarias en redes sociales.",

            li2item1: "Creación de cuentas para la marca en redes sociales (Facebook, Instagram y/o Tiktok).",
            li2item2: "Diseño de plantillas para redes sociales (Portada, Perfil y Publicaciones).",
            li2item3: " 4 Publicaciones en imagen tipo slide (Máximo 10 imagenes).",
            li2item4: "8 Historias (imagen y video).",
            li2item5: "4 Social video para reel o tiktok.",

            li3item1: "Formato optimizado para Facebook e Instagram",
            li3item2: "Publicación del contenido trabajado para redes y administración de redes sociales durante un mes.",
            li3item3: "Coaching de comunicación visual para la ponencia online e impresos.",
            li3item4: "Asesoramiento general para pautas en redes sociales.",
        },
        /* Pa' queten bien informadoss */
        /* Pa' quete encuentren siempre */
        {
            titlePaq: "Pa' quete encuentren siempre",
            sub: "Ante la duda una solución",
            proposito: "Mejorar la experiencia de sus usuarios y lograr un mayor alcance, con un máximo nivel de exposición posible para cumplir satisfactoriamente las necesidades de su nicho; conservando la autenticidad y personalidad de su marca, a través de un lanzamiento activo en redes sociales e implementación de su página web.",
            oldPrice: "$26,950.00 + IVA * Mes",
            newPrice: "$15,950.00 + IVA * Mes",

            li1item1: "Implantación de soluciones digitales (Redes sociales y Pagina Web).",
            li1item2: "Asesoramiento en la personalización de las distribución digital de su marca.",
            li1item3: "Acompañamiento en el proceso de implementación en las campañas publicitarias en redes sociales.",

            li2item1: "Desarrollo y diseño de su página Web",
            li2item2: "Creación de cuentas para la marca en redes sociales (Facebook, Instagram y/o Tiktok).",
            li2item3: "Diseño de plantillas para redes sociales (Portada, Perfil y Publicaciones).",
            li2item4: "3 Publicaciones en imagen.",
            li2item5: " 8 Publicaciones en imagen tipo slide (Máximo 10 imagenes).",
            li2item6: "12 Historias (imagen y video).",
            li2item7: "4 Social video para reel o tiktok.",

            li3item1: "Formato optimizado para Facebook e Instagram.",
            li3item2: "Publicación del contenido trabajado para redes y administración de redes sociales durante un mes.",
            li3item3: "Gestión, asesoria y el mantenimiento de la página Web.",
            li3item4: "Asesoramiento general para pautas en redes sociales.",
            li3item5: "Coaching de comunicación visual para la ponencia online e impresos.",
        },
        /* Pa' quete encuentren siempre */
        /* Pa' que economices */
        {
            titlePaq: "Pa' que economices",
            sub: "Inicia tu presencia en redes sociales y crece tu negocio",
            proposito: "Porque sabemos que vas empezando, pero el diseño no es lo tuyo o no tienes tiempo de crear contenido, con esto buscamos crear diseños atractivos y funcionales que le den el toque profesional a las redes sociales de tu negocio",
            oldPrice: "$5,250.00 + IVA * Mes",
            newPrice: "$2,625.00 + IVA * Mes",

            li1item1: "Personalizar tus redes en base a tu marca",
            li1item2: "Mejorar la calidad visual del contenido de tus redes sociales",

            li2item1: "Diseño de plantillas para redes sociales (Portada, Perfil y Publicaciones).",
            li2item2: "12 Publicaciones en imagen.",
            li2item3: "4 Publicaciones en imagen tipo slide (Máximo 5 imagenes).",
            li2item4: "4 Social video para reel o tiktok.",

            li3item1: "Formato optimizado para Facebook e Instagram.",
            li3item2: "Entrega de archivos finales en .Png por correo.",
            li3item3: "Entrega de video .Mp4 por correo.",
            li3item4: "Uso de imágenes de stock y/ las proporcionadas por el cliente.",
            li3item5: "Se entregara un total de 20 publicaciones que podrá subir usted mismo a sus redes sociales y estados.",
        },
        /* Pa' que economices */
    ];

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-3 mt-10 gap-5'>
            {list.map((item, index) => (
                <div className='Accordion17 p-5 rounded-lg'>
                    <div className='text-white'>
                        <div>
                            <h3 className='text-[#00a09b]'>{item.titlePaq}</h3>
                            <h4>{item.sub}</h4>
                        </div>
                        <div className='mt-5'>
                            <h4 className='text-[#00a09b]'>PRÓPOSITO</h4>
                            <p className='text-justify sm:text-sm md:text-base lg:text-lg'>{item.proposito}</p>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className=''>
                            <Accordion
                                title="¿Que implica?"
                                content={
                                    <div>
                                        <ul className='list-disc list-inside'>
                                            <li className='mt-3'>{item.li1item1}</li>
                                            <li className='mt-3'>{item.li1item2}</li>
                                            <li className='mt-3'>{item.li1item3}</li>
                                        </ul>
                                    </div>
                                }
                            />
                        </div>
                        <div className='mt-5'>
                            <Accordion
                                title="¿Qué servicios incluye?"
                                content=
                                {
                                    <div>
                                        <ul className='list-disc list-inside'>
                                            <li className='mt-3'>{item.li2item1}</li>
                                            <li className='mt-3'>{item.li2item2}</li>
                                            <li className='mt-3'>{item.li2item3}</li>
                                            <li className='mt-3'>{item.li2item4}</li>
                                            <li className='mt-3'>{item.li2item5}</li>
                                            <li className='mt-3'>{item.li2item6}</li>
                                            <li className='mt-3'>{item.li2item7}</li>
                                            <li className='mt-3'>{item.li2item8}</li>
                                            <li className='mt-3'>{item.li2item9}</li>
                                        </ul>
                                    </div>
                                } />
                        </div>
                        <div className='mt-5'>
                            <Accordion
                                title="¿Qué beneficios incluye?"
                                content={
                                    <div>
                                        <ul className='list-disc list-inside'>
                                            <li className='mt-3'>{item.li3item1}</li>
                                            <li className='mt-3'>{item.li3item2}</li>
                                            <li className='mt-3'>{item.li3item3}</li>
                                            <li className='mt-3'>{item.li3item4}</li>
                                            <li className='mt-3'>{item.li3item5}</li>
                                        </ul>
                                    </div>
                                } />
                        </div>
                    </div>
                    <div className='text-center text-white mt-5'>
                        <p className='line-through'>COSTO REAL</p>
                        <p className='line-through'>{item.oldPrice}</p>
                        <p className='text-[#00a09b]'>COSTO PROMOCIONAL</p>
                        <p>{item.newPrice}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
