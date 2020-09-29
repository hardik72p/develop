import React, { Component } from 'react';
import student from './students_data.json';
import StudentTable from './StudentTable';
import Pagination from './Pagination';

class StudentList extends Component {
	constructor(props) {
		super();
		this.state = {
			studentList: student,
			currentPage: 1,
			itemPerPage: 5,
			windowLength: 3,
		}
	}
	paginate = (number) => {
		this.setState({ currentPage: number })
	}
	render() {
		const { studentList, currentPage, itemPerPage, windowLength } = this.state;
		const indexOfLastItem = currentPage * itemPerPage;
		const indexOfFirstItem = indexOfLastItem - itemPerPage;
		const studentListPage = studentList.slice(indexOfFirstItem, indexOfLastItem);
		console.log(studentListPage, studentList);
		return (
			<>
				<StudentTable studentList={studentListPage} />
				<Pagination
					totalItem={studentList.length}
					itemPerPage={itemPerPage}
					paginate={this.paginate}
					currentPage={currentPage}
					windowLength={windowLength}
				/>
			</>
		);
	}
}

export default StudentList;



// {
// 	student.map((stud, i) => {
// 		return (
// 			<>
// 				<Student studentList={studentList} />
// 				{/* <input key={i} value={stud.first_name + " " + stud.last_name} />
// 				<Link to={`/user/${stud.id}`}><button>INFO</button></Link>
// 				<br /> */}
// 			</>
// 		);
// 	})
// }