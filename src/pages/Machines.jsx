import { useEffect } from 'react';
import { portableMachines, roomMachines } from '../constants'
import { banner5 } from '../assets/images'
import SwiperFooter from '../components/SwiperFooter';

const Machines = () => {

    useEffect(() => {
        const smoothScrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };
        smoothScrollToTop();
    }, []);

    return (
        <section className="mt-[4em] bg-mainBlue">
            <h1 className="text-white text-center font-avenir text-[30px] lg:text-[40px] pt-1">
                EQUIPOS DE ORDEÑO
            </h1>
            <div className='border-white border-t-[0.1px] border-opacity-40 mx-auto lg:max-w-screen-lg mb-4'></div>
            <div
                className="banner-image h-[300px] md:h-[400px] xl:h-[500px]"
                style={{ backgroundImage: `url(${banner5})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
            </div>
            <h1 className="text-white text-center font-avenir text-[24px] lg:text-[30px] mt-3">
                EQUIPOS PORTÁTILES
            </h1>
            <div className='border-white border-t-[0.1px] border-opacity-40 mx-auto lg:max-w-screen-lg'></div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-xl:grid-cols-1 mx-auto lg:max-w-screen-2xl">
                {portableMachines.map((item) => (
                    <div key={item.key} className="col-span-1 lg:col-span-2 mb-4">
                        <div className="flex justify-center items-center flex-col text-center font-avenir text-white shadow-lg">
                            <div className='w-full flex flex-col md:flex-row justify-around items-center'>
                                <img className='max-md:w-50 w-80 m-3' src={item.src} alt="" />
                                <div className='text-md py-4'>
                                    <p className='mx-2'>{item.desc1}</p>
                                    <p className='mx-2'>{item.desc2}</p>
                                    <p className='mx-2'>{item.desc3}</p>
                                </div>
                            </div>
                            <div className='w-full py-2 border-white border-t-[0.1px] border-opacity-40'>
                                <h1 className='font-bold text-lg lg:text-xl'>{item.name}</h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h1 className="text-white text-center font-avenir text-[24px] lg:text-[30px] mt-4">
                EQUIPOS TIPO SALA
            </h1>
            <div className='border-white border-t-[0.1px] border-opacity-40 mx-auto lg:max-w-screen-lg mb-4'></div>
            <div className="grid grid-cols-1 gap-6 mx-auto lg:max-w-screen-2xl">
                {roomMachines.map((item) => (
                    <div key={item.key} className="col-span-1 lg:col-span-2 mb-4">
                        <div className="flex justify-center items-center flex-col text-center font-avenir text-white shadow-lg">
                            <div className='w-full flex flex-col md:flex-row justify-evenly items-center'>
                                <img className='w-[80%] md:w-[50%] lg:w-[35%] shadow-xl m-4' src={item.src} alt="" />
                                <div className='text-md py-4'>
                                    <p className='mx-2'>{item.desc1}</p>
                                    <p className='mx-2'>{item.desc2}</p>
                                    <p className='mx-2'>{item.desc3}</p>
                                </div>
                            </div>
                            <div className='w-full py-2 border-white border-t-[0.1px] border-opacity-40'>
                                <h1 className='font-bold text-lg lg:text-xl'>{item.name}</h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <SwiperFooter />
            </div>
        </section>
    )
}

export default Machines