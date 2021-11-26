<template>
    <form id="searchBar" class="w-full inline-block relative z-50 py-0.5 my-3" @submit.prevent="doFetch">
        <label for="bodytype" />
        <select id="bodytype" v-model="searchObj.bodytype" class="inputStyle mb-3 mr-2 mt-3" >
            <option v-for="(option, index) in options.bodytype" :key="index" :value="option.value">{{option.text}}</option>
        </select>
        <label for="sex" />
        <select id="sex" v-model="searchObj.sex" class="inputStyle mb-3 mr-2 mt-3" >
            <option v-for="(option, index) in options.sex" :key="index" :value="option.value">{{option.text}}</option>
        </select>
        <label for="colour" /><input id="colour" v-model.trim.lazy="searchObj.colour" placeholder="毛色 ( 黑 / 黃...)" type="search" class="inputStyle mb-3 mr-2 mt-3" @keyup.enter="doFetch" />
        <label for="age" /><input id="age" v-model.trim.lazy="searchObj.age" placeholder="年紀" type="search" class="inputStyle mb-3 mr-2 mt-3" @keyup.enter="doFetch" />
        <label for="foundPlace" /><input id="foundPlace" v-model.trim.lazy="searchObj.foundPlace" placeholder="發現地點" type="search" class="inputStyle mb-3 mr-2 mt-3" @keyup.enter="doFetch" />
        <input type="submit" value="搜尋" class="btnPrimary mr-2 shadow" @click="doFetch">
        <input type="button" value="清空條件" class="btnPrimary bg-gray-100 shadow" @click="clearSearchedDogs">
    </form>
</template>

<script>
export default {
    name: "SearchBar",
    data() {
        return {
            options: {
                sex: [
                    {text:"公", value:"M"},
                    {text:"母", value:"F"},
                    {text:"任意", value:""},
                ],
                bodytype: [
                    {text:"大", value:"BIG"},
                    {text:"中", value:"MEDIUM"},
                    {text:"小", value:"SMALL"},
                ]
            },
            searchObj: {
                bodytype: 'MEDIUM',
                sex: 'M',
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
            this.searchObj = Object.assign({}, this.searchObj, {
                bodytype: 'MEDIUM',
                sex: 'M',
            });
            this.$emit("clear-results", [])
        },
  },
}
</script>

<style>

</style>