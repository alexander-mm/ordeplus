import PropTypes from 'prop-types';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../assets/images'
import { socialMedia } from '../constants'
import FloatingButtonCO from './FloatingButtonCO'
import FloatingButtonEC from './FloatingButtonEC'
import FloatingChatEC from './FloatingChatEC'
import FloatingChatCO from './FloatingChatCO';

const Footer = ({ contactLinksOption }) => {

    const [showWhat, setShowWhat] = useState(true);
    const [showChat, setShowChat] = useState(false);

    useEffect(() => {
        const timeoutShow = setTimeout(() => {
            setShowChat(true);
            setShowWhat(false);
        }, 10000);

        const timeoutHidde = setTimeout(() => {
            setShowChat(false);
            setShowWhat(true);
        }, 20000);
        return () => {
            clearTimeout(timeoutShow)
            clearTimeout(timeoutHidde)
        };
    }, []);

    return (
        <footer className='bg-mainBlue w-full border-white border-t-[0.1px] border-opacity-40 z-[1000] px-4 font-avenir'>
            {showWhat && (
                <div className='transition-opacity duration-3000 opacity-100'>
                    {contactLinksOption === 1 ? <FloatingButtonCO /> : <FloatingButtonEC />}
                </div>
            )}
            {showChat && (
                <div className='transition-opacity duration-3000 opacity-100'>
                    {contactLinksOption === 1 ? <FloatingChatCO /> : <FloatingChatEC />}
                </div>
            )}
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
                <Link to="/" className='mr-4 sm:mr-0'>
                    <img src={logo} alt="Logo" width={200} />
                </Link>
            </div>
            <h1 className='text-white text-center text-xs font-avenir font-thin py-4'>Todos los Derechos Reservados © 2024 - ORDEPLUS™ - Una División de Plus Group</h1>
        </footer>
    )
}

Footer.propTypes = {
    contactLinksOption: PropTypes.number,
};

export default Footer