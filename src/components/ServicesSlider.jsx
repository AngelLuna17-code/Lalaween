import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardAnimatedText from "../components/CardAnimatedText.jsx"

const ServicesSlider = () => {
    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div>
            <Slider className='xs:w-[80%] mx-auto' {...sliderSettings}>
                {/* Slider item 1 */}
                <div>
                    <div className='rounded-[15px] text-white text-center' style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                        <div className='py-4 px-2'>
                            <h2 className='title'>
                                DISEÑO DE MARCA
                            </h2>
                            <div className='mt-3'>
                                <img className='mx-auto' style={{ height: "auto", width: "30%" }} src="/icons/LalaWeen-WEB-08.webp" alt="Marketing" loading="lazy" />
                            </div>
                            <p className='font-black mt-3'>
                                Abarcamos el branding y la identidad corporativa de tu marca.
                            </p>
                            <p className=' mt-3'>
                                Englobando una serie de elementos clave como la creación de su logotipo, desde su tipografía, figura, estilo y pantones que le brinden una esencia visual distintiva.
                            </p>
                        </div>
                        <img className='rounded-b-[15px]' src="/cards/card-1.webp" alt="Slide 1" loading="lazy" />
                    </div>
                </div>
                {/* Slider item 1 */}
                {/* Slider item 2 */}
                <div>
                    <div className='rounded-[15px] text-white text-center' style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                        <div className='py-4 px-2'>
                            <h2 className='title'>
                                IDENTIDAD GRAFICA
                            </h2>
                            <div className='mt-3'>
                                <img className='mx-auto' style={{ height: "auto", width: "30%" }} src="/icons/LalaWeen-WEB-09_1.webp" alt="" loading="lazy" />
                            </div>
                            <p className='font-black mt-3'>
                                Diseñamos y definimos el aspecto visual de una marca.
                            </p>
                            <p className='mt-3'>
                                En base al logotipo, misión, visión y objetivo de la empresa, se realiza el diseño adecuado para impreso o digital de una manera que sea fácil de identificar para el espectador y logre relacionarlo con la marca.
                            </p>
                        </div>
                        <img className='rounded-b-[15px]' src="/cards/card-2.webp" alt="Slide 2" loading="lazy" />
                    </div>
                </div>
                {/* Slider item 2 */}
                {/* Slider item 3 */}
                <div>
                    <div className='rounded-[15px] text-white text-center' style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                        <div className='py-4 px-2'>
                            <h2 className='title'>
                                REDES SOCIALES Y DISEÑO WEB
                            </h2>
                            <div className='mt-3'>
                                <img className='mx-auto' style={{ height: "auto", width: "30%" }} src="/icons/LalaWeen-WEB-10.webp" alt="Diseño" loading="lazy" />
                            </div>
                            <div className='mt-3'>
                                <CardAnimatedText />
                            </div>
                            <p className='mt-3'>
                                Identificación del público objetivo, creación de contenido en redes sociales para construir relaciones sólidas, y facilitación de adquisiciones a través de una página web atractiva y amigable.
                            </p>
                        </div>
                        <img className='rounded-b-[15px]' src="/cards/card-3.webp" alt="Slide 3" loading="lazy" />
                    </div>
                </div>
                {/* Slider item 3 */}
            </Slider>
        </div>
    );
}

export default ServicesSlider;