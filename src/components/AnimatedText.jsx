import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedText = () => {
  const phrases = ['Tu negocio', 'Tu marca', 'Tus ideas', 'Tu producto', 'Tus servicios'];
  const [index, setIndex] = useState(0);

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
    onRest: () => setIndex((index + 1) % phrases.length),
  });

  return (
    <animated.div style={props}>
      <p className='font-black typing sm:text-4xl lg:text-6xl mt-5'>{phrases[index]}</p>
    </animated.div>
  );
};

export default AnimatedText;
