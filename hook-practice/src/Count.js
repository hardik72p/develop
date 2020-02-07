import React, { useState, useEffect } from 'react';
import Child from './Child'

export default function Count() {

	const [count, setCount] = useState(5);
	const [age, setAge] = useState(18);
	const [friut, setFriut] = useState('Apple');
	const [show, hardik] = useState(false);

	useEffect(() => {
		document.title = `You clicked ${count} times`;
	},[count,show])

	function userFunction() {
		setAge(age + 1);
	}

	function userFun(e) {
		setFriut(e.target.value);
	}

	return (
		<>
			<p> Here initial-state is "Count"---{count} </p>
			<p> Here initial-state is "Age"---{age} </p>
			<p> Here initial-state is "Friut"---{friut} </p>

			<input type="button" value="Inc. count" onClick={() => setCount(count + 1)} />
			<input type="button" value="Inc. age" onClick={userFunction} />
			<input type="button" value="Orange" onClick={(e) => { userFun(e) }} /><br /><br /><br />

			<input type="button" value={`click ${show ? `hide` : `show`}`} onClick={() => { hardik(!show) }} />

			{show && <Child show={show}/>}
		</>
	);



}