import React, { Component } from 'react';
import axios from 'axios';
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './pages/Login/Login.jsx'
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
                    <Router>
                        <Switch>
                            <Route exact path="/" render={() => <Login />} />
                            <Route exact path="/home" render={() => <Home />} />
                        </Switch>
                    </Router>
                </>
            </ThemeProvider>
        )
    }
}

export default App