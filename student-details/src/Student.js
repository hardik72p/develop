import React, { Component } from "react";
import student from './students_data.json';
import { Route, Switch, Link } from "react-router-dom";
import Details from './Details';
import Marks from './Marks';

class Student extends Component {

	render() {
		const { params } = this.props.match;
		let data = student.filter(stud => stud.id == params.id)
		return (
			<>
				<h1>Wel-Come {data[0].first_name + " " + data[0].last_name} </h1>
				<Link to={`/user/${params.id}/info`}>Info | </Link>
				<Link to={`/user/${params.id}/marks`}>marks</Link>
				<Switch>
					<Route path="/user/:id/info" component={Details} />
					<Route path="/user/:id/marks" component={Marks} />
				</Switch>
			</>
		);
	}
}

export default Student;