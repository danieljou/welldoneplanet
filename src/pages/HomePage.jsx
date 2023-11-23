import React from 'react'
import brand from '../assets/img/brand.png'
import colors from '../assets/img/colors.png'
import word from '../assets/img/word.png'
import HomeDetailsItems from '../constants/HomeDetailsItems'
import HomeDetails from '../components/HomeDetails'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className='dark:bg-gray-600'>
            <div className={` w-full h-screen bg-no-repeat bg-cover p-20 flex items-end justify-end relative`} style={{ backgroundImage: `url(${brand})` }} >
                <div className="w-full text-white text-center">
                    <h1 className=' text-[80px] font-bold' >
                        Bienvenue sur Welldone Planet
                    </h1>
                    <p className='text-[30px]  z-20 '>
                        Nous croyons que grace au numerique tout est possible pour une planete meilleure. Decouvrez nos services innovants et notre engagement envers un avenir plus durable.
                    </p>
                    <p className='mt-20 z-10' >Creer un avenir durable grace a la technologie</p>
                    <img src={colors} className=' -z-[0] w-60 -bottom-7 absolute right-0' alt="" />
                </div>
            </div>
            <div className='my-10 p-10 md:px-20' >
                <h2 className='flex w-full  items-center ' >
                    <span className='border-cyan-500 w-10 border-2 mx-3' ></span>
                    <span className='text-amber-500 text-xl'>Nos Solutions</span>
                </h2>
                <h2 className='font-bold text-2xl my-5' >
                    Des solutions simple pour resoudre vos problemes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2 md:gap-7 md:p-10">
                    {
                        HomeDetailsItems.map((item, key) => (
                            <div className='flex' key={key}>
                                <HomeDetails data={item} />
                            </div>
                        ))
                    }
                </div>

            </div>
            <div className="w-full md:h-screen bg-gray-300">
                <h2 className='flex w-full  items-center p-10' >
                    <span className='border-cyan-500 w-10 border-2 mx-3' ></span>
                    <span className='text-amber-500 text-xl'>Etude de cas</span>
                </h2>
                <div className="grid grid-cols-1  gap-2 p-2 md:grid-cols-2 md:p-10 md:gap-5">

                    <div className="w-full">
                        <h2 className='text-3xl text-bold' >
                            Découvrez comment nous transformons le monde grace la technologie.
                        </h2>
                        <ol type='1' className='my-10'>
                            <li>1. Découvrez nos solutions innovantes.</li>
                            <li>2. Collaborez avec notre équipe pour un avenir numérique plus brillant.</li>
                            <li>3. Mettez en œuvre nos solutions pour un impact positif.</li>
                            <li>4. Profitez d'une expérience numérique exceptionnelle.</li>
                        </ol>
                        <div className="w-full flex justify-center">
                            <Link className='bg-cyan-500 p-3 px-7 text-white rounded-3xl' >Allons-y</Link>
                        </div>
                    </div>
                    <div className="w-full h-full flex justify-center items-center">
                        <img src={word} className='w-2/4' alt="imga" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage