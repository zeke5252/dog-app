
<template>
    <div class="flex flex-col items-center">
        <Loading v-if="$fetchState.pending" position="mt-32 center"/>
        <div v-else class="relative w-full md:w-2/3 p-3 pt-0 md:p-0 mb-10">
            <h1 class="text-3xl py-8">狗狗編號：<span class="text-yellow-400"> {{dog.animal_id}} </span></h1>
            <div class="flex flex-col gap-3 items-start justify-self-center w-full p-3 md:p-15 mb-5 bg-white shadow-sm">
                <img class="w-full h-auto bg-white" :src="dog.album_file"  alt="">
                <button v-if="storageLocation>=0" class="btnSecondary" @click="setFavorite">取消最愛</button>
                <button v-else class="btnPrimary" @click="setFavorite">加入我的最愛</button>
            </div>
            <div>
                <CardInfos :infos="[]" :dog="dog" :style-title="'text-gray-800 text-base font-semibold py-1 px-2 rounded-lg'" :style-body="'text-gray-800 text-sm py-1 px-2'"/>
            </div>
        </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
    name: "SingleDog",
    data() {
        return {
            dog: {},
            favorites: [],
            storageLocation: null,
        }
    },
    async fetch() {
        await this.getSingleDog();
    },
    head() {
        return {    
            title: 'Happy Dog Adoption',
            titleTemplate: `${this.dog.animal_foundplace} - %s`,
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Detailed content about the dog where you can add to favorites'
                }
                ],

                link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]}
    },
    fetchDelay: 1000,
    mounted() {
        const favoriteStr = localStorage.getItem("favorites");
        this.favorites = favoriteStr ? JSON.parse(favoriteStr) : [];
        this.getFavoriteLocation();
    },
    methods: {
        async getSingleDog() {
            const results = await axios.get(`https://data.coa.gov.tw/api/v1/AnimalRecognition/?animal_id=${this.$route.params.dogid}`);
            results.data.Data.forEach( result => {
                this.dog = result;
            })
        },
        setFavorite() {
            this.storageLocation >= 0 ? this.favorites.splice(this.storageLocation, 1) : this.favorites.push(this.dog.animal_id);    
            this.getFavoriteLocation();  
            localStorage.setItem("favorites", JSON.stringify(this.favorites));
        },
        getFavoriteLocation() {
            this.storageLocation = this.favorites.indexOf(parseInt(this.$route.params.dogid));
        }
    },
}
</script>
