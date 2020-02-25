import React, { Component } from "react";
import CssBaseline from '@material-ui/core/CssBaseline'
import EnhancedTable from './EnhancedTable'

class Table extends Component {
	constructor() {
		super();
		this.state = {

		}
	}

	render() {

		const data = [{
			name: 'Ayaan',
			age: 26
		}, {
			name: 'Ahana',
			age: 22
		}, {
			name: 'Peter',
			age: 40
		}, {
			name: 'Virat',
			age: 30
		}, {
			name: 'Rohit',
			age: 32
		}, {
			name: 'Dhoni',
			age: 37
		}]

		const columns = [{
			Header: 'Name',
			accessor: 'name'
		}, {
			Header: 'Age',
			accessor: 'age'
		}]


		return (
			<>
				<EnhancedTable
					columns={columns}
					data={data}
					// setData={setData}
					// updateMyData={updateMyData}
					// skipPageReset={skipPageReset}
				/>
			</>
		);
	}
}

export default Table;