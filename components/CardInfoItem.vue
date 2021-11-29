<template>
  <div>
    <span v-if="info !== ''" class="cardInfo mt-2 ">{{ convertInfo }}</span>
    <span v-else class="cardInfoNone mt-2 "> 無資訊 </span>
  </div>
</template>

<script>
export default {
  name: "CardInfoItem",
  props: {
    info: {
      type: String,
      required: true
    },
  },
  computed: {
    convertInfo() {
      switch(this.info){
        case "BIG":
          return "大型犬";
        case "MEDIUM":
          return "中型犬";
        case "SMALL":
          return "小型犬";
        case "M":
          return "公";
        case "F":
          return "母";
        case "N":
          return "任意";
        default:
          return this.info;
      }
    }
  }
}
</script>