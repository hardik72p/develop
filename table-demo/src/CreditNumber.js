import React, { Component } from "react";

class CreditNumber extends Component {
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
		this.setState({ num: value }, () => this.keyHandle())
	}

	keyHandle = () => {

		let value = this.state.num;
		let array = value.split('');
		array = array.filter(i => i !== " ");
		array = array.filter(i => i !== "-");

		if (array.length > 3)
			array.insert(3, " ");
		if (array.length > 7)
			array.insert(7, "-");
		this.setState({ num: array.join('') });
	}

	render() {
		return <input type="text" value={this.state.num} style={{ margin: "100px" }} onChange={this.handleChange} />
	}
}

export default CreditNumber;