import React, { Component } from "react";
import student from './students_data.json';

class Marks extends Component {
	render() {
		const { params } = this.props.match;
		let data = student.find(stud => stud.id == params.id)
		return (
			<>
				<h3>standard:{data.standard}</h3>
				<h3>Maths   :{data.maths}</h3>
				<h3>Science :{data.science}</h3>
				<h3>History :{data.history}</h3>
				<h3>English :{data.english}</h3>
			</>
		);
	}
}

export default Marks;