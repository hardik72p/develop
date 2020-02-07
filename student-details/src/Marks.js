import React, { Component } from "react";
import student from './students_data.json';

class Marks extends Component {
	render() {
		const { params } = this.props.match;
		let data = student.filter(stud => stud.id == params.id)
		return (
			<>
				<h3>standard:{data[0].standard}</h3>
				<h3>Maths   :{data[0].maths}</h3>
				<h3>Science :{data[0].science}</h3>
				<h3>History :{data[0].history}</h3>
				<h3>English :{data[0].english}</h3>
			</>
		);
	}
}

export default Marks;