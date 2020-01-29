import React from 'react';
import { Component } from "react";
import './myscss.scss';
import axios from 'axios';

class UserList extends Component {
	state = {
		user: []
	}

	componentDidMount() {
		axios.get('https://node-fake-api.herokuapp.com/user')
			.then(response => {
				this.setState({ user: response.data.data });
			})
			.catch(error => {
				console.log('Error fetching and parsing data', error);
			});
	}

	render() {
		return (
			<div className="user-list">
				<center><h1> User List </h1></center>
				{this.state.user.map(item => {
					return <button className="list" value={item.id} onClick={this.props.getUserId} >{item.first_name + " " + item.last_name}</button>
				})}
			</div>
		)
	}
}

export default UserList;