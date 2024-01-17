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
    <Slider  {...sliderSettings}>
      {images.map((image, index) => (
        <div className='flex items-center'>
          <img key={index} className='rounded-[15px] h-auto w-[60%] mx-auto' src={image} alt={`slider-${index}`} loading="lazy" />
        </div>
      ))}
    </Slider>
  );
};

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);

  const images1 =
    [
      "/DISEÑO DE MARCA/Mock up Etiqueta Tanukiya.webp",
      "/DISEÑO DE MARCA/Mock up Gorra MJ.webp",
      "/DISEÑO DE MARCA/Mock up Hoja reciclada.webp",
      "/DISEÑO DE MARCA/Mock up Oficina-min.webp",
      "/DISEÑO DE MARCA/Mock up Tarjeta Estudio Arq Logotipo.webp"
    ];
  const images2 =
    [
      "/IDENTIDAD GRÁFICA/Mock up Branding.webp",
      "/IDENTIDAD GRÁFICA/Mouckup Triptico pizzopolis.webp",
      "/IDENTIDAD GRÁFICA/Mock up Receta SoyTotalmenteKeto.webp",
      "/IDENTIDAD GRÁFICA/Mock up Bolsa de papel ConCafé.webp",
      "/IDENTIDAD GRÁFICA/Mock up Tarjeta de presentación B.webp",
      "/IDENTIDAD GRÁFICA/Mock up caja.webp"
    ];
  const images3 =
    [
      "/REDES Y WEB/Mock up Tablet.webp",
      "/REDES Y WEB/Mock up Tablet1.webp",
      "/REDES Y WEB/Mock up WEB.webp"
    ];

  const openModal = (images) => {
    setSliderImages(images);
    setShowModal(true);
  };

  const [sliderImages, setSliderImages] = React.useState([]);

  return (
    <section>
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
                <img className='mx-auto' style={{ height: "auto", width: "20%" }} src="icons/LalaWeen-WEB-08.webp" alt="diseño" loading="lazy" />
              </div>
              <div>
              </div>
              <div className='mt-3'>
                <p className='font-black'>
                  Abarcamos el branding y la identidad corporativa de tu marca.
                </p>
              </div>
              <div className='mt-3'>
                <p>
                  Englobando una serie de elementos clave como la creación de su logotipo, desde su tipografía, figura, estilo y pantones que le brinden una esencia visual distintiva.
                </p>
              </div>
            </div>
          </div>
          <div className='relative cursor-pointer' onClick={() => openModal(images1)}>
            <img className='h-[247.63px] w-[322.67px] xl:h-[309.02px] xl:w-[402.67px] 2xl:h-[360.17px] 2xl:w-[469.33px] rounded-b-[15px]' src="cards/card-1.webp" alt="servicios" loading="lazy" />
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
              <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" class="bi bi-hand-index-thumb-fill" viewBox="0 0 16 16">
                <path d="M8.5 1.75v2.716l.047-.002c.312-.012.742-.016 1.051.046.28.056.543.18.738.288.273.152.456.385.56.642l.132-.012c.312-.024.794-.038 1.158.108.37.148.689.487.88.716q.113.137.195.248h.582a2 2 0 0 1 1.99 2.199l-.272 2.715a3.5 3.5 0 0 1-.444 1.389l-1.395 2.441A1.5 1.5 0 0 1 12.42 16H6.118a1.5 1.5 0 0 1-1.342-.83l-1.215-2.43L1.07 8.589a1.517 1.517 0 0 1 2.373-1.852L5 8.293V1.75a1.75 1.75 0 0 1 3.5 0" />
              </svg>
            </div>
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
                <img className='mx-auto' style={{ height: "auto", width: "20%" }} src="icons/LalaWeen-WEB-09_1.webp" alt="diseño" loading="lazy" />
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
          <div className='relative cursor-pointer' onClick={() => openModal(images2)}>
            <img className='h-[247.63px] w-[322.67px] xl:h-[309.02px] xl:w-[402.67px] 2xl:h-[360.17px] 2xl:w-[469.33px] rounded-b-[15px]' src="cards/card-2.webp" alt="servicios" loading="lazy" />
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
              <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" class="bi bi-hand-index-thumb-fill" viewBox="0 0 16 16">
                <path d="M8.5 1.75v2.716l.047-.002c.312-.012.742-.016 1.051.046.28.056.543.18.738.288.273.152.456.385.56.642l.132-.012c.312-.024.794-.038 1.158.108.37.148.689.487.88.716q.113.137.195.248h.582a2 2 0 0 1 1.99 2.199l-.272 2.715a3.5 3.5 0 0 1-.444 1.389l-1.395 2.441A1.5 1.5 0 0 1 12.42 16H6.118a1.5 1.5 0 0 1-1.342-.83l-1.215-2.43L1.07 8.589a1.517 1.517 0 0 1 2.373-1.852L5 8.293V1.75a1.75 1.75 0 0 1 3.5 0" />
              </svg>
            </div>
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
          <div className='relative cursor-pointer' onClick={() => openModal(images3)}>
            <img className='h-[247.63px] w-[322.67px] xl:h-[309.02px] xl:w-[402.67px] 2xl:h-[360.17px] 2xl:w-[469.33px] rounded-b-[15px]' src="cards/card-3.webp" alt="servicios" loading="lazy" />
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
              <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" class="bi bi-hand-index-thumb-fill" viewBox="0 0 16 16">
                <path d="M8.5 1.75v2.716l.047-.002c.312-.012.742-.016 1.051.046.28.056.543.18.738.288.273.152.456.385.56.642l.132-.012c.312-.024.794-.038 1.158.108.37.148.689.487.88.716q.113.137.195.248h.582a2 2 0 0 1 1.99 2.199l-.272 2.715a3.5 3.5 0 0 1-.444 1.389l-1.395 2.441A1.5 1.5 0 0 1 12.42 16H6.118a1.5 1.5 0 0 1-1.342-.83l-1.215-2.43L1.07 8.589a1.517 1.517 0 0 1 2.373-1.852L5 8.293V1.75a1.75 1.75 0 0 1 3.5 0" />
              </svg>
            </div>
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
                    Lalaween Creative Team
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
                  <div className='mx-auto w-[85%] p-5'>
                    <ImageSlider images={sliderImages} />
                  </div>
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
    </section>
  );
}
