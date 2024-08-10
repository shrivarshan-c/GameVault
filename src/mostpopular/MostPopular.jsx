import React from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';

import { mostPopularGames } from "./mostapi";

import "./mostPopular.css";
import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCoverflow, Pagination } from 'swiper/modules';
import { EffectCards,Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './mostPopular.css';



const MostPopular = () => {

    return (
        <div className="most-popular-title2">

     

        <h3>Trending Games</h3>

   <div className="mostpopular">
   

  
    <Swiper
effect={'cards'}
grabCursor={true}
centeredSlides={true}
slidesPerView={'auto'}
coverflowEffect={{
  rotate: true,
  perSlideRotate:1,
  perSlideOffset:8,
  slideShadows: false,
  depth:300,
}}

modules={[EffectCards,Autoplay]}
autoplay={{
    delay: 2000,  
    disableOnInteraction: false,  
}}
className="mySwiper"

>

 
  <div className="mostpopular">
 
 {mostPopularGames.map(game => (

<SwiperSlide className="swiper-content" key={game.id}>
  

   
    <div className="swiperslide">
    <div className="fade"> 
    <div className="most-popular-text-div">
   
    <h2>{game.name}</h2>
    <button>Explore Now</button>

    </div>
   
            <img src={game.image_url} alt={game.name} />
    </div>
          
    </div>    
          </SwiperSlide>
      ))}
    
  </div>
     
  
  </Swiper>
  </div>  
  <div className="category-button">
    <button>Explore More </button>
  </div>
  </div>
    );
};

export default MostPopular;
