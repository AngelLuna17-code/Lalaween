import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

const AnimatedText = () => {
  const phrases = ['Tu negocio', 'Tu marca', 'Tus ideas', 'Tu producto', 'Tus servicios'];
  const [index, setIndex] = useState(0);

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
    onRest: () => setIndex((index + 1) % phrases.length),
    config: { duration: 1200 },
  });

  return (
    <animated.div style={props}>
      <h1 className='font-black typing'>{phrases[index]}</h1>
    </animated.div>
  );
};

export default AnimatedText;
