import React from 'react'

const HomeDetails = ({ data }) => {
    return (
        <div className=' w-full p-10 shadow-md rounded text-right dark:bg-gray-900' >
            <p className='text-cyan-500  text-xl font-bold ' > {data.title} </p>
            <p className='my-4 font-bold dark:text-white' > {data.text} </p>
        </div>
    )
}

export default HomeDetails