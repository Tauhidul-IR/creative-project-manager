
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

const img = '/images/img1.png'
const img2 = '/images/img2.png'
const img3 = '/images/img3.png'
const img4 = '/images/img4.png'
const img5 = '/images/img5.png'
const img6 = '/images/img6.png'
const img7 = '/images/img7.png'

const Client = () => {
    return (
        <div data-aos="zoom-in-up" data-aos-duration="1500" className='mb-16 mt-10 py-10 px-20 bg-white'>
            <div  className="mb-9">
                <h3 className='text-center text-black text-2xl font-semibold'>Our Clients</h3>
                <h1 className='mt-5
                text-center text-black text-3xl'>Trusted by world’s leading </h1>
                <h2 className='text-center text-black text-3xl mt-3'> clients around the world</h2>
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