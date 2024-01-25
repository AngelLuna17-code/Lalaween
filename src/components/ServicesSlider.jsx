import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardAnimatedText from "../components/CardAnimatedText"

const ServicesSlider = () => {

  const slides = [
    {
      title: "DISEÑO DE MARCA",
      sub: "Abarcamos el branding y la identidad corporativa de tu marca.",
      text: "Englobando una serie de elementos clave como la creación de su logotipo, desde su tipografía, figura, estilo y pantones que le brinden una esencia visual distintiva.",
      images: [
        "/cards/card-1-xs.webp",
        "/icons/LalaWeen-WEB-08.webp",
      ],
      bgColor: "rgba(0, 0, 0, 0.7)",
    },
    {
      title: "IDENTIDAD GRAFICA",
      sub: "Diseñamos y definimos el aspecto visual de una marca.",
      text: "En base al logotipo, misión, visión y objetivo de la empresa, se realiza el diseño adecuado para impreso o digital de una manera que sea fácil de identificar para el espectador y logre relacionarlo con la marca.",
      images: [
        "/cards/card-2-xs.webp",
        "/icons/LalaWeen-WEB-09_1.webp",
      ],
      bgColor: "rgba(0, 0, 0, 0.7)",
    },
    {
      title: "REDES SOCIALES Y DISEÑO WEB",
      text: "Identificación del público objetivo, creación de contenido en redes sociales para construir relaciones sólidas, y facilitación de adquisiciones a través de una página web atractiva y amigable.",
      images: [
        "/cards/card-3-xs.webp",
        "/icons/LalaWeen-WEB-10.webp",
      ],
      bgColor: "rgba(0, 0, 0, 0.7)",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='ServiceSlider container mx-auto py-[50px]'>
      <div className='w-[80%] sm:w-[60%] mx-auto'>
        <Slider className='' {...sliderSettings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <div className='rounded-[15px] text-white text-center' style={{ background: slide.bgColor, backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                <div className='flex items-center justify-center h-[300px] px-2'>
                  <div className=''>
                    <h2 className='title'>
                      {slide.title}
                    </h2>
                    <div className='mt-3'>
                      <img
                        className='mx-auto'
                        style={{ height: "auto", width: "20%" }}
                        src={slide.images[1]}
                        alt="Marketing"
                        loading="lazy"
                      />
                    </div>
                    <div className='mt-3'>
                      {index === 2 && (
                        <CardAnimatedText />
                      )}
                    </div>
                    <p className='font-black mt-3'>
                      {slide.sub}
                    </p>
                    <p className='mt-3'>
                      {slide.text}
                    </p>
                  </div>
                </div>
                <img className='rounded-b-[15px]'
                  src={slide.images[0]}
                  alt={`Slide ${index + 1}`}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ServicesSlider;
