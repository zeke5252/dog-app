<template>
    <form id="searchBar" class="flex flex-wrap w-full flex-col sm:flex-row relative py-0.5 my-5" @submit.prevent="doFetch">
        <div class="flex gap-x-3 w-full md:w-1/2 lg:w-auto sm:mr-3">
            <label for="bodytype" class="w-1/2 my-1">
            <select id="bodytype" v-model="searchObj.bodytype" class="inputStyle w-full" >
                <option v-for="(option, index) in options.bodytype" :key="index" :value="option.value">{{option.text}}</option>
            </select>
            </label>
            <label for="sex" class="w-1/2 my-1">
            <select id="sex" v-model="searchObj.sex" class="inputStyle w-full" >
                <option v-for="(option, index) in options.sex" :key="index" :value="option.value">{{option.text}}</option>
            </select>
            </label>
        </div>
        <div class="flex gap-x-3 w-full sm:w-auto sm:mr-3">
            <label for="colour" class="w-1/3 my-1">
                <input id="colour" v-model.trim.lazy="searchObj.colour" placeholder="毛色 ( 黑 / 黃...)" type="search" class="inputStyle w-full appearance-none" @keyup.enter="doFetch" />
            </label>
            <label for="age" class="w-1/3 my-1">
            <select id="age" v-model="searchObj.age" class="inputStyle w-full" >
                <option v-for="(option, index) in options.age" :key="index" :value="option.value">{{option.text}}</option>
            </select>
            </label>
            <label for="foundplace" class="w-1/3 my-1">
                <input id="foundPlace" v-model.trim.lazy="searchObj.foundPlace" placeholder="發現地點" type="search" class="inputStyle w-full appearance-none" @keyup.enter="doFetch" />
            </label>
        </div>
        <div class="flex gap-x-3 w-full sm:w-auto">
            <input type="submit" value="搜尋" class="btnPrimary w-1/2 my-1" @click="doFetch">
            <input type="button" value="清空" class="btnSecondary w-1/2 my-1" @click="clearSearchedDogs">
        </div>
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
                    {text:"性別", value:""},
                ],
                bodytype: [
                    {text:"大", value:"BIG"},
                    {text:"中", value:"MEDIUM"},
                    {text:"小", value:"SMALL"},
                    {text:"體型", value:""},
                ],
                age: [
                    {text:"成犬", value:"ADULT"},
                    {text:"幼犬", value:"CHILD"},
                    {text:"年紀", value:""},
                ]
            },
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
            this.searchObj = Object.assign({}, this.searchObj, {
                bodytype: '',
                sex: '',
                age: '',
            });
            this.$emit("clear-results", [])
        },
  },
}
</script>