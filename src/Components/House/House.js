import React, { Component } from 'react';

export default class House extends Component {
	constructor(props) {
		super(props);
		this.state = {
			houses: props.houses,
		};
	}
	render() {
		return (
			<div>
				<p>House</p>
				{this.state.houses}
				<button>Delete</button>
			</div>
		);
	}
}
