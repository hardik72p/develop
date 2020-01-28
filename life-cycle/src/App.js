import React from 'react';
import './App.css';
import { Component } from 'react';
import Child from './Child';

class App extends Component {
  constructor() {
    super();
    console.log("parent ---- constructor call");
  }
  state={
    count: 1,
    childShow: true
  }

  updateState = event => {
    this.setState({ count: this.state.count + 1 });
  }

  displayHandler=event=>{
    this.setState(prestate=>({
      childShow:!prestate
    }));
  }

  //---------------------------MOUNT COMPONENT----------------------------------------

  UNSAFE_componentWillMount(){
    console.log("parent ---- compWillMount");
  }

  componentDidMount(){
    console.log("parent ---- compDidMount");
  }

  //---------------------------UPDATE COMPONENT----------------------------------------
  
  shouldComponentUpdate(){
    console.log("parent ---- shouldComponentUpdate");
    return true;
	}

	UNSAFE_componentWillUpdate(){
		console.log("parent ---- componentWillUpdate");
	}

	componentDidUpdate(){
		console.log("parent ---- componentDidUpdate");
  }
  
  //---------------------------UNMOUNT COMPONENT----------------------------------------

  componentWillUnmount(){
    console.log("parent ---- componentWillUnmount");
  }

  render() {
    return (
      <>
        {console.log("parent ---- render")}
        <h1> Parent ----{this.state.count}</h1>
        <input type="button" value="increment parent" onClick={this.updateState} />
        {
          this.state.childShow &&
          <Child
          count={this.state.count}
          displayHandler={this.displayHandler}
        />
        }
        
      </>
    );
  }

}

export default App;
