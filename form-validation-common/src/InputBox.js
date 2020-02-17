import React, { useState } from 'react';
import { Label, FormGroup } from 'reactstrap';
import ReactSelect from 'react-select';
import PropTypes from 'prop-types';

export const InputBox = (props) => {

	return (
		<FormGroup>
			<Label>
				{props.label}
				{props.isReq && <span style={{ color: "red" }}> * </span>}
			</Label><br />

			<input
				title={props.label}
				placeholder={`Enter ${props.label}`}
				type={props.type}
				name={props.name}
				data-attribute={props.isReq}
				value={props.value}
				onChange={props.onChange}
				onBlur={props.onBlur}
				onClick={props.onClick}
			/><br />
			{props.errorMessage && <span style={{ color: "red" }}> {props.errorMessage} </span>}
		</FormGroup >
	);
}

InputBox.defaultProps = {
	isReq: false
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

export const CheckBox = (props) => {

	return (
		<FormGroup>
			<Label>
				{props.label}
				{props.isReq && <span style={{ color: "red" }}> * </span>}
			</Label><br />
			{
				props.list.map((item, i) => {
					return (
						<label key={i} className="mr-2">
							{
								props.checkOne
									?
									<input
										type="checkbox"
										name={props.name}
										title={props.label}
										value={item.value}
										data-attribute={props.isReq}
										checked={props.checkOne == item.value}
										onChange={props.onChange}
										onBlur={props.onBlur}
									/>
									: <input
										type="checkbox"
										name={props.name}
										title={props.label}
										value={item.value}
										data-attribute={props.isReq}
										onChange={props.onChange}
										onBlur={props.onBlur}
									/>
							}
							{item.label}
						</label>
					);
				})
			}
			<br />
			{props.errorMessage && <span style={{ color: "red" }}> {props.errorMessage} </span>}
		</FormGroup>
	);
}

export const MyRadio = (props) => {
	return (
		<FormGroup>
			<Label>
				{props.label}
				{props.isReq && <span style={{ color: "red" }}> * </span>}
			</Label><br />
			{props.list.map((item, i) => {
				return (
					<label key={i} className="mr-2">
						<input
							type="radio"
							name={props.name}
							title={props.label}
							value={item.value}
							data-attribute={props.isReq}
							onChange={props.onChange}
							onBlur={props.onBlur}
						/> {item.label}
					</label>
				);
			})}<br />
			{props.errorMessage && <span style={{ color: "red" }}> {props.errorMessage} </span>}
		</FormGroup>
	);
}

export const DropDown = (props) => {
	return (
		<FormGroup>
			<Label>
				{props.label}
				{props.isReq && <span style={{ color: "red" }}> * </span>}
			</Label><br />
			<ReactSelect
				name={props.name}
				title={props.label}
				options={props.list}
				data-attribute={props.isReq}
				value={props.list.find(item => item.value === props.value)}
				onChange={props.onChange}
				onBlur={props.onBlur}
			/><br />
			{props.errorMessage && <span style={{ color: "red" }}> {props.errorMessage} </span>}
		</FormGroup>
	);
}

export const DropDown2 = (props) => {
	return (
		<FormGroup>
			<Label>
				{props.label}
				{props.isReq && <span style={{ color: "red" }}> * </span>}
			</Label><br />
			<select
				name={props.name}
				title={props.label}
				data-attribute={props.isReq}
				onChange={props.onChange}
				onBlur={props.onBlur}
			>
				<option value='' >Select...</option>
				{props.list.map((item, i) => {
					return (
						<option
							value={item.value}
						>	{item.label}</option>
					);
				})}
			</select><br />
			{props.errorMessage && <span style={{ color: "red" }}> {props.errorMessage} </span>}
		</FormGroup>
	);
}

