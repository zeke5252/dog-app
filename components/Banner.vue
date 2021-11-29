<template>
  <div class="bg-yellow-200 py-8 md:py-16 sm:h-86 h-full relative">
    <img class="imgBanner transform scale-50 md:scale-75 lg:scale-100 origin-bottom-right " src="@/assets/images/dog.png" alt="">
    <img class="imgBanner transform scale-50 md:scale-75 lg:scale-100 translate-y-full origin-top-right" src="@/assets/images/dog2.png" alt="">
    <h1 class="relative text-5xl sm:text-6xl font-base textStroke">快樂<span class="font-bold">領養</span>去</h1>
    <h3 class="relative text-xl sm:text-2xl md:text-3xl lg:text-4xl w-1/2 lg:w-full mt-3">以領養代替購買，幫幫這些可憐的牠</h3>
    <a class="inline-block relative bg-yellow-400 hover:bg-yellow-500 text-base px-6 py-3 font-bold mt-3 sm:mt-6 rounded-full" href="#searchBar">找到你的牠！</a>
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