import React from 'react';
import heroData from './heroData';
import "../css/HomeCarousel.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';


SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

const HomeCarousel = () => {
    return (
        <div className='HomeCarousel'>
        <Swiper
            effect="fade"
            spaceBetween={0}
            navigation
            pagination={{ clickable: true }}
            autoplay={{delay: 5000, disableOnInteraction: false,}}
            loop={true}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)} >
            {heroData.map( img => (
                <SwiperSlide key={img.id}>
                    <div className='w-full '
                        style={{height: '50vh'}}>
                        <img
                            className='HomeCsel__img h-full' 
                            src={img.image}
                            alt='Carousel' />               
                    </div>
                </SwiperSlide>
            ))}   
        </Swiper>
          
        </div>
    )
}

export default HomeCarousel;
