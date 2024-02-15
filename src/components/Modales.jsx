import React, { useState } from 'react';

const Modales = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={openModal}
            >
                Abrir Modal
            </button>
            {/* Modal */}
            {isModalOpen && (
                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none " >
                    {/* Modal body */}
                    <div className='w-[70%] h-auto' style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                        {/* Modal header */}
                        <div>
                            <p>
                                titulo
                            </p>
                        </div>
                        {/* Modal header */}
                        {/* Modal content */}
                        <div>
                            <p>
                                Contenido
                            </p>
                        </div>
                        {/* Modal content */}
                        {/* Modal Footer */}
                        <div>
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                onClick={closeModal}
                            >
                                Cerrar
                            </button>
                        </div>
                        {/* Modal Footer */}
                    </div>
                    {/* Modal body */}
                </div>
            )}
            {/* Modal */}
        </section>
    );
};

export default Modales;