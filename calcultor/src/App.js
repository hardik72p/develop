import React from 'react';
import './App.css';
import CalUI from './calUI.js';

class App extends React.Component{
  
  state = {
    input1:'',
    input2:0,
    op:'',
    ans:0
  }

  clear=()=>{
    this.setState({
      input1:'',
      input2:0,
      op:'',
      ans:0
    });  
  }

  oprate=e=>{
    this.setState({input2 : Number(this.state.input1), input1 : '', op : e.target.value});
    console.log(this.state.input2);
  }

  concat=e=>{
    this.setState({input1 : this.state.input1 + e.target.value});
    console.log(this.state.input1);
  }

  oprationEQ=()=>{
    if(this.state.op === '+')
      this.setState({ans :(Number(this.state.input1) + Number(this.state.input2)) /*, input1 :this.state.ans*/});
    if(this.state.op === '-')
      this.setState({ans :(Number(this.state.input1) - Number(this.state.input2)) /*, input1 :this.state.ans*/});   
    if(this.state.op === '*')
      this.setState({ans :(Number(this.state.input1) * Number(this.state.input2))});
    if(this.state.op === '/')
      this.setState({ans :(Number(this.state.input1) / Number(this.state.input2))});

    this.setState({input1 : this.state.ans});
    console.log(this.state.ans);
  }

  render(){
    return(
      <div>
        <CalUI  stApp={this.state} EQ={this.oprationEQ} concat={this.concat} oprate={this.oprate}
                clear={this.clear}  
        />
      </div>
    );
  }
  
}

export default App;
