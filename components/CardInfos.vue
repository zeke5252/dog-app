<template>
  <ul>
    <li v-for="(info, index) in getInfos" :key="index" :class="`${styleMt} overflow-hidden whitespace-nowrap overflow-ellipsis`">
      <span :class="`${styleTitle}`+ ' mr-1'">
        {{ info[0] }}
      </span>
      <span v-if="info[1] !== '' && !isPhoneNum(info[1])" :class="`${styleBody}`">
        {{ info[1] }}
      </span>
      <a v-else-if="isPhoneNum(info[1])" :href="'tel:'+ info[1]" :class="`${styleBody} text-yellow-500 font-bold bg-white rounded-sm`">
        {{ info[1] }}
      </a>
      <span v-else class="opacity-60 text-yellow-600 text-xs font-bold">
       ( 無資料 )
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "CardInfos",
  props: {
    dog: {
      type: Object,
      required: true,
    },
    infos: {
      type: Array,
      required: true,
    },
    styleBody: {
      type: String,
      default: "",
      require: true,
    },
    styleTitle: {
      type: String,
      default: "",
      require: true,
    },
    styleMt: {
      type: String,
      default: "mt-1.5",
    },
  },
  computed: {
    getInfos() {
      let result;
      const clonedDog = Object.assign({}, this.dog);
      this.deletePropertiesNotDisplay(clonedDog);
      result = Object.entries(clonedDog);
      if(this.infos.length !== 0){
        result = result.reduce((accumulator, info, index) => {
            this.infos.forEach(el=> {
              if(el === info[0]) accumulator.push(result[index]);
            });
            return accumulator;
          }, []);
      };
      const convertedResult = result.map((info)=>{
        switch(info[0]){
          case "animal_id":
            info[0] = "編號";
            break;
          case "animal_subid":
            info[0] = "區域編號";
            break;
          case "animal_area_pkid":
            info[0] = "所屬縣市代碼";
            break;
          case "animal_shelter_pkid":
            info[0] = "所屬收容所代碼";
            break;
          case "animal_place":
            info[0] = "實際所在地";
            break;
          case "animal_sex":
            info[0] = "性別";
            switch(info[1]){
              case "M":
                info[1] = "公";
                break;
              case "F":
                info[1] = "母";
                break;
              case "N":
                info[1] = "任意";
                break;
            };
            break;
          case "animal_bodytype":
            info[0] = "體型";
            switch(info[1]){
              case "BIG":
                info[1] = "大";
                break;
              case "MEDIUM":
                info[1] = "中";
                break;
              case "SMALL":
                info[1] = "小";
                break;
            };
            break;
          case "animal_colour":
            info[0] = "毛色";
            break;
          case "animal_age":
            info[0] = "年紀";
            switch(info[1]){
              case "CHILD":
                info[1] = "幼犬";
                break;
              case "ADULT":
                info[1] = "成犬";
                break;
            };
            break;
          case "animal_bacterin":
            info[0] = "是否施打狂犬病疫苗";
            switch(info[1]){
              case "T":
                info[1] = "已施打";
                break;
              case "F":
                info[1] = "未施打";
                break;
              case "N":
                info[1] = "未輸入";
                break;
            };
            break;
          case "animal_sterilization":
            info[0] = "是否絕育";
            switch(info[1]){
              case "T":
                info[1] = "已絕育";
                break;
              case "F":
                info[1] = "未絕育";
                break;
              case "N":
                info[1] = "未輸入";
                break;
            };
            break;
          case "animal_foundplace":
            info[0] = "發現地點";
            break;
          case "animal_title":
            info[0] = "網頁標題";
            break;
          case "animal_status":
            info[0] = "狀態";
            switch(info[1]){
              case "NONE":
                info[1] = "未公告";
                break;
              case "OPEN":
                info[1] = "開放認養";
                break;
              case "ADOPTED":
                info[1] = "已認養";
                break;
              case "OTHER":
                info[1] = "其他";
                break;
              case "DEAD":
                info[1] = "死亡";
                break;
            };
            break;
          case "animal_remark":
            info[0] = "備註";
            break;
          case "animal_opendate":
            info[0] = "開放認養時間(起)";
            break;
          case "animal_closeddate":
            info[0] = "開放認養時間(迄)";
            break;
          case "animal_update":
            info[0] = "資料異動時間";
            break;
          case "animal_createtime":
            info[0] = "資料建立時間";
            break;
          case "shelter_name":
            info[0] = "所屬收容所名稱";
            break;
          case "album_update":
            info[0] = "資料更新時間";
            break;
          case "cDate":
            info[0] = "資料建立時間";
            break;
          case "shelter_address":
            info[0] = "地址";
            break;
          case "shelter_tel":
            info[0] = "聯絡電話";
            break;
        };
        return info
      })
      return convertedResult;
    },
  },
  methods: {
    deletePropertiesNotDisplay (clonedDog){
      delete clonedDog.album_file;
      delete clonedDog.animal_caption;
      delete clonedDog.animal_kind;
    },
    isPhoneNum(val) {
    const globalRegex = /^\d{2,3}-\d{6,8}$/gm;
    return globalRegex.test(val);
    }
  },
}
</script>