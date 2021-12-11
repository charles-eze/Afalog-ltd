import React from 'react';
import "../css/QuoteButton.css";
import Slide from 'react-reveal/Slide';
import { ImArrowDown } from 'react-icons/im';
import { Link } from "react-router-dom";
import image from "../images/quote.png"

const QuoteButton = () => {
    return (
        <div className='absolute justify-end items-center bottom-3.5 ml-9 md:ml-24 md:-mb-32 2xl:-mb-40'
                style={{zIndex: 20}}>
            <Slide right>
                <ImArrowDown className='QuoteButton__icon Icon bounce text-4xl md:text-7xl -top-9 md:-top-14 '/>
                <Link to='quotation' className='QuoteButton__btn'>
                    <img 
                        className=''
                        src={image}
                        alt='quote button' />
                </Link>
            </Slide>     
        </div>
    );
};

export default QuoteButton;
