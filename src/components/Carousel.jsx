import React, { useState, useEffect } from 'react';

const CarouselItem = ({ imageUrl, className }) => (
  <div className={className}>
    <img src={imageUrl} alt="carousel-item" />
  </div>
);

const Carousel = () => {
  const [selected, setSelected] = useState(4); // Item seleccionado por defecto es 4
  const [downX, setDownX] = useState(0);

  const items = [
    'https://cdn.pixabay.com/photo/2017/08/15/08/23/stars-2643089__340.jpg',
    'https://cdn.pixabay.com/photo/2012/11/28/11/28/rocket-launch-67723__340.jpg',
    'https://cdn.pixabay.com/photo/2018/08/15/13/10/galaxy-3608029_960_720.jpg',
    'https://cdn.pixabay.com/photo/2020/06/17/09/28/wormhole-5308810__340.jpg',
    'https://cdn.pixabay.com/photo/2016/11/18/22/58/stars-1837306__340.jpg',
    'https://cdn.pixabay.com/photo/2017/02/09/09/11/starry-sky-2051448__340.jpg',
    'https://cdn.pixabay.com/photo/2011/12/15/11/37/galaxy-11188__340.jpg',
    'https://cdn.pixabay.com/photo/2011/12/15/11/32/pismis-24-11186__340.jpg',
  ];

  const move = (direction) => {
    const nextSelected = direction === 'next' ? selected + 1 : selected - 1;
    setSelected(nextSelected < 1 ? 8 : nextSelected > 8 ? 1 : nextSelected);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 37) {
      move('prev');
    } else if (e.keyCode === 39) {
      move('next');
    }
  };

  const handleMouseDown = (e) => {
    setDownX(e.clientX);
  };

  const handleMouseUp = (e) => {
    const direction = downX > e.clientX ? 'next' : 'prev';
    const velocity = Math.abs(downX - e.clientX);

    if (velocity < 10) {
      // Considerarlo un clic
      // Puedes manejar la lógica de selección del elemento aquí
    } else {
      move(direction);
    }

    setDownX(0);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selected]);

  return (
    <div className="app">
      <main
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
      >
        {items.map((imageUrl, index) => (
          <CarouselItem
            key={index}
            imageUrl={imageUrl}
            className={index + 1 === selected ? 'selected' : ''}
          />
        ))}
      </main>
      <div className="buttons">
        <button onClick={() => move('prev')}>Anterior</button>
        <button onClick={() => move('next')}>Siguiente</button>
      </div>
    </div>
  );
};

export default Carousel;
