import React from 'react';
//import HomeCarousel from './HomeCarousel';
import "../css/Footer.css";
import Partners from './Partners';
import Products from './Products';
import QuoteButton from './QuoteButton';


const Home = () => {
    return (
        <div className='relative'>
           {/* <HomeCarousel />    */}
           {/* <QuoteButton /> */}
           <Products />
           <Partners />
            <div className='relative flex items-center w-full justify-center h-12 bg-gray-700 hover:bg-gray-500 -mb-28'>
                <a href='#top'
                    className='text-white fontt'>
                    Back to top
                </a>
            </div>      
        </div>
    );
};

export default Home;
