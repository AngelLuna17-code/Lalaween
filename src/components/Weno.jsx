import React, { useState } from 'react';

function Weno() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/cards/card-1.webp",
    "/cards/card-2.webp",
    "/cards/card-3.webp",
  ];

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="container mx-auto bg-[#1f1f1f]">
      <div className="">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="rounded-[15px]"
          style={{ delay: "0.3s" }}
          loading="lazy"
        />
      </div>
      <div className="flex justify-center mt-3">
        <button onClick={handlePrevImage} className="carousel-button carousel-button-left text-white">
          &lt; Anterior
        </button>
        <button onClick={handleNextImage} className="carousel-button carousel-button-right text-white">
          Siguiente &gt;
        </button>
      </div>
    </div>
  );
}

export default Weno;
