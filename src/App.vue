<template>
  <Header />
  <main class="main-view">
    <router-view />
  </main>
  <Footer />
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import PaletteApp from "@/views/PaletteApp.vue"
export default {
  components: {
    Header,
    Footer,
  },
  views: {
    PaletteApp,
  },
}
</script>

<style scoped>
.main-view {
  padding: 0 2rem;
  width: 100%;
}
</style>

<style>
body {
  color: #2c3e50;
  overflow-x: hidden;
}
</style>
