<template>
    <div
        class="
          flex
          flex-col
          p-3
          md:p-7
          bg-white
          rounded-sm
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
            justify-center
            items-center
            shadow-inner
            rounded-md
            mb-2
          "
        >
          <p>no photo</p>
        </div>
        <CardInfoItem v-for="(info, index) in infoToShow" :key="index" :info="dog['animal_'+info]" />
        <nuxt-link
          :to="{ name: 'dogs-dogid', params: { dogid: dog.animal_id } }"
          class = "btnPrimary mt-2.5"
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
      infoToShow: ['bodytype', 'sex', 'colour', 'age', 'foundplace']
    }
  }
}
</script>