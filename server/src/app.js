const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const planetsRouter = require('./routes/planets/planets.router');

const app = express();

var whitelist = ['http://localhost:3000'];
app.use(
	cors({
		origin: function (origin, callback) {
			if (whitelist.indexOf(origin) != -1 || !origin) callback(null, true);
			else callback(new Error('Not allowed by cors'));
		},
	})
);
app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/planets', planetsRouter);
app.get('/', (req, res) => {
	app.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;
