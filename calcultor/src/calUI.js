import React from 'react';
import './calUI.css';
import './App.css';
function CalUI(props) {
  return (
    <div className='container'>
      <div>
				<input type="text" name="input1" value={Number(props.stApp.input1)} onChange={props.concat} />
			</div>
			<div>
				<input type="button" value="1" onClick={props.concat}/>
				<input type="button" value="2" onClick={props.concat}/>
				<input type="button" value="3" onClick={props.concat}/>
				<input type="button" value="/" onClick={props.oprate}/>
			</div>
			<div>
				<input type="button" value="4" onClick={props.concat}/>
				<input type="button" value="5" onClick={props.concat}/>
				<input type="button" value="6" onClick={props.concat}/>
				<input type="button" value="-" onClick={props.oprate}/>
			</div>
			<div>
				<input type="button" value="7" onClick={props.concat}/>
				<input type="button" value="8" onClick={props.concat}/>
				<input type="button" value="9" onClick={props.concat}/>
				<input type="button" value="+" onClick={props.oprate}/>
			</div>
			<div>
				<input type="button" value="0" onClick={props.concat}/>
				<input type="button" value="clr" onClick={props.clear}/>
				<input type="button" value="=" onClick={props.EQ}/>
				<input type="button" value="*" onClick={props.oprate}/>
			</div>
    </div>
  );

}

export default CalUI;
