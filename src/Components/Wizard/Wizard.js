import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Wizard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			address: '',
			city: '',
			state: '',
			zipcode: '',
		};
	}

	render() {
		return (
			<div>
				<p>Wizard</p>
				<button>
					<Link to='/'>Cancel</Link>
					<input name='name' type='text' value={this.state.name} />
					<input name='address' type='text' value={this.state.address} />
					<input name='city' type='text' value={this.state.city} />
					<input name='state' type='text' value={this.state.state} />
					<input name='zipcode' type='text' value={this.state.zipcode} />
				</button>
			</div>
		);
	}
}

// Component functionality:

// User should be able to add a name, address, city, state, zipcode for house

// User should be able to click the 'Cancel' button + functionality

// User should be able to click 'Complete' button + functionality
