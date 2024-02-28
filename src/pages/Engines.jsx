import { useEffect } from 'react';
import { banner3 } from '../assets/images'
import { engines } from '../constants'
import SwiperFooter from '../components/SwiperFooter';

const Engines = () => {

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
        <section className="mt-[4em] bg-mainBlue mb-12">
            <h1 className="text-white text-center font-avenir text-[30px] lg:text-[40px] pt-1">
                MOTORES
            </h1>
            <div className='border-white border-t-[0.1px] border-opacity-40 mx-auto lg:max-w-screen-lg mb-4'></div>
            <div className="banner-image h-[300px] md:h-[400px] xl:h-[500px]"
                style={{ backgroundImage: `url(${banner3})`, backgroundSize: 'cover', backgroundPosition: '20% 80%' }}
            ></div>
            {engines.map((section) => (
                <div key={section.category} className='text-center'>
                    <h1 className="text-white text-center font-avenir text-[24px] lg:text-[30px] mt-5">{section.category}</h1>
                    <div className='border-white border-t-[0.1px] border-opacity-40 mx-auto lg:max-w-screen-lg'></div>
                    <div className="grid grid-cols-1 md:flex flex-wrap justify-center gap-x-32 gap-y-12 py-4 mt-5 mx-auto lg:max-w-screen-2xl">
                        {section.items.map((item) => (
                            <div key={item.name} className="text-white">
                                <div className="flex justify-center items-center flex-col text-center font-avenir shadow-xl">
                                    <div className='p-4 w-full flex flex-row justify-evenly items-center'>
                                        <img className='max-md:w-52 w-64' src={item.src} alt="" />
                                        <div className='text-sm text-start ml-4'>
                                            <p>{item.brand}</p>
                                            <p>{item.from}</p>
                                            <p>{item.model}</p>
                                            <p>{item.flow}</p>
                                            <p>{item.type}</p>
                                            <p>{item.power}</p>
                                            <p>{item.powerReq}</p>
                                            <p>{item.tension}</p>
                                            <p>{item.tank}</p>
                                            <p>{item.desc}</p>
                                            <p>{item.desc2}</p>
                                            <p>{item.desc3}</p>
                                        </div>
                                    </div>
                                    <div className='w-full py-2 border-white border-t-[0.1px] border-opacity-40'>
                                        <h1 className='font-bold text-md lg:text-xl'>{item.name}</h1>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <div>
                <SwiperFooter />
            </div>
        </section>
    )
}

export default Engines