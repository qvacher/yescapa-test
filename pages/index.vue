<template>
  <Tutorial/>
</template>

<script>
import VehiculesAPI from '../services/api/VehiculesAPI';
export default {
  name: 'IndexPage',
  async mounted() {
    const vehicules = await VehiculesAPI.fetchVehicules();
    console.log(vehicules);
  }
}
</script>
