import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
const SingleServices = ({ services, right, delay }) => {
    console.log("Delay : ", delay);
    return (
        <div className='p-5 bg-white w-full own-card' data-delay={`${delay}s`} >
            <div className={` text-amber-500 text-[100px] flex w-full ${right ? "justify-end" : ''}  `}> {<services.icon />} </div>
            <div className="my-3 font-bold text-3xl"> {services.title} </div>
            <div className="my-3"> {services.description} </div>
            <hr />
            <div className="mt-3 text-amber-500">
                <Link to={''} className='flex items-center hover:translate-x-4 hover:delay-150'>  Voir plus <IoIosArrowForward /> </Link>
            </div>
        </div>
    )
}

export default SingleServices