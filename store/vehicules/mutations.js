export default {
  /**
   * Set vehicules state
   * @param {object} state
   * @param {array} vehicules
   */
  ['SET_VEHICULES'](state, vehicules) {
    state.vehicules = vehicules.sort((a, b) => b.review_average - a.review_average);
  },
}