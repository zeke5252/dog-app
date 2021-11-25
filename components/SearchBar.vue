<template>
    <div class="w-full inline-block relative z-50 py-0.5 my-3">
        <input v-model.lazy="searchObj.bodyType" placeholder="體型 ( BIG / MEDIUM / SMALL )" type="search" class="inputStyle mb-3 mr-2 mt-3" @keyup.enter="doFetch" />
        <input v-model.lazy="searchObj.sex" placeholder="性別 ( M / F )" type="search" class="inputStyle mb-3 mr-2 mt-3" @keyup.enter="doFetch" />
        <input v-model.lazy="searchObj.colour" placeholder="毛色 ( 黑 / 黃...)" type="search" class="inputStyle mb-3 mr-2 mt-3" @keyup.enter="doFetch" />
        <input v-model.lazy="searchObj.age" placeholder="年紀" type="search" class="inputStyle mb-3 mr-2 mt-3" @keyup.enter="doFetch" />
        <input v-model.lazy="searchObj.foundPlace" placeholder="發現地點" type="search" class="inputStyle mb-3 mr-2 mt-3" @keyup.enter="doFetch" />
        <input type="button" value="搜尋" class="btnPrimary mr-2 shadow" @click="doFetch">
        <input type="button" value="清空條件" class="btnPrimary bg-gray-100 shadow" @click="clearSearchedDogs">
    </div>
</template>

<script>
export default {
    name: "SearchBar",
    data() {
        return {
            searchObj: {
                bodytype: '',
                sex: '',
                colour: '',
                age: '',
                foundPlace: '',
            },
        }
    },
    methods: {
        doFetch() {
            this.$emit("do-fetch", this.searchObj)
        },
        clearSearchedDogs() {
            this.searchObj = Object.assign({});
            this.$emit("clear-results", [])
        },
  },
}
</script>

<style>

</style>