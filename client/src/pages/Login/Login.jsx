import React, { useContext, useEffect } from 'react'
import { StyledBackdrop, StyledH1 } from './Login.style';
import LoginModal from '../../components/modals/LoginModal/LoginModal.jsx'
import RegisterModal from '../../components/modals/RegisterModal/RegisterModal.jsx'
import { LoginContext } from '../../contexts/LoginProvider';

const Login = () => {
    const { state: { state: {LoginModal, RegisterModal, animationTiming }} } = useContext(LoginContext)
    useEffect(() => {
        document.title = 'movieMap | Log In'
    })
    return (
        <StyledBackdrop>
            <StyledH1>movieMap</StyledH1>
            <LoginModal render={LoginModal.render} animationTiming={animationTiming}/>
            {render && <RegisterModal render={RegisterModal.render} animationTiming={animationTiming} />}
        </StyledBackdrop>
    )
}

export default Login