import React, { useEffect, useRef, useState } from 'react';
import "../css/Hero.css";
import heroData from './heroData';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const Hero = () => { 
    const [current, setCurrent] = useState(0);
    const length = heroData.length;
    const timeout = useRef(null);

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length -1 ? 0 : current + 1))
        }
        timeout.current = setTimeout(nextSlide, 5000)

        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    }, [current, length])

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1);

        console.log(current);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length-1 : current-1);

        console.log(current)
    };

    if(!Array.isArray(heroData) || heroData.length <= 0) {
        return null
    }

    return (
        <div className='Hero'>
            <div className='Hero__wrapper'>
                {heroData.map((slide, index) => {
                    return (
                        <div key={index}
                            className='Hero__slide'>
                                {index === current && (
                                    <div className='Hero__slider'>
                                        <img 
                                            src={slide?.image}
                                            alt='Medical Equipment' />
                                    </div>
                                )}
                        </div>
                    );
                })}
                <div className='Hero__sliderButtons'>
                    <IoIosArrowBack  onClick={prevSlide}
                        className='sliderButtons'/>
                    <IoIosArrowForward onClick={nextSlide}
                        className='sliderButtons' />  
                </div>
                
            </div>
            
        </div>
    )
}

export default Hero;
