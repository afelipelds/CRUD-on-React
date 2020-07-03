import React, { useState } from 'react'
import { useForm } from 'react-hook-form'


const AddUserForm = (props) => {
    const { register, errors, handleSubmit } = useForm()

    const onSubmit = ( ev, data ) => {
        console.log(data, ev)
        props.addUser(data)
        ev.target.reset()
    }

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        ref={register({ required: {value:true, message:'Por favor ingresa tu nombre'} })}
                    />
                    <span>{errors ?.name ?.message}</span>
                </div>
                <div>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        name="username" 
                        ref={register({ required: {value:true, message:'Por favor registra tu username'} })}
                    />
                    <span>{errors ?.username ?.message}</span>
                </div>
                <div>
                    <button className="accent-button">
                        Add user
                    </button> 
                </div>
            </form>
        </div>
    )
}

export default AddUserForm