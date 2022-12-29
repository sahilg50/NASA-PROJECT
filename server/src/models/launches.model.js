const LAUNCHES = new Map(); // Like dictionary

const launch = {
	flightNumber: 100,
	mission: 'Kepler Exploration X',
	rocket: 'Explorer IS1',
	launchDate: new Date('December 27, 2030'),
	destination: 'Kepler-442 b',
	customer: ['ZTM', 'NASA'],
	upcoming: true,
	success: true,
};

LAUNCHES.set(launch.flightNumber, launch);

function getAllLaunches() {
	return Array.from(LAUNCHES.values());
}
module.exports = {
	LAUNCHES,
	getAllLaunches,
};
