import React, { Component } from "react";
import ReactTable from "react-table";
import 'react-table/react-table.css';
import axios from "axios";
import { Container } from "reactstrap";
import './table-container.scss';

class MyTable extends Component {
	dummyData = [];
	constructor(props) {
		super(props);
		this.state = {
			user: [
				{
					"id": 7,
					"email": "michael.lawson@reqres.in",
					"first_name": "Michael",
					"last_name": "Lawson",
					// "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
				},
				{
					"id": 8,
					"email": "lindsay.ferguson@reqres.in",
					"first_name": "Lindsay",
					"last_name": "Ferguson",
					// "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"
				},
				{
					"id": 9,
					"email": "tobias.funke@reqres.in",
					"first_name": "Tobias",
					"last_name": "Funke",
					// "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"
		
				},
				{
					"id": 10,
					"email": "byron.fields@reqres.in",
					"first_name": "Byron",
					"last_name": "Fields",
					// "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"
				},
				{
					"id": 11,
					"email": "george.edwards@reqres.in",
					"first_name": "George",
					"last_name": "Edwards",
					// "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"
				},
				{
					"id": 12,
					"email": "rachel.howell@reqres.in",
					"first_name": "Rachel",
					"last_name": "Howell",
					// "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"
				}
			],
			searchInput: ''
		}
	}

	// componentDidMount() {
	// 	axios.get('https://reqres.in/api/users?page=2')
	// 		.then(response => {
	// 			this.setState({ user: response.data.data })
	// 		})
	// 		.catch(error => console.log(error));
	// }

	componentDidMount() {
		this.dummyData = this.state.user;
	}

	changeSearch = (e) => {
		const { value } = e.target;
		let search = value.toString().toLowerCase().trim();
		const filterData = this.dummyData.filter(item => Object.keys(item).some(value => item[value].toString().includes(search)));
		this.setState({ user: filterData });
	}

	render() {

		const { user } = this.state;
		const columns = [{
			Header: 'First Name',
			accessor: 'first_name'
		}, {
			Header: 'Last Name',
			accessor: 'last_name'
		}, {
			Header: 'Email',
			accessor: 'email'
		}]

		return (
			<Container className="table-container">
				<label >Search :</label>
				<input type="text" onChange={this.changeSearch} /><br /><br />

				<ReactTable
					data={user}
					columns={columns}
					defaultPageSize={2}
					pageSizeOptions={[4, 6]}
				/>
			</Container>
		)
	}
}

export default MyTable;