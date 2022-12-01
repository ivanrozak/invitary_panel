<template>
  <div>
    <nav-header :scrolly="scrollY" />
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
  data() {
    return {
      scrollY: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      this.scrollY = window.top.scrollY;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Yellowtail&display=swap");
* {
  font-family: Arial, Helvetica, sans-serif;
}

@font-face {
  font-family: "Clarendon";
  src: url("~assets/font/Clarendon-Regular.woff2") format("woff2");
  font-display: swap;
}

.font-yellowtail {
  font-family: "Yellowtail", sans-serif;
}

.font-clarendon {
  font-family: "Clarendon", sans-serif;
}
</style>
