<template>
  <div class="v-container w-full px-4 md:px-8 grid grid-cols-12 gap-4 sm:gap-8">
    <div class="v-filters col-span-12 sm:col-span-8">
      <div class="v-details border p-4 md:p-8">
        <h3>Details</h3>
      </div>
    </div>
    <aside class="col-span-12 sm:col-span-4">
      <div class="v-booking border p-4 md:p-8 mb-4 md:mb-8">
        <h3>Booking</h3>
      </div>
      <Reassurance />
    </aside>
  </div>
</template>

<script>
import Reassurance from '~/components/common/Reassurance.vue';

export default {
  name: 'VehiculeDetailsPage',
  layout: 'list',
  components: {
    Reassurance,
  }
}
</script>

<style>

</style>