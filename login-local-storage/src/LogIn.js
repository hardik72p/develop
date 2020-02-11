import React, { Component } from 'react';
import './App.css';

class LogIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      passWord: '',
    }
    if(localStorage.getItem("id"))
      this.props.history.push("/dashboard");
  }

  dataHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  storeHandler = () => {
    const { id, passWord } = this.state;
    localStorage.setItem("id", id);
    localStorage.setItem("passWord", passWord);
    this.props.history.push('/dashboard');
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

export default LogIn;
