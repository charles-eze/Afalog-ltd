import React from 'react';
import "../css/QuoteButton.css";
import Slide from 'react-reveal/Slide';
import { ImArrowDown } from 'react-icons/im';
import { Link } from "react-router-dom";
import image from "../images/quote.png"

const QuoteButton = () => {
    return (
        <div className='QuoteButton'>
            <Slide right>
                <ImArrowDown className='QuoteButton__icon bounce'/>
                <Link to='quotation' className='QuoteButton__btn'>
                    <img 
                        src={image}
                        alt='quote button' />
                </Link>
            </Slide>     
        </div>
    );
};

export default QuoteButton;
