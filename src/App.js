import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';

import Header from './Components/Header/Header';
// import House from './Components/House/House';

import routes from './routes';

export default function App() {
	return (
		<HashRouter>
			<div className='App'>
				<Header />
				{routes}
			</div>
		</HashRouter>
	);
}
