<template>
  <nav class="w-100 bg-yellow-200">
    <ul class="w-80 justify-between flex py-4 text-sm font-semibold">
      <li class="w-1/3"><nuxt-link class="py-1.5 px-4 rounded-sm" to="/">回首頁</nuxt-link></li>
      <li class="w-1/3"><nuxt-link class="py-1.5 px-4 rounded-sm" to="/about">關於網站</nuxt-link></li>
      <li class="w-1/3"><nuxt-link class="py-1.5 px-4 rounded-sm" to="/favorite">我的最愛</nuxt-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
    name: "Head",
}
</script>

<style>
  a.nuxt-link-exact-active {
    @apply bg-yellow-400 ;
  }
</style>