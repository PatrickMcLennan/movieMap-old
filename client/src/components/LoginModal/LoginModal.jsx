import React, { useContext } from 'react';
import { LoginContext } from '../../contexts/LoginProvider.jsx';

import { StyledForm, StyledInput } from './LoginModal.style'

const LoginModal = () => {
    const { email, password, handleChange, handleSubmit } = useContext(LoginContext)
    return (
            <StyledForm onSubmit={e => handleSubmit(e)}>
                <StyledInput type="email" name="email" onChange={e => handleChange(e)} value={email} required/>
                <StyledInput type="password" name="password" onChange={e => handleChange(e)} value={password} required />
                <input type="submit" value="submit" />
            </StyledForm>
    )
} 

export default LoginModal 
