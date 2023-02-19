<template>
  <div class="v-container w-full px-4 md:px-8 grid grid-cols-12 gap-4 md:gap-8">
    <!-- Filters -->
    <div class="v-filters col-span-12 lg:col-span-2">
      <Filters />
    </div>
    <!-- Vehicules list -->
    <VehiculeList :vehicules="getVehicules" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import Filters from '~/components/Filters.vue';
import VehiculeList from '~/components/vehicules/VehiculeList.vue';

export default {
  name: 'VehiculesListPage',
  layout: 'list',
  components: {
    Filters,
    VehiculeList,
  },
  async created() {
    try {
      await this.fetchVehicules();
    } catch (error) {
      /* Handler for errors: i.e notification system, etc... */
      console.log(error);
    }
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