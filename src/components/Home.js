import React from 'react';
import HomeCarousel from './HomeCarousel';
import "../css/Footer.css";
import Partners from './Partners';
import Products from './Products';
import Footer from './Footer';


const Home = () => {
    return (
        <div className='relative'>
            <div className='relative Height_home Height_homee'>
            <HomeCarousel />  
            <Products />
            <Partners />
                <div className='relative flex items-center w-full justify-center h-12 bg-gray-700 hover:bg-gray-500 md:top-36 2xl:top-56 -mb-24 md:-mb-28'>
                    <a href='#top'
                        className='text-white fontt'>
                        Back to top
                    </a>
                </div>     
            </div>
            <div className=''>
                <Footer/>
            </div> 
        </div>
    );
};

export default Home;
