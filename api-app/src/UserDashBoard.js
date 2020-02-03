import React from 'react';
import { Component } from 'react';
import './myscss.scss';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';


class UserDashBoard extends Component {

	constructor(props) {
		super(props);
		this.state = {
			title: '',
			body: '',
			_id: '',
			userId: '',
			show: false
		}
	}

	// UNSAFE_componentWillReceiveProps(props) {
	// 	axios.get(`https://reqres.in/api/users/${props.userId}`)
	// 		.then(response => {
	// 			this.setState(response.data.data);
	// 		})
	// 		.catch(error => {
	// 			console.log('Error fetching and parsing data', error);
	// 		});
	// }

	handleClose = event => {
		this.setState({ show: false });
	}

	modalHandler = event => {
		this.setState({ show: true });
	}

	updateHandler = event => {
		this.setState({ [event.target.name]: event.target.value });
	}

	componentWillReceiveProps(props) {
		axios.get(`http://192.168.2.65:3030/posts/${props._id}`)
			.then(response => {
				this.setState({
					title: response.data.title,
					body: response.data.body,
					_id: response.data._id,
					userId: response.data.userId
				});
			})
			.catch(error => {
				console.log('Error fetching and parsing data', error);
			});
	}

	updateSubmitHandler = (e) => {
		const { title, body } = this.state;

		this.setState({ show: false }, () => {
			const upadetUser = {
				title: title,
				body: body
			}
			axios.put(`http://192.168.2.65:3030/posts/${this.props._id}`, upadetUser)
				.then(res => console.log(res.data))
				.then(() => {
					this.props.updateListHandler()
				});
		});
	}

	render() {
		const { show, _id, title, body } = this.state
		return (
			<>
				{_id && <div className="user-dash-board">
					<h1> Profile </h1>
					<h2 className="user-data" style={{ color: "#92a2ce" }}>{title} {body}</h2>
					<button onClick={this.modalHandler}><FontAwesomeIcon icon={faUserEdit} /></button>
				</div>}

				<Modal show={show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Edit Details</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						First Name:<input type="text" name="title" value={title} onChange={this.updateHandler} /><br />
						Last Name:<input type="text" name="body" value={body} onChange={this.updateHandler} /><br />
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleClose}>
							Close
						</Button>
						<Button variant="primary" onClick={this.updateSubmitHandler}>
							Save Changes
						</Button>
					</Modal.Footer>
				</Modal>
			</>
		);
	}
}

export default UserDashBoard;