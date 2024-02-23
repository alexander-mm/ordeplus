import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { swiperSales } from '../constants'
import 'swiper/css/navigation';
import '../css/swiperCss.css';
import 'swiper/css';
import 'swiper/css/pagination';

const SwiperSales = () => {

    return (
        <>
            <div className='shadow-2xl w-[20em] xs2:w-[30em] sm:w-[40em] md:w-[50em] lg:w-[60em]'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false, }}
                    pagination={{ clickable: true, }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper z-0"
                >
                    {swiperSales.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img src={item.src} alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}

export default SwiperSales