import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedText = () => {
  const phrases = ['¡Hola!', '¡Bienvenido!', '¡React es genial!'];
  const [index, setIndex] = useState(0);

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
    onRest: () => setIndex((index + 1) % phrases.length),
  });

  return (
    <animated.div style={props}>
      <h1>{phrases[index]}</h1>
    </animated.div>
  );
};

export default AnimatedText;
