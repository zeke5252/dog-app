<template>
  <div class="px-4 sm:px-16">
    <h1 class="text-3xl py-8">您目前有<span class="text-yellow-400"> {{dogs.length}} </span>筆我的最愛</h1>
    <div id="dogs-grid" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      <Card v-for="(dog, index) in dogs" :key="index" :dog="dog" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default { 
  data() {
    return {
      dogs: [],
      favorites: [],
      allResults: [],
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
    this.getAllDogs();
  },
  methods: {
    async getAllDogs() {
      const allPromises=[];
      for(let i=0; i<this.favorites.length; i++){
        allPromises.push(await this.getSingleDog(this.favorites[i]));   
      };
      this.filterValidDogs(allPromises);
    },
    async getSingleDog(id) {
      const address = `https://data.coa.gov.tw/api/v1/AnimalRecognition/?animal_id=${id}`;
      return await axios.get(address);
    },
    filterValidDogs(allPromises) {
      Promise.all(allPromises).then(values=>{
        values.forEach(dog=>{
          // If dog data not available, dog.data.Data will be an empty array, hence no dog.data.Data[0];
          this.dogs.push(dog.data.Data[0]);
        })
        if(this.dogs.length !== this.favorites.length){
          const ids = [];
          this.dogs.forEach(dog => {
            ids.push(dog.animal_id);
          });
          localStorage.setItem("favorites", JSON.stringify(ids));
        }
      });
    },
  },
}
</script>
