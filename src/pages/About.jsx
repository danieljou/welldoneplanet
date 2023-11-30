import React from 'react'

import image6 from '../assets/img/image6.png'
import logo1 from '../assets/img/logo1.png'
import brand3ok from '../assets/img/brand3ok.png'
import { Link } from 'react-router-dom'
const About = () => {
    return (
        <div>
            <div className="w-full h-screen bg-[#00868E] dark:bg-gray-900 relative mb-80">
                <img src={image6} alt="" className="absolute" />
                <h2 className='flex w-full  items-center p-10 justify-between' >
                    <span className='w-1/4 border-red-500 border-4 mx-3' ></span>
                    <span className='w-2/4 text-white text-4xl text-center'>A propos de Welldone Planet</span>
                    <span className='w-1/4 border-amber-500 border-4 mx-3' ></span>
                </h2>
                <div className="text-center text-white w-1/2 m-auto">
                    Decouvrez l’histoire de notre stratup, notre mission passionnee pour une amelioree par la technologie, et l’equipe devouee derriere Welldone Planet
                </div>
                <div className="m-auto  text-center my-10">
                    <Link to={''} className='p-5 bg-white rounded-[50px] '>Rejoignez-nous</Link>
                </div>
                <div className="m-auto rounded-lg my-32 h-3/4 dark:bg-gray-600  bg-white w-3/4 p-12 shadow-lg relative">
                    <img src={logo1} alt="Logo" className='m-auto' />
                    <img src={brand3ok} alt="brand" className=' absolute bottom-0 left-0 right-0 m-auto' />
                </div>
            </div>

        </div>
    )
}

export default About