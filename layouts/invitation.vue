<template>
  <div class="bg-[#282828]">
    <div class="max-w-[450px] mx-auto">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import AOS from "aos";
export default {
  name: "LayoutInvitation",
  mounted() {
    AOS.init();
  },
};
</script>
