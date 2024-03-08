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
            <div className=''>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{ delay: 2000, disableOnInteraction: true, }}
                    loop={true}
                    pagination={{ clickable: true, }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper z-0"
                >
                    {swiperSales.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='h-[300px] md:h-[400px] xl:h-[600px] flex justify-center items-end' style={{ backgroundImage: `url(${item.src})`, backgroundSize: 'cover', backgroundPosition: item.aspect }}>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}

export default SwiperSales