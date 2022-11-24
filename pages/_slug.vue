<template>
  <div>
    <luxury-one />
  </div>
</template>

<script>
import LuxuryOne from "../components/Luxury1/LuxuryOne.vue";
export default {
  components: { LuxuryOne },
  layout: "invitation",
  async asyncData({ params }) {
    const slug = params.slug;
    return { slug };
  },
};
</script>
