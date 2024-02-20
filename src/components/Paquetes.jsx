import React, { useState } from 'react';

const Paquetes = () => {
    const modals = [
        /*Pa' que le emprendas*/
        {
            titlePaq: "Pa' que le emprendas",
            sub: "En sus marcas, listos... ¡¡Fuera!!",
            oldPrice: "$8,100.00 + IVA",
            newPrice: "$3,500.00 + IVA",
        },
        /*Pa' que le emprendas*/
    ];

    return (
        <section>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4'>
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
                                <button className='px-[15px] py-[10px] bg-[#006d6a] hover:bg-[#005351] font-bold rounded-[10px]'>
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
        </section>
    );
};

export default Paquetes;
