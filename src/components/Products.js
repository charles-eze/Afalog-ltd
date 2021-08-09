import React from 'react';
import productsData from './productsData';
import "../css/Footer.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import SwiperCore, { Autoplay } from 'swiper';


SwiperCore.use([Autoplay]);


const Products = () => {
    return (
        <div className='relative mt-3.5 px-3.5 md:px-4 '>
        <Swiper
            className='md:hidden'
            spaceBetween={11}
            autoplay={{delay: 5000, disableOnInteraction: false,}}
            loop={true}
            loopFillGroupWithBlank={true}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}>
            {productsData.map( product => (
                <SwiperSlide key={product.id}>
                    <div className='Products__container px-3 border-2 border-gray-200 rounded-md'
                        style={{boxShadow: "0 0.55rem 1rem rgba(0, 0, 0, 0.45)"}}>
                        <ul className='Products__list'>
                            <li>
                                <figure >
                                    <figcaption className='text-center text-lg mb-2 mt-3.5 font-semibold fontt Products__title '>{product?.title}</figcaption>                             
                                    <blockquote className='Products_elements'>
                                        <p className='mb-4'>{product?.description}</p>
                                        <img 
                                            className='items-center w-full h-80 mb-3.5'
                                            src={product?.image}
                                            alt="products" />
                                    </blockquote>
                                </figure>
                            </li> 
                        </ul>
                        
                    </div>

                </SwiperSlide>
            ))}   
        </Swiper>
        <Swiper
            className='hidden md:block'
            spaceBetween={11}
            autoplay={{delay: 5000, disableOnInteraction: false,}}
            loop={true}
            loopFillGroupWithBlank={true}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)} >
            {productsData.map( product => (
                <SwiperSlide key={product.id}>
                    <div className='Products__container px-3 mr-1 border-2 border-gray-200 rounded-md'
                    style={{boxShadow: "0 0.55rem 1rem rgba(0, 0, 0, 0.45)"}}>
                        <ul className='Products__list'>
                            <li>
                                <figure >
                                    <figcaption className='text-center text-xl mb-2 mt-3.5 fontt font-semibold'>{product?.title}</figcaption>                             
                                    <blockquote className='Products_elements'>
                                        <p className='mb-4'>{product?.description}</p>
                                        <img 
                                            className='items-center w-full h-80 mb-3.5'
                                            src={product?.image}
                                            alt="products" />
                                    </blockquote>
                                </figure>
                            </li> 
                        </ul>
                        
                    </div>

                </SwiperSlide>
            ))}   
        </Swiper>
            
        </div>
    )
}

export default Products;
