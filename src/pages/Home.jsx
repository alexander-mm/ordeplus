import { useEffect } from "react";
import { background } from '../assets/images'
// import SwiperInventory from "../components/SwiperInventory"
// import SwiperSales from "../components/SwiperSales"

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
        <main className="relative h-[500px] md:h-[600px] lg:h-[800px] overflow-hidden flex items-center no-select w-full bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${background})`,
            }}
        >
            <div className="absolute top-0 left-0 h-full w-[80%] md:w-[55%] bg-gradient-to-r from-white via-white/60 to-transparent z-[1]"/>
            <div className="relative z-10 flex items-center min-h-screen px-6 md:px-16">
                <div className=" max-w-5xl">
                    <h2 className="text-mainBlue font-sora font-bold text-sm md:text-lg uppercase">
                     SOLUCIONES EN ORDEÑO MECÁNICO
                    </h2>
                    <h1 className="font-sora text-slate-900 text-4xl">
                        Equipos de Ordeño Que{" "}
                        <span className="text-mainBlue font-bold">Facilitan</span>
                        <br />
                        Tu Trabajo y{" "}
                        <span className="text-mainBlue font-bold">
                        Mejorar
                        </span>{" "}
                        la Productividad!
                    </h1>
                </div>
            </div>
        </main   >
    )
}

export default Home