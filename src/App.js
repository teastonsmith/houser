import React from 'react';
import './App.css';

import Dashboard from './Components/Dashboard/Dashboard';
import Wizard from './Components/Wizard/Wizard';
import Header from './Components/Header/Header';
import House from './Components/House/House';

export default function App() {
	return (
		<div className='App'>
			<Dashboard>
				<House />
			</Dashboard>
			<Wizard />
			<Header />
		</div>
	);
}
