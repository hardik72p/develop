import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      mobile: '',
      error: { firstName: false, lastName: false, email: false, mobile: false }
    }
  }

  firstNameHandler = (e) => {
    let obj = this.state.error
    let str = e.target.value;
    let pattern = /^[A-Z]+[a-z]+$/;
    pattern.test(e.target.value)
      ? obj.firstName = false
      : obj.firstName = true
    this.setState({ error: obj });
  }

  emailHandler = (e) => {
    let obj = this.state.error
    let pattern = /^[a-zA-Z]+[a-zA-z0-9\.]*\@gmail.com$/;
    pattern.test(e.target.value)
      ? obj.email = false
      : obj.email = true
    this.setState({ error: obj });
  }
  mobileHandler = (e) => {
    let str = e.target.value;
    let pattern = /^[0-9]{10}$/;
    pattern.test(str)
      ? e.target.style.color = "green"
      : (e.target.style.color = "red"

      )

  }


  render() {
    const { error } = this.state;
    return (
      <>
        First Name *: <input type="text" onBlur={this.firstNameHandler} placeholder="Xyz" /> <br />
        {error.firstName && <span>please enter ur firstName</span>}

        Middle Name: <input type="text" /> <br />

        Last Name *: <input type="text" onBlur={this.firstNameHandler} placeholder="Xyz" /> <br />


        Email ID *: <input type="text" onBlur={this.emailHandler} placeholder="xyz@gmail.com" /> <br />
        {error.email && <span>please enter ur firstName</span>}
        Mobile No *: <input type="text" onBlur={this.mobileHandler} placeholder="1234567890" /> <br />


        Gender *:
        <input type="radio" name="gender" />male
        < input type="radio" name="gender" /> female < br /> <br />

        Hobbies *:
        <input type="checkbox" value="singing" /> Singing
        < input type="checkbox" value="travelling" /> Travelling
        < input type="checkbox" value="reading" /> Reading
        < input type="checkbox" value="games" /> Games < br /> <br />

        City *:
        <select name="city">
          <option value="ahmedabad">ahmedabad</option>
          <option value="rajkot">rajkot</option>
          <option value="surat">surat</option>
          <option value="gandhinagar">gandhinagar</option>
          <option value="jamnagar">jamnagar</option>
        </select> <br /> <br />

        Occupation *:
        <input type="checkbox" value="antreprenor" /> Antreprenor
        < input type="checkbox" value="employee" /> Employee
        < input type="checkbox" value="engineer" /> Engineer < br /> <br />
      </>
    );
  }
}

export default App;
