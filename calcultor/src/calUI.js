import React from 'react';
import './calUI.css';
import './App.css';

function CalUI(props) {

	return (
		<div>
			<div className="header" >
				<h1> Calcultor </h1>
			</div>
			<div className="container">
				<div className="row">
					<div className="col">
						<input type="text" className="form-control" name="input1" value={Number(props.stApp.input1)}
							onChange={props.concat} />
					</div>
				</div>
				<div className="row">
					<div className='col'>
						<input type="button" className="btn btn-outline-secondary" value="1" onClick={props.concat} />
					</div>
					<div className="col">
						<input type="button" className="btn btn-outline-secondary" value="2" onClick={props.concat} />
					</div>
					<div className="col">
						<input type="button" className="btn btn-outline-secondary" value="3" onClick={props.concat} />
					</div>
					<div className="col">
						<input type="button" className="btn btn-dark" value="/" onClick={props.oprate} />
					</div>
				</div>
				<div className='row'>
					<div className='col'>
						<input type="button" className="btn btn-outline-secondary" value="4" onClick={props.concat} />
					</div>
					<div className='col'>
						<input type="button" className="btn btn-outline-secondary" value="5" onClick={props.concat} />
					</div>
					<div className='col'>
						<input type="button" className="btn btn-outline-secondary" value="6" onClick={props.concat} />
					</div>
					<div className='col'>
						<input type="button" className="btn btn-outline-secondary" className="btn btn-dark" value="-" onClick={props.oprate} />
					</div>
				</div>
				<div className='row'>
					<div className='col'>
						<input type="button" className="btn btn-outline-secondary" value="7" onClick={props.concat} />
					</div>
					<div className='col'>
						<input type="button" className="btn btn-outline-secondary" value="8" onClick={props.concat} />
					</div>
					<div className='col'>
						<input type="button" className="btn btn-outline-secondary" value="9" onClick={props.concat} />
					</div>
					<div className='col'>
						<input type="button" className="btn btn-dark" value="+" onClick={props.oprate} />
					</div>
				</div>
				<div className='row'>
					<div className='col'>
						<input type="button" className="btn btn-outline-secondary" value="0" onClick={props.concat} />
					</div>
					<div className='col'>
						<input type="button" className="btn btn-outline-danger" value="clr" onClick={props.clear} />
					</div>
					<div className='col'>
						<input type="button" className="btn btn-outline-secondary" className="btn btn-dark" value="=" onClick={props.EQ} />
					</div>
					<div className='col'>
						<input type="button" className="btn btn-dark" value="*" onClick={props.oprate} />
					</div>
				</div>
			</div>
		</div>
	);

}

export default CalUI;
