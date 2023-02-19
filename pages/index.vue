<template>
  <Tutorial/>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'IndexPage',
  async mounted() {
    await this.fetchVehicules();
    console.log(this.getVehicules);
  },
  computed: {
    ...mapGetters({
      getVehicules: 'vehicules/getVehicules',
    })
  },
  methods: {
    ...mapActions({
      fetchVehicules: 'vehicules/fetchVehicules',
    })
  }
}
</script>
