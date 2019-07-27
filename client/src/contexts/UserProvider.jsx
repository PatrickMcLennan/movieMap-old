import React, { Component } from 'react';


export const UserContext = React.createContext();

class UserProvider extends Component {
    state = {
        name: '',
        email: '',
        savedMovies: [],
        colorScheme: '',
        error: {
            valid: false,
            message: ''
        },
        success: {
            valid: false,
            message: '',
        },
        notifications: [],
    }

    renderResponse = ({ status, message }) => {
        this.setState(prevState => ({
            ...prevState,
            error: {
                valid: status !== '200',
                message: status !== '200' ? message : ''
            },
            success: {
                valid: status === '200',
                message: status === '200' ? message : ''
            }
        }));
        return setTimeout(this.setState(prevState => ({
            ...prevState,
            error: {
                valid: false,
                message: ''
            },
            success: {
                valid: false,
                message: ''
            }
        }))), 2500
    }

    changeScheme = newScheme =>
        axios({
            method: 'PUT',
            url: 'https://localhost:4000/editUser',
            headers: { 'Content-Type': 'application/json' },
            body: { colorScheme: newScheme }
        })
            .then(success => this.renderResponse(success))
            .catch(error => this.renderResponse(error))

    render() {
        const { state, changeScheme, login, renderResponse } = this;
        return (
            <UserContext.Provider value={{ state, changeScheme, login, renderResponse }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default UserProvider