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
      <h1 className='xs:text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px] 2xl:text-[52px] font-black typing'>{phrases[index]}</h1>
    </animated.div>
  );
};

export default AnimatedText;
