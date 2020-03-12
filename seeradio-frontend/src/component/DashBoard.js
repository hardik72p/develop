import React, { Component } from 'react';

import Header from '../common-component/Header';
import { Switch, Route } from 'react-router-dom';
import dashboardRoutes from '../utils/routes.js'
import ClientContract from './ClientContract';
import PrivateRoute from '../common-component/PrivateRoute';

// const switchRoutes = (
// 	<Switch>
// 		{dashboardRoutes.map((prop, key) => {
// 			console.log(prop.path);
// 			return (
// 				<Route
// 					path={prop.path}
// 					component={prop.component}
// 					key={key}
// 				/>
// 			);
// 		}
// 		)}
// 	</Switch>
// );

class DashBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		return (
			<>
				<Header />
				<PrivateRoute path='/dashboard/client-contract' component={ClientContract} />
				{/* {switchRoutes} */}
			</>
		);
	}
}

export default DashBoard;
