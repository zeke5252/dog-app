<template>
  <div class="relative h-80 bg-yellow-200 px-4 sm:px-10 md:px-14 lg:px-24 py-8 md:py-16">
    <img class="imgBanner transform scale-75 lg:scale-100 origin-bottom-right " src="@/assets/images/dog.png" alt="">
    <img class="imgBanner transform scale-75 lg:scale-100 translate-y-full origin-top-right" src="@/assets/images/dog2.png" alt="">
    <h1 class="relative text-5xl sm:text-6xl font-bold textStroke">領養之家</h1>
    <h3 class="relative text-lg sm:text-2xl md:text-3xl lg:text-4xl lg:w-full mt-2 md:mt-4">請用領養代替購買~</h3>
    <a class="inline-block relative bg-yellow-400 hover:bg-yellow-500 text-sm md:text-base px-4 md:px-6 py-2.5 md:py-3 font-bold mt-3 sm:mt-6 rounded-full" href="#searchBar">找到你的牠！</a>
  </div>
</template>

<script>
export default {
  name: "Banner",
}
</script>
<style scoped>
  .imgBanner {
    @apply absolute bottom-0 right-0 
  }
</style>