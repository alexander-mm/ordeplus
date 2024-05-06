import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { portableMachines, roomMachines } from '../constants'
import { banner5 } from '../assets/images'
import { download } from '../assets/icons'
import SwiperFooter from '../components/SwiperFooter';
import '../css/userCss.css';

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

    const [downloadMenuIndex, setDownloadMenuIndex] = useState(null);

    const toggleDownloadMenu = (index) => {
        if (downloadMenuIndex === index) {
            setDownloadMenuIndex(null);
        } else {
            setDownloadMenuIndex(index);
        }
    };

    return (
        <section className="mt-[4em] bg-mainBlue no-select">
            <h1 className="text-white text-center font-avenir text-[30px] lg:text-[40px] pt-1">
                EQUIPOS DE ORDEÑO
            </h1>
            <div className='border-white border-t-[0.1px] border-opacity-40 mx-auto lg:max-w-screen-lg mb-4'></div>
            <div
                className="banner-image h-[300px] md:h-[400px] xl:h-[500px]"
                style={{ backgroundImage: `url(${banner5})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
            </div>
            <h1 className="text-white text-center font-avenir text-[28px] lg:text-[30px] mt-3">
                EQUIPOS PORTÁTILES
            </h1>
            <div className='border-white border-t-[0.1px] border-opacity-40 mx-auto lg:max-w-screen-lg'></div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-xl:grid-cols-1 mx-auto lg:max-w-screen-2xl">
                {portableMachines.map((item, index) => (
                    <div key={item.key} className="col-span-1 lg:col-span-2 mb-4">
                        <div className="flex justify-center items-center flex-col text-center font-avenir text-white shadow-lg">
                            <div className='w-full flex flex-col md:flex-row justify-around items-center'>
                                <img className='max-md:w-50 w-80 md:m-3' src={item.src} alt="" />
                                <div className='text-start text-md py-4'>
                                    <p className='mx-2'>{item.desc1}</p>
                                    <p className='mx-2'>{item.desc2}</p>
                                    <p className='mx-2'>{item.desc3}</p>
                                    <Link to={item.to} className='flex flex-row gap-x-2 justify-center items-center text-xs border py-2 cursor-pointer mt-4'>
                                        <h2>VER MAS OPCIONES {item.model}</h2>
                                    </Link>
                                </div>
                            </div>
                            <div className='flex flex-col justify-around items-center w-full py-4 gap-y-2 border-white border-t-[0.1px] border-opacity-40'>
                                <h1 className='font-bold text-lg lg:text-xl'>{item.name}</h1>
                                <div className='flex flex-col'>
                                    <div className='flex flex-row gap-x-2 justify-center items-center text-xs border py-2 px-10 cursor-pointer' onClick={() => toggleDownloadMenu(index)}>
                                        <img className='w-6' src={download} alt="" />
                                        <h2>DESCARGAR FICHA TÉCNICA</h2>
                                    </div>
                                    {downloadMenuIndex === index && (
                                        <div className='flex flex-col gap-y-2 mt-4'>
                                            <h2>SELECCIONA EL MODELO: </h2>
                                            <a className='border' href={item.downloadLink1} download>{item.model}:  1 Puesto / 1 Cantina Inox. 30L</a>
                                            <a className='border' href={item.downloadLink2} download>{item.model}:  2 Puestos / 2 Cantinas Inox. 30L </a>
                                            <a className='border' href={item.downloadLink3} download>{item.model}:  1 Puesto / 1 Cantina Alum. 40L </a>
                                            <a className='border' href={item.downloadLink4} download>{item.model}:  2 Puestos / 1 Cantina Alum. 40L </a>
                                            <a className='border' href={item.downloadLink5} download>{item.model}:  2 Puestos / 2 Cantinas Alum. 40L </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h1 className="text-white text-center font-avenir text-[28px] lg:text-[30px] mt-4">
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
                                <div></div>
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