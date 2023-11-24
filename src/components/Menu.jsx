import React, { useState } from 'react'
import logo from "../assets/img/logo1.png"
import MenuItem from '../constants/MenuItem'
import { Link, NavLink } from 'react-router-dom'
import { IoCloudyNightOutline } from "react-icons/io5";
import { BsCloudSun } from "react-icons/bs";
import { HiComputerDesktop } from "react-icons/hi2";

import "../styles/menu.css"
import { setTheme } from '../slices/themeSlice';
import { useDispatch } from 'react-redux';
const Menu = () => {
    const dispatch = useDispatch()
    const [hidden, sethidden] = useState(true)
    const [siwtchTheme, setSiwtchTheme] = useState(true)
    console.log(MenuItem);
    const handleChangeTheme = (value) => {
        if (value !== 'system') {
            dispatch(setTheme(value))
            console.log(value);
        }
        if (value === 'system') {
            const darkWay = window.matchMedia("(prefer-color-scheme : dark)")
            console.log("Dark ", darkWay.matches);
            if (darkWay.matches) {
                dispatch(setTheme("dark"))
            }
            else {
                dispatch(setTheme("light"))
            }
        }
    }
    return (
        <nav className="z-[100] dark:bg-gray-900 bg-white/75 border-gray-200 backdrop-blur-lg fixed w-full top-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} width={300} alt='logo' />
                </Link>
                <button data-collapse-toggle="navbar-default"
                    onClick={() => sethidden(!hidden)}
                    type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded={!hidden}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>

                </button>
                <div className={`${hidden ? 'hidden' : ''} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className={` ${!hidden ? 'toggle duration-1000' : ''}  font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:border-gray-700`}>

                        {
                            MenuItem.map((menu, key) => {
                                return (
                                    <li key={key}  >
                                        {/* <span className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</span> */}
                                        <NavLink className="block py-2 px-3 bg-transparent rounded dark:text-white" to={menu.link} >  {menu.title}  </NavLink>

                                    </li>


                                )
                            })
                        }

                    </ul>
                </div>
                {
                    !siwtchTheme &&
                    (
                        <div className={`w-full h-screen absolute bg-transparent left-0 right-0 bottom-0 top-0`}
                            onClick={() => setSiwtchTheme(true)}
                        ></div>

                    )
                }
                <div className="relative ml-3 ">
                    <div onClick={() => setSiwtchTheme(!siwtchTheme)}  >
                        <button type="button" className="relative flex rounded-full  text-sm focus:outline-none  " id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">Open user menu</span>
                            <p className='dark:text-white text-2xl font-bold' >  <BsCloudSun /> </p>
                        </button>
                    </div>


                    <div className={` ${siwtchTheme ? 'hidden' : ''} absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                        <span onClick={() => handleChangeTheme('light')} className="hover:cursor-pointer flex gap-3 hover:bg-slate-200/25 px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0"><BsCloudSun /> Light</span>
                        <span onClick={() => handleChangeTheme('dark')} className="hover:cursor-pointer flex gap-3 hover:bg-slate-200/25 px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1"> <IoCloudyNightOutline /> Dark </span>
                        {/* <span onClick={() => handleChangeTheme('system')} className="hover:cursor-pointer flex gap-3 hover:bg-slate-200/25 px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2"><HiComputerDesktop /> System </span> */}
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Menu