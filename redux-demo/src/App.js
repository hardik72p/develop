import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser, updateId } from './action';
import './App.css';
import Child from './Child';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'hardik',
      id: '143'
    }
  }

  changeName = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  setStore = () => {
    this.props.dispatch(updateUser(this.state.name));
    this.props.dispatch(updateId(this.state.id));
  }
  render() {
    return (
      <>
        <h1>Hello Wel - Come name</h1>
        <p>STATE name:  {this.state.name}</p>
        <p>STATE id:  {this.state.id}</p>
        <p>STORE name:  {this.props.demo.name}</p>
        <p>STORE id:  {this.props.demo.id}</p>
        <input name='name' value={this.state.name} onChange={this.changeName} />
        <input name='id' value={this.state.id} onChange={this.changeName} />
        <button onClick={this.setStore}>share</button>
        <Child demo1="hiihihih" />
      </>
    );
  }
}

const select = store => store;
export default connect(select)(App);

//(2) export default connect(select,{updateUser})(App);

//(3) const select = store => store;

// const mapDispatchToProps = dispatch => ({
//   updateUser: () => dispatch(updateUser('pedhadiya'))
// })

// export default connect(select, mapDispatchToProps)(App);
