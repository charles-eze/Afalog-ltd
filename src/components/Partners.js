import React from 'react';
import "../css/Partners.css";
import partnersData from './partnersData';

const Partners = () => {
    return (
        <div className='Partners'>
            <h1>Our Partners</h1>
            <div className='Partners__container'>
            {partnersData.map((partner, index) => (
                <div key={index.id}
                    className='Partners__box'>
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
