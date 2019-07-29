import React, { useContext } from 'react';

import { LoginContext } from '../../../contexts/LoginProvider';

const RegisterModal = () => {
    const { name, email, password, passwordCheck, createUser, handleChange } = useContext(LoginContext);
    return (
        <form onSubmit={ e => { e.preventDefault() ; return createUser } }>
            <input type="text" name="name" value={name} onChange={e => handleChange(e)} required />
            <input type="text" name="email" value={email} onChange={e => handleChange(e)} required />
            <input type="password" name="password" value={password} onChange={e => handleChange(e)} required />
            <input type="password" name="passwordCheck" value={passwordCheck} onChange={e => handleChange(e)} required />
        </form>
    )
}

export default RegisterModal