export default {
  /**
   * Set vehicules state
   * @param {object} state
   * @param {array} vehicules
   */
  ['SET_VEHICULES'](state, vehicules) {
    state.vehicules = vehicules.sort((a, b) => b.review_average - a.review_average);
  },

  /**
   * Set vehicule state
   * @param {object} state
   * @param {object} vehicule
   */
  ['SET_VEHICULE'](state, vehicule) {
    state.vehicule = vehicule;
  },
}