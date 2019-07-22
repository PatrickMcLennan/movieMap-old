import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './pages/Login/Login.jsx'

import {theme, GlobalStyle} from './utils/globalStyles'

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyle />
                    <Router>
                        <Switch>
                            <Route exact path="/" render={() => <Login />} />
                        </Switch>
                    </Router>
                </>
            </ThemeProvider>
        )
    }
}

export default App