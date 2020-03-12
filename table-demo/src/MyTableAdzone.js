import React, { Component } from "react";
import ReactTable from "react-table";
import 'react-table/react-table.css';
import axios from "axios";
import { Container } from "reactstrap";
import './table-container.scss';

class MyTableAdzone extends Component {
	dummyData = [];
	constructor(props) {
		super(props);
		this.state = {
			searchInput: '',
			user: []
		}
	}

	componentDidMount() {
		const { user } = this.state;
		axios.get('http://192.168.25.6:5002/customer/home-listing')
			.then(response => {
				console.log("response***", response);
				this.setState({ user: response.data }, () => {
					const { user } = this.state;
					this.dummyData = user;
					// console.log(this.dummyData);
				})

			})
			.catch(error => console.log(error));
	}
	// filterForTable = (response) => {
	//     response.map((obj) => {
	//         Object.keys(obj).filter((key) => {
	//             // key ===  | 
	//         })
	//     })
	// }

	// componentDidMount() {
	// 	this.dummyData = this.state.user;
	// }

	changeSearch = (e) => {
		const { value } = e.target;
		console.log("dummydata", this.dummyData);
		let search = value.toString().toLowerCase().trim();
		const filterData = this.dummyData.filter(item => Object.keys(item).some(value => item[value].toString().toLowerCase().includes(search)));
		this.setState({ user: filterData });
	}

	render() {


		const { user } = this.state;
		const columns = [
			{
				Header: 'Media Type',
				accessor: 'mediaType'
			},
			{
				Header: 'Size',
				accessor: 'dimension'
			}, {
				Header: 'Location',
				accessor: 'location'
			}, {
				Header: 'City',
				accessor: 'city'
			}, {
				Header: 'Rate',
				accessor: 'ratePerMonth'
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

export default MyTableAdzone;