import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useNavigate, useLocation } from 'react-router-dom'
import { swiperFooter } from '../constants'
import 'swiper/css/navigation';
import '../css/swiperCss.css';
import 'swiper/css';
import 'swiper/css/pagination';

const SwiperFooter = () => {

    const navigate = useNavigate()
    const location = useLocation()

    return (
        <>
            <div className='mt-32'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false, }}
                    loop={true}
                    pagination={{ clickable: true, }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper z-0"
                >
                    {swiperFooter.map((item) => (
                        (location.pathname !== item.to) && (
                            <SwiperSlide key={item.id}>
                                <div className='h-[180px] md:h-[280px] flex justify-center items-center text-white font-avenir' style={{ backgroundColor: 'white', backgroundSize: 'cover', backgroundPosition: item.aspect }}>
                                    <div className='flex flex-row justify-around items-center gap-x-6 md:gap-x-40 mx-2'>
                                        <div className='w-[35%] md:w-[35%] md:p-10'><img src={item.src} alt="" /></div>
                                        <div className=' bg-white p-2 pb-6 mb-2 rounded-sm'>
                                            <button className='bg-mainBlue rounded-sm p-1 font-bold text-[13px] md:text-lg' onClick={() => navigate(item.to)}>
                                                {item.label}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    ))}
                </Swiper>
            </div>
        </>
    );
}

export default SwiperFooter