// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function ColorSlider() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
       
        <SwiperSlide>
          <img src="Assets/img/Slider/pexels-pixabay-414648.jpg" alt="slider_images" className="img-fluid"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="Assets/img/Slider/pexels-nubikini-3221216.jpg" alt="slider_images" className="img-fluid"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="Assets/img/Slider/pexels-anniroenkae-4175070.jpg" alt="slider_images" className="img-fluid"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="Assets/img/Slider/pexels-gabby-k-7794263.jpg"  alt="slider_images" className="img-fluid"/>
        </SwiperSlide>
        <SwiperSlide>
     
          <img src="Assets/img/Slider/pexels-roman-odintsov-6897432.jpg" alt="slider_images" className="img-fluid"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="Assets/img/Slider/pexels-giovanni-vardan-301813772-13371850.jpg" alt="slider_images" className="img-fluid"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="Assets/img/Slider/pexels-gabby-k-7794330.jpg" alt="slider_images" className="img-fluid"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="Assets/img/Slider/pexels-hngstrm-2380451.jpg" alt="slider_images" className="img-fluid"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="Assets/img/Slider/pexels-karolina-grabowska-4016597.jpg" alt="slider_images" className="img-fluid"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="Assets/img/Slider/pexels-marek-piwnicki-3907296-6562811.jpg" alt="slider_images" className="img-fluid"/>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
