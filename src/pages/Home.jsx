import { useEffect } from "react";
import SwiperInventory from "../components/SwiperInventory"
import SwiperSales from "../components/SwiperSales"

const Home = () => {

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
        <main className=" flex justify-center items-center mt-[3.84em] no-select">
            <div className='w-full'>
                <h1 className="text-white text-center font-avenir text-[30px] lg:text-[40px] pt-1">
                    SOMOS ORDEPLUS
                </h1>
                <div className='border-white border-t-[0.1px] border-opacity-40 mx-auto lg:max-w-screen-lg mb-4'>
                    <p className="text-center text-lg text-white font-avenir mt-8 mx-8 lg:mx-auto lg:max-w-screen-lg">
                        En Ordeplus nos dedicamos apasionadamente a mejorar las actividades agropecuarias a través de soluciones especializadas en ordeño.  Como líderes en el sector, no solo vendemos máquinas de ordeño; nos comprometemos a ser tu socio confiable en el campo, trabajando incansablemente para proporcionarte soluciones que mejoren tu calidad de vida en las actividades diarias e impulsen el bienestar de tus animales. <br /><br />
                    </p>
                </div>
                <div>
                    <h1 className="text-white text-center font-avenir text-[29px] lg:text-[40px] pt-1">
                        PROYECTOS INSTALADOS
                    </h1>
                    <div className='border-white border-t-[0.1px] border-opacity-40 mx-auto lg:max-w-screen-lg mb-4'></div>
                    <div className="">
                        <div>
                            <SwiperSales />
                        </div>
                    </div>
                </div>
                <div className='mx-auto lg:max-w-screen-lg mb-4'>
                    <p className="text-center text-lg text-white font-avenir mt-12 mx-8 lg:mx-auto lg:max-w-screen-lg">
                        Explora nuestras secciones, conoce nuestros productos y contáctanos para brindarte una asesoría personalizada. Te ayudaremos a decidir qué equipo necesitas en base al número de animales a ordeñar. Si es tu primer equipo de ordeño, te enseñaremos cómo operarlo. Si ya tienes un equipo y necesitas algún componente, no te preocupes, te daremos especificaciones de nuestros productos.
                        <br /><br />¡Estamos aquí para ayudarte!
                    </p>
                </div>
                <h1 className="text-white text-center font-avenir text-[30px] lg:text-[40px] pt-1">
                    EXPLOREMOS JUNTOS!
                </h1>
                <div className='border-white border-t-[0.1px] border-opacity-40 mx-auto lg:max-w-screen-lg mb-4'></div>
                <SwiperInventory />
            </div>
        </main >
    )
}

export default Home