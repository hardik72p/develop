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
import InputBox from './InputBox';

class UserForm extends Component {
	constructor() {
		super();
		this.state = {
			formData: {
				firstName: 'hardik',
				middleName: '',
				lastName: '',
				email: '',
				passWord: '',
				confirmPassWord: '',
				mobile: '',
				gender: '',
				occupation: '',
				city: '',
				hobbies: {}
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
		}
	}

	dataHandler = (e) => {
		const { formData } = this.state;
		const { name, value } = e.target;
		this.setState({ formData: { ...formData, [name]: value } })
	}

	validationHandler = (e) => {
		const { formData } = this.state;
		const { name, value } = e.target;
		let errorMessage;

		switch(name){
			case 'firstName':
				formData.firstName === null ? 
		}
	}

	render() {
		const { firstName, middleName, lastName } = this.state.formData
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
										value={firstName}
										isRequired={true}
										onChange={this.dataHandler}
									/>
									<InputBox
										label='Middle Name'
										type='text'
										name='middleName'
										value={middleName}
										onChange={this.dataHandler}
									/>
									<InputBox
										label='Last Name'
										type='text'
										name='lastName'
										value={lastName}
										isRequired={true}
										onChange={this.dataHandler}
									/>
									<InputBox
										type='button'
										name='submit'
										value='submit'
										onChange={this.submitHandler}
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