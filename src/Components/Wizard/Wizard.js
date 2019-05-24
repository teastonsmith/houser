import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Wizard extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div>
				<p>Wizard</p>
				<button>
					<Link to='/'>Cancel</Link>
				</button>
			</div>
		);
	}
}

// Component functionality:

// User should be able to add a name, address, city, state, zipcode for house

// User should be able to click the 'Cancel' button + functionality

// User should be able to click 'Complete' button + functionality
