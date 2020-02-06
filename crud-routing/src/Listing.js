import React, { Component } from 'react';

class Listing extends Component {
	state = {
		user: []
	}

	componentDidMount(prevProps, prevState) {
		if (this.state !== prevState) {
			axios.get('https://reqres.in/api/users')
				.then(response => {
					this.setState({ user: response.data.data });
				})
				.catch(error => {
					console.log('Error fetching and parsing data', error);
				});
		}
	}

	render() {
		return (
			<div>
				{this.state.user.map((item, i) => {
						name = item.first_name + " " + item.last_name;
						return (
							<div className="list-button">
								<button key={i} className="name" value={item.id} onClick={this.props.getUserId} >{item.first_name + " " + item.last_name} </button>
								<button onClick={this.modalHandler}><FontAwesomeIcon icon={faTrashAlt} /></button>
							</div>
						)
					})}
			</div>
		);

	}
}

export default Listing;