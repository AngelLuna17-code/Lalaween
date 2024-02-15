import React, { useState } from 'react';

const Modal = ({ isOpen, title, content, closeModal }) => {
    return (
        <section>
            <div className='grid'>

            </div>
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

const Modales = () => {
    const [modalIndex, setModalIndex] = useState(null);

    const openModal = (index) => {
        setModalIndex(index);
    };

    const closeModal = () => {
        setModalIndex(null);
    };

    const modals = [
        {
            title: "Modal 1",
            content: "Contenido del Modal 1"
        },
        {
            title: "Modal 2",
            content: "Contenido del Modal 2"
        },
        {
            title: "Modal 3",
            content: "Contenido del Modal 3"
        },
        {
            title: "Modal 4",
            content: "Contenido del Modal 4"
        },
    ];

    return (
        <section>
            {modals.map((modal, index) => (
                <div key={index}>
                    <div
                        className='p-8
                         bg-[#111827]'
                        onClick={() => openModal(index)}
                    >
                        Abrir Modal {index + 1}
                    </div>
                    <Modal
                        isOpen={modalIndex === index}
                        title={modal.title}
                        content={modal.content}
                        closeModal={closeModal}
                    />
                </div>
            ))}
        </section>
    );
};

export default Modales;