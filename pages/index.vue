<template>
  <div class="bg-gray-100">
    <TheHeader />
    <main class="flex flex-col items-center px-3 md:px-5">
      <SearchBar @do-fetch="getSearchedDogs" />
      <Loading v-if="searchLoading" :position="'mt-20'" />
      <Error v-else-if="searchError" />
      <div
        v-else
        class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3"
      >
        <Card
          v-for="(dog, dogIndex) in searchedDogs"
          :key="dogIndex"
          :dog="dog"
        />
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
import { BASE_URL } from '../constants/url.js'
const searchAmount = 50

const initialCriteria = {
  bodytype: '',
  sex: '',
  colour: '',
  age: '',
  foundPlace: '',
}

export default {
  data() {
    return {
      searchedDogs: [],
      searchLoading: false,
      searchError: false,
    }
  },
  async fetch() {
    await this.getSearchedDogs(initialCriteria)
  },
  fetchDelay: 1000,
  methods: {
    async getSearchedDogs(criteria) {
      this.searchLoading = true
      const params = new URLSearchParams({
        UnitId: 'QcbUEzN6E6DL',
        $top: searchAmount,
        $filter: `animal_kind+like+${encodeURI('狗')}`,
      })

      const { sex, age, bodytype, colour, foundPlace } = criteria

      if (sex) params.append('animal_sex', sex)
      if (age) params.append('animal_age', age)
      if (bodytype) params.append('animal_bodytype', bodytype)
      if (colour) params.append('animal_colour', colour)
      if (foundPlace) params.append('animal_foundPlace', foundPlace)

      const address = `${BASE_URL}?${params.toString()}`

      try {
        const results = await axios.get(address)
        this.searchedDogs = [...results.data]
        this.searchLoading = false
      } catch (error) {
        this.searchError = true
        alert('Error fetching searched dogs:', error)
      }
    },
  },
}
</script>
