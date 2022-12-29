const { getAllLaunches, addNewLaunch } = require('../../models/launches.model');

function httpGetAllLaunches(req, res) {
	return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
	const launch = req.body;
	launch.launchDate = new Date(launch.launchDate);

	// Check if the date is valid or not
	if (isNaN(launch.launchDate)) {
		return res.status(400).json({
			error: 'Invalid launch date',
		});
	}

	// Check for the missing properties of the launch object
	if (
		!launch.mission ||
		!launch.rocket ||
		!launch.launchDate ||
		!launch.target
	) {
		// If any of the
		return res.status(400).json({
			error: 'Missing required launch property',
		});
	}
	addNewLaunch(launch);
	return res.status(201).json(launch); // Set the status to created
}

module.exports = {
	httpGetAllLaunches,
	httpAddNewLaunch,
};
