<template>
  <nav class="w-100 bg-yellow-200">
    <ul class="w-full flex gap-9 py-4 px-10 text-sm font-semibold">
      <li class=""><nuxt-link to="/">回首頁</nuxt-link></li>
      <li class=""><nuxt-link to="/about">關於網站</nuxt-link></li>
      <li class=""><nuxt-link to="/favorite">我的最愛</nuxt-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
    name: "Head",
}
</script>

<style>

</style>