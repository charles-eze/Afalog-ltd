import React from 'react';
import "../css/Footer.css";
import partnersData from './partnersData';

const Partners = () => {
    return (
        <div className='relative px-5 md:px-9 mb-6 fontt mt-9 md:top-36 2xl:top-56'>
            <h1 className='text-center mb-4 md:mb-6 text-gray-700 font-semibold leading-6 text-xl md:text-3xl'>Our Partners</h1>
            <div className='grid grid-cols-3 md:grid-cols-5 gap-8 md:gap-16 items-center '>
            {partnersData.map((partner, index) => (
                <div key={index.id}
                    className='transition duration-700 ease-in-out transform hover:-translate-x hover:scale-125'>
                    <img 
                        src={partner.image}
                        alt='partners'
                        className='Partners__images'
                        />
                    
                </div>
            ))}
            </div>
        </div>
    )
}

export default Partners;
