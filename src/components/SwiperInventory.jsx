import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom'
import { swiperInventory } from '../constants'
import 'swiper/css/navigation';
import '../css/swiperCss.css';
import 'swiper/css';
import 'swiper/css/pagination';

const SwiperInventory = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className='shadow-2xl mb-14'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false, }}
                    loop={true}
                    pagination={{ clickable: true, }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper z-0 text-white font-avenir"
                >
                    {swiperInventory.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='h-[300px] md:h-[400px] xl:h-[500px] flex justify-center items-end' style={{ backgroundImage: `url(${item.src})`, backgroundSize: 'cover', backgroundPosition: item.aspect }}>
                                <div className='bg-white p-2 pb-6 mb-2 rounded-sm'>
                                    <button className='bg-mainBlue rounded-sm px-3 py-2 font-bold text-sm md:text-md' onClick={() => navigate(item.to)}>
                                        {item.label}
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div >
        </>
    );
}

export default SwiperInventory