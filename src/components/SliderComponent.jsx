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
        <div>
            <Slider className='mx-auto xs:w-[80%] sm:w-[65%] md:w-[55%]' {...sliderSettings}>
                <div>
                    <img className='h-[443.08px] w-[300px] sm:h-[614.41px] sm:w-[416px] md:h-[623.27px] md:w-[422px] lg:h-[416.5px] lg:w-[282px] xl:h-[519.89px] xl:w-[352px] 2xl:h-[623.27px] 2xl:w-[422px] rounded-[15px]' src="/slider/1.webp" alt="Slide 1" />
                </div>
                <div>
                    <img className='h-[443.08px] w-[300px] sm:h-[614.41px] sm:w-[416px] md:h-[623.27px] md:w-[422px] lg:h-[416.5px] lg:w-[282px] xl:h-[519.89px] xl:w-[352px] 2xl:h-[623.27px] 2xl:w-[422px] rounded-[15px]' src="/slider/2.webp" alt="Slide 2" />
                </div>
                <div>
                    <img className='h-[443.08px] w-[300px] sm:h-[614.41px] sm:w-[416px] md:h-[623.27px] md:w-[422px] lg:h-[416.5px] lg:w-[282px] xl:h-[519.89px] xl:w-[352px] 2xl:h-[623.27px] 2xl:w-[422px] rounded-[15px]' src="/slider/3.webp" alt="Slide 2" />
                </div>
                <div>
                    <img className='h-[443.08px] w-[300px] sm:h-[614.41px] sm:w-[416px] md:h-[623.27px] md:w-[422px] lg:h-[416.5px] lg:w-[282px] xl:h-[519.89px] xl:w-[352px] 2xl:h-[623.27px] 2xl:w-[422px] rounded-[15px]' src="/slider/4.webp" alt="Slide 2" />
                </div>
                <div>
                    <img className='h-[443.08px] w-[300px] sm:h-[614.41px] sm:w-[416px] md:h-[623.27px] md:w-[422px] lg:h-[416.5px] lg:w-[282px] xl:h-[519.89px] xl:w-[352px] 2xl:h-[623.27px] 2xl:w-[422px] rounded-[15px]' src="/slider/5.webp" alt="Slide 2" />
                </div>
            </Slider>
        </div>
    );
}

export default SliderComponent;
