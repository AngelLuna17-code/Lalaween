import React, { useState } from 'react';

const Modal = ({ isOpen,
    title, content,
    proposito,
    li1item1,
    li1item2,
    li1item3,
    closeModal
}) => {
    return (
        <section>
            {isOpen && (
                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                    <div className='w-[70%] h-auto' style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                        <div>
                            <p>{title}</p>
                        </div>
                        <h4 className='text-[#00a09b] font-thin typing'>
                            PRÓPOSITO
                        </h4>
                        <p>{proposito}</p>
                        <h5 className='text-[#00a09b]  font-bold'>
                            ¿Que implica?
                        </h5>
                        <div>
                            <ul>
                                <li>{li1item1}</li>
                                <li>{li1item2}</li>
                                <li>{li1item3}</li>
                            </ul>
                        </div>
                        <div>
                            <p>{content}</p>
                        </div>
                        <div>
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                onClick={closeModal}
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};



const Paquetes = () => {
    const [modalContent, setModalContent] = useState(null);

    const openModal = (content) => {
        setModalContent(content);
    };

    const closeModal = () => {
        setModalContent(null);
    };

    const modals = [
        {
            /*Contenido de card*/
            titlePaq: "Pa' que le emprendas",
            sub: "En sus marcas, listos... ¡¡Fuera!!",
            oldPrice: "$8,100.00 + IVA",
            newPrice: "$3,500.00 + IVA",
            /*Contenido de card*/
            /*Contenido de modal*/
            title: "Modal 1",
            proposito: "Diseñar para comunicar de manera efectiva la personalidad, esencia e identidad de tu marca. Para generar un lanzamiento positivo desde la creación de su logotipo y a través de campañas publicitarias en redes sociales e impresos con diseños óptimos y atractivos para el nicho de mercado al que su negocio desee llegar, sin perder su autenticidad.",
            li1item1: "Asesoramiento en la personalización de la idea de negocio.",
            li1item2: "Creación de Logotipo para la identidad de tu marca.",
            li1item3: "Acompañamiento en el proceso de implementación en las campañas publicitarias en redes sociales.",
            /*Contenido de modal*/
        },
        {
            /*Contenido de card*/
            titlePaq: "Pa' queten bien informados",
            sub: "Ante una incognita se la solución",
            oldPrice: "$5,800.00 + IVA * Mes",
            newPrice: "$3,780.00 + IVA * Mes",
            /*Contenido de card*/
            /*Contenido de modal*/
            title: "Modal 2",
            proposito: "Diseñar y ejecutar de manera efectiva campañas publicitarias e informativas sin que la marca pierda su esencia y autenticidad, a través de un lanzamiento positivo en redes sociales con diseños óptimos y atractivos para el nicho de mercado al que su negocio desee llegar.",
            content: "Contenido del Modal 2"
            /*Contenido de modal*/
        },
        {
            /*Contenido de card*/
            titlePaq: "Pa' quete encuentren siempre",
            sub: "Ante la duda una solución",
            oldPrice: "$26,950.00 + IVA * Mes",
            newPrice: "$15,950.00 + IVA * Mes",
            /*Contenido de card*/
            /*Contenido de modal*/
            title: "Modal 3",
            proposito: "Mejorar la experiencia de sus usuarios y lograr un mayor alcance, con un máximo nivel de exposición posible para cumplir satisfactoriamente las necesidades de su nicho; conservando la autenticidad y personalidad de su marca, a través de un lanzamiento activo en redes sociales e implementación de su página web.",
            content: "Contenido del Modal 3"
            /*Contenido de modal*/
        },
        {
            /*Contenido de card*/
            titlePaq: "Pa' que economices",
            sub: "Inicia tu presencia en redes sociales y crece tu negocio",
            oldPrice: "$5,250.00 + IVA * Mes",
            newPrice: "$2,625.00 + IVA * Mes",
            /*Contenido de card*/
            /*Contenido de modal*/
            title: "Modal 4",
            proposito: "Porque sabemos que vas empezando, pero el diseño no es lo tuyo o no tienes tiempo de crear contenido, con esto buscamos crear diseños atractivos y funcionales que le den el toque profesional a las redes sociales de tu negocio",
            content: "Contenido del Modal 4"
            /*Contenido de modal*/
        },
        {
            /*Contenido de card*/
            titlePaq: "Pa' quete des a conocer",
            sub: "Inicia tu presencia en redes sociales y crece tu negocio",
            /*Contenido de card*/
            /*Contenido de modal*/
            title: "Modal 5",
            content: "Contenido del Modal 5"
            /*Contenido de modal*/
        }
    ];

    return (
        <section>
            <div className='container mx-auto'>
                <div className='container mx-auto grid grid-cols-3 gap-4'>
                    {/* Cuerpo de card */}
                    {modals.map((modal, index) => (
                        <div className='p-5 rounded-lg flex items-center justify-center' key={index} style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                            {/* Contenido del card */}
                            <div>
                                <div className='text-center'>
                                    <h3 className='text-[#00a09b] font-black text-[23px] typing'>
                                        {modal.titlePaq}
                                    </h3>
                                    <p>
                                        {modal.sub}
                                    </p>
                                </div>
                                {/* Abrir modal */}
                                <div className='flex justify-center mt-5'>
                                    <button className='px-[15px] py-[10px] bg-[#006d6a] hover:bg-[#005351] font-bold rounded-[10px]' onClick={() => openModal(modal)}>
                                        Más información
                                    </button>
                                </div>
                                {/* Abrir modal */}
                                {/* Precios */}
                                <div className='text-center text-white mt-5 typing font-thin'>
                                    {modal.oldPrice && (
                                        <div>
                                            <p className='line-through'>COSTO REAL</p>
                                            <p className='line-through'>{modal.oldPrice}</p>
                                            <p className='text-[#00a09b]'>COSTO PROMOCIONAL</p>
                                            <p>{modal.newPrice}</p>
                                        </div>
                                    )}
                                </div>
                                {/* Precios */}
                            </div>
                            {/* Contenido del card */}
                        </div>
                    ))}
                    {/* Cuerpo de card */}
                </div>
            </div>
            {/* Modal */}
            <Modal
                isOpen={modalContent !== null}
                title={modalContent?.title}
                content={modalContent?.content}
                proposito={modalContent?.proposito}
                li1item1={modalContent?.li1item1}
                li1item2={modalContent?.li1item2}
                li1item3={modalContent?.li1item3}
                closeModal={closeModal}
            />
            {/* Modal */}
        </section>
    );
};

export default Paquetes;