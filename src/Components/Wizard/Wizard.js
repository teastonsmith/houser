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
					<input
						placeholder='Enter Name'
						name='name'
						type='text'
						defaultValue={this.state.name}
					/>
					<input
						placeholder='Enter Address'
						name='address'
						type='text'
						defaultValue={this.state.address}
					/>
					<input
						placeholder='Enter City'
						name='city'
						type='text'
						defaultValue={this.state.city}
					/>
					<input
						placeholder='Enter State'
						name='state'
						type='text'
						defaultValue={this.state.state}
					/>
					<input
						placeholder='Enter Zip Code'
						name='zipcode'
						type='text'
						defaultValue={this.state.zipcode}
					/>
				</button>
			</div>
		);
	}
}

// Component functionality:

// User should be able to add a name, address, city, state, zipcode for house

// User should be able to click the 'Cancel' button + functionality

// User should be able to click 'Complete' button + functionality
