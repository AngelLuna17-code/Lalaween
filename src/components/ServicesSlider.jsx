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
                                MARKETING DIGITAL
                            </h2>
                            <div>
                                <img className='mx-auto' style={{ height: "auto", width: "30%" }} src="/icons/LalaWeen-WEB-08.webp" alt="Marketing" loading="lazy"/>
                            </div>
                            <p className='font-black'>
                                Tu negocio en contacto con el mundo.
                            </p>
                            <p className=' mt-3'>
                                Creación de contenido y manejo de tus redes sociales.
                            </p>
                        </div>
                        <img className='rounded-b-[15px]' src="/cards/card-1.webp" alt="Slide 1" loading="lazy"/>
                    </div>
                </div>
                {/* Slider item 1 */}
                {/* Slider item 2 */}
                <div>
                    <div className='rounded-[15px] text-white text-center' style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                        <div className='py-4 px-2'>
                            <h2 className='title'>
                                DISEÑO GRAFICO
                            </h2>
                            <div>
                                <img className='mx-auto' style={{ height: "auto", width: "30%" }} src="/icons/LalaWeen-WEB-09_1.webp" alt="" loading="lazy"/>

                            </div>
                            <p className='font-black'>
                                Tu imagen corporativa importa
                            </p>
                            <CardAnimatedText />
                            <p className='mt-3'>
                                Diseños atractivos y personalizados
                            </p>
                        </div>
                        <img className='rounded-b-[15px]' src="/cards/card-2.webp" alt="Slide 2" loading="lazy"/>
                    </div>
                </div>
                {/* Slider item 2 */}
                {/* Slider item 3 */}
                <div>
                    <div className='rounded-[15px] text-white text-center' style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                        <div className='py-4 px-2'>
                            <h2 className='title'>
                                DISEÑO WEB
                            </h2>
                            <div>
                                <img className='mx-auto' style={{ height: "auto", width: "30%" }} src="/icons/LalaWeen-WEB-10.webp" alt="Diseño" loading="lazy"/>
                            </div>
                            <p className='font-black'>
                                Tu negocio al alcance de un click
                            </p>
                            <p className='mt-3'>
                                Programación y diseño de tu sitio web a tu medida
                            </p>
                        </div>
                        <img className='rounded-b-[15px]' src="/cards/card-3.webp" alt="Slide 3" loading="lazy"/>
                    </div>
                </div>
                {/* Slider item 3 */}
            </Slider>
        </div>
    );
}

export default ServicesSlider;