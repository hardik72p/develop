import React, { Component } from "react";

class CardNumber extends Component {
	constructor(props) {
		super(props);
		this.state = {
			num: ''
		}
	}

	handleChange = (e) => {
		const { value } = e.target;
		Array.prototype.insert = function (index) {
			this.splice.apply(this, [index, 0].concat(
				Array.prototype.slice.call(arguments, 1)));
			return this;
		};

		let pattern = /^[0-9( )-]*$/;
		if (pattern.test(value))
			this.setState({ num: value }, () => this.keyHandle())
	}

	keyHandle = () => {

		let value = this.state.num;
		let array = value.split('');
		let pattern = /[0-9]/

		array = array.filter(i => pattern.test(i));

		if (array.length > 3) {
			array.insert(0, "(");
			array.insert(4, ")");
			array.insert(5, " ");
		}

		if (array.length > 9)
			array.insert(9, "-");
		this.setState({ num: array.join('') });
	}
	render() {
		return (<React.Fragment>
			<input type="text" maxLength="14" value={this.state.num} style={{ margin: "100px" }} onChange={this.handleChange} />
		</React.Fragment>
		)
	}
}

export default CardNumber;


 import * as Validations from '../../../validations/CommonValidations'; 
    export const phoneNumberValidation = function(value){
           let input = value.replace(/\D/g,'');
            input = input.substring(0,10);
            var size = input.length;
              if(size == 0){
                      input = input;
               }else if(size < 4){
                     input = '('+input;
               }else if(size < 7){
                       input = '('+input.substring(0,3)+') '+input.substring(3,6);
               }else{
                       input = '('+input.substring(0,3)+') '+input.substring(3,6)+' - 
                    '+input.substring(6,10);
               }
               return input;
        }



    handleChange=(name,event,value)=>{
             let phoneValid =  Validations.phoneNumberValidation(val);
              this.setState({phone: Validations.isValidPhone(phoneValid)})

       }

     <TextField floatingLabelText={this.getMandatoryDetails("Mobile")} autoComplete="off" maxLength="16" value={this.state.phone || ""} onChange={this.handleChange.bind(this, 'phone')} />
