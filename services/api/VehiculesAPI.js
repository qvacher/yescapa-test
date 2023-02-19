class _VehiculesAPI {

  constructor() {
    this.baseURL = 'https://gitlab.com/api/v4/snippets/2095016';
  }

  init(axios) {
    this.API = axios;
  }

  /**
   * Method to fetch a list of vehicules from the provided json file
   * @returns Promise with an array of vehicules objects
   */
  async fetchVehicules(){
    try {
      const response = await this.API.$get(`${this.baseURL}/raw`);
      return Promise.resolve(response);
    } catch(error) {
      return Promise.resolve(error);
    }
  }
}

const VehiculesAPI = new _VehiculesAPI();

export default VehiculesAPI;