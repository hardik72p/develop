import React from 'react';
import { Component } from "react";

class Child extends Component {
	constructor(props) {
		super(props);
		this.state = {
			childState: props.count,
			childShow: true
		}
		console.log("child ---- constructor");
	}

	updateProps = event => {
		this.setState({ childState: this.state.childState + 1 });
	}

	displayHandler=event=>{
		this.setState(previousState=> ({
			childShow: !previousState.childShow
		}))
	}

	//---------------------------MOUNT COMPONENT----------------------------------------

	UNSAFE_componentWillMount() {
		console.log("child ---- compWillMount");
	}

	componentDidMount() {
		console.log("child ---- compDidMount");
	}

	//---------------------------UPDATE COMPONENT----------------------------------------

	UNSAFE_componentWillReceiveProps(nextprops) {
		console.log("child ---- compWillReceiveProps");
	}

	shouldComponentUpdate() {
		console.log("child ---- shouldComponentUpdate");
		return true;
	}

	UNSAFE_componentWillUpdate() {
		console.log("child ---- componentWillUpdate");
	}

	componentDidUpdate() {
		console.log("child ---- componentDidUpdate");
	}

	//---------------------------UNMOUNT COMPONENT----------------------------------------

	componentWillUnmount(){
    console.log("child ---- componentWillUnmount");
	}
	
	render() {
		const { childShow } = this.state;
		return (
			<>
				{console.log("child ---- render")}
				<h1>Child ---- childState{this.state.childState} parentState{this.props.count}</h1>
				<input type="button" value="increment parent" onClick={this.updateProps} />
				<input type="button" value={`${childShow ? "Hide" : "show"} child`} onClick={this.props.displayHandler} />
			</>
		);
	}
}

export default Child;