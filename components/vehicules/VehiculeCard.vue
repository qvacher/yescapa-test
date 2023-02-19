<template>
  <article class="v-card border rounded-lg h-full cursor-pointer hover:shadow" @click="openDetails()">
    <div class="v-card__header">
      <img
        :src="picture"
        :alt="`Location - ${title}`"
        class="h-52 w-full object-cover rounded-t-lg"
        @error="replaceByPlaceholder"
      />
    </div>
    <div class="v-card__body p-4 flex flex-col">
      <!-- Vehicule & price -->
      <div class="flex justify-between">
        <h2 class="font-bold">{{ title }}</h2>
        <p class="font-bold">{{ startingPrice }}{{ currencyUsed }}/j</p>
      </div>
      <!-- Localisation -->
      <div class="flex justify-between">
        <p class="text-sm text-gray-500">{{ vehiculeLocationCity }}</p>
      </div>
      <!-- Space & reviews -->
      <div class="flex justify-between">
        <p class="text-sm text-gray-500">
          <span>{{ vehiculeSeats }} places</span>
          •
          <span>{{ vehiculeBeds }} couchages</span>
        </p>
        <div class="v-reviews flex">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 place-self-center text-pink-500"><path fill-rule="evenodd" clip-rule="evenodd" d="m12.648 2.4 2.975 5.891 5.725.567a.724.724 0 0 1 .61.474.713.713 0 0 1-.17.748l-4.715 4.67 1.747 6.344a.713.713 0 0 1-.24.744.73.73 0 0 1-.783.086L12 19.054l-5.797 2.87a.73.73 0 0 1-.782-.087.713.713 0 0 1-.24-.743L6.93 14.75l-4.716-4.67a.713.713 0 0 1-.171-.75.724.724 0 0 1 .611-.473l5.724-.568 2.972-5.89A.725.725 0 0 1 12 2c.275 0 .527.155.649.4Z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          <span class="ml-1 font-bold">{{ reviewAverage }}</span>
          <span class="ml-1">({{ reviewCount }})</span>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import imagePlaceholder from '~/mixins/imagePlaceholder.js';

export default {
  name: 'VehiculeCard',
  props: {
    vehicule: {
      type: Object,
      required: true
    }
  },
  mixins: [
    imagePlaceholder,
  ],
  computed: {
    picture() {
      return this.vehicule?.pictures[0].url;
    },
    title() {
      return this.vehicule?.title;
    },
    startingPrice() {
      return this.vehicule?.starting_price;
    },
    currencyUsed() {
      let currencyUsed = '$';
      if(this.vehicule?.currency_used === 'EUR') currencyUsed = '€';
      return currencyUsed;
    },
    vehiculeLocationCity() {
      return this.vehicule?.vehicle_location_city;
    },
    vehiculeSeats() {
      return this.vehicule?.vehicle_seats;
    },
    vehiculeBeds() {
      return this.vehicule?.vehicle_beds;
    },
    reviewAverage() {
      return this.vehicule?.review_average;
    },
    reviewCount() {
      return this.vehicule?.review_count;
    }
  },
  methods: {
    openDetails() {
      this.$router.push(`/vehicules/${this.vehicule?.id}`);
    }
  }
}
</script>