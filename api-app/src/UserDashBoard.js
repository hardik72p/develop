import React from 'react';
import { Component } from "react";
import './myscss.scss';
import axios from 'axios';

class UserDashBoard extends Component {

	constructor(props) {
		super(props);
		this.state = {

		}
	}

	// componentWillReceiveProps(){
	// 	this.setState({userId:this.props.userId});
	// }

	componentWillReceiveProps(props) {
		axios.get(`https://node-fake-api.herokuapp.com/user/${props.userId}`)
			.then(response => {
				this.setState(response.data.data);
			})
			.catch(error => {
				console.log('Error fetching and parsing data', error);
			});
	}

	render() {
		const { avatar, id, email, first_name, last_name } = this.state
		return (
			<>
				{id && <div className="user-dash-board">
					<h1> Profile </h1>
					<img className="user-img" src={avatar} />
					<h2 className="user-data" style={{ color: "#92a2ce" }}>{first_name} {last_name}</h2>
					<h4 className="user-data-email" > {email}</h4>
				</div>}
			</>

		);
	}
}

export default UserDashBoard;