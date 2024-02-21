import { supplies } from '../constants'
import { banner2 } from '../assets/images'


const Supplies = () => {
    return (
        <section className="mt-[5em] bg-mainBlue">
            <h1 className="text-white text-center font-avenir text-[40px] pt-1">INSUMOS</h1>
            <div className='border-white border-t-[0.1px] border-opacity-40 mx-auto lg:max-w-screen-lg mb-4'></div>
            <div className="banner-image h-[300px] md:h-[400px] xl:h-[500px]"
                style={{ backgroundImage: `url(${banner2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            ></div>
            {supplies.map((section) => (
                <div key={section.category} className='text-center'>
                    <h1 className="text-white text-center font-avenir text-[35px] mt-5">{section.category}</h1>
                    <div className='border-white border-t-[0.1px] border-opacity-40 mx-auto lg:max-w-screen-lg'></div>
                    <div className="grid grid-cols-1 md:flex flex-wrap justify-center gap-x-32 gap-y-12 py-4 mt-10 mx-auto lg:max-w-screen-2xl">
                        {section.items.map((item) => (
                            <div key={item.name} className="mb-4">
                                <div className="flex justify-center items-center flex-col text-center font-avenir text-grayFont">
                                    <div className='mb-4 w-full flex flex-row justify-evenly items-center'>
                                        <img className='max-md:w-52 w-64 shadow-xl' src={item.src} alt="" />
                                        <div className='text-md text-start text-white md:mx-4 p-4'>
                                            <p>{item.brand}</p>
                                            <p>{item.model}</p>
                                            <p>{item.desc}</p>
                                            <p>{item.desc2}</p>
                                            <p>{item.desc3}</p>
                                            <p>{item.desc4}</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-center w-full py-2 border-white border-b-[0.1px] md:border-b-[0px] md:border-t-[0.1px] border-opacity-40 mx-4 text-white'>
                                        <h1 className='font-extrabold text-xl'>{item.name} </h1>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Supplies