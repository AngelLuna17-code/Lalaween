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
        <Slider {...sliderSettings}>
            <div>
                {/* Contenido de la diapositiva 1 */}
                <img src="/slide1.jpg" alt="Slide 1" />
            </div>
            <div>
                {/* Contenido de la diapositiva 2 */}
                <img src="/slide2.jpg" alt="Slide 2" />
            </div>
            {/* Agrega más diapositivas según sea necesario */}
        </Slider>
    );
}

export default SliderComponent;
