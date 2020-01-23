import React from 'react';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <form id="user-form">
        First name:<input type="text" name="fname" onChange={props.submitData} /><br/><br/>
        Middl name:<input type="text" name="mname" onChange={props.submitData} /><br/><br/>
        Last name:<input type="text" name="lname" onChange={props.submitData} /><br/><br/>
        <input type="button" name="toggle" value="toggle" onClick={props.done} />
      </form>
    </div>
  );
}

export default App;
