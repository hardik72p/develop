import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser, updateId } from "./action";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: 'abc',
      userId: '0'
    }
  }

  changeName = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }
  setStore=()=>{
    const{company,userId}=this.state;
    this.props.dispatch(updateUser(company));
    this.props.dispatch(updateId(userId));
  }

  render() {
    return (
      <>
        <h1>Child </h1>
        {/* company: {this.props.demo.name} userId: {this.state.userId} */}
        <p>STATE company:  {this.state.company}</p>
        <p>STATE userId:  {this.state.userId}</p>
        <p>STORE name:  {this.props.demo.name}</p>
        <p>STORE id:  {this.props.demo.id}</p>
        <input name='company' value={this.state.company} onChange={this.changeName} />
        <input name='userId' value={this.state.userId} onChange={this.changeName} />
        <button onClick={this.setStore}>Share</button>
      </>);
  }

}
const select = store => store;
export default connect(select)(Child);