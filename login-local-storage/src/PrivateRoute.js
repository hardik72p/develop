import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import DashBoard from './DashBoard';
import LogIn from './LogIn';

function PrivateRoute(props) {		
				if (localStorage.getItem("st")) {
		let time = (new Date().getTime() - new Date(localStorage.getItem("st")).getTime()) / 60000
		localStorage.removeItem('st');
		if (localStorage.getItem("id") != null && (time <= 1)) {
			return (
				<>
					{window.addEventListener("beforeunload", () => {
						// setInterval(() => {
						localStorage.setItem("st", new Date());
						// }, 1000);
					})}
					<Route path={props.path} component={props.component} />
				</>
			)
		}
		return (
			<>
				{localStorage.removeItem('id')} //logout code
				<Redirect to="/login" />
			</>
		)
	}
	if (localStorage.getItem("id") != null)
		return (
			<>
				{window.addEventListener("beforeunload", () => {
					// setInterval(() => {
					localStorage.setItem("st", new Date());
					// }, 1000);
				})}
				<Route path={props.path} component={props.component} />
			</>
		)
			return <Redirect to="/login" />
}

export default PrivateRoute;
