import React, {useState} from 'react';
import {LoginContext} from '../../contexts/LoginProvider.jsx';

const signup = () => alert(`${inputs.email} ${inputs.password}`)

const LoginModal = () => {
    const [inputs, setInputs] = useState({});
    return (
        <LoginContext.Consumer>
            {context => 
                <form onSubmit={e => { e.preventDefault(); console.log(inputs) }}>
                    <input type="email" name="email" onChange={e => setInputs(e.target.value)} value={inputs.email} required/>
                    <input type="password" name="password" onChange={e => setInputs(e.target.value)} value={inputs.password} required />
                    <input type="submit" value="submit" />
                </form>
            }
        </LoginContext.Consumer>
    )
} 

export default LoginModal 
