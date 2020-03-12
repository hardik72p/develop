import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Login from './component/Login';
import DashBoard from './component/DashBoard';
import PrivateRoute from './common-component/PrivateRoute';
import App from './App';

import './index.css';
import './assets/scss/main.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
	<Router>
		<div>
			<ToastContainer />
			<Switch>
				<PrivateRoute exact path='/' component={App} />
				<Route path='/login' component={Login} />
				<PrivateRoute path='/sra' component={DashBoard} />
				<PrivateRoute path='/soa' component={DashBoard} />
				{/* <PrivateRoute path='/client-contract' component={ClientContract} /> */}
			</Switch>
		</div>
	</Router>
	, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
