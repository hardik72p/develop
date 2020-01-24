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
		}
	}

	done = () => {
		const { show } = this.state;
		this.setState({ show: !show });
	}

	submitData = (event) => {
		event.preventDefault();
		this.setState({ [event.target.name]: event.target.value });
	}

	render() {
		return (
			<div>
				<App
					submitData={this.submitData}
					done={this.done} />
				<Show data={this.state} />
				{/* {this.state.show && <Show propsData={this.state} />}     2nd Way */}
			</div>);
	}
}

ReactDOM.render(<FormData />, document.getElementById('root'));

serviceWorker.unregister();
