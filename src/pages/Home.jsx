import SwiperInventory from "../components/SwiperInventory"
import SwiperSales from "../components/SwiperSales"

const Home = () => {
    return (
        <main className=" flex justify-center items-center mt-[3.84em] no-select">
            <div className='w-full'>
                <div>
                    <h1 className="text-white text-center font-avenir text-[30px] lg:text-[40px] pt-1">
                        PROYECTOS INSTALADOS
                    </h1>
                    <div className='border-white border-t-[0.1px] border-opacity-40 mx-auto lg:max-w-screen-lg mb-4'></div>
                    <div className="flex flex-row flex-wrap justify-around mx-10">
                        <div className="">
                            <SwiperSales />
                        </div>
                        <div className="">
                            <SwiperSales />
                        </div>
                        <div className="">
                            <SwiperSales />
                        </div>
                        <div className="">
                            <SwiperSales />
                        </div>
                    </div>
                </div>
                <SwiperInventory />
            </div>
        </main >
    )
}

export default Home