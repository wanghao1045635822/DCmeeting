<template>
  <div class="center">
    <div class="container-bady">
      <!--        中心介绍-->
      <div class="container-list-meeting glass">
        <div class="selectMeeting">
          <!--          <a-date-picker-->
          <!--            style="width: 200px;"-->
          <!--            @change="createTimeList"-->
          <!--            v-model="meetingDay"-->
          <!--            :disabledDate="(current) => dayjs(current).isBefore(dayjs())"-->
          <!--          />-->
          <!--          年-->
          <div class="year selectMeetingDiv">
            <!--            <a-year-picker-->
            <!--              style="width: 200px;"-->
            <!--              @change="createTimeList"-->
            <!--              v-model="meetingDay"-->
            <!--              :disabledDate="(current) => dayjs(current).isBefore(dayjs())"-->
            <!--            />-->
            <div class="date-text">
              <span class="year-text">{{ year }}年</span>
              <div @click="changeYear('prev')" class="date-img date-img-prev"></div>
              <div @click="changeYear('next')" class="date-img date-img-next"></div>
            </div>
          </div>
          <!--          月-->
          <div class="month selectMeetingDiv">
            <!--            <a-month-picker-->
            <!--              style="width: 200px;"-->
            <!--              @change="createTimeList"-->
            <!--              v-model="meetingDay"-->
            <!--              :disabledDate="(current) => dayjs(current).isBefore(dayjs())"-->
            <!--            />-->
            <div class="date-text">
              <span class="year-text">{{ month }}月</span>
              <div @click="changeMonth('prev')" class="date-img date-img-prev"></div>
              <div @click="changeMonth('next')" class="date-img date-img-next"></div>
            </div>
          </div>
          <!--          日-->
          <div class="day selectMeetingDiv">
            <!--            <a-date-picker-->
            <!--              style="width: 200px;"-->
            <!--              @change="createTimeList"-->
            <!--              v-model="meetingDay"-->
            <!--              :disabledDate="(current) => dayjs(current).isBefore(dayjs())"-->
            <!--            />-->
            <div class="date-text">
              <span class="year-text">{{ day }}日</span>
              <div @click="changeDay('prev')" class="date-img date-img-prev"></div>
              <div @click="changeDay('add')" class="date-img date-img-next"></div>
            </div>
          </div>
        </div>
        <div class="meeting-card"
        >
          <div
              class="meeting-card-info"
              v-for="(item,index) in timeList"
              :key="index"
              :style="{
              color:item.isDisabled?'#AAA49F ':'#000000',
            }"
              :class="{
              'meeting-card-info-disabled': item.type == '0' && item.isDisabled,
              'meeting-card-info-active': item.type == '1',
              'meeting-card-info-selected': item.type == '2',
              'meeting-card-info-no': item.type == '3',
            }"
              @click="cardSelectTime(item,index,$event)"
          >
            {{ item.label }}
          </div>
        </div>
      </div>
      <div class="next-btn" @click="next">下一步</div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import {computed, onBeforeMount, onBeforeUnmount, onMounted, reactive, ref, inject, watch} from "vue";
import {useToggle} from "@vueuse/core";
import lineBg from "@/assets/images/meeting/home/line.png";
import {storeToRefs} from "pinia";
import {useMeetingCenterStore} from "@/store";
import * as Proto from "@/proto/meeting_pb.js";
import {jsCallUE, toFsString} from "@/utils/UEmethod";
import {parseTime} from "@/utils";
import moment from "moment/moment";
import MsgId from "@/proto/msgid_pb.js";
import dayjs from "dayjs";
import {Message} from "@arco-design/web-vue";
import EventBus from "@/utils/EventBus";
import cloneDeep from "lodash/cloneDeep";
import {isArray} from "@/utils/is";
import message from "@arco-design/web-vue/es/message";

let meetingCenterStore = useMeetingCenterStore();
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

const sharedMeetingMethod = inject("sharedMeetingMethod");

let timeList = ref([]);// 时间对象列表
//todo:换成服务器端时间
let currentTime = parseTime(new Date(), "{yyyy}-{mm}-{dd} {hh}:{ii}:{ss}");//获取当前系统时间
// let currentTime = parseTime(meetingCenterStore.serverTime.n64ServerTime * 1000, "{yyyy}-{mm}-{dd} {hh}:{ii}:{ss}");//获取当前系统时间
console.log("当前时间", currentTime);
let year = ref(currentTime.slice(0, 4));
let month = ref(currentTime.slice(5, 7));
let day = ref(currentTime.slice(8, 10));

//使用计算属性保存选择的会议日期
const meetingDay = computed(() => {
  return year.value + "-" + month.value + "-" + day.value;
});

let getRoomList = ref([]);

// 进行解构
const {meetingCenterInfo, meetingRoomList} = storeToRefs(meetingCenterStore);
meetingCenterInfo.value = {
  "meetingCenterId": 1,
  "meetingCenterName": "快来会议中心",
  "createTime": "1722441600",
  "dueTime": "1732982400",
  "defaultMeetingRoomSceneId": 2105,
  "ownerId": 10086,
  "ownerName": "快来集团",
  "ownerIcon": 3
};

meetingRoomList.value = {
  "infosList": [{
    "meetingRoomId": 1,
    "meetingRoomName": "北京厅",
    "meetingRoomScreenshots": 1,
    "createTime": "1672567200",
    "siteType": 1,
    "sceneId": 2101,
    "timeinfosList": [{
      "endtime": "meeting_1729592856",
      "starttime": "1729593000",
      "endtime": "1729602000"
    }, {"meetingId": "meeting_1729592856", "startTime": "1729593000", "endTime": "1729602000"}],
    "seatSpeakerTotalNum": 100,
    "seatATotalNum": 30,
    "seatBTotalNum": 40,
    "seatCTotalNum": 50,
    "audienceAreaNum": 100,
    "screenNumA": 10,
    "screenNumB": 20,
    "screenNumC": 30,
    "screenNumD": 40,
    "advertNum": 10
  }, {
    "meetingRoomId": 2,
    "meetingRoomName": "上海厅",
    "meetingRoomScreenshots": 1,
    "createTime": "1672567200",
    "siteType": 1,
    "sceneId": 2101,
    "sceneKey": 1,
    "seatSpeakerTotalNum": 100,
    "seatATotalNum": 30,
    "seatBTotalNum": 40,
    "seatCTotalNum": 50,
    "audienceAreaNum": 100,
    "screenNumA": 10,
    "screenNumB": 20,
    "screenNumC": 30,
    "screenNumD": 40,
    "advertNum": 10
  }]
};

let selectedStartTime = "";//选择的开始时间
let selectedEndTime = "";//选择的结束时间

// 初始化
function init() {
  getMeetingRoomList();
  // console.log(timeList);

}

watch(
    () => meetingCenterStore.meetingRoomList,
    (newVal, oldVal) => {
      console.log(newVal, "会议室新值变化");
      getRoomList.value = cloneDeep(newVal).infosList;
      createTimeList();
    },
    {
      deep: true,// 开启深度监听
      immediate: false //默认执行一次
    }
);

function changeDay(type) {
  let meetingDayText = meetingDay.value;
//   2024-11-19加一天的计算
  let date = "";
  if (type === "prev") {
    date = dayjs(meetingDayText).subtract(1, "day").format("YYYY-MM-DD");
  } else {
    date = dayjs(meetingDayText).add(1, "day").format("YYYY-MM-DD");
  }
  day.value = date.slice(8, 10);
  month.value = date.slice(5, 7);
  year.value = date.slice(0, 4);
  createTimeList();
}

function changeMonth(type) {
//   2024-11-19加一天的计算
  let meetingDayText = meetingDay.value;
  let date = "";
  if (type === "prev") {
    date = dayjs(meetingDayText).subtract(1, "month").format("YYYY-MM-DD");
  } else {
    date = dayjs(meetingDayText).add(1, "month").format("YYYY-MM-DD");
  }
  day.value = date.slice(8, 10);
  month.value = date.slice(5, 7);
  year.value = date.slice(0, 4);
  createTimeList();
}

function changeYear(type) {
//   2024-11-19加一天的计算
  let meetingDayText = meetingDay.value;
  let date = "";
  if (type === "prev") {
    date = dayjs(meetingDayText).subtract(1, "year").format("YYYY-MM-DD");
  } else {
    date = dayjs(meetingDayText).add(1, "year").format("YYYY-MM-DD");
  }
  day.value = date.slice(8, 10);
  month.value = date.slice(5, 7);
  year.value = date.slice(0, 4);
  createTimeList();
}

// 加连个月时间
function add2Month(dateString) {
  // 创建 Date 对象
  const date = new Date(dateString.replace(" ", "T"));

// 获取当前年份和月份
  let year = date.getFullYear();
  let month = date.getMonth();

// 加两个月
  month += 2;

// 处理月份溢出的情况
  if (month > 11) {
    year += Math.floor(month / 12);
    month = month % 12;
  }

// 设置新的年份和月份
  date.setFullYear(year);
  date.setMonth(month);

// 获取时间戳
  const newTimestamp = date.getTime();

  // console.log(newTimestamp);

  return newTimestamp;
}

// 选择时间 ，仅限当天
function meetingCardSelect(item, index, e) {
  // console.log(e,'e');
  if (!item.isDisabled) {
    console.log(item, "item");
    if (item.type == "0") {
      // 已经选了两个时间点，那么不可以在选择时间点
      if (timeList.value.filter(item => item.type == "1").length < 2) {
        item.type = "1";
        // 如果选择的时间点第二个，那么两个之间的时间点选中
        if (timeList.value.filter(item => item.type == "1").length == 2) {
          let arrIndex = [];
          timeList.value.forEach((item, index) => {
            if (item.type == "1") {
              arrIndex.push(index);
            }
          });
          timeList.value = timeList.value.map((item, index) => {
            if (index > arrIndex[0] && index < arrIndex[1]) {
              item.type = "2";
            }
            return item;
          });
        }
      }
    } else if (item.type == "1") {
      item.type = "0";
      timeList.value = timeList.value.map((item, index) => {
        if (item.type == "2") {
          item.type = "0";
        }
        return item;
      });
    } else if (item.type == "2") {
      // item.type = "0";
    } else if (item.type == "3") {

    }
  }

  //将最终选择的开始时间和结束时间保存在变量中
}

// 获取两点时间间段的时间点
function generateHalfHourIntervals(start: string, end: string): string[] {
  // 时间大小比较
  // console.log(new Date(start).getTime())
  // console.log(new Date(end).getTime())
  let startDate = new Date(start);
  let endDate = new Date(end);
  const intervals: string[] = [];
  if (new Date(start).getTime() > new Date(end).getTime()) {
    startDate = new Date(end);
    endDate = new Date(start);
  }
  while (startDate <= endDate) {
    intervals.push(parseTime(startDate));
    startDate.setMinutes(startDate.getMinutes() + 30);
  }

  return intervals;
}

function readFile(data,item){
  return new Promise((resolve, reject) => {
    try {
      // 判断选择的时间段内是否有时间冲突
      let selectedTimeList = generateHalfHourIntervals(data, meetingDay.value + " " + item.value + ":00");
      let isLockRoomList = [];
      // 判断会议室被占用，不可预约;如果不可用就不允许选择
      let isLockList = [];
      selectedTimeList.map((item, index) => {
        getRoomList.value.forEach(items => {
          // console.log(items);
          if (items.timeinfosList && isArray(items.timeinfosList)) {
            items.timeinfosList.forEach(items2 => {
              // console.log(meetingDayTime > items2.starttime * 1000,'starttime');
              // console.log(meetingDayTime < items2.endtime * 1000,'endtime');
              // console.log(parseTime(new Date(meetingDayTime), "{yyyy}-{mm}-{dd} {hh}:{ii}:{ss}"),'时间');
              // console.log(parseTime(new Date(items2.starttime * 1000), "{yyyy}-{mm}-{dd} {hh}:{ii}:{ss}"),'开始时间');
              // console.log(parseTime(new Date(items2.endtime * 1000), "{yyyy}-{mm}-{dd} {hh}:{ii}:{ss}"),'结束时间');
              if (new Date(item).getTime() > items2.starttime * 1000 && new Date(item).getTime() < items2.endtime * 1000) {
                // console.log(items,'被占用的会议室');
                isLockRoomList.push(items);
              }
            });
          }
        });
        if (isLockRoomList.length === getRoomList.value.length) {
          //会议室被预约，被占用
          isLockList.push(true);
        }
      });
      resolve(isLockList);
    }catch (e){
      reject(e);
    }
  });
}

//选择时间，两个月内
async function cardSelectTime(item, index, e) {
  // 当前区域可选
  if (!item.isDisabled) {
    // console.log(item, "item");
    // console.log(selectedStartTime);
    // console.log(selectedEndTime);
    if (item.type == "0") {
      // 如果没都选，那么可以在选择时间点
      if (!selectedStartTime && !selectedEndTime) {
        item.type = "1";
        selectedStartTime = meetingDay.value + " " + item.value + ":00";
      } else if (selectedStartTime && !selectedEndTime) {
        // 如果选了开始时间，那么可以在选择时间点
        // readFile(selectedStartTime).then((res)=>{
        //   console.log(res);
        // })
        // 判断选择的时间段内是否有时间冲突
        // let isLock = await readFile(selectedStartTime,item);
        // console.log(isLock);
        // console.log('执行回调函数结束')
        // // 判断当前时间是否被占用
        // if(isLock.length>0){
        //   message.normal('会议室该时间段已被占用');
        //   return;
        // }
        item.type = "1";
        selectedEndTime = meetingDay.value + " " + item.value + ":00";
      } else if (!selectedStartTime && selectedEndTime) {
        // alert('开始时间' + meetingDay.value + item.value)
        // 如果选了结束时间，那么可以在选择时间点
        // 判断选择的时间段内是否有时间冲突
        // let isLock = await readFile(selectedEndTime,item);
        // console.log(isLock);
        // console.log('执行回调函数结束')
        // // 判断当前时间是否被占用
        // if(isLock.length>0){
        //   message.normal('会议室该时间段已被占用');
        //   return;
        // }

        item.type = "1";
        selectedStartTime = meetingDay.value + " " + item.value + ":00";
      } else if (selectedStartTime && selectedEndTime) {
        return;
      }
    } else if (item.type == "1") {
      // 如果点击的是已选时间，那么可以取消选择
      if (selectedStartTime == meetingDay.value + " " + item.value + ":00") {
        item.type = "0";
        selectedStartTime = "";
      } else if (selectedEndTime == meetingDay.value + " " + item.value + ":00") {
        item.type = "0";
        selectedEndTime = "";
      }
    } else if (item.type == "2") {
      // item.type = "0";
    } else if (item.type == "3") {

    }
    // 计算下时间，开始时间<结束时间
    if (new Date(selectedStartTime).getTime() > new Date(selectedEndTime).getTime()) {
      let newEndTime = selectedStartTime;
      let newStartTime = selectedEndTime;
      selectedEndTime = newEndTime;
      selectedStartTime = newStartTime;
    }
    createTimeList();
  }
}


// 构建会议时间列表
function createTimeList() {
  // console.log(meetingDay.value, "选择的日期");
  // console.log(currentTime);
  timeList.value = generateTimes().map((item, index) => {
    // 判断在当前时间之前禁用
    let isDisabled = false;
    let type = "0";
    let meetingDayTime = new Date(meetingDay.value + " " + item + ":00").getTime();
    if (
        meetingDayTime < new Date(currentTime).getTime()
    ) {
      isDisabled = true;
    }
    // 在当前时间两个月之后禁用
    if (
        meetingDayTime > add2Month(currentTime)
    ) {
      isDisabled = true;
    }
    // 判断已选时间段
    if (selectedStartTime == meetingDay.value + " " + item + ":00") {
      type = "1";//开始和结束时间
    } else if (selectedEndTime == meetingDay.value + " " + item + ":00") {
      type = "1";//开始和结束时间
    } else if (
        meetingDayTime > new Date(selectedStartTime).getTime() &&
        meetingDayTime < new Date(selectedEndTime).getTime()
    ) {
      type = "2";//已选时间段
    }
    // 判断会议室被占用，不可预约
    let isLockRoomList = [];
    getRoomList.value.forEach(items => {
      // console.log(items);
      if (items.timeinfosList && isArray(items.timeinfosList)) {
        items.timeinfosList.forEach(items2 => {
          // console.log(meetingDayTime > items2.starttime * 1000,'starttime');
          // console.log(meetingDayTime < items2.endtime * 1000,'endtime');
          // console.log(parseTime(new Date(meetingDayTime), "{yyyy}-{mm}-{dd} {hh}:{ii}:{ss}"),'时间');
          // console.log(parseTime(new Date(items2.starttime * 1000), "{yyyy}-{mm}-{dd} {hh}:{ii}:{ss}"),'开始时间');
          // console.log(parseTime(new Date(items2.endtime * 1000), "{yyyy}-{mm}-{dd} {hh}:{ii}:{ss}"),'结束时间');
          if (meetingDayTime > items2.starttime * 1000 && meetingDayTime < items2.endtime * 1000) {
            // console.log(items,'被占用的会议室');
            isLockRoomList.push(items);
          }
        });
      }
    });
    if (isLockRoomList.length === getRoomList.value.length) {
      type = "3";//会议室被预约，被占用
    }

    // 字符串截取
    return {
      isDisabled: isDisabled,
      label: item.slice(0, 1) == 0 ? item.slice(1, 5) : item,
      value: item,
      type: type//0:未约的时间； 1:开始和结束时间；2：已选时间段；3：会议室被预约，被占用；
    };
  });
  // console.log(timeList.value);
  // getRoomList.value.forEach(items => {
  //   // console.log(items);
  //   if(items.timeinfosList && isArray(items.timeinfosList)){
  //     items.timeinfosList.forEach(items2 => {
  //       console.log(parseTime(new Date(items2.starttime * 1000), "{yyyy}-{mm}-{dd} {hh}:{ii}:{ss}"),'开始时间');
  //       console.log(parseTime(new Date(items2.endtime * 1000), "{yyyy}-{mm}-{dd} {hh}:{ii}:{ss}"),'结束时间');
  //     });
  //   }
  // });
}


// 生成时间段
function generateTimes() {
  const times = [];
  let currentHour = 0;
  let currentMinute = 0;

  while (currentHour < 24 || (currentHour === 23 && currentMinute <= 30)) {
    // 格式化时间为 HH:mm
    const formattedTime = `${String(currentHour).padStart(2, "0")}:${String(currentMinute).padStart(2, "0")}`;
    times.push(formattedTime);

    // 增加 30 分钟
    currentMinute += 30;
    if (currentMinute >= 60) {
      currentMinute -= 60;
      currentHour += 1;
    }
  }

  return times;
}

function next() {
  if (selectedStartTime && selectedEndTime) {
    sharedMeetingMethod("meetingRoom");
    EventBus.emit("getRoomFun", {
      startTime: selectedStartTime,
      endTime: selectedEndTime
    });
    // let startTime = timeList.value.filter(item => item.type == "1")[0].value;
    // let endTime = timeList.value.filter(item => item.type == "1")[1].value;
    // // 转成是时间戳格式
    // // new Date(meetingDay.value + " " + startTime + ":00").getTime();
    // // new Date(meetingDay.value + " " + endTime + ":00").getTime();
    // console.log(startTime, endTime);
    // console.log(meetingDay.value + " " + startTime + ":00", meetingDay.value + " " + endTime + ":00");
    // sharedMeetingMethod("meetingRoom");
    // EventBus.emit("getRoomFun", {
    //   startTime: meetingDay.value + " " + startTime + ":00",
    //   endTime: meetingDay.value + " " + endTime + ":00"
    // });


  } else {
    // Message.normal({
    //   content: `请选择会议时间`,
    //   // duration: 100000
    // });
    Message.normal("请选择会议时间");
  }

}


// 请求会议室列表
const getMeetingRoomList = (data) => {
  // console.log(MsgId.C2S_GET_MEETING_ROOM_LIST_REQ, "会议室信息列表Id");
  // 请求会议中心信息
  let InfoReq = new Proto.default.C2SGetMeetingRoomListReq();
  InfoReq.setMeetingcenterid(2100);
  InfoReq.setMeetingcenterkey(0);
  // InfoReq.setStarttime(2);
  // InfoReq.setEndtime(3);
  // 序列化
  const bytes = InfoReq.serializeBinary();

  console.log("请求会议室列表 data:", bytes);

  const userDeserialized = Proto.default.C2SGetMeetingRoomListReq.deserializeBinary(bytes);
  console.log("Deserialized data:", userDeserialized.toObject());

  jsCallUE(MsgId.C2S_GET_MEETING_ROOM_LIST_REQ, bytes);
};

onBeforeMount(() => {
  init();
});
onMounted(() => {

});
onBeforeUnmount(() => {

});

</script>

<style scoped lang="less">
.center {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;

  .container-bady {
    width: 100%;
    height: 96vh;
    margin-top: 1vh;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 和 Edge */
    overflow: hidden;

    .container-list-meeting {
      width: 90%;
      padding: 2vw;
      margin: 0 auto;

      .selectMeeting {
        width: 100%;
        margin-bottom: 2vh;
        display: flex;
        justify-content: space-around;
        //.selectMeetingDiv{
        //  width: 30%;
        //}
        .date-text {
          width: 12rem;
          height: 2.2rem;
          background-color: #000000;
          color: #FFFFFF;
          text-align: center;
          line-height: 2.2rem;
          position: relative;
          font-size: 1.2rem;

          .date-img {
            width: 2.2rem;
            height: 100%;
            position: absolute;
            top: 0;
            z-index: 999;
            cursor: pointer;
          }

          .date-img-prev {
            left: -1rem;
            background-image: url("@/assets/images/meeting/meeting/application/prev.png");
            background-size: cover;
          }

          .date-img-next {
            right: -1rem;
            background-image: url("@/assets/images/meeting/meeting/application/next.png");
            background-size: cover;
          }

          .date-img-prev:active {
            background-image: url("@/assets/images/meeting/meeting/application/prev1.png");
            background-size: cover;
          }

          .date-img-next:active {
            background-image: url("@/assets/images/meeting/meeting/application/next1.png");
            background-size: cover;
          }
        }
      }

      .meeting-card {
        width: 100%;
        //height: 60vh;
        //margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        align-content: center;
        cursor: pointer;
        border-radius: 0.6rem;
        overflow: hidden;

        .meeting-card-info {
          width: 12.5%;
          height: 10.5vh;
          //margin: 0 auto;
          color: #000000;
          background-color: #FFFFFF;
          border-right: 1px solid #DCDFE6;
          border-bottom: 1px solid #DCDFE6;
          text-align: center;
          line-height: 9.4vh;
        }

        //点击时间框背景
        .meeting-card-info-disabled {
          background-color: #F2F2F3;
        }

        //点击时间框背景
        .meeting-card-info-active {
          background-color: #FCFBE9;
        }

        //两个选中的时间框背景
        .meeting-card-info-selected {
          background-color: #E1EBFC;
        }

        //已经约的时间框背景
        .meeting-card-info-no {
          background-color: #edc8dd;
        }
      }
    }

    .next-btn {
      width: 8rem;
      height: 3rem;
      //background-color: #8c8c8c;
      float: right;
      margin-top: 2vh;
      margin-right: 20vw;
      background-image: url("@/assets/images/meeting/meeting/application/next-btn.png");
      background-size: 100% 100%;
      text-align: center;
      line-height: 3rem;
      color: #FFFFFF;
      cursor: pointer;
    }

    .next-btn:active {
      background-image: url("@/assets/images/meeting/meeting/application/next-btn1.png");
      background-size: 100% 100%;
      border: 1px solid transparent;
      border-bottom: none;
    }
  }
}

:deep(.arco-card-body) {
  width: 100%;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
</style>
