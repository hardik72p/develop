import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import DashBoard from './DashBoard';
import LogIn from './LogIn';

function PrivateRoute(props) {		
			if(localStorage.getItem("id") != null)
					return <Route  path={props.path} component={props.component} />
			
			return <Redirect to="/login" />
}

export default PrivateRoute;