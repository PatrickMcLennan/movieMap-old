import React from 'react';
import useForm from '../../hooks/useForm.jsx'

const signup = () => alert(`${inputs.email} ${inputs.password}`)

const LoginModal = () => {
    const {inputs, handleChange, handleSubmit} = useForm(signup)
    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" onChange={handleChange} value={inputs.email} required/>
            <input type="password" name="password" onChange={handleChange} value={inputs.password} required />
            <input type="submit" value="submit"/>
        </form>
    )
} 

export default LoginModal 
