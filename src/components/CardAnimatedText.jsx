import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

const CardAnimatedText = () => {
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
            <p className='font-black'>{phrases[index]}</p>
        </animated.div>
    );
};

export default CardAnimatedText;
