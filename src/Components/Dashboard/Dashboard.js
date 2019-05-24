import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import House from './../House/House';

const axios = require('axios');

const getAxios = () =>
	axios
		.get('/houses')
		.then(function() {
			this.setState({
				houses: [this.state],
			});
		})
		.catch(function(error) {
			console.log('error');
		});

export default class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			houses: [],
		};
	}

	render() {
		return (
			<div>
				<div>
					<p>Dashboard</p>
					<button>
						<Link to='/wizard'>Add New Property</Link>
					</button>
				</div>
				<div>
					{this.state.houses.map(house => {
						return (
              <House 
                key={house.id}
              />
              )
              getAxios()
					})}
				</div>
			</div>
		);
	}
}

// Component functionality:

// User should be able to see all the houses that have been added to the database

// Each house should display its name, address, city, state, zipcode

// User should be able to click the 'Add New Property' button + functionality

// User should be able to delete any single house
