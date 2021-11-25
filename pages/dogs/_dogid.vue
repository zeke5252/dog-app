
<template>
    <div>
        <nuxt-link class="btnPrimary inline-block mb-5" to="../">Back</nuxt-link>
        <Loading v-if="$fetchState.pending"/>
        <div v-else class="relative flex items-start overflow-hidden gap-16 ">
            <button :class="storageLocation>=0 ? 'btnPrimary absolute right-4' : 'absolute right-4'" @click="setFavorite">加入我的最愛</button>
            <img class="w-1/2 shadow-lg p-20 bg-white" :src="dog.album_file"  alt="">
            <div class="dogInfo">
                <p  class="m-1">編號: <span> {{dog.animal_id}}</span></p>
                <p  class="m-1">區域編號: <span> {{dog.animal_subid}}</span></p>
                <p  class="m-1">所屬縣市代碼: <span> {{dog.animal_area_pkid}}</span></p>
                <p  class="m-1">所屬收容所代碼: <span> {{dog.animal_shelter_pkid}}</span></p>
                <p  class="m-1">實際所在地: <span> {{dog.animal_place}}</span></p>
                <p  class="m-1">性別: <span> {{dog.animal_sex}}</span></p>
                <p  class="m-1">體型: <span> {{dog.animal_bodytype}}</span></p>
                <p  class="m-1">毛色: <span> {{dog.animal_colour}}</span></p>
                <p  class="m-1">年紀: <span> {{dog.animal_age}}</span></p>
                <p  class="m-1">是否絕育: <span> {{dog.animal_sterilization}}</span></p>
                <p  class="m-1">尋獲地: <span> {{dog.animal_foundplace}}</span></p>
                <p  class="m-1">網頁標題: <span> {{dog.animal_title}}</span></p>
                <p  class="m-1">狀態: <span> {{dog.animal_status}}</span></p>
                <p  class="m-1">備註: <span> {{dog.animal_remark}}</span></p>
                <p  class="m-1">其他說明: <span> {{dog.animal_caption}}</span></p>
                <p  class="m-1">開放認養時間(起): <span> {{dog.animal_opendate}}</span></p>
                <p  class="m-1">開放認養時間(迄): <span> {{dog.animal_closeddate}}</span></p>
                <p  class="m-1">資料異動時間: <span> {{dog.animal_update}}</span></p>
                <p  class="m-1">資料建立時間: <span> {{dog.animal_createtime}}</span></p>
                <p  class="m-1">所屬收容所名稱: <span> {{dog.shelter_name}}</span></p>
                <p  class="m-1">資料更新時間: <span> {{dog.album_update}}</span></p>
                <p  class="m-1">資料建立時間: <span> {{dog.cDate}}</span></p>
                <p  class="m-1">地址: <span> {{dog.shelter_address}}</span></p>
                <p  class="m-1">聯絡電話: <span> {{dog.shelter_tel}}</span></p>
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
            this.storageLocation = this.favorites.indexOf(this.$route.params.dogid);
            
            
        }
    },
}
</script>

<style>
    .dogInfo {
        @apply font-bold text-base text-base;
    }
    .dogInfo p {
        @apply mb-3;
    }
    .dogInfo span {
        @apply font-normal text-gray-800 text-base ml-2;
    }
</style>