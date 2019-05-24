const axios = require('axios');
const express = require('express');
const router = require('react-router-dom');

const controller = require('./controller');

const app = express();

app.use(express.json());

// const { SERVER_PORT, SESSION_SECRET } = process.env;
const SERVER_PORT = 3005

app.listen(SERVER_PORT, () => {
	console.log(`Now listening on port: ${SERVER_PORT}`);
});
