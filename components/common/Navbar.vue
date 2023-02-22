<template>
  <div class="navbar flex justify-between items-center h-10 md:h-20 w-full px-4 md:px-8 mb-4 md:mb-10 border-b">
    <div class="navbar__logo">
      <nuxt-link to="/vehicules">
        <img src="https://www.yescapa.fr/_nuxt/img/yescapa.a02ce11.svg" alt="Yescapa" width="148" height="32" class="h-6 w-auto md:h-8">
      </nuxt-link>
    </div>
    <div class="navbar__menu"></div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>