<template>
  <nav id="header" class="w-full z-30 sticky top-0 py-1 top-0 bg-white/90">
    <div
      class="w-full container mx-auto grid grid-cols-6 mt-0 px-6 py-1 md:py-3"
    >
      <label class="cursor-pointer md:hidden block col-span-1 py-2">
        <svg
          class="fill-current text-gray-900"
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
            class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0"
          >
            <li>
              <a
                class="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                href="#"
                >Katalog</a
              >
            </li>
            <li>
              <a
                class="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                href="#"
                >Portofolio</a
              >
            </li>
          </ul>
        </nav>
      </div>

      <div
        class="order-1 md:order-2 flex flex-col items-center justify-center col-span-4 md:col-span-2 text-gray-700"
      >
        <div class="text-xl tracking-wide flex items-center gap-1">
          <img
            src="https://img.icons8.com/cotton/64/null/information--v1.png"
            width="24px"
            height="24px"
          />
          Invitary
        </div>
        <div class="text-[10px] tracking-wide -mt-1">Share Your Happiness</div>
      </div>

      <div
        class="order-2 md:order-3 md:col-span-2 hidden md:block text-right text-gray-700"
      >
        <div class="py-2 px-4 ml-auto">Artikel</div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavHeader",
};
</script>
