
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

// import "./styles.css";
const img = '/images/img1.png'
const img2 = '/images/img2.png'
const img3 = '/images/img3.png'
const img4 = '/images/img4.png'
const img5 = '/images/img5.png'
const img6 = '/images/img6.png'
const img7 = '/images/img7.png'

const Client = () => {
    return (
        <div className='px-20'>
            <div className="">
                <h3 className='text-center'>Our Clients</h3>
                <h1 className='text-center'>Trusted by world’s leading clients around the world</h1>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    "@1.50": {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                // modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={img} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Client;