import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';


import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Apply from './components/Apply';
import Admin from './components/Admin';
import Menu from './components/Menu';
import Pnf from './components/Pnf';

const menu = (
    <Router history={createBrowserHistory()}>
        <Switch> 
            <Route exact path="/" render={() => <Menu><Apply /></Menu>} />
            <Route exact path="/Apply" render={() => <Menu><Apply /></Menu>} />
            <Route exact path="/admin" render={() => <Menu><Admin /></Menu>} />
            <Route exact path="**" render={() => <Menu><Pnf /></Menu>} />
        </Switch>
    </Router>
);



ReactDOM.render(menu , document.getElementById('root'));
