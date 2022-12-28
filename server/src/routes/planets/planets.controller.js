const { PLANETS } = require('../../models/planets.model');

function getAllPlanets(req, res) {
	return res.status(200).json(PLANETS);
}

module.exports = {
	getAllPlanets,
};
