import React from 'react';
import ClearWindow from './ClearWindow';
import './App.css';

class App extends React.Component {
  state = {
    isClear: false
  }

  clearHandler = event => {
    const { isClear } = this.state
    this.setState({ isClear: !isClear });
  }

  render() {
    return <ClearWindow isClear={this.state.isClear}
      clearHandler={this.clearHandler}
    />
  }
}

export default App;
