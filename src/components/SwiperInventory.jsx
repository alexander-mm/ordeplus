import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom'
import { swiperAccs, swiperEngines, swiperMachines } from '../constants'
import 'swiper/css/navigation';
import '../css/swiperCss.css';
import 'swiper/css';
import 'swiper/css/pagination';

const SwiperInventory = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className='shadow-2xl'>
                <div className='bg-white text-center pb-3 pt-8 font-avenir text-[20px] lg:text-[22px]'>
                    <div className='bg-mainBlue text-white mx-[10%] md:mx-[20%] p-6 rounded-md'>
                        <h1>Necesitas un equipo de ordeño portátil?</h1>
                        <h1>O quieres organizar tu sala de ordeño?</h1>
                        <h1 className="font-bold">VISITA YA, NUESTRA SECCIÓN DE EQUIPOS</h1>
                    </div>
                </div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false, }}
                    pagination={{ clickable: true, }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper z-0 text-white font-avenir"
                >
                    {swiperMachines.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='h-[300px] md:h-[500px] flex justify-center items-end' style={{ backgroundImage: `url(${item.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className='bg-white p-2 pb-6 mb-2 rounded-sm'>
                                    <button className='bg-mainBlue rounded-sm px-3 py-2 font-bold text-sm md:text-md' onClick={() => navigate(item.to)}>
                                        {item.label}
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='shadow-2xl'>
                <div className='bg-white text-center pb-3 pt-8 font-avenir text-[20px] lg:text-[22px]'>
                    <div className='bg-mainBlue text-white mx-[10%] md:mx-[20%] p-6 rounded-md'>
                        <h1>Si buscas un motor de repuesto</h1>
                        <h1>o una bomba de vacío con más potencia...</h1>
                        <h1 className="font-bold">DA CLICK Y EXPLORA NUESTRAS OFERTAS!</h1>
                    </div>
                </div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false, }}
                    pagination={{ clickable: true, }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper z-0 text-white font-avenir"
                >
                    {swiperEngines.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='h-[300px] md:h-[500px] flex justify-center items-end' style={{ backgroundImage: `url(${item.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className='bg-white p-2 pb-6 mb-2 rounded-sm flex justify-center items-center flex-col xs2:flex-row px-4 xs2:px-2 pt-2 xs2:pt-4 space-y-1 xs2:space-y-0 xs2:space-x-2'>
                                    <button className='bg-mainBlue rounded-sm px-3 py-2 font-bold text-sm md:text-md' onClick={() => navigate(item.to)}>
                                        {item.label}
                                    </button>
                                    <button className='bg-mainBlue rounded-sm px-3 py-2 font-bold text-sm md:text-md' onClick={() => navigate(item.to)}>
                                        {item.label2}
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='shadow-2xl'>
                <div className='bg-white text-center pb-3 pt-8 font-avenir text-[20px] lg:text-[22px]'>
                    <div className='bg-mainBlue text-white mx-[10%] md:mx-[20%] p-6 rounded-md'>
                        <h1>Pulsadores, Pezoneras,</h1>
                        <h1>Casquillos, Colectores e Insumos de Aseo...</h1>
                        <h1 className="font-bold">Éso y más para tu equipo de ordeño!</h1>
                    </div>
                </div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false, }}
                    pagination={{ clickable: true, }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper z-0 text-white font-avenir"
                >
                    {swiperAccs.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='h-[300px] md:h-[500px] flex justify-center items-end' style={{ backgroundImage: `url(${item.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className='bg-white p-2 pb-6 mb-2 rounded-sm flex justify-center items-center flex-col xs2:flex-row px-4 xs2:px-2 pt-2 xs2:pt-4 space-y-1 xs2:space-y-0 xs2:space-x-2'>
                                    <button className='bg-mainBlue rounded-sm px-3 py-2 font-bold text-sm md:text-md' onClick={() => navigate(item.to)}>
                                        {item.label}
                                    </button>
                                    <button className='bg-mainBlue rounded-sm px-3 py-2 font-bold text-sm md:text-md' onClick={() => navigate(item.to2)}>
                                        {item.label2}
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

export default SwiperInventory