import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Show from './show';

class FormData extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			fname: '',
			lname: '',
			mname: '',
			show: false,
			flagToggle: false
		}
	}

	toggleHandle = () => {
		const { show, flagToggle } = this.state;

		if (show)
			this.setState({ flagToggle: !this.state.flagToggle });
	}

	submitHandler = () => {
		const { show, flagToggle } = this.state;
		this.setState({ show: true });
	}

	submitData = event => {
		event.preventDefault();
		this.setState({ [event.target.name]: event.target.value });
	}

	render() {
		return (
			<div>
				<App
					submitData={this.submitData}
					toggleHandle={this.toggleHandle}
					submitHandler={this.submitHandler} />
				{this.state.show ? <Show propsData={this.state}/> : this.state.flagToggle && <Show propsData={this.state}/>}
			</div>);
	}
}

ReactDOM.render(<FormData />, document.getElementById('root'));

serviceWorker.unregister();
