import React, { memo } from 'react';
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

    const sliderImages = [
        '/slider/1.webp',
        '/slider/2.webp',
        '/slider/3.webp',
        '/slider/4.webp',
        '/slider/5.webp',
    ];

    return (
        <div className='container mx-auto py-[50px]'>
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
                        <MemoizedSlider images={sliderImages} settings={sliderSettings} />
                    </div>
                </div>
            </div>
        </div>
    );
}

const MemoizedSlider = memo(({ images, settings }) => (
    <Slider className='mx-auto w-[80%] sm:w-[65%] md:w-[55%]' {...settings}>
        {images.map((image, index) => (
            <img
                key={index}
                className='rounded-[15px]'
                src={image}
                loading='lazy'
                alt={`slider-${index + 1}`}
                style={{ height: "auto", width: "100%" }}
            />
        ))}
    </Slider>
));

export default SliderComponent;
