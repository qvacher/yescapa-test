<template>
  <div class="v-grid grid grid-cols-12 col-span-12 lg:col-span-10 gap-4 md:gap-8">
    <div class="col-span-12 md:col-span-6 lg:col-span-4" v-for="vehicule in vehicules" :key="vehicule.id">
      <VehiculeCard :vehicule='vehicule'/>
    </div>
  </div>
</template>

<script>
import VehiculeCard from '~/components/vehicules/VehiculeCard.vue';

export default {
  name: 'VehiculeList',
  components: {
    VehiculeCard,
  },
  props: {
    vehicules: {
      type: Array,
      required: true,
    }
  }
}
</script>