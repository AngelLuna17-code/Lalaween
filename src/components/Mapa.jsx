import React from 'react';

export default function Mapa() {
    return (
        <iframe
            className='p-0 sm:h-[450px] sm:w-[85%] lg:h-[250px] xl:h-[350px]'
            title="Mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.7537346673344!2d-104.86511612481081!3d21.478177380286013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842737cece0a2ad9%3A0x466ffc674c08577c!2sLalaween!5e0!3m2!1sen!2smx!4v1701447455809!5m2!1sen!2smx"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        >
        </iframe>
    );
}
