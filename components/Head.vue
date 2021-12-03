<template>
  <nav class="w-full sm:px-10 md:px-14 lg:px-24 bg-yellow-200">
    <ul class="w-full sm:w-1/3 flex text-sm font-semibold">
      <li class="w-full">
        <nuxt-link class="inline-block w-full py-2.5 text-center rounded-sm" to="/">
          回首頁
        </nuxt-link>
      </li>
      <li class="w-full">
        <nuxt-link class="inline-block w-full py-2.5 text-center rounded-sm" to="/favorite">
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