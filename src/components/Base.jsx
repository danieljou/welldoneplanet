import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from './Menu'
import Footer from './Footer'

const Base = () => {
    return (
        <div>
            <Menu />
            <div className="mt-20">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Base