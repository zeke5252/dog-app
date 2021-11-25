<template>
    <div class="min-h-screen bg-yellow-200  flex justify-center">
      <div class="w-5/6">
        <Head />
        <Nuxt />
      </div>
    </div>
</template>
<script>
export default {
    head: {
    title: 'Happy Dog Adoption',
    
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Adopt your dog here with the most detailed information'
      }
    ],

    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  //   watch: {
  //   $route () {
  //     console.log('route changed', this.$route)
  //   }
  // },
}
</script>