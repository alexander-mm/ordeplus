import { supplies } from '../constants'
import { banner2 } from '../assets/images'

const Supplies = () => {
    return (
        <section className="mt-[4em] bg-mainBlue mb-12">
            <h1 className="text-white text-center font-avenir text-[30px] lg:text-[40px] pt-1">
                INSUMOS
            </h1>
            <div className='border-white border-t-[0.1px] border-opacity-40 mx-auto lg:max-w-screen-lg mb-4'></div>
            <div className="banner-image h-[300px] md:h-[400px] xl:h-[500px]"
                style={{ backgroundImage: `url(${banner2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            ></div>
            {supplies.map((section) => (
                <div key={section.category} className='text-center'>
                    <h1 className="text-white text-center font-avenir text-[24px] lg:text-[30px] mt-3">{section.category}</h1>
                    <div className='border-white border-t-[0.1px] border-opacity-40 mx-auto lg:max-w-screen-lg'></div>
                    <div className="grid grid-cols-1 md:flex flex-wrap justify-center gap-x-32 gap-y-12 py-4 mt-5 mx-auto lg:max-w-screen-2xl">
                        {section.items.map((item) => (
                            <div key={item.name} className="text-white">
                                <div className="flex justify-center items-center flex-col text-center font-avenir shadow-xl">
                                    <div className='p-4 w-full flex flex-row justify-evenly items-center'>
                                        <img className='max-md:w-52 w-64' src={item.src} alt="" />
                                        <div className='text-sm text-start ml-4'>
                                            <p>{item.brand}</p>
                                            <p>{item.model}</p>
                                            <p>{item.desc}</p>
                                            <p>{item.desc2}</p>
                                            <p>{item.desc3}</p>
                                            <p>{item.desc4}</p>
                                        </div>
                                    </div>
                                    <div className='w-full py-2 border-white border-t-[0.1px] border-opacity-40'>
                                        <h1 className='font-medium text-md lg:text-xl'>{item.name}</h1>
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