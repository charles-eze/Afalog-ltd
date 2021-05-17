import React from 'react';
import "../css/QuoteButton.css";
import Slide from 'react-reveal/Slide';
import { ImArrowDown } from 'react-icons/im';
import { Link } from "react-router-dom";

const QuoteButton = () => {
    return (
        <div className='QuoteButton'>
            <Slide right>
                <ImArrowDown className='QuoteButton__icon bounce'/>
                <button className='QuoteButton__btn'>
                    <Link to='quotation'>
                        Get a Quote
                    </Link>
                </button>
            </Slide>     
        </div>
    );
};

export default QuoteButton;
