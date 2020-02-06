import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LogIn from './LogIn';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const routing = (
    <BrowserRouter>
        <Switch>           
            <Route exact path="/" component={App}/>
            <Route exact path="/login"component={LogIn}/>
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
