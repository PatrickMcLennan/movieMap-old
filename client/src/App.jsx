import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './layout/Nav/Nav'
import Login from './pages/Login/Login.jsx'
import LoginProvider from './contexts/LoginProvider'
import Home from './pages/Home/Home.jsx'

import {theme, GlobalStyle} from './utils/globalStyles'

class App extends Component {
    state = {
        renderLogin: false,
    }

    componentWillMount() {
        const user = JSON.parse(localStorage.getItem('movieMap'));
        console.log(this.props.context)
        if (user) {
            return this.setState({ renderLogin: false })
        }
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyle />
                    <Nav />
                    <Router>
                        <Switch>
                            <LoginProvider>
                                <Route exact path="/" render={() => <Login />} />
                            </LoginProvider>
                            <Route exact path="/home" render={() => <Home />} />
                        </Switch>
                    </Router>
                </>
            </ThemeProvider>
        )
    }
}

export default App