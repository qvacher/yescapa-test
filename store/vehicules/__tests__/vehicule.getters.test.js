import * as getters from '../getters';

const state = {
  vehicules: [],
  vehicule: {}
};

describe('Vehicule Vuex Store - Getters', () => {
  it('Getter getVehicules returns a list of vehicules', () => {
    const result = getters.getVehicules(state);
    expect(result).toEqual(state.vehicules);
  });

  it('Getter getVehicule returns a single vehicule', () => {
    const result = getters.getVehicule(state);
    expect(result).toEqual(state.vehicule);
  });
});
