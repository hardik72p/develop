import React from 'react';
import './App.css';
import CalUI from './calUI.js';

class App extends React.Component {

  state = {
    input1: '',
    input2: 0,
    op: '',
    ans: 0
  }

  clear = () => {
    this.setState({
      input1: '',
      input2: 0,
      op: '',
      ans: 0
    });
  }

  oprate = e => {
    const { input1 } = this.state;

    this.setState({ input2: Number(input1), input1: '', op: e.target.value });
  }

  concat = e => {
    const { input1 } = this.state;

    this.setState({ input1: input1 + e.target.value });
  }

  oprationEQ = () => {
    const { input1, input2, op, ans } = this.state;

    if (op === '+')
      this.setState({ ans: (Number(input2) + Number(input1)), input1: this.state.ans });
    if (op === '-')
      this.setState({ ans: (Number(input2) - Number(input1)), input1: this.state.ans });
    if (op === '*')
      this.setState({ ans: (Number(input2) * Number(input1)), input1: this.state.ans });
    if (op === '/')
      this.setState({ ans: (Number(input2) / Number(input1)), input1: this.state.ans });

    this.setState({ input1: ans });

    //setTimeout( () => this.setState({ input1 : this.state.ans }));     //2nd way
  }

  render() {
    return (
      <div>
        <CalUI
          stApp={this.state}
          EQ={this.oprationEQ}
          concat={this.concat}
          oprate={this.oprate}
          clear={this.clear}
        />
      </div>
    );
  }
}

export default App;
