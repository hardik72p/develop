import React from 'react';
import { Label, FormGroup, Button} from 'reactstrap';
import PropTypes from 'prop-types';

function InputBox(props) {

	return (
		<FormGroup>
			{props.type === 'text' &&
				<>
					<Label>
						{props.label}
						{props.isRequired && <span style={{ color: "red" }}> * </span>}
					</Label><br/>
					<input
						type={props.type}
						name={props.name}
						value={props.value}
						placeholder={props.placeholder}
						onChange={props.onChange} />
				</>
			}
		</FormGroup >
	);

}

InputBox.defaultProps = {
	isRequired: false,
	// type:'text'
}

InputBox.propTypes = {
	type: PropTypes.string.isRequired,                                                                                                    //when we declare any props which is Required then must be defined their "its default value".
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	label: PropTypes.string,
	placeholder: PropTypes.oneOf(
		['number', 'string']
	)
}

export default InputBox;