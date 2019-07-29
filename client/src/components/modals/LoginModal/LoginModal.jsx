import React, { useContext } from 'react';
import { LoginContext } from '../../../contexts/LoginProvider.jsx';

import { StyledForm, StyledInput, StyledButtonBox, BiggestButton } from './LoginModal.style'

const LoginModal = () => {
    const { email, password, handleChange, login, renderRegisterModal } = useContext(LoginContext)
    return (
        <StyledForm onSubmit={e => { e.preventDefault() ; return login }}>
            <StyledInput type="email" name="email" onChange={e => handleChange(e)} value={email} tabIndex="1" required />
            <StyledInput type="password" name="password" onChange={e => handleChange(e)} value={password} tabIndex="2" required />
            <StyledButtonBox>
                <BiggestButton onClick={login} tabIndex="3" >Log In</BiggestButton>
                <BiggestButton onClick={renderRegisterModal} tabIndex="4" >Register</BiggestButton>
            </StyledButtonBox>
        </StyledForm>
    )
} 

export default LoginModal 
