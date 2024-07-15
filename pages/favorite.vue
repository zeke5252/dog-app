<template>
  <div class="px-4 sm:px-16">
    <h1 class="text-3xl py-8">
      您目前有<span class="text-yellow-400"> {{ dogs.length }} </span>筆我的最愛
    </h1>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
    >
      <Card v-for="(dog, dogIndex) in dogs" :key="dogIndex" :dog="dog" />
    </div>
  </div>
</template>

<script>
import { getDogData } from '../utils/dog.js'

export default {
  data() {
    return {
      dogs: [],
      favorites: [],
    }
  },
  head: {
    title: 'Happy Dog Adoption',

    titleTemplate: 'My favorite - %s',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Adopt your dog here with the most detailed information',
      },
    ],

    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  mounted() {
    const favoriteStr = localStorage.getItem('favorites')
    this.favorites = JSON.parse(favoriteStr)
    this.getAllDogs()
  },
  methods: {
    async getAllDogs() {
      for (let i = 0; i < this.favorites.length; i++) {
        this.dogs.push(await getDogData(this.favorites[i]))
      }
    },
  },
}
</script>
