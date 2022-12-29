const {
	getAllLaunches,
	addNewLaunch,
	existsLaunchWithId,
	abortLaunchById,
} = require('../../models/launches.model');

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

function httpAbortLaunch(req, res) {
	const launchId = Number(req.params.id);

	// If launch doesn't exist
	if (!existsLaunchWithId(launchId)) {
		return res.status(404).json({
			error: 'Launch not found',
		});
	}

	// If launch exists
	const aborted = abortLaunchById(launchId);
	return res.status(200).json(aborted);
}

module.exports = {
	httpGetAllLaunches,
	httpAddNewLaunch,
	httpAbortLaunch,
};
