import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      passWord: '',
    }

    if(localStorage.getItem("id") !== null)
    {
      this.props.history.push('/login');
    }

    // localStorage.getItem("id") ? this.props.history.push('/login'):''
    // this.checkLogin();
  }

  dataHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  storeHandler = () => {
    const { id, passWord } = this.state;
    localStorage.setItem("id", id);
    localStorage.setItem("passWord", passWord);
    this.props.history.push('/login');
  }

  render() {
    return (
      <>
        User Id: <input type="text" name="id" onChange={this.dataHandler} /><br /><br />
        Pass Word: <input type="text" name="passWord" onChange={this.dataHandler} /><br /><br />
        <input type="button" value="Submit" onClick={this.storeHandler} />
      </>
    );
  }
}

export default App;
