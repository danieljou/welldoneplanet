import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from './Menu'

const Base = () => {
    return (
        <div>
            <Menu />
            <Outlet />
        </div>
    )
}

export default Base