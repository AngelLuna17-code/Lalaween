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
            li1item1:"Asesoramiento en la personalización de la idea de negocio.",
            li1item2:"Creación de Logotipo para la identidad de tu marca.",
            li1item3:"Acompañamiento en el proceso de implementación en las campañas publicitarias en redes sociales.",
        },
        /* Pa' que le emprendas */
        /* Pa' queten bien informados */
        {
            titlePaq: "Pa' queten bien informados",
            sub: "Ante una incognita se la solución",
            proposito: "Diseñar y ejecutar de manera efectiva campañas publicitarias e informativas sin que la marca pierda su esencia y autenticidad, a través de un lanzamiento positivo en redes sociales con diseños óptimos y atractivos para el nicho de mercado al que su negocio desee llegar.",
            oldPrice: "$5,800.00 + IVA * Mes",
            newPrice: "$3,780.00 + IVA * Mes",
            li1item1:"Asesoramiento en la personalización de las redes sociales según su marca.",
            li1item2:"Acompañamiento en el proceso de implementación en las campañas publicitarias en redes sociales.",
        },
        /* Pa' queten bien informadoss */
        /* Pa' quete encuentren siempre */
        {
            titlePaq: "Pa' quete encuentren siempre",
            sub: "Ante la duda una solución",
            proposito: "Mejorar la experiencia de sus usuarios y lograr un mayor alcance, con un máximo nivel de exposición posible para cumplir satisfactoriamente las necesidades de su nicho; conservando la autenticidad y personalidad de su marca, a través de un lanzamiento activo en redes sociales e implementación de su página web.",
            oldPrice: "$26,950.00 + IVA * Mes",
            newPrice: "$15,950.00 + IVA * Mes",
            li1item1:"Implantación de soluciones digitales (Redes sociales y Pagina Web).",
            li1item2:"Asesoramiento en la personalización de las distribución digital de su marca.",
            li1item3:"Acompañamiento en el proceso de implementación en las campañas publicitarias en redes sociales.",
        },
        /* Pa' quete encuentren siempre */
        /* Pa' que economices */
        {
            titlePaq: "Pa' que economices",
            sub: "Inicia tu presencia en redes sociales y crece tu negocio",
            proposito: "Porque sabemos que vas empezando, pero el diseño no es lo tuyo o no tienes tiempo de crear contenido, con esto buscamos crear diseños atractivos y funcionales que le den el toque profesional a las redes sociales de tu negocio",
            oldPrice: "$5,250.00 + IVA * Mes",
            newPrice: "$2,625.00 + IVA * Mes",
            li1item1:"Personalizar tus redes en base a tu marca",
            li1item2:"Mejorar la calidad visual del contenido de tus redes sociales",
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
                                content={<div>Hola Mundo</div>} />
                        </div>
                        <div className='mt-5'>
                            <Accordion
                                title="¿Qué beneficios incluye?"
                                content={<div>Hola Mundo</div>} />
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
