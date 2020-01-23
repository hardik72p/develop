import React from 'react';
function Show(props) {
	return (
		<div>
			Fname : {props.propsData.fname}<br />
			Mname : {props.propsData.mname}<br />
			Lname : {props.propsData.lname}<br />
		</div>
	);
}
export default Show;