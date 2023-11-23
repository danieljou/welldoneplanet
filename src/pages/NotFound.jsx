import React from 'react'
import notfound from '../assets/lotties/notfound.json'
import { Controls, Player } from '@lottiefiles/react-lottie-player'
const NotFound = () => {
    return (
        <div className='h-screen w-full flex justify-center items-center ' >
            <Player
                autoplay
                loop
                src={notfound} className='w-[70%] md:w-[40%]' >
                <Controls />
            </Player>
        </div>
    )
}

export default NotFound