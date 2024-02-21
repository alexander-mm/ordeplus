import { useState } from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { close } from '../assets/icons'
import { arrow } from '../assets/icons'
import { subLinksEngines, subLinksPumps, subLinksProducts, subLinksSupplies, listPortableMachines, navLinks } from '../constants'
import '../css/userCss.css';

const Navbar = () => {

    const [menuMachines, setMenuMachines] = useState(false);
    const [menuEngines, setMenuEngines] = useState(false);
    const [menuPumps, setMenuPumps] = useState(false);
    const [menuProducts, setMenuProducts] = useState(false);
    const [menuSupplies, setMenuSupplies] = useState(false);
    const [toggle, setToggle] = useState(false);

    return (
        <header className='w-full bg-mainBlue border-white border-b-[0.1px] border-opacity-40 fixed no-select'>
            <nav className='flex gap-8 justify-between items-center mx-4 py-4 max-container relative z-[1000]'>
                {/*NAVBAR*/}
                <Link to="/" className='min-w-[200px]'>
                    <img to="/" src={logo} alt="Logo" width={200} />
                </Link>
                <ul className='flex-1 flex justify-end items-center gap-0 max-lg:hidden text-white text-[13.4px] xl:text-lg font-avenir font-thin py-2 md:py-0 md:gap-x-2'>
                    <li>
                        <Link
                            className='p-3 cursor-pointer'
                            to="/"
                            onClick={() => {
                                setMenuMachines(false);
                                setMenuEngines(false);
                                setMenuPumps(false);
                                setMenuProducts(false);
                                setMenuSupplies(false)
                            }}
                        >
                            INICIO
                        </Link>
                    </li>
                    <li>
                        <a
                            className='p-3 cursor-pointer'
                            onClick={() => {
                                setMenuMachines((prev) => !prev);
                                setMenuEngines(false);
                                setMenuPumps(false);
                                setMenuProducts(false);
                                setMenuSupplies(false)
                            }}
                        >
                            EQUIPOS
                        </a>
                    </li>
                    <li>
                        <a
                            className='p-3 cursor-pointer'
                            onClick={() => {
                                setMenuEngines((prev) => !prev);
                                setMenuMachines(false);
                                setMenuPumps(false);
                                setMenuProducts(false);
                                setMenuSupplies(false)
                            }}
                        >
                            MOTORES
                        </a>
                    </li>
                    <li>
                        <a
                            className='p-3 cursor-pointer text-wrap'
                            onClick={() => {
                                setMenuPumps((prev) => !prev);
                                setMenuMachines(false);
                                setMenuEngines(false);
                                setMenuProducts(false);
                                setMenuSupplies(false);
                            }}
                        >
                            BOMBAS DE VACÍO
                        </a>
                    </li>
                    <li>
                        <a
                            className='p-3 cursor-pointer text-wrap'
                            onClick={() => {
                                setMenuProducts((prev) => !prev);
                                setMenuMachines(false);
                                setMenuEngines(false);
                                setMenuPumps(false);
                                setMenuSupplies(false);
                            }}
                        >
                            REPUESTOS & ACCS
                        </a>
                    </li>
                    <li>
                        <a
                            className='p-3 cursor-pointer'
                            onClick={() => {
                                setMenuSupplies((prev) => !prev);
                                setMenuMachines(false);
                                setMenuEngines(false);
                                setMenuPumps(false);
                                setMenuProducts(false);
                            }}
                        >
                            INSUMOS
                        </a>
                    </li>
                    <li>
                        <Link
                            className='p-3 cursor-pointer'
                            to="/contact"
                            onClick={() => {
                                setMenuMachines(false)
                                setMenuEngines(false)
                                setMenuPumps(false);
                                setMenuProducts(false);
                                setMenuSupplies(false);
                            }}
                        >
                            CONTACTO
                        </Link>
                    </li>
                </ul>
                {/*HAMBURGER MENU*/}
                <div className='hidden max-lg:flex'>
                    <img
                        src={toggle ? close : hamburger}
                        alt="Hamburger"
                        width={28}
                        height={28}
                        onClick={() => setToggle((prev) => !prev)}
                    />
                    <div className={`${toggle ? 'flex' : 'hidden'} fixed top-0 right-0 h-full px-8 pt-4 pb-44 mt-[3.3em] justify-start text-center flex-col gap-y-4 bg-mainBlue z-[900] overflow-y-auto border-white border-l-[0.1px] border-opacity-40`}>
                        <ul className='flex flex-col justify-start items-center'>
                            <div className='fixed inset-y-0 right-2 top-[15%]'>
                                <img src={arrow} alt="" width="35px" className='rotate-90' />
                            </div>
                            {navLinks.map((item, index) => (
                                <li key={index} className='py-2'>
                                    <div className={`${item.label ? 'mt-4' : 'mt-0'}`}>
                                        <Link
                                            key={`span$index`}
                                            to={item.to}
                                            onClick={() => setToggle((prev) => !prev)}
                                            className='text-white text-lg font-avenir font-extrabold'
                                        >
                                            {item.label}
                                        </Link>
                                    </div>
                                    <Link
                                        key={`link$index`}
                                        to={item.to}
                                        onClick={() => setToggle((prev) => !prev)}
                                        className="text-white font-avenir font-thin"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
            {/*SIDE DESKTOP MENU */}
            <div className='max-lg:hidden'>
                <ul className={`${menuMachines ? 'flex' : 'hidden'} fixed top-0 right-0 w-[28%] xl:w-[22%] h-full pt-8 pb-44 mt-[3.8em] justify-start text-center flex-col gap-y-4 bg-mainBlue z-[900] overflow-y-auto border-white border-l-[0.1px] border-opacity-40`}>
                    <Link to="/machines" onClick={() => { setMenuMachines(false); }} className='font-avenir text-white font-extrabold text-xl'
                    >
                        EQUIPOS PORTÁTILES
                    </Link>
                    {listPortableMachines.map((item) => (
                        <li key={item.label}>
                            <Link onClick={() => setMenuMachines((prev) => !prev)} className="text-white font-avenir text-lg mx-10">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    <li className='mt-5'>
                        <Link to="/machines" className="font-avenir text-white font-extrabold text-xl" onClick={() => setMenuMachines((prev) => !prev)}>
                            EQUIPOS TIPO SALA
                        </Link>
                    </li>
                </ul>
                <ul className={`${menuEngines ? 'flex' : 'hidden'} fixed top-0 right-0 w-[28%] xl:w-[22%] h-full pt-8 pb-44 mt-[3.8em] justify-start text-center flex-col gap-y-4 bg-mainBlue z-[900] overflow-y-auto border-white border-l-[0.1px] border-opacity-40`}>
                    {subLinksEngines.map((item) => (
                        <li key={item.label}>
                            <Link to={item.to} onClick={() => setMenuEngines((prev) => !prev)} className="text-white text-center font-avenir text-lg font-thin mx-8">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className={`${menuPumps ? 'flex' : 'hidden'} fixed top-0 right-0 w-[28%] xl:w-[22%] h-full pt-8 pb-44 mt-[3.8em] justify-start text-center flex-col gap-y-4 bg-mainBlue z-[900] overflow-y-auto border-white border-l-[0.1px] border-opacity-40`}>
                    {subLinksPumps.map((item) => (
                        <li key={item.label}>
                            <Link to={item.to} onClick={() => setMenuPumps((prev) => !prev)} className="text-white text-center font-avenir text-lg font-thin mx-8">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className={`${menuProducts ? 'flex' : 'hidden'} fixed top-0 right-0 w-[28%] xl:w-[22%] h-full pt-8 pb-44 mt-[3.8em] justify-start text-center flex-col gap-y-4 bg-mainBlue z-[900] overflow-y-auto border-white border-l-[0.1px] border-opacity-40`}>
                    {subLinksProducts.map((item) => (
                        <li key={item.label}>
                            <Link to={item.to} onClick={() => setMenuProducts((prev) => !prev)} className="text-white text-center font-avenir text-lg font-thin mx-8">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    <div className='fixed inset-y-0 right-4 top-[13%]'>
                        <img src={arrow} alt="" width="35px" className='rotate-90' />
                    </div>
                </ul>
                <ul className={`${menuSupplies ? 'flex' : 'hidden'} fixed top-0 right-0 w-[28%] xl:w-[22%] h-full pt-8 pb-44 mt-[3.8em] justify-start text-center flex-col gap-y-4 bg-mainBlue z-[900] overflow-y-auto border-white border-l-[0.1px] border-opacity-40`}>
                    {subLinksSupplies.map((item) => (
                        <li key={item.label}>
                            <Link to={item.to} onClick={() => setMenuSupplies((prev) => !prev)} className="text-white text-center font-avenir text-lg font-thin mx-8">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;