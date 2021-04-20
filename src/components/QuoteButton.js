import React from 'react';
import "../css/QuoteButton.css";
import Slide from 'react-reveal/Slide';
import { ImArrowDown } from 'react-icons/im';

const QuoteButton = () => {
    return (
        <div className='QuoteButton'>
            <Slide right>
                <ImArrowDown className='QuoteButton__icon bounce'/>
                <button className='QuoteButton__btn'>
                    Get a Quote
                </button>
            </Slide>     
        </div>
    );
};

export default QuoteButton;
