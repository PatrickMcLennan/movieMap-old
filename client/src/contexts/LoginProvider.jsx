import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

export const LoginContext = React.createContext();

class LoginProvider extends Component {
    state = {
        ieDetected: false,
        email: '',
        password: '',
    }

    componentWillMount() {
        const ie = (navigator.msMaxTouchPoints !== void 0);
        if (ie && !localStorage.getItem('seen')) {
            return this.setState({ ieDetected: true })
        }
    }

    handleChange = ({ target: { name, value } }) => this.setState(prevState => ({ ...prevState, [name]: value }))
    
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }

    saveWarning = () => {
        localStorage.setItem('seen', true);
        return this.setState({ ieDetected:false })
    }

    ignoreWarning = () => this.setState({ ieDetected: false })


    login = () => {
        axios({
            method: 'GET',
            url: 'https://localhost:4000/getLogin',
            headers: { 'Content-Type': 'application/json' },
            body: [this.state.email, this.state.password]
        })
            .then(success => console.log(success))
            .catch(err => console.error(err))
    }

    createUser = () => {
        axios({
            method: 'POST',
            url: 'https://localhost:4000/createUser',
            headers: { 'Content-Type': 'application/json' },
            body: { email: this.state.email, password: this.state.password }
        })
            .then(success => console.log(success))
            .catch(err => console.error(err))
    }
    
    render() {
        const { state, handleChange, handleSubmit } = this;
        return (
            <LoginContext.Provider value={{ ...state, handleChange, handleSubmit }} >
                {this.props.children}
            </LoginContext.Provider>
        )
    }
}

export default LoginProvider