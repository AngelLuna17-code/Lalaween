import React, { useState } from 'react';

const Modal = ({ isOpen,
    title, content,
    proposito,
    imp1,
    imp2,
    imp3,
    service1,
    service2,
    service3,
    service4,
    service5,
    service6,
    service7,
    service8,
    service9,
    ben1,
    ben2,
    ben3,
    ben4,
    ben5,
    closeModal
}) => {
    return (
        <section>
            {isOpen && (
                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                    <div className='w-[70%] h-auto' style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                        <h4 className='text-[#00a09b] font-thin typing'>
                            PRÓPOSITO
                        </h4>
                        <p>{proposito}</p>
                        {/* Que implica */}
                        <div className='mt-3'>
                            <h5 className='text-[#00a09b] font-bold'>
                                ¿Que implica?
                            </h5>
                            <div>
                                <ul className='list-inside'>
                                    <li>{imp1}</li>
                                    <li>{imp2}</li>
                                    <li>{imp3}</li>
                                </ul>
                            </div>
                        </div>
                        {/* Que implica */}
                        {/* ¿Qué servicios incluye? */}
                        <div className='mt-3'>
                            <h5 className='text-[#00a09b] font-bold'>
                                ¿Qué servicios incluye?
                            </h5>
                            <div>
                                <ul className='list-inside'>
                                    <li>{service1}</li>
                                    <li>{service2}</li>
                                    <li>{service3}</li>
                                    <li>{service4}</li>
                                    <li>{service5}</li>
                                    <li>{service6}</li>
                                    <li>{service7}</li>
                                    <li>{service8}</li>
                                    <li>{service9}</li>
                                </ul>
                            </div>
                        </div>
                        {/* ¿Qué servicios incluye? */}
                        {/* ¿Qué beneficios incluye? */}
                        <div className='mt-3'>
                            <h5 className='text-[#00a09b] font-bold'>
                                ¿Qué beneficios incluye?
                            </h5>
                            <div>
                                <ul className='list-inside'>
                                    <li>{ben1}</li>
                                    <li>{ben2}</li>
                                    <li>{ben3}</li>
                                    <li>{ben4}</li>
                                    <li>{ben5}</li>
                                </ul>
                            </div>
                        </div>
                        {/* ¿Qué beneficios incluye? */}
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
        /*Pa' que le emprendas*/
        {
            /* Contenido de card */
            titlePaq: "Pa' que le emprendas",
            sub: "En sus marcas, listos... ¡¡Fuera!!",
            oldPrice: "$8,100.00 + IVA",
            newPrice: "$3,500.00 + IVA",
            /* Contenido de card */
            /* Contenido de modal */
            proposito: "Diseñar para comunicar de manera efectiva la personalidad, esencia e identidad de tu marca. Para generar un lanzamiento positivo desde la creación de su logotipo y a través de campañas publicitarias en redes sociales e impresos con diseños óptimos y atractivos para el nicho de mercado al que su negocio desee llegar, sin perder su autenticidad.",
            li1item1: "Asesoramiento en la personalización de la idea de negocio.",
            /* ¿Que implica? */
            imp1: "Asesoramiento en la personalización de la idea de negocio.",
            imp2: "Creación de Logotipo para la identidad de tu marca.",
            imp3: "Acompañamiento en el proceso de implementación en las campañas publicitarias en redes sociales.",
            /* ¿Que implica? */
            /* ¿Qué servicios incluye? */
            service1: "Diseño de Logotipo",
            service2: "Creación de cuentas para la marca en redes sociales (Facebook, Instagram y/o Tiktok).",
            service3: "Diseño de plantillas para redes sociales (Portada, Perfil y Publicaciones).",
            service4: "12 Publicaciones en imagen.",
            service5: "4 Historias (imagen y video).",
            service6: "1 Social video para reel o tiktok.",
            service7: "Diseño de tarjeta de presentación en formato JPG para impresión",
            service8: " Diseño de Volante en formato JPG para impresión.",
            service9: "1 Diseño de firma para correo en PNG y JPG para uso digital.",
            /* ¿Qué servicios incluye? */
            /* ¿Qué beneficios incluye? */
            ben1: "Se realizan 3 propuestas de logotipo y se selecciona uno que será entregado en formato .JPG .PNG .Ai y .EPS.",
            ben2: "Formato optimizado para Facebook e Instagram",
            ben3: "Publicación del contenido trabajado para redes y administración de redes sociales durante un mes.",
            ben4: "Coaching de comunicación visual para la ponencia online e impresos.",
            ben5: "Asesoramiento general para pautas en redes sociales."
            /* ¿Qué beneficios incluye? */
            /* Contenido de modal */
        },
        /*Pa' que le emprendas*/
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
                /* Que implica */
                imp1={modalContent?.imp1}
                imp2={modalContent?.imp2}
                imp3={modalContent?.imp3}
                /* Que implica */
                /* ¿Que servicios incluye? */
                service1={modalContent?.service1}
                service2={modalContent?.service2}
                service3={modalContent?.service3}
                service4={modalContent?.service4}
                service5={modalContent?.service5}
                service6={modalContent?.service6}
                service7={modalContent?.service7}
                service8={modalContent?.service8}
                service9={modalContent?.service9}
                /* ¿Que servicios incluye? */
                /* ¿Que beneficios incluye? */
                ben1={modalContent?.ben1}
                ben2={modalContent?.ben2}
                ben3={modalContent?.ben3}
                ben4={modalContent?.ben4}
                ben5={modalContent?.ben5}
                /* ¿Que beneficios incluye? */
                closeModal={closeModal}
            />
            {/* Modal */}
        </section>
    );
};

export default Paquetes;