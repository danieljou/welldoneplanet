import React, { useState } from 'react'
import logo from "../assets/img/logo.png"
import MenuItem from '../constants/MenuItem'
import { Link, NavLink } from 'react-router-dom'

import "../styles/menu.css"
const Menu = () => {
    const [hidden, sethidden] = useState(true)
    console.log(MenuItem);
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
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>

                </button>
                <div className={`${hidden ? 'hidden' : ''} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className={` ${!hidden ? 'toggle duration-1000' : ''}  font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:border-gray-700`}>

                        {
                            MenuItem.map((menu, key) => {
                                return (
                                    <li key={key}  >
                                        {/* <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a> */}
                                        <NavLink className="block py-2 px-3 bg-transparent rounded dark:text-white" to={menu.link} >  {menu.title}  </NavLink>

                                    </li>


                                )
                            })
                        }

                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Menu