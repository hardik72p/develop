import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserDashBoard from './UserDashBoard';
import UserList from './UserList';


const routing1 = (
	<BrowserRouter>
		<div>
			<Link to="/" >Home</Link><br />
			<Link to="/list">List</Link><br />
			<Link to="/detail" >Details</Link><br />

			<Switch>
				<Route exact path="/" component={App}></Route>
				<Route path="/list" component={UserList}></Route>
				<Route path="/detail" component={UserDashBoard}></Route>
			</Switch>
		</div>
	</BrowserRouter>
)

ReactDOM.render(routing1, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
