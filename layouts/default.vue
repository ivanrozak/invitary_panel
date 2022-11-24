<template>
  <div class="work-sans">
    <nav-header />
    <nuxt />
    <main-footer />
  </div>
</template>

<script>
import MainFooter from "../components/MainPage/MainFooter.vue";
import NavHeader from "../components/MainPage/NavHeader.vue";
export default {
  components: { NavHeader, MainFooter },
  name: "LayoutDefault",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;400&display=swap");
</style>
