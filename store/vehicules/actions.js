import VehiculesAPI from "~/services/api/VehiculesAPI";

/**
 * Fetch all vehicules
 * @param commit
 * @param state
 * @returns {Promise<boolean>}
 */
 export async function fetchVehicules({ commit }) {
  const vehicules = await VehiculesAPI.fetchVehicules();
  if(vehicules) {
    commit('SET_VEHICULES', vehicules.results);
    return Promise.resolve(true);
  }
}

/**
 * Fetch a vehicule by its id
 * @param commit
 * @param state
 * @returns {Promise<boolean>}
 */
export async function fetchVehiculeById({ state, commit }, vehiculeId) {
  const vehicule = state.vehicules.find(vehicule => vehicule.id === vehiculeId);
  commit('SET_VEHICULE', vehicule);
  return Promise.resolve(true);
}