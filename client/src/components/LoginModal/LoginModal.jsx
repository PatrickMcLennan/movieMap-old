import React, { useContext } from 'react';
import { LoginContext } from '../../contexts/LoginProvider.jsx';

import { StyledForm, StyledInput, StyledButtonBox, BiggestButton, ButtonInput } from './LoginModal.style'

const LoginModal = () => {
    const { email, password, handleChange, handleSubmit } = useContext(LoginContext)
    return (
            <StyledForm onSubmit={e => handleSubmit(e)}>
                <StyledInput type="email" name="email" onChange={e => handleChange(e)} value={email} tabIndex="1" required/>
                <StyledInput type="password" name="password" onChange={e => handleChange(e)} value={password} tabIndex="2" required />
                <StyledButtonBox>
                    <ButtonInput type="submit" value="Log In" tabIndex="3"/>
                    <BiggestButton tabIndex="4">Register</BiggestButton>
                </StyledButtonBox>
            </StyledForm>
    )
} 

export default LoginModal 
