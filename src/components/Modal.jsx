import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardAnimatedText from "../components/CardAnimatedText.jsx"

const ImageSlider = ({ images }) => {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...sliderSettings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`slider-${index}`} loading="lazy" />
        </div>
      ))}
    </Slider>
  );
};

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);

  const images1 = ["/img/1.webp", "/img/2.webp", "/img/3.webp"];
  const images2 = ["/img/4.webp", "/img/5.webp", "/img/6.webp"];
  const images3 = ["/img/7.webp", "/img/8.webp", "/img/9.webp"];

  const openModal = (images) => {
    setSliderImages(images);
    setShowModal(true);
  };

  const [sliderImages, setSliderImages] = React.useState([]);

  return (
    <>
      {/* Cards */}
      <div className='grid grid-cols-3 gap-5 md:gap-2 lg:gap-3 xl:gap-5 xl:gap-3 2xl:gap-12 overflow-hidden'>
        {/* Card-1 */}
        <div className='rounded-t-[15px] rounded-b-[15px] text-white text-center' style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
          <div className='h-[350px] px-5 flex items-center justify-center'>
            <div>
              <div>
                <p className='title text-2xl'>
                  DISEÑO DE MARCA
                </p>
              </div>
              <div className='mt-3'>
                <img className='mx-auto' style={{ height: "auto", width: "20%" }} src="icons/LalaWeen-WEB-10.webp" alt="diseño" loading="lazy" />
              </div>
              <div>
              </div>
              <div className='mt-3'>
                <p className='font-black'>
                  Abarcamos el branding y la identidad corporativa de tu marca.                </p>
              </div>
              <div className='mt-3'>
                <p className=''>
                  Englobando una serie de elementos clave como la creación de su logotipo, desde su tipografía, figura, estilo y pantones que le brinden una esencia visual distintiva.
                </p>
              </div>
            </div>
          </div>
          <div onClick={() => openModal(images1)}>
            <img className='h-[247.63px] w-[322.67px] xl:h-[309.02px] xl:w-[402.67px] 2xl:h-[360.17px] 2xl:w-[469.33px] rounded-b-[15px]' src="cards/card-1.webp" alt="servicios" loading="lazy" />
          </div>
        </div>
        {/* Card-1 */}
        {/* Card-2 */}
        <div className='rounded-t-[15px] rounded-b-[15px] text-white text-center' style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
          <div className='h-[350px] px-5 flex items-center justify-center'>
            <div>
              <div>
                <p className='title text-2xl'>
                  IDENTIDAD GRAFICA
                </p>
              </div>
              <div className='mt-3'>
                <img className='mx-auto' style={{ height: "auto", width: "20%" }} src="icons/LalaWeen-WEB-10.webp" alt="diseño" loading="lazy" />
              </div>
              <div>
              </div>
              <div className='mt-3'>
                <p className='font-black'>
                  Diseñamos y definimos el aspecto visual de una marca.
                </p>
              </div>
              <div className='mt-3'>
                <p>
                  En base al logotipo, misión, visión y objetivo de la empresa, se realiza el diseño adecuado para impreso o digital de una manera que sea fácil de identificar para el espectador y logre relacionarlo con la marca.                </p>
              </div>
            </div>
          </div>
          <div onClick={() => openModal(images2)}>
            <img className='h-[247.63px] w-[322.67px] xl:h-[309.02px] xl:w-[402.67px] 2xl:h-[360.17px] 2xl:w-[469.33px] rounded-b-[15px]' src="cards/card-2.webp" alt="servicios" loading="lazy" />
          </div>
        </div>
        {/* Card-2 */}
        {/* Card-3 */}
        <div className='rounded-t-[15px] rounded-b-[15px] text-white text-center' style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
          <div className='h-[350px] px-5 flex items-center justify-center'>
            <div>
              <div>
                <p className='title text-2xl'>
                  REDES SOCIALES Y DISEÑO WEB
                </p>
              </div>
              <div className='mt-3'>
                <img className='mx-auto' style={{ height: "auto", width: "20%" }} src="icons/LalaWeen-WEB-10.webp" alt="diseño" loading="lazy" />
              </div>
              <div>
              </div>
              <div className='mt-3'>
                <CardAnimatedText />
              </div>
              <div className='mt-3'>
                <p>
                  Identificación del público objetivo, creación de contenido en redes sociales para construir relaciones sólidas, y facilitación de adquisiciones a través de una página web atractiva y amigable.
                </p>
              </div>
            </div>
          </div>
          <div onClick={() => openModal(images3)}>
            <img className='h-[247.63px] w-[322.67px] xl:h-[309.02px] xl:w-[402.67px] 2xl:h-[360.17px] 2xl:w-[469.33px] rounded-b-[15px]' src="cards/card-3.webp" alt="servicios" loading="lazy" />
          </div>
        </div>
        {/* Card-3 */}
      </div>
      {/* Cards */}
      {/* Modal */}
      {showModal ? (
        <section>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto xs:w-[95%] md:w-[80%] xl:w-[65%] 2xl:w-[55%]">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#0b0b0b] outline-none focus:outline-none">
                {/* Modal header */}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-white">
                    Marketing Digital
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-white opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-white opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/* Modal header */}
                {/* Modal body */}
                <div className="relative flex-auto">
                  <ImageSlider images={sliderImages} />
                </div>
                {/* Modal body */}
                {/* Modal footer */}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
                </div>
                {/* Modal footer */}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </section>
      ) : null}
      {/* Modal */}
    </>
  );
}
