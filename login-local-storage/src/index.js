import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from'./serviceWorker';
import App from './App';
import LogIn from './LogIn';

import PrivateRoute from './PrivateRoute';
import DashBoard from './DashBoard';

const routing = (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App} />
			<PrivateRoute path="/dashboard" component={DashBoard}/>
			<Route path="/login" component={LogIn} />
		</Switch>
	</BrowserRouter>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
