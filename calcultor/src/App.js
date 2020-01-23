import React from 'react';
import './App.css';
import CalUI from './calUI.js';

class App extends React.Component {

  state = {
    input1: 0,
    input2: 0,
    op: '',
  }

  clear = () => {
    this.setState({
      input1: 0,
      input2: 0,
      op: '',
    });
  }

  oprate = e => {
    const { input1 } = this.state;

    this.setState({ input2: Number(input1), input1: '', op: e.target.value });
  }

  concat = e => {
    const { input1 } = this.state;

    console.log(input1*10);
    this.setState({ input1: Number((this.state.input1*10) + (e.target.value % 10)) });
  }

  oprationEQ = () => {
    const { input1, input2, op } = this.state;

    if (op === '+')
      this.setState({ input1: (Number(input2) + Number(input1)) });
    if (op === '-')
      this.setState({ input1: (Number(input2) - Number(input1)) });
    if (op === '*')
      this.setState({ input1: (Number(input2) * Number(input1)) });
    if (op === '/')
      this.setState({ input1: (Number(input2) / Number(input1)) });
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
