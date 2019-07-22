import React, { Component } from 'react'
import { StyledBackdrop } from './Login.style';
import LoginProvider from '../../contexts/LoginProvider.jsx'
import LoginModal from '../../components/LoginModal/LoginModal.jsx'

class Login extends Component {
    render() {
        return (
                <StyledBackdrop>
                    <LoginModal />
                </StyledBackdrop>
        )
    }
}

export default Login