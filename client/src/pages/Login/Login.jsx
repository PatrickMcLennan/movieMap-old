import React, { Component } from 'react'
import { StyledBackdrop } from './Login.style';
import LoginProvider from '../../contexts/LoginProvider.jsx'
import LoginModal from '../../components/LoginModal/LoginModal.jsx'

class Login extends Component {
    render() {
        return (
            <LoginProvider>
                <StyledBackdrop>
                    <LoginModal />
                </StyledBackdrop>
            </LoginProvider>
        )
    }
}

export default Login