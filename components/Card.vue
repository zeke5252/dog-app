<template>
    <div
        class="
          w-60
          flex-auto flex flex-wrap
          box-border
          flex-col
          p-9
          bg-white
          items-start
          rounded-md
          shadow-lg
        "
      >
        <div
          v-if="dog.album_file"
          class="w-full max-h-60 overflow-hidden rounded-sm"
        >
          <img :src="dog.album_file" alt="" class="shadow-inner object-cover" />
        </div>
        <div
          v-else
          class="
            w-full
            h-60
            bg-gray-200
            text-gray-400
            flex
            justify-center
            items-center
            shadow-inner
            rounded-md
          "
        >
          <p>no photo</p>
        </div>
        <span v-if="dog.animal_bodytype !== ''" class="cardInfo mt-4 ">{{ dog.animal_bodytype }}</span>
        <span v-else class="cardInfoNone mt-2 "> 無資訊 </span>

        <span v-if="dog.animal_sex !== ''" class="cardInfo mt-2 ">{{ dog.animal_sex}}</span>
        <span v-else class="cardInfoNone mt-2 "> 無資訊 </span>

        <span v-if="dog.animal_colour !== ''" class="cardInfo mt-2 ">{{ dog.animal_colour}}</span>
        <span v-else class="cardInfoNone mt-2 "> 無資訊 </span>

        <span v-if="dog.animal_age !== ''" class="cardInfo mt-2 ">{{ dog.animal_age }}</span>
        <span v-else class="cardInfoNone mt-2 "> 無資訊 </span>

        <span v-if="dog.animal_foundplace !== ''" class="cardInfo mt-2 mb-2 ">{{ dog.animal_foundplace}}</span>
        <span v-else class="cardInfoNone mt-2 "> 無資訊 </span>

        <nuxt-link
          :to="{ name: 'dogs-dogid', params: { dogid: dog.animal_id } }"
          class = "btnSecondary mt-2.5"
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
  }
}
</script>