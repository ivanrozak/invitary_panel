<template>
  <div class="h-[100vh] relative">
    <div
      class="bg-blue-200 h-[100vh] text-center absolute w-full max-w-[450px] transition-all duration-1000 z-10"
      :class="!isOpen ? 'top-0' : 'top-[-100vh]'"
    >
      <div>Opener</div>
      <div>{{ isOpen }}</div>
      <el-button @click="openInvitation">Buka Undangan</el-button>
    </div>
    <div id="topsection" class="absolute z-1 w-full bg-red-300">
      Content
      <button v-scroll-to="'#Content'">Scroll to</button>
      <div class="mt-12">
        Carousel
        <div class="rounded-lg overflow-hidden">
          <el-carousel
            indicator-position="none"
            direction="vertical"
            class="z-0"
          >
            <el-carousel-item v-for="item in 4" :key="item" class="bg-white">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <el-drawer
        title="Wedding Gift"
        :visible.sync="openDrawer"
        direction="btt"
      >
        <div>Hi There!</div>
      </el-drawer>
      <div class="w-full max-w-[450px] fixed bottom-0">
        <div
          class="grid grid-cols-2 gap-3 bg-white/70 backdrop-blur-md h-[50px] p-2"
        >
          <div
            class="border h-full border-[#254E7E] text-[#254E7E] flex items-center justify-center rounded-sm cursor-pointer gap-2"
          >
            Beri Ucapan
          </div>
          <div
            class="bg-[#254E7E] text-white flex items-center justify-center rounded-sm cursor-pointer gap-2"
            @click="showDrawer"
          >
            Wedding Gift
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Luxury1",
  layout: "LayoutInvitation",
  data() {
    return {
      isOpen: false,
      openDrawer: false,
    };
  },
  methods: {
    openInvitation() {
      this.isOpen = true;
      this.$scrollTo("#topsection");
    },
    showDrawer() {
      this.openDrawer = true;
    },
  },
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  /* background-color: #99a9bf; */
  background-color: white;
}

.el-carousel__item:nth-child(2n + 1) {
  /* background-color: #d3dce6; */
  background-color: white;
}

.el-drawer__wrapper {
  max-width: 450px;
  margin: auto;
}
</style>
