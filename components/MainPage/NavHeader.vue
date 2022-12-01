<template>
  <nav
    id="header"
    class="w-full z-30 fixed top-0 py-1 top-0 transition-all text-[#818181] px-6"
    :class="{ 'bg-white/80': scrolly > 72 }"
  >
    <div class="w-full mx-auto grid grid-cols-6 mt-0 px-6 py-1 md:py-3">
      <label class="cursor-pointer md:hidden block col-span-1 py-2">
        <svg
          class="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>Invitary</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>

      <div
        class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1 col-span-2"
      >
        <nav>
          <ul
            class="md:flex items-center justify-between text-base pt-4 md:pt-0"
          >
            <li>
              <a
                class="inline-block no-underline hover:underline py-2 px-4 font-clarendon"
                href="#"
                >Katalog</a
              >
            </li>
            <li>
              <a
                class="inline-block no-underline hover:underline py-2 px-4 font-clarendon"
                href="#"
                >Portofolio</a
              >
            </li>
          </ul>
        </nav>
      </div>

      <div
        class="order-1 md:order-2 flex flex-col items-center justify-center col-span-4 md:col-span-2"
      >
        <div
          class="text-xl tracking-wide flex items-center gap-1 font-yellowtail"
        >
          <!-- <img
            src="https://img.icons8.com/cotton/64/null/information--v1.png"
            width="24px"
            height="24px"
          /> -->
          <img src="@/assets/img/logo.png" width="24px" height="24px" />
          Invitary
        </div>
        <div class="text-[10px] tracking-wide -mt-1">Share Your Happiness</div>
      </div>

      <div class="order-2 md:order-3 md:col-span-2 hidden md:block text-right">
        <a
          class="inline-block no-underline hover:underline py-2 px-4 font-clarendon"
          href="#"
          >Artikel</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavHeader",
  props: ["scrolly"],
};
</script>
