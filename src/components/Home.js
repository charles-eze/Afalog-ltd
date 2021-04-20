import React from 'react';
import "../css/Home.css";
// import Hero from './Hero';
import HomeCarousel from './HomeCarousel';
import Products from './Products';
import QuoteButton from './QuoteButton';

const Home = () => {
    return (
        <div className='Home'>
           <HomeCarousel />   
           <QuoteButton />
           <Products />
            <div className='Home__backToTop'>
                <a href='#top'>
                    Back to top
                </a>
            </div>
        </div>
    );
};

export default Home;
