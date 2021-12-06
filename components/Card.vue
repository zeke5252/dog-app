<template>
    <div
        class="
          flex
          flex-col
          p-3
          md:p-3
          bg-white
          rounded-sm
         shadow
        "
      >
        <div
          v-if="dog.album_file"
          class="w-full max-h-60 overflow-hidden rounded-sm mb-2"
        >
          <img :src="dog.album_file" alt="dog.foundplace" class="object-cover" />
        </div>
        <div
          v-else
          class="
            h-44
            bg-gray-200
            text-gray-400
            flex
            flex-col
            justify-center
            items-center
            shadow-inner
            rounded-sm
            mb-2
            gap-2
          "
        >
          <DogBg />
        </div>
        <CardInfos :infos="infoToShow" :dog="dog" :style-title="'cardInfoTitle' + ' py-1 px-2'" :style-body="'cardInfo' + ' p1'"/>
        <nuxt-link
          :to="{ name: 'dogs-dogid', params: { dogid: dog.animal_id } }"
          class = "btnPrimary mt-4 self-start"
          >詳細資訊 >
        </nuxt-link>
      </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    dog: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      infoToShow: ['animal_bodytype', 'animal_sex', 'animal_colour', 'animal_age', 'animal_foundplace']
    }
  }
}
</script>