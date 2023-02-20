import store from '../index';

describe('Vuex Store - Vehicule Store Testing', () => {
  it('Store object properties have expected types', () => {
      expect(store).toHaveProperty('mutations');
      expect(typeof store.mutations).toBe('object');
      expect(store).toHaveProperty('actions');
      expect(typeof store.actions).toBe('object');
      expect(store).toHaveProperty('getters');
      expect(typeof store.getters).toBe('object');
      expect(store).toHaveProperty('state');
      expect(typeof store.state).toBe('function');
  });
});
