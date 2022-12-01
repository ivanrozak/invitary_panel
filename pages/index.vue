<template>
  <div>
    <!-- Hero Section -->
    <div
      class="grid grid-cols-2 items-center bg-image-hero w-full h-full bg-fill bg-bottom-2 bg-no-repeat"
    >
      <div class="overflow-hidden">
        <img
          class="max-h-[80vh]"
          src="@/assets/img/couples_anim_2.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "LayoutInvitation",
};
</script>

<style scoped>
.bg-image-hero {
  background-image: url(~assets/img/bg_hero.svg);
}
</style>
