<template>
  <h1>about</h1>
</template>

<script>
export default {
    head: {
    title: 'Happy Dog Adoption',

    titleTemplate: 'About - %s', 

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
}
</script>