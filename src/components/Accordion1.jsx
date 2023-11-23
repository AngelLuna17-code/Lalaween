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
            {isOpen && <div className="accordion-content"><div className='p-2'>{content}</div></div>}
        </div>
    );
};

const App = () => {
    return (
        <div className='Accordion17 p-5 rounded-lg'>
            <div className='text-white'>
                <div>
                    <h3 className='text-[#00a09b]'>Pa' que le emprendas</h3>
                    <h4>En sus marcas, listos... ¡¡Fuera!!</h4>
                </div>
                <div className='mt-5'>
                    <h4 className='text-[#00a09b]'>PRÓPOSITO</h4>
                    <p className='text-justify sm:text-sm md:text-base lg:text-lg'>Diseñar para comunicar de manera efectiva la personalidad, esencia e identidad de tu marca.
                        Para generar un lanzamiento positivo desde la creación de su logotipo y a través de campañas publicitarias
                        en redes sociales e impresos con diseños óptimos y atractivos para el nicho de mercado al que su negocio
                        desee llegar, sin perder su autenticidad.</p>
                </div>
            </div>
            <div className='mt-5'>
                <div className=''>
                    <Accordion
                        title="¿Que implica?"
                        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem."
                    />
                </div>
                <div className='mt-5'>
                    <Accordion
                        title="¿Qué servicios incluye?"
                        content="Dolor sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem."
                    />
                </div>
                <div className='mt-5'>
                    <Accordion
                        title="¿Qué beneficios incluye?"
                        content="Sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem."
                    />
                </div>
            </div>
            <div className='text-center text-white mt-5'>
                <p className='line-through'>COSTO REAL</p>
                <p className='line-through'>$8,100.00 + IVA</p>
                <p className='text-[#00a09b]'>COSTO PROMOCIONAL</p>
                <p>$3,500.00 + IVA</p>
            </div>
        </div>
    );
};

export default App;
