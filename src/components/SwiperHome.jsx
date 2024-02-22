import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom'
import { swiperEngines, swiperMachines } from '../constants'
import 'swiper/css/navigation';
import '../css/swiperCss.css';
import 'swiper/css';
import 'swiper/css/pagination';

const SwiperHome = () => {
    return (
        <>
            <div className='mb-20 shadow-2xl'>
                <div className='bg-white text-mainBlue text-center font-avenir text-[20px] lg:text-[30px]'>
                    <h1 className="pt-1">
                        Necesitas un equipo de ordeño portátil?
                    </h1>
                    <h1 className="pt-1">
                        O quieres organizar tu sala de ordeño?
                    </h1>
                    <h1 className="pt-1 font-bold">
                        VISITA YA, NUESTRA SECCIÓN DE EQUIPOS
                    </h1>
                </div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper z-0 text-mainBlue font-avenir"
                >
                    {swiperMachines.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='h-[300px] md:h-[500px] flex justify-center items-end' style={{ backgroundImage: `url(${item.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <button className='bg-white p-2 pb-6 mb-2 rounded-md'>
                                    <Link to={item.to} className='border-mainBlue border-[2px] p-1 px-2 rounded-md text-sm md:text-lg'>
                                        {item.label}
                                    </Link>
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='mb-20 shadow-2xl'>
                <div className='bg-white text-mainBlue text-center font-avenir text-[20px] lg:text-[30px]'>
                    <h1 className="pt-1">
                        Si buscas un motor de repuesto
                    </h1>
                    <h1 className="pt-1">
                        o una bomba de vacío con más potencia...
                    </h1>
                    <h1 className="pt-1 font-bold">
                        DA CLICK Y EXPLORA NUESTRAS OFERTAS!
                    </h1>
                </div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper z-0 text-mainBlue font-avenir"
                >
                    {swiperEngines.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='h-[300px] md:h-[500px] flex justify-center items-end' style={{ backgroundImage: `url(${item.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className='flex justify-center items-center flex-row'>
                                    <button className='bg-white p-2 pb-6 mb-2 rounded-s-md'>
                                        <Link to={item.to} className='border-mainBlue border-[2px] p-1 px-2 rounded-md text-sm md:text-lg'>
                                            {item.label}
                                        </Link>
                                    </button>
                                    <button className='bg-white p-2 pb-6 mb-2 rounded-e-md'>
                                        <Link to={item.to2} className='border-mainBlue border-[2px] p-1 px-2 rounded-md text-sm md:text-lg'>
                                            {item.label2}
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}

export default SwiperHome