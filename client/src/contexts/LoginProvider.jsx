import React, { Component, createContext } from 'react';
import axios from 'axios';

export const LoginContext = createContext();

class LoginProvider extends Component {
    state = {
        ieDetected: {
            animate: false,
            render: false
        },
        LoginModal: {
            animate: true,
            render: true,
        },
        RegisterModal: {
            animate: false,
            render: false,
        },
        currentComponent: 'LoginModal',
        email: '',
        name: '',
        password: '',
        passwordCheck: '',
        animationTiming: 1500,
    }

    componentWillMount() {
        const ie = (navigator.msMaxTouchPoints !== void 0);
        if (ie && !localStorage.getItem('seen')) {
            return this.setState({ ieDetected: {} })
        }
    }

    changeComponent = newComponent => this.setState(prevState => ({ ...prevState, currentComponent: newComponent }))
    
    createUser = () => 
    axios({
        method: 'POST',
        url: 'http://localhost:4000/createUser',
        headers: {
            'Content-Type':'application/json'
        },
        data: JSON.stringify({
            email: this.state.email,
            name: this.state.name,
            password: this.state.password
        })
    })
        .then(success => console.log(success))
        .catch(error => console.error(error))

    handleChange = ({ target: { name, value } }) => this.setState(prevState => ({ ...prevState, [name]: value }))
    
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }

    ignoreWarning = () => {
        this.setState(prevState => ({
            ...prevState,
            ieDetected: {
                animate: true,
                render: true,
            }
        }))
        return setTimeout(this.setState(prevState => ({
            ...prevState,
            idDetected: {
                animate: false,
                render: false
            }
        }))), 2500
    }

    login = () => 
        axios({
            method: 'POST',
            url: 'http://localhost:4000/postUser',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify({ email: this.state.email, password: this.state.password }),
        })
            .then(success => console.log(success))
            .catch(err => console.error(err.message))

    renderModal = newComponent => {
        const { currentComponent } = this.state;
        this.setState(prevState => ({
            ...prevState,
            [currentComponent]: {
                animate: false,
                render: true
            }
        }))
        return setTimeout(() => {
            this.setState(prevState => ({
                ...prevState,
                [currentComponent]: {
                    animate: false,
                    render: false
                },
                [newComponent]: {
                    animate: true,
                    render: true,
                }
            }));
            this.changeComponent(newComponent)
        }, this.state.animationTiming)
    }

    saveWarning = () => {
        localStorage.setItem('seen', true);
        return this.setState({ ieDetected:false })
    }

    
    render() {
        const { handleChange, handleSubmit, login, createUser,...state } = this;
        return (
            <LoginContext.Provider value={{ state, handleChange, handleSubmit, login, createUser }} >
                {this.props.children}
            </LoginContext.Provider>
        )
    }
}

export default LoginProvider