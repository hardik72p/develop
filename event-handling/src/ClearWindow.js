import React from 'react';
import Event from './Event.js';
import './mysaas.scss'

function ClearWindow(props) {

	let element;

	if (!props.isClear)
		element = <Event />

	else
		element = <h2>To know about Event Handler</h2>

	return <>
		<h1 style={{ color: "#00aa00" }}> Wel-Come</h1>
		{element}
		<input type="button" name="isClear" value={`${props.isClear ? "Show" : "Hide"} Handler Form`} onClick={props.clearHandler} />
	</>
}

export default ClearWindow;