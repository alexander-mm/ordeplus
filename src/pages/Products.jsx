import { useEffect } from 'react';
import { banner2 } from '../assets/images'
import SwiperFooter from '../components/SwiperFooter';
import StorePerPage from './StorePerPage';

const Products = () => {

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
            <h1 className="text-white text-center font-avenir text-[28px] lg:text-[40px] pt-1">
                REPUESTOS & ACCESORIOS
            </h1>
            <div className='border-white border-t-[0.1px] border-opacity-40 mx-auto lg:max-w-screen-lg  mb-4'></div>
            <div className="banner-image h-[300px] md:h-[400px] xl:h-[500px]"
                style={{ backgroundImage: `url(${banner2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            ></div>
            <StorePerPage/>
            <div>
                <SwiperFooter />
            </div>
        </section>
    )
}

export default Products