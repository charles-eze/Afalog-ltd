import React from 'react';
import heroData from './heroData';
import "../css/HomeCarousel.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import QuoteButton from './QuoteButton';


SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

const HomeCarousel = () => {
    return (
        <div className='HomeCarousel select-none Height'>
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
                    <div className='w-full Height_img  Height_mobile Height_imgg'>
                        <img
                            className='HomeCsel__img h-full w-full' 
                            src={img.image}
                            alt='Carousel' />               
                    </div>
                </SwiperSlide>
            ))}   
        </Swiper>
          <QuoteButton />

        </div>
    )
}

export default HomeCarousel;
