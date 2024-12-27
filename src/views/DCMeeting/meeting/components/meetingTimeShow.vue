<template>
  <div class="container-left-banner-down">
    <div class="container-left-banner-down-date">{{ startDay }}-{{ endDay }}</div>
    <div class="container-left-banner-down-time">{{ startTime }}-{{ endTime }}</div>
  </div>
</template>

<script lang="ts" setup>
import { inject, nextTick, onBeforeMount, onBeforeUnmount, onMounted, reactive, ref, watch } from "vue";
import { useToggle } from "@vueuse/core";
import * as Proto from "@/proto/meeting_pb.js";
import { jsCallUE, toFsString } from "@/utils/UEmethod";
import { storeToRefs } from "pinia";
import { useMeetingCenterStore } from "@/store";
import MsgId from "@/proto/msgid_pb.js";
import EventBus from "@/utils/EventBus";
import { formatDate } from "@/utils/index.ts";

let startDay = ref("");
let endDay = ref("");
let startTime = ref("");
let endTime = ref("");


onBeforeMount(() => {


});
onMounted(() => {
  EventBus.on("getRoomFun", (data) => {
    // getMeetingRoomList();
    console.log(data, "传来的会议时间");
    startDay.value = formatDate(new Date(data.startTime));
    endDay.value = formatDate(new Date(data.endTime));
    startTime.value = data.startTime.substring(11, 16);
    endTime.value = data.endTime.substring(11, 16);
  });
});
onBeforeUnmount(() => {
  EventBus.off("getRoomFun");
});

</script>

<style scoped lang="less">
.container-left-banner-down {
  width: 100%;
  height: 10vh;
  position: absolute;
  left: 0;
  bottom: 1.6vh;
  //padding-right: 1vw;
  justify-content: center;
  color: #FFFFFF;

  .container-left-banner-down-date {
    margin-top: 1.4vh;
    text-align: center;
    font-size: 0.8rem;
  }

  .container-left-banner-down-time {
    margin-top: 1vh;
    font-size: 1.4rem;
    font-weight: 900;
    text-align: center;
  }
}

</style>
