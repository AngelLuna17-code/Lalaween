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
                    <img className='rounded-[15px]' src="/slider/1.webp" alt="Slide 1" />
                </div>
                <div>
                    <img className='rounded-[15px]' src="/slider/2.webp" alt="Slide 2" />
                </div>
                <div>
                    <img className='rounded-[15px]' src="/slider/3.webp" alt="Slide 2" />
                </div>
                <div>
                    <img className='rounded-[15px]' src="/slider/4.webp" alt="Slide 2" />
                </div>
                <div>
                    <img className='rounded-[15px]' src="/slider/5.webp" alt="Slide 2" />
                </div>
            </Slider>
        </div>
    );
}

export default SliderComponent;
