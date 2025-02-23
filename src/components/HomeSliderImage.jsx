import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Mousewheel } from "swiper/modules";

function ImageSlider() {
    return (
        <div className=" h-[450px] py-4 bg-[#021431] rounded-lg overflow-hidden">
            <Swiper
                slidesPerView={1.5}
                spaceBetween={10}
                freeMode={true}
                mousewheel={true}
                modules={[FreeMode, Mousewheel]}
                className="mySwiper"
            >
                <SwiperSlide><img src="/hero1.png" className=" w-[300px] h-[400px] object-cover rounded-lg ml-4" /></SwiperSlide>
                <SwiperSlide><img src="/hero2.webp" className="w-[320px] h-[400px] object-cover rounded-lg" /></SwiperSlide>
                <SwiperSlide><img src="/hero3.webp" className="w-[320px] h-[400px] object-cover rounded-lg" /></SwiperSlide>
                <SwiperSlide><img src="/hero4.webp" className=" w-[320px] h-[400px] object-cover rounded-lg mr-4" /></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default ImageSlider;
