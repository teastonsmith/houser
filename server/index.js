require('dotenv').config();
const express = require('express');
const massive = require('massive');

// const axios = require('axios');
// const router = require('react-router-dom');
// const controller = require('./controller');

const app = express();
app.use(express.json());

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING).then(database => {
	app.set('db', database);
	console.log('Database set');
	app.listen(SERVER_PORT, () => {
		console.log(`Now listening on port: ${SERVER_PORT}`);
	});
});
