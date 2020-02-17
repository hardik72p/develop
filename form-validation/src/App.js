import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      passWord: '',
      confirmPassWord:'',
      mobile: '',
      gender: '',
      occupation: {},
      city: '',
      hobbies: {},
      error: {
        firstName: false,
        lastName: false,
        email: false,
        passWord: false,
        confirmPassWord: false,
        mobile: false,
        gender: false,
        hobbies: false,
        occupation: false,
        city: false
      }
    }
  }

  validationHandler = (e) => {
    const { value, name, checked } = e.target
    const { hobbies, city, occupation, error, passWord ,confirmPassWord} = this.state;
    let obj = this.state.error, pattern;

    switch (name) {

      case 'firstName':
        pattern = /^[a-z]+$/;
        pattern.test(value)
          ? (obj.firstName = false)
          : obj.firstName = true
        this.setState({ firstName: value, error: obj });
        break;

      case 'lastName':
        pattern = /^[a-z]+$/;
        pattern.test(value)
          ? obj.lastName = false
          : obj.lastName = true
        this.setState({ lastName: value, error: obj });
        break;

      case 'email':
        pattern = /^[A-Za-z0-9.]+[A-Za-z_]+@[a-z]+\.[a-z.]{1,3}$/;
        pattern.test(value)
          ? obj.email = false
          : obj.email = true
        this.setState({ email: value, error: obj });
        break;

      case 'passWord':
        pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;
        pattern.test(value)
          ? obj.passWord = false
          : obj.passWord = true
        this.setState({ passWord: value, error: obj })
        break;

      case 'confirmPassWord':
        if (passWord == '' || obj.passWord == true)
          obj.confirmPassWord = false
        else if (passWord !== value)
          obj.confirmPassWord = true
        else
          obj.confirmPassWord = false
        this.setState({ error: obj })
        break;

      case 'mobile':
        pattern = /^[0-9]{10}$/;
        pattern.test(value)
          ? obj.mobile = false
          : obj.mobile = true
        this.setState({ mobile: value, error: obj });
        break;

      case 'gender':
        if (checked) {
          obj.gender = false;
          this.setState({ gender: value, error: obj });
        }
        break;

      case 'hobbies':
        this.setState({ hobbies: { ...hobbies, [value]: checked } }, () => {
          const { hobbies, error } = this.state;
          let count = 0;
          Object.keys(hobbies).map((value) => {
            if (hobbies[value] == true)
              count = count + 1;
          })
          count >= 2
            ? this.setState({ error: { ...error, hobbies: false } })
            : this.setState({ error: { ...error, hobbies: true } })
        })
        break;

      case 'city':
        this.setState({ city: value }, () => {
          console.log("city", city, "abc");
          this.state.city
            ? this.setState({ error: { ...error, city: false } })
            : this.setState({ error: { ...error, city: true } })
        });
        break;

      case 'occupation':
        this.setState({ occupation: { ...occupation, [value]: checked } }, () => { this.occupationValidation() })
        break;

      default:
        console.log("default");
    }

  }

  occupationValidation = () => {
    const { occupation, error } = this.state;
    let count = 0;
    Object.keys(occupation).map((value) => {
      if (occupation[value] == true)
        count = count + 1;
    })
    count == 1
      ? this.setState({ error: { ...error, occupation: false } })
      : this.setState({ error: { ...error, occupation: true } })
  }

  submitHandler = () => {
    const { firstName, lastName, email, passWord, mobile, hobbies, gender, city, occupation, error } = this.state;
    let error_obj = error;
    if (firstName === '') error_obj.firstName = true
    if (lastName === '') error_obj.lastName = true
    if (email === '') error_obj.email = true
    if (mobile === '') error_obj.mobile = true
    if (gender === '') error_obj.gender = true
    if (passWord === '') error_obj.passWord = true
    else if (error_obj.passWord) error_obj.confirmPassWord = false
    if (Object.keys(hobbies).length === 0) error_obj.hobbies = true
    if (city === '') error_obj.city = true
    if (Object.keys(occupation).length === 0) error_obj.occupation = true

    this.setState({ error: error_obj });
  }

  /*
  firstNameHandler = (e) => {
    const { value } = e.target;
    let obj = this.state.error
    let pattern = /^[A-Z]+[a-z]+$/;

    pattern.test(value)
      ? (obj.firstName = false)
      : obj.firstName = true
    this.setState({ firstName: value, error: obj });
  }

  lastNameHandler = (e) => {
    const { value } = e.target;
    let obj = this.state.error
    let pattern = /^[A-Z]+[a-z]+$/;

    pattern.test(value)
      ? obj.lastName = false
      : obj.lastName = true
    this.setState({ lastName: value, error: obj });
  }

  emailHandler = (e) => {
    const { value } = e.target;
    let obj = this.state.error
    let pattern = /^[A-Za-z0-9.]+[A-Za-z_]+@[a-z]+\.[a-z.]{1,3}$/;

    pattern.test(value)
      ? obj.email = false
      : obj.email = true
    this.setState({ email: value, error: obj });
  }

  mobileHandler = (e) => {
    const { value } = e.target;
    let obj = this.state.error
    let pattern = /^[0-9]{10}$/;

    pattern.test(value)
      ? obj.mobile = false
      : obj.mobile = true
    this.setState({ mobile: value, error: obj });
  }

  genderHandler = (e) => {
    this.setState({ gender: e.target.value });
  }

  hobbiesCheckBoxhandler = (e) => {
    const { hobbies } = this.state
    const { value, checked } = e.target
    this.setState({ hobbies: { ...hobbies, [value]: checked } }, () => {
      const { hobbies, error } = this.state;
      let count = 0;
      Object.keys(hobbies).map((value) => {
        if (hobbies[value] == true)
          count = count + 1;
      })
      count >= 2
        ? this.setState({ error: { ...error, hobbies: false } })
        : this.setState({ error: { ...error, hobbies: true } })
    })
  }

  // hobbiesValidation = () => {
  //   const { hobbies, error } = this.state;
  //   let count = 0;
  //   Object.keys(hobbies).map((value) => {
  //     console.log("swsws",value);
  //     if (hobbies[value] == true)
  //       count = count + 1;
  //   })
  //   console.log(count);
  //   count >= 2
  //     ? this.setState({ error: { ...error, hobbies: false } })
  //     : this.setState({ error: { ...error, hobbies: true } })
  // }

  cityHandler = (e) => {
    const { value } = e.target;
    this.setState({ city: value }, () => {
      const { city, error } = this.state;
      city
        ? this.setState({ error: { ...error, city: false } })
        : this.setState({ error: { ...error, city: true } })
    });
  }

  occupationHandler = (e) => {
    const { occupation } = this.state
    const { value, checked } = e.target
    this.setState({ occupation: { ...occupation, [value]: checked } }, () => { this.occupationValidation() })
  }
*/

  render() {
    const { error } = this.state;
    return (
      <>
        First Name *: <input type="text" name="firstName" onBlur={this.validationHandler} placeholder="Xyz" /> <br />
        {error.firstName && <span>Invalid First name</span>}<br /><br />

        Middle Name: <input type="text" /> <br /><br /><br />

        Last Name *: <input type="text" name="lastName" onBlur={this.validationHandler} placeholder="Xyz" /> <br />
        {error.lastName && <span>Invalid Last Name</span>}<br /><br />

        Email ID *: <input type="text" name="email" onBlur={this.validationHandler} placeholder="xyz@gmail.com" /> <br />
        {error.email && <span>Invalid email id</span>}<br /><br />

        Password *: <input type="text" name="passWord" onBlur={this.validationHandler} /><br />
        {error.passWord && <span>passWord must contains upper,lower,special,minimum length 6 character</span>}<br /><br />

        Confirm Password *: <input type="Password" name="confirmPassWord" onBlur={this.validationHandler} /><br />
        {error.confirmPassWord && <span>Miss-match with PassWord</span>}<br /><br />

        Mobile No *: <input type="number" name="mobile" onBlur={this.validationHandler} placeholder="1234567890" /> <br />
        {error.mobile && <span>Invalid: "1234567890"</span>}<br /><br />

        Gender *:
        < input type="radio" name="gender" value="male" onChange={this.validationHandler} />male
        < input type="radio" name="gender" value="female" onChange={this.validationHandler} /> female <br />
        {error.gender && <span>select any one gender</span>}<br /><br />

        Hobbies *:
        < input type="checkbox" name="hobbies" value="singing" onChange={this.validationHandler} /> Singing
        < input type="checkbox" name="hobbies" value="travelling" onChange={this.validationHandler} /> Travelling
        < input type="checkbox" name="hobbies" value="reading" onChange={this.validationHandler} /> Reading
        < input type="checkbox" name="hobbies" value="games" onChange={this.validationHandler} /> Games < br />
        {error.hobbies && <span>Invalid check 2 hobbies minimum</span>}<br /><br />

        City *:
        <select name="city" onClick={this.validationHandler}>
          <option value="">--select--</option>
          <option value="ahmedabad" >ahmedabad</option>
          <option value="rajkot" >rajkot</option>
          <option value="surat" >surat</option>
          <option value="gandhinagar" >gandhinagar</option>
          <option value="jamnagar" >jamnagar</option>
        </select> <br />
        {error.city && <span>select city</span>}<br /><br />

        Occupation *:
        < input type="checkbox" name="occupation" value="antreprenor" onChange={this.validationHandler} /> Antreprenor
        < input type="checkbox" name="occupation" value="employee" onChange={this.validationHandler} /> Employee
        < input type="checkbox" name="occupation" value="engineer" onChange={this.validationHandler} /> Engineer <br />
        {error.occupation && <span>Invalid check only 1 occupation</span>}<br /><br />

        < input type="button" name="submit" value="submit" onClick={this.submitHandler} />
      </>
    );
  }
}

export default App;
