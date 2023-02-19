<template>
  <div class="v-container w-full px-4 md:px-8 grid grid-cols-12 gap-4 sm:gap-8">
    <!-- Vehicule details -->
    <div class="col-span-12 sm:col-span-8">
      <div class="v-details p-4 md:p-8">
        <!-- Vehicule image -->
        <img src="#" alt="Location -" class="v-details__photo mb-6 md:mb-8 h-[240px] md:h-[480px]">
        <!-- Vehicule basic information -->
        <div class="flex mb-8">
          <div class="v-details__owner mr-4 md:mr-4">
            <img src="#" alt="Nom du propriétaire" class="w-16 h-16 md:h-28 md:w-28">
          </div>
          <div class="v-details__description">
            <h1 class="font-bold text-2xl">Location de camping car profilé</h1>
            <p class="text-gray-500 mb-5">Bordeaux</p>
            <div class="v-details__reviews flex">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 place-self-center text-pink-500"><path fill-rule="evenodd" clip-rule="evenodd" d="m12.648 2.4 2.975 5.891 5.725.567a.724.724 0 0 1 .61.474.713.713 0 0 1-.17.748l-4.715 4.67 1.747 6.344a.713.713 0 0 1-.24.744.73.73 0 0 1-.783.086L12 19.054l-5.797 2.87a.73.73 0 0 1-.782-.087.713.713 0 0 1-.24-.743L6.93 14.75l-4.716-4.67a.713.713 0 0 1-.171-.75.724.724 0 0 1 .611-.473l5.724-.568 2.972-5.89A.725.725 0 0 1 12 2c.275 0 .527.155.649.4Z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              <span class="ml-1 font-bold">5,0</span>
              <span class="ml-1">(10 avis)</span>
            </div>
          </div>
        </div>
        <!-- Vehicule specifications -->
        <div class="v-details__specifications flex justify-between overflow-x-scroll">
          <!-- Security item -->
          <div class="v-details__specification flex flex-col items-center min-w-max">
            <svg viewBox="0 0 24 24" class="w-9 h-9" style="stroke: #2e2e2e; stroke-width: 1px;">
              <g fill="none" fill-rule="evenodd"><path d="M5 17h14v2c0 1.105-.784 2-1.75 2H6.75C5.784 21 5 20.105 5 19v-2zM6 17V7.833C6 6.821 6.895 6 8 6"></path><path d="M10 1.5A2.5 2.5 0 007.5 4v1A2.5 2.5 0 0010 7.5h4A2.5 2.5 0 0016.5 5V4A2.5 2.5 0 0014 1.5h-4zM18 11v6M4 15c7.969-1.2 12.636-4.2 14-9"></path></g>
            </svg>
            <p class="text-center text-sm mt-1">
              <span class="font-bold">4 places</span><br />
              <span>avec ceinture</span>
            </p>
          </div>
          <!-- Sleeping item -->
          <div class="v-details__specification flex flex-col items-center min-w-[120px]">
            <svg viewBox="0 0 24 24" class="w-9 h-9" style="stroke: #2e2e2e; stroke-width: 1px;">
              <g fill="none" fill-rule="evenodd"><path d="M2 20v-7a3 3 0 013-3h14a3 3 0 013 3v7M2 16h20M4 10V6a3 3 0 013-3h10a3 3 0 013 3v4H4z"></path><path d="M8 10a3 3 0 013-3h2a3 3 0 013 3H8z"></path></g>
            </svg>
            <p class="text-center text-sm mt-1">
              <span class="font-bold">4 places</span><br />
              <span>couchage</span>
            </p>
          </div>
          <!-- Licence item -->
          <div class="v-details__specification flex flex-col items-center min-w-[120px]">
            <svg viewBox="0 0 24 24" class="w-9 h-9" style="stroke: #2e2e2e; stroke-width: 1px;">
              <g fill="none" fill-rule="evenodd"><path d="M22.404 10.543a72.937 72.937 0 00-.173-.884c-.1-.479-.196-.866-.29-1.159H2.059c-.094.293-.19.68-.29 1.16-.037.18-.11.56-.173.883 3.114.344 5.292 2.437 5.292 5.49 0 1.46-.494 2.843-1.379 3.947.056.267.245.501.528.674.127.077.259.131.367.157l.042-.056c1.333-1.752 3.34-2.782 5.562-2.782 2.21 0 4.302 1.019 5.694 2.71a3.472 3.472 0 00.764-.734 6.293 6.293 0 01-1.354-3.916c0-3.053 2.178-5.146 5.292-5.49zM6.34 20.902a.987.987 0 00-.05.066 7.45 7.45 0 01.054-.077z"></path><circle cx="12" cy="12" r="10.5"></circle><circle cx="12" cy="12.5" r="2"></circle></g>
            </svg>
            <p class="text-center text-sm mt-1">
              <span> <3500 kg</span><br />
              <span class="font-bold">Permis B</span>
            </p>
          </div>
          <!-- International item -->
          <div class="v-details__specification flex flex-col items-center min-w-[120px]">
            <svg viewBox="0 0 24 24" class="w-9 h-9" style="stroke: #2e2e2e; stroke-width: 1px;">
              <g fill="none" fill-rule="evenodd"><circle cx="12" cy="12" r="10.5"></circle><path d="M10.733 2c.865.619 1.861 1.238 2.987 1.857 1.69.929 3.312 1.857 2.788 2.786-.524.928-1.215 1.857-2.788 1.857-1.048 0-1.358.31-.929.929.165.619-.144 1.547-.929 2.785-1.177 1.857-.12 2.786-.93 2.786-.809 0-2.322-.929-2.786-4.643-.31-2.476-1.549-2.786-3.717-.928-.783-1.239-1.175-2.167-1.176-2.786M13.004 21.833c-.055-1.727.515-3.166 1.71-4.318 1.792-1.727 1.749.452 2.685 0 .854-.412 1.266-.863.896-1.727-.248-.576.816-.505 3.19.212"></path></g>
            </svg>
            <p class="text-center text-sm mt-1">
              <span>Voyage à l'étranger</span><br />
              <span class="font-bold">non autorisé</span>
            </p>
          </div>
          <!-- Km item -->
          <div class="v-details__specification flex flex-col items-center min-w-[120px]">
            <svg viewBox="0 0 24 24" class="w-9 h-9" style="stroke: #2e2e2e; stroke-width: 1px;">
              <g fill="none" fill-rule="evenodd"><path d="M10.441 11.366c-.588 1.098-.588 1.969 0 2.612s1.47.643 2.647 0L17.5 6l-7.059 5.366z"></path><circle cx="12" cy="12" r="10.5"></circle><path d="M12 4.5v-3M12 22.5v-3M1.5 12h3M19.5 12h3"></path></g>
            </svg>
            <p class="text-center text-sm mt-1">
              <span>KM illimité</span><br />
              <span class="font-bold">non autorisé</span>
            </p>
          </div>
          <!-- Animals item -->
          <div class="v-details__specification flex flex-col items-center min-w-[120px]">
            <svg viewBox="0 0 24 24" class="w-9 h-9" style="stroke: #2e2e2e; stroke-width: 1px;">
              <g fill="none" fill-rule="evenodd"><path d="M11.796 20.872c.93 0 1.84.18 2.685.529 2.208.912 4.665-.664 4.628-2.947a6.87 6.87 0 00-.052-.741c-.395-3.178-3.105-5.752-6.438-6.1-4.364-.456-8.137 2.786-8.137 6.95v.047c.016 2.202 2.463 3.687 4.624 2.793a7.022 7.022 0 012.69-.531zM9.294 8.732c1.24-.095 2.108-1.533 1.931-3.286-.176-1.75-1.315-3.035-2.553-2.94-1.239.093-2.107 1.53-1.932 3.284.176 1.752 1.316 3.036 2.554 2.942zm0 0zM16 2.505c-1.237-.094-2.376 1.19-2.552 2.941-.177 1.753.691 3.19 1.93 3.286 1.239.094 2.379-1.19 2.555-2.94.175-1.756-.693-3.193-1.932-3.287zM5.1 9.92C4.557 8.55 3.399 7.759 2.474 8.07c-.924.308-1.258 1.594-.716 2.965.542 1.368 1.7 2.16 2.626 1.851.924-.309 1.259-1.595.716-2.966zm0 0zM18.717 9.92c-.543 1.371-.208 2.657.716 2.966.925.31 2.083-.483 2.625-1.851.543-1.37.208-2.657-.716-2.966-.924-.31-2.082.482-2.625 1.851z"></path></g>
            </svg>
            <p class="text-center text-sm mt-1">
              <span>Animaux</span><br />
              <span class="font-bold">autorisés sur demande</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Sidebar -->
    <aside class="col-span-12 sm:col-span-4">
      <!-- Booking -->
      <div class="v-booking border p-4 md:p-8 mb-4 md:mb-8 rounded-lg">
        <p class="font-bold text-lg mb-8">À partir de 70€/j</p>
        <button class="rounded-lg bg-pink-600 px-7 py-2 text-white block w-full min-h-[50px]">Demande de location</button>
      </div>
      <!-- Reassurance -->
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