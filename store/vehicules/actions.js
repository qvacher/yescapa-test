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