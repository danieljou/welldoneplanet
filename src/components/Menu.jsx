import React from 'react'
import logo from "../assets/img/logo.png"
import MenuItem from '../constants/MenuItem'
import { NavLink } from 'react-router-dom'

import "../styles/menu.css"
const Menu = () => {
    console.log(MenuItem);
    return (
        <div className='w-full shadow-sm shadow-gray-200 p-5 flex justify-between items-center' >
            <div className="flex w-full justify-center">
                <img src={logo} width={300} alt='logo' />
            </div>
            <div className="flex gap-10 w-full  lg:flex ">
                {
                    MenuItem.map((menu, key) => {
                        return (
                            <div key={key}  >
                                <NavLink className="text-amber-500 font-bold text-lg" to={menu.link} >  {menu.title}  </NavLink>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Menu