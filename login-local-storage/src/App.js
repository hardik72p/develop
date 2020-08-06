import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      passWord: '',
    }
    if(localStorage.getItem("id"))
      this.props.history.push("/dashboard");
  }
  loginHandler = () => {
    this.props.history.push("/login");
  }

  render() {
    return (
      <>
        <input type="button" value="Login" onClick={this.loginHandler} />
      </>
    );
  }

}

export default App;
