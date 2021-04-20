import React from 'react';
import "../css/Products.css";
import productsData from './productsData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import SwiperCore, { Autoplay } from 'swiper';


SwiperCore.use([Autoplay]);


const Products = () => {
    return (
        <div className='Products'>
        <Swiper
            spaceBetween={7}
            autoplay={{delay: 5000, disableOnInteraction: false,}}
            loop={true}
            loopFillGroupWithBlank={true}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)} >
            {productsData.map( product => (
                <SwiperSlide key={product.id}>
                    <div className='Products__container'>
                        <ul className='Products__list'>
                            <li>
                                <figure >
                                    <figcaption className='Products__title '>{product?.title}</figcaption>                             
                                    <blockquote className='Products_elements'>
                                        <p>{product?.description}</p>
                                        <img 
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
