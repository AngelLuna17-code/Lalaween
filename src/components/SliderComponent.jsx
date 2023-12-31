import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComponent = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='text-white text-center flex items-center justify-center'>
                <div>
                    <div className='text-[25px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl-[44px] 2xl:text-[48px]'>
                        <h2 className='title-container '>Mira nuestro</h2>
                        <h2 className='title-container title'>portafolio</h2>
                    </div>
                    <div className='w-[90%] 2xl:w-[75%] mt-8 mx-auto'>
                        <p>Nosotros somos LalaWeen, agencia de publicidad y diseño. El creative team de diseño y marketing, que tu negocio necesita. Con la experiencia que nos respalda llevaremos tu negocio al siguiente nivel.</p>
                    </div>
                </div>
            </div>
            <div className='mt-8'>
                <div>
                    <Slider className='mx-auto w-[80%] sm:w-[65%] md:w-[55%]' {...sliderSettings}>
                        <div>
                            <img className='rounded-[15px]' src="/slider/1.webp" alt="Slide 1" loading="lazy" />
                        </div>
                        <div>
                            <img className='rounded-[15px]' src="/slider/2.webp" alt="Slide 2" loading="lazy" />
                        </div>
                        <div>
                            <img className='rounded-[15px]' src="/slider/3.webp" alt="Slide 2" loading="lazy" />
                        </div>
                        <div>
                            <img className='rounded-[15px]' src="/slider/4.webp" alt="Slide 2" loading="lazy" />
                        </div>
                        <div>
                            <img className='rounded-[15px]' src="/slider/5.webp" alt="Slide 2" loading="lazy" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default SliderComponent;
