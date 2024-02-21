import { Link } from 'react-router-dom'
import { logo } from '../assets/images'
import FloatingButton from './FloatingButton'
import { socialMedia } from '../constants'

const Footer = () => {
    return (
        <footer className='bg-mainBlue w-full border-white border-t-[0.1px] border-opacity-40 z-[1000] px-4 font-avenir'>
            <FloatingButton />
            <div className='flex justify-center md:justify-around flex-col xs2:flex-row xs2:gap-x-4  items-center xs:items-end xs2:items-center pt-4 pb-2'>
                <div className='flex flex-col'>
                    <h6 className='text-white'>Síguenos en Nuestras Redes!</h6>
                    <div className='flex flex-row gap-x-4 '>
                        {socialMedia.map((item, index) => (
                            <a key={index} href={item.href}>
                                <img src={item.src} alt={item.alt} width={40} height={40} />
                            </a>
                        ))}
                    </div>
                </div>
                <Link to="/">
                    <img src={logo} alt="Logo" width={200} />
                </Link>
            </div>
            <h1 className='text-white text-center text-xs font-avenir font-thin'>Todos los Derechos Reservados © 2024 - ORDEPLUS™ - Una División de Plus Group</h1>
        </footer>
    )
}

export default Footer