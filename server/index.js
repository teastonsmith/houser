require('dotenv').config();
const express = require('express');
const massive = require('massive');
const controller = require('./controller');

const app = express();
app.use(express.json());

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING).then(database => {
	app.set('db', database);
	console.log(`🐘 Database Set 🐘`);
	app.listen(SERVER_PORT, () => {
		console.log(`🔥 Server hot on port: ${SERVER_PORT} 🔥`);
	});
});

app.get('/api/houses', controller.get);
