import React, { Component } from 'react';
import UserList from './UserList.js';
import UserDashBoard from './UserDashBoard.js';
import './myscss.scss';

class App extends Component {
  state = {
    userId: 0
  }

  getUserId = (e) => {
    this.setState({ userId: Number(e.target.value) });
  }

  render() {
    return (
      <div className="flex-container">
        <UserList getUserId={this.getUserId} />
        <UserDashBoard userId={this.state.userId} />
      </div >
    );
  }
}

export default App;
