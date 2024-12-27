<template>
  <div class="container-today">
    <!--        数据统计-->
    <div class="container-list-meeting">
      <a-card hoverable class="meeting-card"
              v-for="(item) in meetingRoomList"
              :key="item.meetingRoomId"
      >
        <template #cover>
          <div
            :style="{
                    overflow: 'hidden',
                  }"
          >
            <img
              :style="{ width: '100%', height: '20vh', transform: 'translateY(-20px)' }"
              alt="dessert"
              src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
            />
          </div>
        </template>
      </a-card>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { onBeforeMount, onBeforeUnmount, onMounted, reactive, ref } from "vue";
  import { useToggle } from '@vueuse/core';

  const props = defineProps({
    loading: {
      type: Boolean,
      default: false,
    },
    defaultValue: {
      type: Boolean,
      default: false,
    },
  });

  let meetingRoomListData = reactive(JSON.parse('{\n' +
    '    "infos": [\n' +
    '        {\n' +
    '            "meetingRoomId": 1,\n' +
    '            "meetingRoomName": "鍖椾含鍘�",\n' +
    '            "meetingRoomScreenshots": 1,\n' +
    '            "createTime": "1672567200",\n' +
    '            "siteType": 1,\n' +
    '            "sceneId": 2101,\n' +
    '            "timeInfos": [\n' +
    '                {\n' +
    '                    "meetingId": "meeting_1729592856",\n' +
    '                    "startTime": "1729593000",\n' +
    '                    "endTime": "1729602000"\n' +
    '                },\n' +
    '                {\n' +
    '                    "meetingId": "meeting_1729592856",\n' +
    '                    "startTime": "1729593000",\n' +
    '                    "endTime": "1729602000"\n' +
    '                },\n' +
    '                {\n' +
    '                    "meetingId": "meeting_1729592856",\n' +
    '                    "startTime": "1729593000",\n' +
    '                    "endTime": "1729602000"\n' +
    '                }\n' +
    '            ],\n' +
    '            "seatSpeakerTotalNum": 100,\n' +
    '            "seatATotalNum": 30,\n' +
    '            "seatBTotalNum": 40,\n' +
    '            "seatCTotalNum": 50,\n' +
    '            "audienceAreaNum": 100,\n' +
    '            "screenNumA": 10,\n' +
    '            "screenNumB": 20,\n' +
    '            "screenNumC": 30,\n' +
    '            "screenNumD": 40,\n' +
    '            "advertNum": 10\n' +
    '        },\n' +
    '        {\n' +
    '            "meetingRoomId": 2,\n' +
    '            "meetingRoomName": "涓婃捣鍘�",\n' +
    '            "meetingRoomScreenshots": 1,\n' +
    '            "createTime": "1672567200",\n' +
    '            "siteType": 1,\n' +
    '            "sceneId": 2101,\n' +
    '            "sceneKey": 1,\n' +
    '            "seatSpeakerTotalNum": 100,\n' +
    '            "seatATotalNum": 30,\n' +
    '            "seatBTotalNum": 40,\n' +
    '            "seatCTotalNum": 50,\n' +
    '            "audienceAreaNum": 100,\n' +
    '            "screenNumA": 10,\n' +
    '            "screenNumB": 20,\n' +
    '            "screenNumC": 30,\n' +
    '            "screenNumD": 40,\n' +
    '            "advertNum": 10\n' +
    '        },\n' +
    '        {\n' +
    '            "meetingRoomId": 3,\n' +
    '            "meetingRoomName": "姝︽眽鍘�",\n' +
    '            "meetingRoomScreenshots": 1,\n' +
    '            "createTime": "1672567200",\n' +
    '            "siteType": 1,\n' +
    '            "sceneId": 2101,\n' +
    '            "sceneKey": 2,\n' +
    '            "seatSpeakerTotalNum": 100,\n' +
    '            "seatATotalNum": 30,\n' +
    '            "seatBTotalNum": 40,\n' +
    '            "seatCTotalNum": 50,\n' +
    '            "audienceAreaNum": 100,\n' +
    '            "screenNumA": 10,\n' +
    '            "screenNumB": 20,\n' +
    '            "screenNumC": 30,\n' +
    '            "screenNumD": 40,\n' +
    '            "advertNum": 10\n' +
    '        },\n' +
    '        {\n' +
    '            "meetingRoomId": 4,\n' +
    '            "meetingRoomName": "鎴愰兘鍘�",\n' +
    '            "meetingRoomScreenshots": 1,\n' +
    '            "createTime": "1672567200",\n' +
    '            "siteType": 1,\n' +
    '            "sceneId": 2101,\n' +
    '            "sceneKey": 3,\n' +
    '            "seatSpeakerTotalNum": 100,\n' +
    '            "seatATotalNum": 30,\n' +
    '            "seatBTotalNum": 40,\n' +
    '            "seatCTotalNum": 50,\n' +
    '            "audienceAreaNum": 100,\n' +
    '            "screenNumA": 10,\n' +
    '            "screenNumB": 20,\n' +
    '            "screenNumC": 30,\n' +
    '            "screenNumD": 40,\n' +
    '            "advertNum": 10\n' +
    '        },\n' +
    '        {\n' +
    '            "meetingRoomId": 5,\n' +
    '            "meetingRoomName": "娣卞湷鍘�",\n' +
    '            "meetingRoomScreenshots": 1,\n' +
    '            "createTime": "1672567200",\n' +
    '            "siteType": 1,\n' +
    '            "sceneId": 2101,\n' +
    '            "sceneKey": 4,\n' +
    '            "seatSpeakerTotalNum": 100,\n' +
    '            "seatATotalNum": 30,\n' +
    '            "seatBTotalNum": 40,\n' +
    '            "seatCTotalNum": 50,\n' +
    '            "audienceAreaNum": 100,\n' +
    '            "screenNumA": 10,\n' +
    '            "screenNumB": 20,\n' +
    '            "screenNumC": 30,\n' +
    '            "screenNumD": 40,\n' +
    '            "advertNum": 10\n' +
    '        },\n' +
    '        {\n' +
    '            "meetingRoomId": 7,\n' +
    '            "meetingRoomName": "娣卞湷鍘�",\n' +
    '            "meetingRoomScreenshots": 1,\n' +
    '            "createTime": "1672567200",\n' +
    '            "siteType": 1,\n' +
    '            "sceneId": 2101,\n' +
    '            "sceneKey": 4,\n' +
    '            "seatSpeakerTotalNum": 100,\n' +
    '            "seatATotalNum": 30,\n' +
    '            "seatBTotalNum": 40,\n' +
    '            "seatCTotalNum": 50,\n' +
    '            "audienceAreaNum": 100,\n' +
    '            "screenNumA": 10,\n' +
    '            "screenNumB": 20,\n' +
    '            "screenNumC": 30,\n' +
    '            "screenNumD": 40,\n' +
    '            "advertNum": 10\n' +
    '        },\n' +
    '        {\n' +
    '            "meetingRoomId": 6,\n' +
    '            "meetingRoomName": "閲嶅簡鍘�",\n' +
    '            "meetingRoomScreenshots": 1,\n' +
    '            "createTime": "1672567200",\n' +
    '            "siteType": 1,\n' +
    '            "sceneId": 2101,\n' +
    '            "sceneKey": 5,\n' +
    '            "seatSpeakerTotalNum": 100,\n' +
    '            "seatATotalNum": 30,\n' +
    '            "seatBTotalNum": 40,\n' +
    '            "seatCTotalNum": 50,\n' +
    '            "audienceAreaNum": 100,\n' +
    '            "screenNumA": 10,\n' +
    '            "screenNumB": 20,\n' +
    '            "screenNumC": 30,\n' +
    '            "screenNumD": 40,\n' +
    '            "advertNum": 10\n' +
    '        }\n' +
    '    ]\n' +
    '}'));// 请求会议室信息列表
  // console.log(meetingRoomListData, 'meetingRoomListData');
  let meetingRoomList = ref([]);
  meetingRoomList.value = meetingRoomListData.infos;
  // console.log(meetingRoomList, 'meetingRoomList');

  onBeforeMount(()=>{

  })
  onMounted(()=>{

  })
  onBeforeUnmount(()=>{

  })

</script>

<style scoped lang="less">
.container-today {
  width: 96%;
  height: 90%;
  margin-top: 2%;
  overflow: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 和 Edge */
  .container-list-meeting{
    width: 100%;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .meeting-card{
      width: 28%;
      height: 36vh;
      margin: 2.6vh 0;
    }
  }
}
.container-today::-webkit-scrollbar {
  width: 0; /* Safari 和 Chrome */
}
</style>
