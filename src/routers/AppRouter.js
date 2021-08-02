import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Navbar } from '../components/Navbar';
import { Personajes } from '../components/Personajes';

import React from 'react'

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Router>
                    <Route exact path="/" component={Navbar} />
                    <Route exact path="/Personajes" component={Personajes} />
                </Router >
                <Redirect to="/" />
            </Switch>
        </Router>
    )
}
