import React, { Component } from 'react';
import student from './students_data.json';
import { Link } from 'react-router-dom';

class StudentList extends Component {
	render() {
		return (
			<>
				{
					student.map((stud, i) => {
						return (
							<>
								<input key={i} value={stud.first_name + " " + stud.last_name} />
								<Link to={`/user/${stud.id}`}><button>INFO</button></Link>
								<br />
							</>
						);
					})
				}
			</>
		);
	}
}

export default StudentList;