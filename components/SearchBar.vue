<template>
  <form
    id="searchBar"
    class="flex flex-wrap w-full flex-col sm:flex-row relative py-0.5 my-5"
    @submit.prevent="doFetch"
  >
    <div class="flex gap-x-3 w-full md:w-1/2 lg:w-auto sm:mr-3">
      <label for="bodytype" class="w-1/2 my-1">
        <select
          id="bodytype"
          v-model="searchCriteria.bodytype"
          class="inputStyle w-full"
        >
          <option
            v-for="(type, typeIndex) in bodyTypes"
            :key="typeIndex"
            :value="type.value"
          >
            {{ type.label }}
          </option>
        </select>
      </label>
      <label for="sex" class="w-1/2 my-1">
        <select id="sex" v-model="searchCriteria.sex" class="inputStyle w-full">
          <option
            v-for="(type, typeIndex) in sexTypes"
            :key="typeIndex"
            :value="type.value"
          >
            {{ type.label }}
          </option>
        </select>
      </label>
    </div>
    <div class="flex gap-x-3 w-full sm:w-auto sm:mr-3">
      <label for="colour" class="w-1/3 my-1">
        <input
          id="colour"
          v-model.trim.lazy="searchCriteria.colour"
          placeholder="毛色 ( 黑 / 黃...)"
          type="search"
          class="inputStyle w-full appearance-none"
          @keyup.enter="doFetch"
        />
      </label>
      <label for="age" class="w-1/3 my-1">
        <select id="age" v-model="searchCriteria.age" class="inputStyle w-full">
          <option
            v-for="(type, typeIndex) in ageTypes"
            :key="typeIndex"
            :value="type.value"
          >
            {{ type.label }}
          </option>
        </select>
      </label>
      <label for="foundplace" class="w-1/3 my-1">
        <input
          id="foundPlace"
          v-model.trim.lazy="searchCriteria.foundPlace"
          placeholder="發現地點"
          type="search"
          class="inputStyle w-full appearance-none"
          @keyup.enter="doFetch"
        />
      </label>
    </div>
    <div class="flex gap-x-3 w-full sm:w-auto">
      <input type="submit" value="搜尋" class="btnPrimary w-1/2 my-1" />
      <input
        type="button"
        value="清空"
        class="btnSecondary w-1/2 my-1"
        @click="reset"
      />
    </div>
  </form>
</template>

<script>
const initialCriteria = {
  bodytype: '',
  sex: '',
  colour: '',
  age: '',
  foundPlace: '',
}

export default {
  name: 'SearchBar',
  data() {
    return {
      sexTypes: [
        { label: '公', value: 'M' },
        { label: '母', value: 'F' },
        { label: '性別', value: '' },
      ],
      bodyTypes: [
        { label: '大', value: 'BIG' },
        { label: '中', value: 'MEDIUM' },
        { label: '小', value: 'SMALL' },
        { label: '體型', value: '' },
      ],
      ageTypes: [
        { label: '成犬', value: 'ADULT' },
        { label: '幼犬', value: 'CHILD' },
        { label: '成犬&幼犬', value: '' },
      ],
      searchCriteria: { ...initialCriteria },
    }
  },
  methods: {
    doFetch() {
      this.$emit('do-fetch', this.searchCriteria)
    },
    reset() {
      this.searchCriteria = initialCriteria
    },
  },
}
</script>
