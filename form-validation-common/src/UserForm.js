import React, { Component } from 'react';
import {
	Container,
	Row,
	Col,
	Card,
	CardBody,
	CardTitle,
	Form
} from 'reactstrap';
import { InputBox, CheckBox, MyRadio, DropDown } from './InputBox';

class UserForm extends Component {
	constructor() {
		super();
		this.state = {
			formData: {
				firstName: '',
				lastName: '',
				email: '',
				passWord: '',
				confirmPassWord: '',
				mobile: '',
				gender: '',
				hobbies: [],
				occupation: '',
				city: ''
			},
			formError: {
				firstName: null,
				lastName: null,
				email: null,
				passWord: null,
				confirmPassWord: null,
				mobile: null,
				gender: null,
				hobbies: null,
				occupation: null,
				city: null

			}
		};
		this.hobbiesList = [
			{ value: "sports", label: "Sports" },
			{ value: "games", label: "Games" },
			{ value: "reading", label: "Reading" },
			{ value: "coding", label: "Coding" }
		];
		this.genderList = [
			{ value: "male", label: "Male" },
			{ value: "female", label: "Female" }
		];
		this.occupationList = [
			{ value: "engineer", label: "Engineer" },
			{ value: "antreprenor", label: "Antreprenor" },
			{ value: "employee", label: "Employee" },
			{ value: "manager", label: "Manager" }
		];
		this.cityList = [
			{ value: "rajkot", label: "Rajkot" },
			{ value: "ahmedabad", label: "Ahmedabad" },
			{ value: "surat", label: "Surat" },
			{ value: "jamnagar", label: "Jamnagar" }
		];
	}

	dataHandler = (e) => {
		const { formData, formError } = this.state;
		const { name, value, checked } = e.target;
		let formDataObj = formData;



		if (name === "hobbies") {
			if (checked)
				formDataObj[name].push(value);
			else {
				formDataObj = { ...formData, [name]: formData[name].filter(x => x !== value) }
			}
		} else formDataObj = { ...formData, [name]: value }

		this.setState({ formData: formDataObj, formError: { ...formError, [name]: '' } });
	}

	getRegEx = (name) => {
		switch (name) {
			case 'firstName':
				return /^[A-Z]*[a-z]+$/;

			case 'middleName':
				return /^[A-Z]*[a-z]+$/;

			case 'lastName':
				return /^[A-Z]*[a-z]+$/;

			case 'mobile':
				return /^[0-9]{10}$/;

			case 'email':
				return /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/;

			case 'passWord':
				return /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;
		}
	}
	validationHandler = (e) => {
		const { formData, formError } = this.state;
		const { name, value, title, attributes } = e.target;
		let errorMessage = '';
		let formDataColne = formData;
		// console.log("access coustom attribute", !e.target.attributes.getNamedItem("data-attribute").value, "set by InputBox #data-*att_name*");

		if (name === 'hobbies') {
			if (formData.hobbies.length === 0)
				errorMessage = `Please Select ${title}`;
		}
		else if (!value && attributes.getNamedItem("data-attribute").value === 'true')
			errorMessage = `Please Enter ${title}`;
		else if (name === 'passWord' && !this.getRegEx(name).test(value))
			errorMessage = `Invalid ${title} -use special, upper, lower, digit`;
		else if (value && this.getRegEx(name) && !this.getRegEx(name).test(value))
			errorMessage = `Invalid ${title}`;
		else if(!value && attributes.getNamedItem("data-attribute").value === 'false')
				delete this.state.formData.middleName;

		this.setState({ formData:formDataColne ,formError: { ...formError, [name]: errorMessage } })
	}

	submitHandler = (e) => {
		const { formData, formError } = this.state
		let errorMessage = '';
		let errorObj = formError;
		Object.keys(formData).map((value) => {
			if (!formData[value] || formData[value].length == 0) {
				errorMessage = `invalid ${value}`;
				errorObj[value] = errorMessage;
			}
		})
		this.setState({formError: errorObj});
	}

	render() {
		const { formError, formData } = this.state
		return (
			<Container>
				<Row className="d-flex justify-content-center">
					<Col lg="6" className="mt-5 px-4">
						<Card className="py-5 px-3">
							<CardBody>
								<CardTitle className="text-uppercase text-dark font-weight-bolder text-center mb-4">Sign Up</CardTitle>
								<Form className="">

									<InputBox
										label='First Name'
										type='text'
										name='firstName'
										value={formData.firstName}
										isReq={true}
										errorMessage={formError.firstName}
										onBlur={this.dataHandler}
										onBlur={this.validationHandler}
									/>

									<InputBox
										label='Middle Name'
										type='text'
										name='middleName'
										value={formData.middleName}
										errorMessage={formError.middleName}
										onChange={this.dataHandler}
										onBlur={this.validationHandler}
									/>

									<InputBox
										label='Last Name'
										type='text'
										name='lastName'
										value={formData.lastName}
										isReq={true}
										errorMessage={formError.lastName}
										onChange={this.dataHandler}
										onBlur={this.validationHandler}
									/>

									<InputBox
										label='Mobile No.'
										type='tel'
										name='mobile'
										value={formData.mobile}
										isReq={true}
										errorMessage={formError.mobile}
										onChange={this.dataHandler}
										onBlur={this.validationHandler}
									/>

									<InputBox
										label='Email'
										type='text'
										name='email'
										value={formData.email}
										isReq={true}
										errorMessage={formError.email}
										onChange={this.dataHandler}
										onBlur={this.validationHandler}
									/>

									<InputBox
										label='Password'
										type='text'
										name='passWord'
										value={formData.passWord}
										isReq={true}
										errorMessage={formError.passWord}
										onChange={this.dataHandler}
										onBlur={this.validationHandler}
									/>

									<CheckBox
										label='Hobbies'
										isReq={true}
										name='hobbies'
										list={this.hobbiesList}
										onChecked={(e) => formData.name.includes(e.target.value)}
										errorMessage={formError.hobbies}
										onChange={this.dataHandler}
										onBlur={this.validationHandler}
									/>

									<MyRadio
										label='Gender'
										isReq={true}
										name='gender'
										list={this.genderList}
										errorMessage={formError.gender}
										onChange={this.dataHandler}
										onBlur={this.validationHandler}
									/>

									<CheckBox
										label='Occupation'
										isReq={true}
										name='occupation'
										list={this.occupationList}
										errorMessage={formError.occupation}
										checkOne={formData.occupation}
										onChange={this.dataHandler}
										onBlur={this.validationHandler}
									/>

									<DropDown
										label='City'
										isReq={true}
										name='city'
										list={this.cityList}
										value={formData.city}
										onChange={this.dataHandler}
										errorMessage={formError.city}
										onBlur={this.validationHandler}
									/>

									<InputBox
										type='button'
										name='submit'
										value='submit'
										onClick={this.submitHandler}
									/>

								</Form>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default UserForm;