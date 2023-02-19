<template>
  <Tutorial/>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'IndexPage',
  async mounted() {
    await this.fetchVehicules();
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
