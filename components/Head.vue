<template>
  <nav class="w-48 bg-yellow-200 mb-5">
    <ul class="flex pt-5 pb-3 text-sm font-semibold">
      <li class="w-1/2">
        <nuxt-link class="py-2.5 px-5 rounded-sm" to="/">
          回首頁
        </nuxt-link>
      </li>
      <li class="w-1/2">
        <nuxt-link class="py-2.5 px-5 rounded-sm" to="/favorite">
          我的最愛
        </nuxt-link>
      </li>
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
    @apply border-b-4 border-yellow-400 ;
  }
</style>