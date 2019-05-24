import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import House from './../House/House';

export default class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div>
				<p>Dashboard</p>
				<button>
					<Link to='/wizard'>Add New Property</Link>
				</button>
        <House />
			</div>
		);
	}
}

// Component functionality:

// User should be able to see all the houses that have been added to the database

// Each house should display its name, address, city, state, zipcode

// User should be able to click the 'Add New Property' button + functionality

// User should be able to delete any single house
