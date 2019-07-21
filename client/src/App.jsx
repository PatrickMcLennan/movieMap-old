import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './pages/Login/Login.jsx'

import {theme, GlobalStyle} from './utils/globalStyles'

class App extends Component {
    state = {
        showIeWarning: false,
    }

    componentWillMount() {
        const ie = (navigator.msMaxTouchPoints !== void 0);
        if (ie && !localStorage.getItem('seen')) {
            return this.setState({ showIeWarning: true })
        }
    }

    saveWarning = () => {
        localStorage.setItem('seen', true);
        return this.setState({ showIeWarning:false })
    }

    ignoreWarning = () => this.setState({ showIeWarning: false })

    render() {
        const { showIeWarning } = this.state
        return (
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyle />
                    <Router>
                        <Switch>
                            <Route exact path="/" render={() => <Login />} />
                        </Switch>
                    </Router>
                    {showIeWarning && <IE11Warning saveWarning={this.saveWarning} ignoreWarning={this.ignoreWarning}/>}
                </>
            </ThemeProvider>
        )
    }
}

export default App