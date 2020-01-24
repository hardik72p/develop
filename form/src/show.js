import React from 'react';
function Show(props) {
	
	if(props.data.show)
		return<div>
			Fname : {props.data.fname}<br />
			Mname : {props.data.mname}<br />
			Lname : {props.data.lname}<br />
		</div>
	
	return null;

}
export default Show;