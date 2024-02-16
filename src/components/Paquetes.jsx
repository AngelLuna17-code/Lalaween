import React, { useState } from 'react';

const Modal = ({ isOpen, title, content, closeModal }) => {
    return (
        <section>
            {isOpen && (
                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                    <div className='w-[70%] h-auto' style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                        <div>
                            <p>{title}</p>
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
            content: "Contenido del Modal 1"
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
            content: "Contenido del Modal 4"
            /*Contenido de modal*/
        },
        {
            /*Contenido de card*/
            titlePaq: "Pa' quete des a conocer",
            sub: "Inicia tu presencia en redes sociales y crece tu negocio",
            /*Contenido de card*/
            /*Contenido de modal*/
            title: "Modal 4",
            content: "Contenido del Modal 4"
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
                                    <p className='line-through'>
                                        COSTO REAL
                                    </p>
                                    <p className='line-through'>
                                        {modal.oldPrice}
                                    </p>
                                    <p className='text-[#00a09b]'>
                                        COSTO PROMOCIONAL
                                    </p>
                                    <p>
                                        {modal.newPrice}
                                    </p>
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
                closeModal={closeModal}
            />
            {/* Modal */}
        </section>
    );
};

export default Paquetes;