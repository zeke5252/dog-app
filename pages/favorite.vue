<template>
  <div>
    <h1>{{test}}</h1>
    <div id="dogs-grid" class="flex flex-wrap gap-3">
      <Card v-for="(dog, index) in dogs" :key="index" :dog="dog" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default { 
  asyncData({params}){
    const test = "哈哈";
    console.log('test: ', test);

    return { test }
  },
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
    const favoriteStr = localStorage.getItem("favorites"); 
    this.favorites = JSON.parse(favoriteStr);
    this.favorites.forEach(id => {
      this.getSingleDog(id);      
    });
  },
  methods: {
    async getSingleDog(id) {
      const address = `https://data.coa.gov.tw/api/v1/AnimalRecognition/?animal_id=${id}`
      const results = await axios.get(address);
      results.data.Data.forEach((dog) => {
        this.dogs.push(dog)
      })
    },
  },
}
</script>
