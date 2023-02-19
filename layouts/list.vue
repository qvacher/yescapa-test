<template>
  <div class="page">
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from '~/components/common/Navbar';

export default {
  name: 'ListLayout',
  components: {
    Navbar,
  }
}
</script>
