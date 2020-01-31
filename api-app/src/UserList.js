import React from 'react';
import { Component } from "react";
import './myscss.scss';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons'

class UserList extends Component {
	state = {
		user: [],
		deleteId: '',
		show:false
	}

	componentWillReceiveProps() {
		axios.get('http://192.168.2.65:3030/posts')
			.then(response => {
				this.setState({ user: response.data.data });
			})
			.catch(error => {
				console.log('Error fetching and parsing data', error);
			});
	}

	componentDidMount(prevProps) {
		if (this.props !== prevProps) {
			axios.get('http://192.168.2.65:3030/posts')
				.then(response => {
					this.setState({ user: response.data.data });
				})
				.catch(error => {
					console.log('Error fetching and parsing data', error);
				});
		}
	}

	handleClose = event => {
		this.setState({ show: false });
	}

	modalHandler = e => {
		console.log("******((((("+e.target.id);
		this.setState({ show: true, deleteId: e.target.id });
	}

	deleteHandler = event => {
		this.setState({ show: false });
		axios.delete(`http://192.168.2.65:3030/posts/${this.state.deleteId}`)
			.then(res => console.log(res.data));
	}

	render() {
		let name;
		const { show }=this.state
		return (
			<>
				<div className="user-list">
					<center><h1> User List </h1></center>
					{this.state.user.map((item, i) => {
						name = item.title + " " + item.body;
						return (
							<div className="list-button">
								<button key={i} className="name" value={item._id} onClick={this.props.getUserId} >{item.title + " " + item.body} </button>
								<button id={item._id} onClick={(e)=>this.modalHandler(e)}><FontAwesomeIcon icon={faTrashAlt} /></button>
							</div>
						)
					})}
				</div>
				<Modal show={show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title style={{ color: "red" }}>Are You Sure???</Modal.Title>
					</Modal.Header>
					<Modal.Body>

					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleClose}>
							Close
				</Button>
						<Button variant="light" onClick={this.deleteHandler} >
							<FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />
						</Button>
					</Modal.Footer>
				</Modal>
			</>
		)
	}
}

export default UserList;