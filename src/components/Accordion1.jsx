import React from 'react';

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-item text-white">
            <div className="accordion-title" onClick={toggleAccordion}>
                <div><h3>{title}</h3></div>
                <div>{isOpen ? '▲' : '▼'}</div>
            </div>
            {isOpen && <div className="accordion-content">{content}</div>}
        </div>
    );
};

const App = () => {
    return (
        <div>
            <div className='text-white'>
                <div>
                    <h2>Pa' que le emprendas</h2>
                    <h3>En sus marcas, listos... ¡¡Fuera!!</h3>
                </div>
                <div>
                    <h3>PRÓPOSITO</h3>
                    <p className='text-justify sm:text-sm md:text-base lg:text-lg'>Diseñar para comunicar de manera efectiva la personalidad, esencia e identidad de tu marca.
                        Para generar un lanzamiento positivo desde la creación de su logotipo y a través de campañas publicitarias
                        en redes sociales e impresos con diseños óptimos y atractivos para el nicho de mercado al que su negocio
                        desee llegar, sin perder su autenticidad.</p>
                </div>
            </div>
            <Accordion
                title="¿Que implica?"
                content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem."
            />
            <Accordion
                title="¿Qué servicios incluye?"
                content="Dolor sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem."
            />
            <Accordion
                title="¿Qué beneficios incluye?"
                content="Sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem."
            />
            <div className='text-center text-white'>
                <p className='line-through'>COSTO REAL</p>
                <p className='line-through'>$8,100.00 + IVA</p>
                <p>COSTO PROMOCIONAL</p>
                <p>$3,500.00 + IVA</p>
            </div>
        </div>
    );
};

export default App;
