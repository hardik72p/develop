import React, { Component } from 'react';
import UserList from './UserList.js';
import UserDashBoard from './UserDashBoard.js';
import './myscss.scss';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


class App extends Component {
  state = {
    _id: '',
    reloadList: false,
    newUserModal: false,
    title: '',
    body: '',
    userId: ''
  }

  getUserId = (e) => {
    this.setState({ _id: e.target.value });
  }

  modalHandler = (e) => {
    this.setState({ newUserModal: true });
  }

  newUserClose = event => {
    this.setState({ newUserModal: false });
  }

  newUserData = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  newUserSubmit = event => {
    this.setState({ newUserModal: false });
    const newUser = {
      title: this.state.title,
      body: this.state.body,
      userId: this.state.userId
    }
    axios.post('http://192.168.2.65:3030/posts', newUser)
      .then(res => console.log(res.data))
      .then((e) => this.updateListHandler());
  }

  updateListHandler = () => {
    const { reloadList } = this.state;
    this.setState({ reloadList: !reloadList });
  }

  render() {
    const { newUserModal } = this.state;
    const addUser = {
      color: "blue",
      fontSize: "50px"
    }

    return (
      <>
        <div className="main-container">
          <div className="header">
            <h2>Wel-Come</h2>
            <button onClick={this.modalHandler}><FontAwesomeIcon icon={faUserPlus} style={addUser} /></button>
          </div>
          <div className="flex-container">

            <UserList getUserId={this.getUserId}
              reloadList={this.state.reloadList}
              flagNewUser={this.state.flagNewUser}
              updateListHandler={this.updateListHandler}
            />

            <UserDashBoard
              _id={this.state._id}
              updateListHandler={this.updateListHandler}

              newUserModal={this.state.newUserModal}
              newUserClose={this.newUserClose}
              newUserSubmit={this.newUserSubmit}
              flagNewUser={this.state.flagNewUser}
            />
          </div >
        </div>

        <Modal show={newUserModal} onHide={this.newUserClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            First Name:<input type="text" name="title" onChange={this.newUserData} /><br />
            Last Name:<input type="text" name="body" onChange={this.newUserData} /><br />
            User Id:<input type="text" name="userId:" onChange={this.newUserData} /><br />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.newUserClose}>
              Close
						</Button>
            <Button variant="primary" onClick={this.newUserSubmit}>
              Save Changes
						</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default App;
