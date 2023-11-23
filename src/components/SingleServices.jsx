import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { CiShare1 } from "react-icons/ci";
const SingleServices = ({ services, right, delay }) => {
    console.log("Delay : ", delay);
    const style = {
        animationDelay: delay,
    };
    return (
        <div className='relative bg-white dark:bg-gray-900 w-full own-card flex flex-col justify-between hover:bg-amber-500 group duration-700' style={style} animation-duration={delay} >
            <div className="p-5 ">
                <div className={` group-hover:text-white text-amber-500 text-[100px] flex w-full justify-center ${right ? "justify-center" : ''}  `}> {<services.icon />} </div>
                <div className="dark:text-white my-3 font-bold text-3xl"> {services.title} </div>
                <div className=" dark:text-gray-500 my-3"> {services.description} </div>
            </div>
            <div className="justify-self-end w-full h-14 text-amber-500">
                <hr />
                <Link to={''} className='p-3 group-hover:text-white flex items-center hover:translate-x-4 duration-150'>  Voir plus <IoIosArrowForward /> </Link>
            </div>
            <div className="absolute bg-gray-100/70 hidden top-0  left-0  h-full w-full justify-center items-center ">
                <CiShare1 size={70} />
            </div>
        </div >
    )
}

export default SingleServices