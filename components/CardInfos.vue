<template>
  <ul>
    <li
      v-for="(info, index) in infoList"
      :key="index"
      :class="`${styleMt} overflow-hidden whitespace-nowrap overflow-ellipsis`"
    >
      <span :class="`${styleTitle}` + ' mr-1'">
        {{ info.label }}
      </span>
      <a
        v-if="info.value !== '' && info.isPhoneNum"
        :href="'tel:' + info.value"
        :class="`${styleBody} text-yellow-500 font-bold bg-white rounded-sm`"
      >
        {{ info.value }}
      </a>
      <span v-else-if="info.value !== ''" :class="`${styleBody}`">
        {{ info.value }}
      </span>
      <span v-else class="opacity-60 text-yellow-600 text-xs font-bold">
        ( 無資料 )
      </span>
    </li>
  </ul>
</template>

<script>
import {
  SEX_TYPES,
  BODYTYPE_TYPES,
  AGE_TYPES,
  STERILIZATION_TYPES,
  STATUS_TYPES,
} from '../constants/info.js'

export default {
  name: 'CardInfos',
  props: {
    dog: {
      type: Object,
      required: true,
    },
    isBrief: {
      type: Boolean,
      default: false,
    },
    styleBody: {
      type: String,
      default: '',
      require: true,
    },
    styleTitle: {
      type: String,
      default: '',
      require: true,
    },
    styleMt: {
      type: String,
      default: 'mt-1.5',
    },
  },
  computed: {
    infoList() {
      return [
        {
          label: '圖片更新',
          value: this.dog.album_update,
        },
        {
          label: '多樣性',
          value: this.dog.animal_Variety,
        },
        {
          label: '年紀',
          value: AGE_TYPES[this.dog.animal_age],
          isCard: true,
        },
        {
          label: '區域的 pkid',
          value: this.dog.animal_area_pkid,
        },
        {
          label: '疫苗',
          value: this.dog.animal_bacterin,
        },
        {
          label: '體型',
          value: BODYTYPE_TYPES[this.dog.animal_bodytype],
          isCard: true,
        },
        {
          label: '結束日期',
          value: this.dog.animal_closeddate,
        },
        {
          label: '顏色',
          value: this.dog.animal_colour,
          isCard: true,
        },
        {
          label: '創造時間',
          value: this.dog.createtime,
        },
        {
          label: '發現地點',
          value: this.dog.animal_foundplace,
          isCard: true,
        },
        {
          label: '動物 id',
          value: this.dog.animal_id,
        },
        {
          label: '打開日期',
          value: this.dog.animal_opendate,
        },
        {
          label: '動物地點',
          value: this.dog.animal_place,
        },
        {
          label: '動物標記',
          value: this.dog.animal_remark,
        },
        {
          label: '性別',
          value: SEX_TYPES[this.dog.animal_sex],
          isCard: true,
        },
        {
          label: '收容所的 pkid',
          value: this.dog.animal_shelter_pkid,
        },
        {
          label: '動物狀態',
          value: STATUS_TYPES[this.dog.animal_status],
        },
        {
          label: '結紮',
          value: STERILIZATION_TYPES[this.dog.animal_sterilization],
        },
        {
          label: '動物的 subid',
          value: this.dog.animal_subid,
        },
        {
          label: '動物名稱',
          value: this.dog.animal_title,
        },
        {
          label: '更新日期',
          value: this.dog.animal_update,
        },
        {
          label: 'c 日期',
          value: this.dog.cDate,
        },
        {
          label: '收容所地址',
          value: this.dog.shelter_address,
        },
        {
          label: '收容所名稱',
          value: this.dog.shelter_name,
        },
        {
          label: '收容所電話',
          value: this.dog.shelter_tel,
          isPhoneNum: true,
        },
      ].filter((info) => (this.isBrief ? info.isCard : true))
    },
  },
}
</script>
