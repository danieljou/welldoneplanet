import React from 'react'
import img from '../assets/img/page.png'
import phone from '../assets/lotties/phone'
import { Controls, Player } from '@lottiefiles/react-lottie-player'
const HomePage = () => {
    return (
        <div>
            <img src={img} alt="L" className='w-full' />

            <div>
                <Player
                    autoplay
                    loop
                    src={phone}
                    style={{ height: '500px', width: '500px' }}
                >
                    <Controls visible={false} />
                </Player>
            </div>
        </div>
    )
}

export default HomePage