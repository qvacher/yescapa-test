import * as actions from '../actions';

describe('Vehicules Vuex Store - Actions', () => {

	const defaultState = {
		vehicules: [
			{ id: 1, title: "Location camping car" },
			{ id: 2, title: "Location camping car" }
		],
		vehicule: {},
	};

	let state;
	beforeEach(() => {
		// Reset state before each test
		state = {
			...defaultState
		};
	});

	it('Action fetchVehicules should fetch a list of vehicules', async () => {
		const commit = jest.fn();
		const response = await actions.fetchVehicules({ commit });
		expect(commit).toHaveBeenCalledWith('SET_VEHICULES', response.results);
		expect(commit).toHaveBeenCalledTimes(1);
	});

	it('Action fetchVehiculeById should fetch a single vehicule', async () => {
		const commit = jest.fn();
		const vehiculeId = 1;
		const response = await actions.fetchVehiculeById({ commit, state }, vehiculeId);
		expect(commit).toHaveBeenCalledWith('SET_VEHICULE', response);
		expect(commit).toHaveBeenCalledTimes(1);
	});
});