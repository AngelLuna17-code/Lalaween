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
        <div>
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
                        <div className='mt-5'>
                            <h5 className="text-[#00a09b]">¿Qué servicios incluye?</h5>
                        </div>
                        {/* Pa’ que le empieces */}
                        <div className='mt-5'>
                            <Accordion
                                title="¿Pa’ que le empieces?"
                                content={
                                    <div>
                                        <div>
                                            <ul className='list-disc list-inside'>
                                                <li className='mt-3'>Creación de cuentas para la marca en redes sociales (Facebook, Instagram y/o Tiktok)</li>
                                                <li className='mt-3'>Diseño de plantillas para redes sociales (Portada, Perfil y Publicaciones).</li>
                                                <li className='mt-3'>12 Publicaciones en imagen.</li>
                                                <li>8 Historias (imagen y video).</li>
                                                <li>1 Social video para reel o tiktok</li>
                                            </ul>
                                        </div>
                                        <div className='text-center text-white mt-5'>
                                            <p className='line-through'>COSTO REAL</p>
                                            <p className='line-through'></p>
                                            <p className='text-[#00a09b]'>COSTO PROMOCIONAL</p>
                                            <p></p>
                                        </div>
                                    </div>
                                }
                            />
                        </div>
                        {/* Pa’ que le empieces */}
                        {/* Pa’ que te quieran */}
                        <div className='mt-5'>
                            <Accordion
                                title="Pa’ que te quieran"
                                content={
                                    <div>
                                        <div>
                                            <ul className='list-disc list-inside'>
                                                <li className='mt-3'>Creación de cuentas para la marca en redes sociales (Facebook, Instagram y/o Tiktok).</li>
                                                <li className='mt-3'>Diseño de plantillas para redes sociales(Portada, Perfil y Publicaciones).</li>
                                                <li className='mt-3'>20 Publicaciones en imagen.</li>
                                                <li className='mt-3'>2 Publicaciones en imagen tipo slide (Máximo 10 imagenes).</li>
                                                <li className='mt-3'>4 Historias (imagen y video).</li>
                                                <li className='mt-3'>2 Social video para reel o tiktok.</li>
                                            </ul>
                                        </div>
                                        <div className='text-center text-white mt-5'>
                                            <p className='line-through'>COSTO REAL</p>
                                            <p className='line-through'></p>
                                            <p className='text-[#00a09b]'>COSTO PROMOCIONAL</p>
                                            <p></p>
                                        </div>
                                    </div>
                                }
                            />
                        </div>
                        {/* Pa’ que te quieran */}
                        {/* Pa’ que sueñen */}
                        <div className='mt-5'>
                            <Accordion
                                title="Pa’ que sueñen"
                                content={
                                    <div>
                                        <div>
                                            <div>
                                                <ul className='list-disc list-inside'>
                                                    <li className='mt-3'>Creación de cuentas para la marca en redes sociales (Facebook, Instagram y/o Tiktok).</li>
                                                    <li className='mt-3'>Diseño de plantillas para redes sociales (Portada, Perfil y Publicaciones).</li>
                                                    <li className='mt-3'>28 Publicaciones en imagen</li>
                                                    <li className='mt-3'>28 Historias (imagen y video)</li>
                                                    <li className='mt-3'>4 Social video para reel o tiktok</li>
                                                </ul>
                                            </div>
                                            <div className='text-center text-white mt-5'>
                                                <p className='line-through'>COSTO REAL</p>
                                                <p className='line-through'></p>
                                                <p className='text-[#00a09b]'>COSTO PROMOCIONAL</p>
                                                <p></p>
                                            </div>
                                        </div>
                                        <div className='mt-5'>
                                            <div>
                                                <h5 className="text-[#00a09b]">¿Qué beneficios incluyen?</h5>
                                            </div>
                                            <div>
                                                <ul className='list-disc list-inside'>
                                                    <li className='mt-3'>Formato optimizado para Facebook e Instagram</li>
                                                    <li className='mt-3'>Uso de imágenes de stock y/o proporcionadas por el cliente.</li>
                                                    <li className='mt-3'>Publicación del contenido trabajado para redes y administración de redes sociales durante un mes.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                }
                            />
                        </div>
                        {/* Pa’ que sueñen */}
                    </div>
                </div>
            ))}
        </div>
    );
}
