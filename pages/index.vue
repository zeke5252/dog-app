<template>
  <div>
    <Banner />
    <div class="px-10">
      <SearchBar :do-fetch="$fetch" @do-fetch="getSearchedDogs" @clear-results= "clearSearchedDogs"/>
      <Loading v-if="$fetchState.pending" />
      <Error v-else-if="$fetchState.error" />
      <div v-else id="dogs-grid" class="flex flex-wrap gap-3">
        <Card v-for="(dog, index) in searchedDogs" :key="index" :dog="dog"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      allDogs:[],
      searchedDogs: [],
    }
  },
  async fetch() {
    await this.getSearchedDogs();
  },
  fetchDelay: 1000,
  methods: {
    async getSearchedDogs(searchObj) {
      if(!searchObj){
        searchObj = {
          bodytype: '',
          sex: '',
          colour: '',
          age: '',
          foundPlace: '',
        }
      } 
      const address = `https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&$top=50&animal_kind=${encodeURI("狗")
      }&animal_bodytype=${searchObj.bodytype}&animal_sex=${searchObj?.sex}&animal_colour=${searchObj.colour}&animal_age=${searchObj.age}&animal_foundPlace=${searchObj.foundPlace}`;
      const results = await axios.get(address);
      this.searchedDogs = [];
      results.data.forEach((dog) => {
        this.searchedDogs.push(dog)
      })
    },
    clearSearchedDogs(val) {
      this.getSearchedDogs();
    },
  },
}
</script>