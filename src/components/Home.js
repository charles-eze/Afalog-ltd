import React from 'react';
import "../css/Home.css";
import HomeCarousel from './HomeCarousel';
import Partners from './Partners';
import Products from './Products';
import QuoteButton from './QuoteButton';


const Home = () => {
    return (
        <div className='Home'>
           <HomeCarousel />   
           <QuoteButton />
           <Products />
           <Partners />
            <div className='Home__backToTop'>
                <a href='#top'>
                    Back to top
                </a>
            </div>      
        </div>
    );
};

export default Home;
