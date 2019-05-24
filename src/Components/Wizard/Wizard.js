import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
	createHouse = house => {
		axios
			.post('/api/houses', house)
			.then(res => {
				this.setState({
					houses: res.data,
				});
			})
			.catch(err => {
				console.log(`There was an error posting the data: ${err}`);
			});
	};
	handleChange = e => {
		let { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};
	handleClick = () => {
		let house = this.state;
		this.createHouse(house);
	};
	render() {
		return (
			<div>
				<p>Wizard</p>
				<Link to='/'>Cancel</Link>
				<input
					placeholder='Enter Name'
					name='name'
					type='text'
					defaultValue={this.state.name}
					onClick={this.handleChange}
				/>
				<input
					placeholder='Enter Address'
					name='address'
					type='text'
					defaultValue={this.state.address}
					onClick={this.handleChange}
				/>
				<input
					placeholder='Enter City'
					name='city'
					type='text'
					defaultValue={this.state.city}
					onClick={this.handleChange}
				/>
				<input
					placeholder='Enter State'
					name='state'
					type='text'
					defaultValue={this.state.state}
					onClick={this.handleChange}
				/>
				<input
					placeholder='Enter Zip Code'
					name='zipcode'
					type='text'
					defaultValue={this.state.zipcode}
					onClick={this.handleChange}
				/>
				<button onClick={this.handleClick}>Complete</button>
			</div>
		);
	}
}

// Component functionality:

// User should be able to add a name, address, city, state, zipcode for house

// User should be able to click the 'Cancel' button + functionality

// User should be able to click 'Complete' button + functionality
