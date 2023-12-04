import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ServicesSlider = () => {
    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div>
            <Slider className='w-[75%] mx-auto' {...sliderSettings}>
                {/* Slider item 1 */}
                <div>
                    <div className='rounded-[15px] text-white text-center' style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                        <div className='py-8'>
                            <h2 className='title'>
                                MARKETING DIGITAL
                            </h2>
                            <p>
                                Tu negocio en contacto con el mundo.
                            </p>
                            <p>
                                Creación de contenido y manejo de tus redes sociales.
                            </p>
                        </div>
                        <img className='rounded-b-[15px]' src="/cards/card-1.webp" alt="Slide 1" />
                    </div>
                </div>
                {/* Slider item 1 */}
                {/* Slider item 2 */}
                <div>
                    <div className='rounded-[15px] text-white text-center' style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                        <div className='py-8'>
                            <h2 className='title'>
                                DISEÑO GRAFICO                            </h2>
                            <p>
                                Tu imagen corporativa importa                            </p>
                            <p>
                                Diseños atractivos y personalizados                            </p>
                        </div>
                        <img className='rounded-b-[15px]' src="/cards/card-2.webp" alt="Slide 2" />
                    </div>
                </div>
                {/* Slider item 2 */}
                {/* Slider item 3 */}
                <div>
                    <div className='rounded-[15px] text-white text-center' style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                        <div className='py-8'>
                            <h2 className='title'>
                                DISEÑO WEB
                            </h2>
                            <p>
                                Tu negocio al alcance de un click
                            </p>
                            <p>
                                Programación y diseño de tu sitio web a tu medida
                            </p>
                        </div>
                        <img className='rounded-b-[15px]' src="/cards/card-3.webp" alt="Slide 3" />
                    </div>
                </div>
                {/* Slider item 3 */}
            </Slider>
        </div>
    );
}

export default ServicesSlider;
