const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const planetsRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router');
const { nextTick } = require('process');
launchesRouter;

const app = express();

var whitelist = ['http://localhost:5000/', 'http://localhost:5000'];
app.use(
	cors({
		origin: function (origin, callback) {
			if (whitelist.indexOf(origin) != -1 || !origin) callback(null, true);
			else {
				console.log(`ERROR!!: ${origin}`);
				callback(new Error('Not allowed by cors'));
			}
		},
	})
);
app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/launches', launchesRouter);
app.use('/planets', planetsRouter);
app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;
