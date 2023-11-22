import React from 'react'
import phone from '../assets/lotties/phone'
import { Controls, Player } from '@lottiefiles/react-lottie-player'
import OursServices from '../constants/OursServices'
import SingleServices from '../components/SingleServices'

const Services = () => {
    return (
        <div className='w-full p-10' >
            <div className="flex">
                <div className="w-full border p-10 rounded-xl justify-center items-center shadow-gray-200 shadow-lg">
                    <p className='text-3xl text-gray-800 text-center font-bold' >
                        Notre gamme de services
                    </p>
                </div>
            </div>


            <div className="bg-gray-100/80  my-12 flex justify-between ">
                <div className="w-full ">
                    <Player
                        autoplay
                        loop
                        src={phone}
                        style={{ height: '500px', width: '500px' }}
                    >
                        <Controls visible={false} />
                    </Player>
                </div>
                <div className="w-full  bg-gray-200 p-5 items-center">
                    <div className=" p-5 flex-col flex h-full justify-around">
                        <h1 className='text-2xl  font-bold' >Des services de hautes qualités</h1>
                        <p className='my-5 text-justify '>
                            Découvrez nos services informatiques de pointe, conçus pour répondre à vos besoins spécifiques. Notre équipe d'experts passionnés vous propose des solutions personnalisées, de la gestion réseau à la cybersécurité, en passant par le développement logiciel et le support technique. Faites confiance à notre expertise pour propulser votre entreprise vers l'avenir numérique.
                        </p>
                    </div>
                </div>

            </div>
            <div className="bg-gray-100 w-full grid grid-cols-2 gap-6 p-6">
                {
                    OursServices.map((service, key) => (
                        <div className='flex w-full' key={key} >
                            <SingleServices delay={(OursServices.indexOf(service) + 1) * 2} services={service} right={OursServices.indexOf(service) % 2 != 0 ? true : false} />
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Services