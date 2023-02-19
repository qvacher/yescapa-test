import VehiculesAPI from "../services/api/VehiculesAPI";

export default function ({ $axios }) {
  VehiculesAPI.init($axios);
}