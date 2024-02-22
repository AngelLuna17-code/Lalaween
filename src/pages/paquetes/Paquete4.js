import React from 'react';
import SmallStars from '../../components/SmallStars';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingButton from '../../components/FloatingButton';
import ScrollToTopButton from '../../components/ScrollToTopButton';

const Paquete4 = () => {

    return (
        <section>
            {/* Stars */}
            <SmallStars />
            {/* Stars */}
            {/* Navbar */}
            <Navbar />
            {/* Navbar */}
            {/* Contenido de pagina */}
            <div className='container mx-auto py-[100px] px-[10px]'>
                <div className='p-5 rounded-lg' style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                    <div className='text-white'>
                        <div>
                            <h3 className='text-[#00a09b] font-black text-[23px] typing'>
                                Pa' que economices
                            </h3>
                            <p>
                                Inicia tu presencia en redes sociales y crece tu negocio
                            </p>
                        </div>
                        <div className='mt-5'>
                            <p className='text-[#00a09b] typing'>Proposito</p>
                            <p>
                                Porque sabemos que vas empezando, pero el diseño no es lo tuyo o no tienes tiempo de crear contenido, con
                                esto buscamos crear diseños atractivos y funcionales que le den el toque profesional a las redes sociales de
                                tu negocio
                            </p>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <p className='text-[#00a09b] typing'>
                            ¿Que implica?
                        </p>
                        <div>
                            <ul className='typing'>
                                <li>
                                    Personalizar tus redes en base a tu marca.
                                </li>
                                <li>
                                    Mejorar la calidad visual del contenido de tus redes sociales.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <p className='text-[#00a09b] typing'>
                            ¿Qué servicios incluye?"
                        </p>
                        <div>
                            <ul className='typing'>
                                <li>
                                    Diseño de plantillas para redes sociales (Portada, Perfil y Publicaciones)
                                </li>
                                <li>
                                    Publicaciones en imagen.
                                </li>
                                <li>
                                    4 Publicaciones en imagen tipo slide (Máximo 5 imagenes).
                                </li>
                                <li>
                                    4 Social video para reel o tiktok.
                                </li>
                            </ul>
                        </div>
                        <div className='mt-5'>
                            <p className='text-[#00a09b] typing'>
                                ¿Qué beneficios incluye?
                            </p>
                            <div>
                                <ul className='typing'>
                                    <li>
                                        Formato optimizado para Facebook e Instagram
                                    </li>
                                    <li>
                                        Entrega de archivos finales en .Png por correo
                                    </li>
                                    <li>
                                        Entrega de video .Mp4 por correo
                                    </li>
                                    <li>
                                        Uso de imágenes de stock y/ las proporcionadas por el cliente
                                    </li>
                                    <li>
                                        Se entregara un total de 20 publicaciones que podrá subir
                                        usted mismo a sus redes sociales y estados.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='text-center text-white mt-5 typing'>
                        <p className='line-through'>COSTO REAL</p>
                        <p className='line-through'>$5,250.00 + IVA * Mes</p>
                        <p className='text-[#00a09b]'>COSTO PROMOCIONAL</p>
                        <p>$2,625.00 + IVA * Mes</p>
                    </div>
                </div>
            </div>
            {/* Contenido de pagina */}
            {/* Footer */}
            <Footer />
            {/* Footer */}
            {/* Floating Buttons */}
            <ScrollToTopButton />
            <FloatingButton />
            {/* Floating Buttons */}
        </section>
    );
};

export default Paquete4;