import React, { Component } from "react";
import student from './students_data.json';

class Details extends Component {
	render() {
		const { params } = this.props.match;
		let data = student.find(stud => stud.id == params.id)
		return (
			<>
				<h3>First Name    :{data.first_name}</h3>
				<h3>Last  Name    :{data.last_name}</h3>
				<h3>Date Of Birth :{data.DOB}</h3>
				<h3>Father        :{data.father}</h3>
				<h3>Mother        :{data.mother}</h3>
				<h3>Email         :{data.email}</h3>
				<h3>Standard      :{data.standard}</h3>
				<h3>Gender        :{data.gender}</h3>
			</>
		);
	}
}

export default Details;