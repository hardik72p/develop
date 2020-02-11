import React, { Component } from 'react';
class DashBoard extends Component {
	constructor(props) {
		super(props);
	}

	logOutHandler = () => {
		localStorage.removeItem("id", "passWord");
		this.props.history.push('/login');
	}

	render() {
		return (
			<>
				<h1> Wel-Come</h1>
				<h3>{localStorage.getItem("id")}</h3>
				<input type="button" value="Logout" onClick={this.logOutHandler} />
			</>
		)
	}
}

export default DashBoard;