<template>
  <div class="container-today">
    <!--        数据统计-->
    <div class="container-list-meeting">

    </div>
  </div>

</template>

<script lang="ts" setup>
import { onBeforeMount, onBeforeUnmount, onMounted, reactive, ref } from "vue";
import { useToggle } from "@vueuse/core";
import { Message } from "@arco-design/web-vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  defaultValue: {
    type: Boolean,
    default: false
  }
});


// // 封装 JSON 对象为 Protobuf 消息
// import * as Proto from "@/proto/meeting_pb.js"; // 引入生成的 protobuf 类
//
// // 假设这是你的 JSON 对象
// const jsonMeeting = {
//   meeting_id: 1,
//   meeting_name: "从NFC迈向元宇宙",
//   start_time: 1633072800000,
//   end_time: 1633076400000,
//   meeting_info: {
//     room_id: 101,
//     room_name: "主会议室",
//     capacity: 50,
//     features: [
//       { name: "投影仪", available: true },
//       { name: "音响系统", available: false }
//     ]
//   },
//   participants: [
//     { name: "张三", role: "主持人" },
//     { name: "李四", role: "参与者" }
//   ]
// };
//
// // 创建 Protobuf 消息实例
// const meetingInfo = new Proto.MeetingInfo();
//
// // 设置顶级字段
// meetingInfo.setMeetingid(jsonMeeting.meeting_id);
// meetingInfo.setMeetingname(jsonMeeting.meeting_name);
// meetingInfo.setStarttime(jsonMeeting.start_time);
// meetingInfo.setEndtime(jsonMeeting.end_time);
//
// // 创建并设置嵌套的 RoomInfo 消息
// const roomInfo = new Proto.RoomInfo();
// roomInfo.setRoomid(jsonMeeting.meeting_info.room_id);
// roomInfo.setRoomname(jsonMeeting.meeting_info.room_name);
// roomInfo.setCapacity(jsonMeeting.meeting_info.capacity);
//
// // 创建并设置嵌套的 Feature 消息
// const features = jsonMeeting.meeting_info.features.map(feature => {
//   const featureMsg = new Proto.Feature();
//   featureMsg.setName(feature.name);
//   featureMsg.setAvailable(feature.available);
//   return featureMsg;
// });
// roomInfo.setFeaturesList(features);
//
// // 设置 RoomInfo 到 MeetingInfo
// meetingInfo.setMeetinginfo(roomInfo);
//
// // 创建并设置嵌套的 Participant 消息
// const participants = jsonMeeting.participants.map(participant => {
//   const participantMsg = new Proto.Participant();
//   participantMsg.setName(participant.name);
//   participantMsg.setRole(participant.role);
//   return participantMsg;
// });
// meetingInfo.setParticipantsList(participants);
//
// // 序列化消息
// const bytes = meetingInfo.serializeBinary();
//
// console.log("序列化后的二进制数据:", bytes);




onBeforeMount(() => {
  Message.normal("《从NFC迈向元宇宙》已提交会议申请");
  setTimeout(() => {
    router.push("/DCMeeting");
  }, 3000);
});
onMounted(() => {

});
onBeforeUnmount(() => {

});

</script>

<style scoped lang="less">
.container-today {
  width: 96%;
  height: 90%;
  margin-top: 2%;
  overflow: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 和 Edge */

  .container-list-meeting {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .meeting-card {
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
