import React from 'react'
import register from '../assets/register.svg'
import { TextField } from '@mui/material'
import FormTemplate from './FormTemplate'
const RegisterForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 justify-between my-6' >
            <div className="w-full  flex justify-center items-center">
                <img src={register} className='w-[70%]' alt="" />
            </div>
            <div className="w-full shadow-lg border rounded-sm p-5  py-14">
                <form onSubmit={handleSubmit} >
                    <FormTemplate label='Votre nom' >
                        <TextField
                            color='warning'
                            placeholder='Jane'
                            fullWidth
                            type='text'
                            variant='outlined'
                        />
                    </FormTemplate>
                    <FormTemplate label='Votre prénom' >
                        <TextField
                            color='warning'
                            placeholder='Doe'
                            className='dark:placeholder-slate-100 focus:accent-pink-500'
                            fullWidth
                            type='text'
                            variant='outlined'
                            sx={{
                                input: {
                                    color: 'dark:text-red', // Replace 'original red' with your original red color
                                },
                            }}
                        />
                    </FormTemplate>
                    <FormTemplate label='Votre E-mail' >
                        <TextField
                            color='warning'
                            placeholder='exemple@exemple.com'
                            fullWidth
                            type='email'
                            variant='outlined'
                        />
                    </FormTemplate>

                    <button type='submit' className='w-full bg-amber-500 my-5 p-3 font-bold text-xl text-white' >
                        S'inscrire
                    </button>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm