import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StudentList from './StudentList';
import Student from './Student';


const routing = (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={StudentList} />
			<Route path="/user/:id" component={Student} />
			<Route path="/user" component={StudentList} />
			<Route component={StudentList} />
		</Switch>
	</BrowserRouter>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
