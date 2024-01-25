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
        <div className='container mx-auto overflow-hidden py-[50px]'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='text-white text-center flex items-center justify-center'>
                    <div>
                        <div>
                            <h2 className='text-[25px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl-[44px] 2xl:text-[48px] title-container'>Mira nuestro</h2>
                            <h2 className='title-container title text-[25px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl-[44px] 2xl:text-[48px]'>portafolio</h2>
                        </div>
                        <div className='w-[90%] 2xl:w-[75%] mt-3 mx-auto'>
                            <p>Nosotros somos LalaWeen, agencia de publicidad y diseño. El creative team de diseño y marketing, que tu negocio necesita. Con la experiencia que nos respalda llevaremos tu negocio al siguiente nivel.</p>
                        </div>
                    </div>
                </div>
                <div className='mt-3 lg:mt-0'>
                    <div>
                        <Slider className='mx-auto w-[80%] sm:w-[65%] md:w-[55%]' {...sliderSettings}>
                            <div>
                                <picture>
                                    <source media="(min-width: 1024px)" srcset="/slider/1.webp" />
                                    <source media="(min-width: 360px)" srcset="/slider/1-xs.webp" />
                                    <img className='rounded-[15px]' src="/slider/1.webp" loading='lazy' alt='slider' />
                                </picture>
                            </div>
                            <div>
                                <picture>
                                    <source media="(min-width: 1024px)" srcset="/slider/2.webp" />
                                    <source media="(min-width: 360px)" srcset="/slider/2-xs.webp" />
                                    <img className='rounded-[15px]' src="/slider/2.webp" loading='lazy' alt='slider' />
                                </picture>
                            </div>
                            <div>
                                <div>
                                    <picture>
                                        <source media="(min-width: 1024px)" srcset="/slider/3.webp" />
                                        <source media="(min-width: 360px)" srcset="/slider/3-xs.webp" />
                                        <img className='rounded-[15px]' src="/slider/3.webp" loading='lazy' alt='slider' />
                                    </picture>
                                </div>
                            </div>
                            <div>
                                <picture>
                                    <source media="(min-width: 1024px)" srcset="/slider/4.webp" />
                                    <source media="(min-width: 360px)" srcset="/slider/4-xs.webp" />
                                    <img className='rounded-[15px]' src="/slider/4.webp" loading='lazy' alt='slider' />
                                </picture>
                            </div>
                            <div>
                                <picture>
                                    <source media="(min-width: 1024px)" srcset="/slider/5.webp" />
                                    <source media="(min-width: 360px)" srcset="/slider/5-xs.webp" />
                                    <img className='rounded-[15px]' src="/slider/5.webp" loading='lazy' alt='slider' />
                                </picture>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SliderComponent;
