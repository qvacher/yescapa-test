<template>
  <div class="v-container w-full px-4 md:px-8 grid grid-cols-12 gap-4 md:gap-8">
    <!-- Filters -->
    <div class="v-filters col-span-12 lg:col-span-2">
      <Filters />
    </div>
     <!-- Vehicules list -->
    <div class="v-grid grid grid-cols-12 col-span-12 lg:col-span-10 gap-4 md:gap-8">
      <div class="item border col-span-12 md:col-span-6 lg:col-span-4"></div>
      <div class="item border col-span-12 md:col-span-6 lg:col-span-4"></div>
      <div class="item border col-span-12 md:col-span-6 lg:col-span-4"></div>
      <div class="item border col-span-12 md:col-span-6 lg:col-span-4"></div>
      <div class="item border col-span-12 md:col-span-6 lg:col-span-4"></div>
    </div>
  </div>
</template>

<script>
import Filters from '~/components/Filters.vue';

export default {
  name: 'VehiculesListPage',
  layout: 'list',
  components: {
    Filters,
  }
}
</script>