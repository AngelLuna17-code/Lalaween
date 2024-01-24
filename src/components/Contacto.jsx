import React from 'react';

const Contacto = () => {
    return (
        <div className='contact-container'>
            <div className='text-white text-center'>
                <div>
                    <h2 className='title-container text-[25px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl-[44px] 2xl:text-[48px]'>Será un gusto</h2>
                    <h2 className='title-container title text-[25px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl-[44px] 2xl:text-[48px]'>trabajar contigo</h2>
                </div>
                <div className='mt-2'>
                    <a className='hover:text-[#00cac4] text-2xl' href="mailto:CreativeTeam@LalaWeen.com" target="blank">creativeteam@lalaween.com</a>
                </div>
            </div>
        </div>
    );
}

export default Contacto;