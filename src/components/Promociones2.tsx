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
        {

        },
    ];

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-3 mt-10 gap-5'>
            {list.map((item, index) => (
                <div className='Accordion17 p-5 rounded-lg'>
                    <div className='text-white'>
                        <div>
                            <h3 className='text-[#00a09b]'></h3>
                            <h4></h4>
                        </div>
                        <div className='mt-5'>
                            <h4 className='text-[#00a09b]'>PRÓPOSITO</h4>
                            <p className='text-justify sm:text-sm md:text-base lg:text-lg'>
                                Diseñar, generar y ejecutar las bases para comenzar a promocionar tus servicios y/o productos en el
                                mercado, estudiando y planteando estrategias según el análisis obtenido en redes sociales, dando a
                                conocer y dejando al alcance de todos la comunicación directa y fluida con tu negocio en el mundo
                                digital.
                            </p>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div>
                            <Accordion
                                title="¿Que implica?"
                                content={
                                    <div>
                                        <ul className='list-disc list-inside'>
                                            <li className='mt-3'>Asesoramiento en la personalización de las redes sociales según su marca</li>
                                            <li className='mt-3'>Acompañamiento en el proceso de implementación en las campañas publicitarias en redes sociales.</li>
                                        </ul>
                                    </div>
                                }
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
