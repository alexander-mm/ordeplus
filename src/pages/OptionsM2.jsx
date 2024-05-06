import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import SwiperFooter from '../components/SwiperFooter';
import { m2options } from '../constants'
import { arrow } from '../assets/icons'
import { download } from '../assets/icons'

const OptionsM2 = () => {

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
    <section className="mt-[4em] mb-12 bg-mainBlue">
        <h1 className="text-white text-center font-avenir text-[30px] lg:text-[40px] pt-1">
            ORDEBUGGY M2
        </h1>
        <div className='border-white border-t-[0.1px] border-opacity-40 mx-auto lg:max-w-screen-lg mb-4'></div>
        <div className="banner-image h-[300px] md:h-[400px] xl:h-[500px]" style={{ backgroundImage: `url(https://www.masqueunefecto.com/wp-content/uploads/2024/05/banner6.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        </div>
            {m2options.map((section) => (
                <div key={section.category} className='text-center'>
                    <h1 className="text-white text-center font-avenir text-[28px] lg:text-[30px] mt-3">{section.category}</h1>
                    <div className='border-white border-t-[0.1px] border-opacity-40 mx-auto lg:max-w-screen-lg'></div>
                    <div className="grid grid-cols-1 md:flex flex-wrap justify-center gap-x-32 gap-y-12 py-4 mt-5 mx-auto lg:max-w-screen-2xl">
                        {section.items.map((item) => (
                            <div key={item.key} className="text-white px-10">
                                <div className="flex justify-center items-center flex-col text-center font-avenir shadow-xl">
                                    <div className='p-4 w-full flex flex-col md:flex-row justify-evenly items-center'>
                                        <img className='max-md:w-52 w-64' src={item.src} alt="" />
                                        <div className='text-sm text-start ml-6'>
                                            <p>{item.engine}</p>
                                            <p>{item.engine2}</p>
                                            <p>{item.pump}</p>
                                            <p>{item.units}</p>
                                            <p>{item.can}</p>
                                            <p>{item.expand}</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-around items-center w-full py-4 gap-y-2 border-white border-t-[0.1px] border-opacity-40'>
                                <h1 className='font-bold text-lg lg:text-xl'>{item.name}</h1>
                                <div className='flex flex-col'>
                                    <a href={item.downloadLink} className='flex flex-row gap-x-2 justify-center items-center text-xs border py-2 px-10'>
                                        <img className='w-6' src={download} alt="" />
                                        <h2>DESCARGAR FICHA TÉCNICA</h2>
                                    </a>
                                </div>
                            </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center items-center'>
                    <Link to="/machines" className='font-avenir text-white w-44 flex flex-row justify-center items-center text-sm border p-2 cursor-pointer mt-4 whitespace-nowrap'>
                        <img src={arrow} className=' rotate-180' alt="" />
                        <h2>VOLVER A EQUIPOS</h2>
                    </Link>
                    </div>
                </div>
            ))}
            <div>
                <SwiperFooter />
            </div>
        </section>
  )
}

export default OptionsM2