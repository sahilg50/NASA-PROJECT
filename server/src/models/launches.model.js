const LAUNCHES = new Map(); // Like dictionary

let latestFLightNumber = 100;

const launch = {
	flightNumber: 100,
	mission: 'Kepler Exploration X',
	rocket: 'Explorer IS1',
	launchDate: new Date('December 27, 2030'),
	target: 'Kepler-442 b',
	customers: ['ZTM', 'NASA'],
	upcoming: true,
	success: true,
};

LAUNCHES.set(launch.flightNumber, launch);

function existsLaunchWithId(launchId) {
	return LAUNCHES.has(launchId);
}

function getAllLaunches() {
	return Array.from(LAUNCHES.values());
}

function addNewLaunch(launch) {
	latestFLightNumber++;
	LAUNCHES.set(
		latestFLightNumber,
		Object.assign(launch, {
			// Update the parameters of the object launch
			customers: ['ZTM', 'NASA'],
			success: true,
			upcoming: true,
			flightNumber: latestFLightNumber,
		})
	);
}

function abortLaunchById(launchId) {
	const aborted = LAUNCHES.get(launchId);
	aborted.upcoming = false;
	aborted.success = false;
	return aborted;
}

module.exports = {
	getAllLaunches,
	addNewLaunch,
	existsLaunchWithId,
	abortLaunchById,
};
