<!-- Please remove this file from your project -->
<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <h2 class="text-2xl leading-7 font-semibold mb-8 text-center">
          Welcome to the Yescapa coding test !
        </h2>
        <p class="my-4 pt-4 text-gray-800 border-t border-dashed text-center">
          Made with 🚐 by Quentin Vacher
        </p>
        <nuxt-link to="/vehicules" class="rounded-lg bg-pink-600 px-7 py-2 text-white block w-full min-h-[50px] font-bold flex items-center justify-center">See the live demo</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome'
}
</script>
