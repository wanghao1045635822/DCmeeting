<template>
  <div ref="refModal" class="container">
    <a-modal
        v-model:visible="visible"
        @ok="handleOk"
        @cancel="handleCancel"
        @before-open="handleOpen"
        :hide-title="false"
        :mask-closable="true"
        :fullscreen="false"
        :footer="false"
        width="60vw"
        :render-to-body="false"
    >
      <template #title>
        <div class="title">预约会议</div>
      </template>
      <!--      <div class="title">预约会议</div>-->
      <div class="body">
        <!--        <span>-->
        <!--          <a-button type="primary" shape="circle">-->
        <!--            <template #icon>-->
        <!--              <img src="@/assets/images/office/sx.png" alt="">-->
        <!--            </template>-->
        <!--          </a-button>-->
        <!--          <a-button type="text" shape="circle" style="margin-left: 1vw;">-->
        <!--            <template #icon>-->
        <!--              <img src="@/assets/images/office/yy.png" alt="">-->
        <!--            </template>-->
        <!--          </a-button>-->
        <!--        </span>-->
        <!--        <a-button type="primary">-->
        <!--          复制邀请信息-->
        <!--        </a-button>-->
        <!--        <a-button type="primary">-->
        <!--          添加参会人-->
        <!--        </a-button>-->
        <!--        <a-button type="primary">-->
        <!--          进入会议-->
        <!--        </a-button>-->
        <a-form
            :model="ruleForm"
            ref="formRef"
            class="custom-form"
            :label-col-props="{ span: 4 }"
            :wrapper-col-props="{ span: 19 }"
            label-align="right"
        >
          <a-form-item field="meetingName" label="会议名称">
            <a-input v-model="ruleForm.name" placeholder="输入会议标题" :max-length="100"/>
          </a-form-item>
          <a-form-item field="name" label="开始时间">
            <a-date-picker style="width: 11vw;" v-model="ruleForm.startDay" :allow-clear="false"/>
            <a-select :style="{width:'8vw',marginLeft:'1vw'}" placeholder="请选择 ..." v-model="ruleForm.startTime">
              <a-option v-for="item in timeArray" :key="item.value" :value="item.value">
                {{ item.name }}
              </a-option>
            </a-select>
          </a-form-item>
          <!--          <a-form-item field="name" label="时长">-->
          <!--            <a-select :style="{width:'11vw'}" placeholder="请选择 ..." v-model="ruleForm.duration"-->
          <!--                      @change="durationChange">-->
          <!--              <a-option v-for="item in timeStringList" :key="item.value" :value="item.value">-->
          <!--                {{ item.label }}-->
          <!--              </a-option>-->
          <!--            </a-select>-->
          <!--          </a-form-item>-->
          <a-form-item field="name" label="结束时间">
            <a-date-picker style="width: 11vw;" v-model="ruleForm.startDay" :allow-clear="false"/>
            <a-select :style="{width:'8vw',marginLeft:'1vw'}" placeholder="请选择 ..." v-model="ruleForm.endTime">
              <a-option v-for="item in timeArray" :key="item.value" :value="item.value">
                {{ item.name }}
              </a-option>
            </a-select>
          </a-form-item>
          <a-form-item field="name" label="重复">
            <a-select :style="{width:'11vw'}" placeholder="请选择 ..." v-model="ruleForm.routineType">
              <a-option v-for="item in repeatList" :key="item.value" :value="item.value">
                {{ item.label }}
              </a-option>
            </a-select>
          </a-form-item>
          <a-form-item field="name" label="会议主题">
            <a-select :style="{width:'11vw'}" placeholder="请选择 ..." v-model="ruleForm.unitId">
              <a-option v-for="item in companyList" :key="item.value" :value="item.value">
                {{ item.label }}
              </a-option>
            </a-select>
          </a-form-item>
          <a-form-item field="name" label="会议类型">
            <a-select :style="{width:'11vw'}" placeholder="请选择 ..." v-model="ruleForm.type">
              <a-option v-for="item in typeList" :key="item.value" :value="item.value">
                {{ item.label }}
              </a-option>
            </a-select>
          </a-form-item>
          <a-form-item field="name" label="邀请成员">
            <a-button type="primary" shape="round" class="custom-button" :size="'mini'" @click="invite">邀请</a-button>
          </a-form-item>
          <a-form-item field="name" label="安全">
<!--            <div class="custom-checkbox">-->
<!--              <a-checkbox-group v-model="ruleForm.isPassword">-->
<!--                <a-checkbox :value="1">入会密码</a-checkbox>-->
<!--              </a-checkbox-group>-->
<!--              <div style="width: 20rem;margin-top: 10px;" v-if="ruleForm.isPassword[0] == 1">-->
<!--                <a-input v-model="ruleForm.password"  placeholder="请输入4-6位数字密码" :max-length="6"/>-->
<!--              </div>-->
<!--            </div>-->
            <div class="Safety">
              <div><a-switch :size="'small'" v-model="ruleForm.isPassword" />  入会密码</div>
              <div style="width: 20rem;margin-top: 1vh;" v-if="ruleForm.isPassword">
                <a-input v-model="ruleForm.password"  placeholder="请输入4-6位数字密码" :max-length="6"/>
              </div>
              <div style="margin-top: 1vh;"><a-switch :size="'small'" v-model="ruleForm.isPassword" />  开启等候室</div>
              <div style="margin-top: 1vh;"><a-switch :size="'small'" v-model="ruleForm.allowEnter" />  允许成员在主持人进会前加入会议</div>
            </div>

          </a-form-item>
          <a-form-item field="name" label="静音">
            <div class="custom-checkbox">
              <div>成员入会时静音</div>
              <a-space size="large" style="margin-top: 10px;">
                <a-radio-group v-model="ruleForm.mute">
                  <a-radio value="1">开启</a-radio>
                  <a-radio value="2">关闭</a-radio>
                  <a-radio value="3">超过6个人自动开启</a-radio>
                </a-radio-group>
              </a-space>
            </div>
          </a-form-item>
          <a-form-item field="name" label="录制">
            <div class="Safety" style="margin-top: 0">
              <div><a-switch :size="'small'" v-model="ruleForm.isPassword" />  自动录制</div>
            </div>
          </a-form-item>
<!--          <a-form-item field="name" label="设置">-->
<!--            <div class="custom-checkbox">-->
<!--              <a-checkbox-group v-model="ruleForm.sceneRule.isRun">-->
<!--                <a-checkbox :value="1">演讲者投屏权限</a-checkbox>-->
<!--              </a-checkbox-group>-->
<!--              <a-checkbox-group v-model="ruleForm.speechRule.isSpeakerVote">-->
<!--                <a-checkbox :value="1">演讲者发起投票权限</a-checkbox>-->
<!--              </a-checkbox-group>-->
<!--              <a-checkbox-group v-model="ruleForm.speechRule.isBanSpeak">-->
<!--                <a-checkbox :value="1">禁止发言</a-checkbox>-->
<!--              </a-checkbox-group>-->
<!--              <a-checkbox-group v-model="ruleForm.speechRule.isBanTalk">-->
<!--                <a-checkbox :value="1">禁止聊天</a-checkbox>-->
<!--              </a-checkbox-group>-->
<!--              <a-checkbox-group v-model="ruleForm.speechRule.isBanGift">-->
<!--                <a-checkbox :value="1">禁止送礼</a-checkbox>-->
<!--              </a-checkbox-group>-->
<!--            </div>-->
<!--          </a-form-item>-->
        </a-form>
      </div>
<!--      <voting-pop ref="popUpsRefs"></voting-pop>-->
      <pop-ups ref="popUpsRefs"></pop-ups>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import {ref, reactive, watch, onBeforeMount, onMounted, onBeforeUnmount, inject} from "vue";
import {jsCallUE} from "@/utils/UEmethod";
import MsgId from "@/proto/msgid_pb.js";
import {useMeetingCenterStore} from "@/store";
import {useRouter} from "vue-router";
import {parseTime} from "@/utils";
import message from "@arco-design/web-vue/es/message";
import {Message} from "@arco-design/web-vue";
import {Organization} from "@/api/authority";
import PopUps from '@/components/popUps/index.vue';

const router = useRouter();
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

let curentTime = parseTime(new Date(), '{yyyy}-{mm}-{dd} {hh}:{ii}:{ss}');
console.log(curentTime, '当前时间')
let popUpsRefs = ref(null);
let timeStringList = ref([
  {
    value: '15',
    label: '15分钟',
    isDisabled: true
  },
  {
    value: '30',
    label: '30分钟',
    isDisabled: true
  },
  {
    value: '45',
    label: '45分钟',
    isDisabled: true
  },
  {
    value: '60',
    label: '1小时',
    isDisabled: true
  },
  {
    value: '120',
    label: '2小时',
    isDisabled: true
  },
  {
    value: '180',
    label: '3小时',
    isDisabled: true
  }, {
    value: '1000',
    label: '选择结束时间',
    isDisabled: false
  },


]);
let repeatList = ref([
  {
    value: '1',
    label: '不重复',
    isDisabled: true
  },
  {
    value: '2',
    label: '每天',
    isDisabled: true
  },
  {
    value: '3',
    label: '自定义',
    isDisabled: true
  },


]);
let companyList = ref([
  {
    value: '1',
    label: '快来元宇宙',
    isDisabled: true
  },
  {
    value: '2',
    label: '元知科技',
    isDisabled: true
  },
  {
    value: '3',
    label: '全界科技',
    isDisabled: true
  },

]);
let typeList = ref([
  {
    value: '1',
    label: '视频会议',
    isDisabled: true
  },
  {
    value: '2',
    label: '本地会议',
    isDisabled: true
  },

]);

let ruleForm = reactive({
  name: '', //会议名称
  mainGwType: '', //中心会议类型
  type: '1', //会议类型
  routineType: '1', //会议模式
  routineTypeYue: '01', //每月天数
  routineCount: '2', //会议次数
  sTime: '', //封装的开始时间
  eTime: '', //封装的结束时间
  nowTime: '', // 当前时间
  startTime: '', // 开始会议时间
  startDay: parseTime(new Date(), '{yyyy}-{mm}-{dd}'), // 开始会议时间-日期
  startHour: '', // 开始会议时间-小时
  startMinute: '', // 开始会议时间-分钟
  endTime: '', // 结束会议时间
  endDay: parseTime(new Date(), '{yyyy}-{mm}-{dd}'), // 结束会议时间-日期
  endHour: '', // 结束会议时间-小时
  endMinute: '', // 结束会议时间-分钟
  ownerUnitId: '', //组织单位
  ownerUnitName: '', //组织单位名称
  duration: '30',//时长
  durationSave: '30',//时长
  unitId: '1', //预约人单位id
  userId: '', //预约人用户 id
  subject: '', //会议主题
  ownerId: '', //会议持有者（默认当前登录用户）
  epCount: '', //会议数量
  timeDelay: 10, //初始化系统时间时候，当前时间往后退的时间
  selectRoom: [], //本地会议室集合
  selectRoomList: [], //视频会议室集合
  selectRoomName: '', //会议室名称
  selectGwTypeList: [], //选择的会议品牌集合
  selectGwTypeMainList: [], //选择的中心会议品牌集合
  attenders: [], //参会人列表
  attendersObj: [], //参会人对象列表
  cfeNotifyTypes: [], //通知方式
  isPassword: false, //会议密码是否使用
  allowEnter: true, //会议密码是否使用
  password: '', //会议密码
  enableLiveType: false, //会议直播
  livePassword: '', //直播密码
  enableRecordType: false, //会议录播
  mute: '1', //会议静音
  epMain: '',
  epsSpeaker: [],
  epsFollow: [],
  epsLoopMain: [],
  epsLoopSub: [],
  // 场景
  sceneRule: {
    isRun: [],							 // 是否能跑 0.否 1.是
    isJump: [],								// 是否能跳 0.否 1.是
    isFormalWear: [],							// 是否正装 0.否 1.是
    isMask: [],								// 是否面具 0.否 1.是
    isAudienceAreaLimit: [],					// 是否观众区区域限定 0.否 1.是
    isEnterSpeechArea: [],					// 是否不能进入演讲区 0.否 1.是
    isMeetingStartCanMove: []				// 是否会议开始不能走动 0.否 1.是
  },
  // 演讲
  speechRule: {
    getType: 1,							// 获取条件 1.邀请 2.申请 3.售卖
    price: "20",								// 价格
    isSpeakerForScreen: [],					// 是否演讲者投屏权限 0.否 1.是
    isSpeakerVote: [],						// 是否演讲者发起投票权限 0.否 1.是
    isBanSpeak: [],							// 是否禁止发言 0.否 1.是
    isBanTalk: [],							// 是否禁止聊天 0.否 1.是
    isBanGift: []						// 是否禁止送礼 0.否 1.是
  }
})

const visible = ref(false);
const endTimVisible = ref(false);

function generateTimeArray() {
  const timeArray = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const hourString = hour.toString().padStart(2, '0');
      const minuteString = minute.toString().padStart(2, '0');
      timeArray.push(
          {
            value: `${hourString}:${minuteString}:00`,
            name: `${hourString}:${minuteString}`,
            isDisabled: false
          }
      );
    }
  }
  return timeArray;
}

const timeArray = ref(generateTimeArray());

const handleClick = () => {
  visible.value = true;
};
const handleOk = () => {
  visible.value = false;
};
const handleCancel = () => {
  visible.value = false;
};
const durationChange = (value) => {
  console.log(ruleForm.duration)
  if (ruleForm.duration === '15' || ruleForm.duration === '30' || ruleForm.duration === '45' || ruleForm.duration === '60' || ruleForm.duration === '120' || ruleForm.duration === '180') {
    ruleForm.durationSave = ruleForm.duration;
    endTimVisible.value = false;
  } else {
    ruleForm.duration = ruleForm.durationSave;
    //显示结束时间
    endTimVisible.value = true;
  }
}
// 弹窗弹出
const handleOpen = () => {
//   计算当前开始时间和结束时间
  ruleForm.nowTime = parseTime(new Date(), '{hh}:{ii}:' + '00');
  let now = new Date();
  now.setMinutes(now.getMinutes() + ruleForm.timeDelay);
  now = parseTime(now, '{yyyy}-{mm}-{dd} {hh}:{ii}:' + '00');
  console.log(now);
  //赛选timeArray.value中大于now得第一个时间值
  let timeArrayNew = timeArray.value.find((item, index) => {
    if (now < parseTime(new Date(), '{yyyy}-{mm}-{dd}') + ' ' + item.value) {
      return item
    }
  })
  console.log(timeArrayNew)
  ruleForm.startTime = timeArrayNew.value;
  //ruleForm.startTime + 30分钟
  ruleForm.endTime = parseTime(new Date(new Date(ruleForm.startDay + ' ' + ruleForm.startTime).getTime() + 30 * 60 * 1000), '{hh}:{ii}:' + '00');
  console.log(ruleForm.startTime)
  console.log(ruleForm.endTime)


};

function invite() {
  popUpsRefs.value.visible = true;

}

function init() {

  // console.log(timeArray);

  // console.log(ruleForm.startDay  + ' ' + ruleForm.startTime)


}

defineExpose({visible});

onBeforeMount(() => {
  init()
});
onMounted(() => {

});
onBeforeUnmount(() => {

});
</script>

<style scoped lang="less">
.container {
  .title {
    width: 100%;
    text-align: center;
    color: #FFFFFF;
    font-size: 1.6rem;
    font-weight: 900;
  }

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;

    .meetingNumber {
      width: 60%;
      height: 3rem;
      border-radius: 1.8rem;
    }
  }

  .Employee {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 26vh;
  }

  .body {
    width: 80%;
    height: 60vh;
    //margin-left: 10%;
    //display: flex;
    //justify-content: space-evenly;
    //align-items: center;
    .custom-form {
      /* 自定义样式 */
      //background-color: #f0f2f5;
      padding: 20px;
      border-radius: 8px;
      color: #FFFFFF;

      :deep(.arco-form-item-label-col) {
        color: #FFFFFF;
      }
      .Safety{
        display: flex;
        flex-direction: column;
        margin-top: 4px;
      }
    }
  }

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    margin-top: 3vh;
  }
}


:deep(.arco-modal) {
  /* 设置毛玻璃背景 */
  background-color: rgba(250, 250, 250, 0.3); /* 白色背景，50% 透明度 */
  //background-color: rgba(0, 0, 0, 0.1); /* 白色背景，50% 透明度 */
  backdrop-filter: blur(10px); /* 毛玻璃效果 */
  -webkit-backdrop-filter: blur(10px); /* 兼容 Safari */
  border-radius: 20px;
  overflow: hidden;
  border: none;
}

:deep(.arco-modal-mask) {
  /* 设置毛玻璃背景 */
  //background-color: rgba(0, 0, 0, 0.1); /* 白色背景，50% 透明度 */
  //background-color: rgba(255, 255, 255, 0.5); /* 半透明背景色 */
  //backdrop-filter: blur(10px); /* 毛玻璃效果 */
  //-webkit-backdrop-filter: blur(10px); /* 兼容 Safari */
}

.custom-button {
  font-size: 1rem;
  padding: 0.5rem 1.4rem;
}

//.custom-button:hover {
//  background-color: #c88040; /* 鼠标悬停时的背景颜色 */
//  //border-color: #9F866B; /* 鼠标悬停时的边框颜色 */
//  color: #614B33; /* 自定义文字颜色 */
//}

//.custom-button:active {
//  background-color: #D7C3AB; /* 鼠标悬停时的背景颜色 */
//  //border-color: #D7C3AB; /* 鼠标悬停时的边框颜色 */
//  color: #614B33; /* 自定义文字颜色 */
//  border: 1px solid transparent;
//}


:deep(.arco-input-wrapper) {
  background-color: rgba(0, 0, 0, 0.5);
  color: #cccccc;
}

:deep(.arco-textarea-wrapper) {
  background-color: rgba(0, 0, 0, 0.5);
  color: #FFFFFF;
}

:deep(.arco-select-view-single) {
  background-color: rgba(0, 0, 0, 0.5);
  color: #FFFFFF;
}

:deep(.arco-picker) {
  background-color: rgba(0, 0, 0, 0.5);
  color: #FFFFFF;
}

:deep(.arco-picker input) {
  color: #FFFFFF;
}

:deep(.arco-picker-suffix-icon) {
  color: #FFFFFF;
}

:deep(.arco-icon) {
  color: #FFFFFF;
}

:deep(.arco-btn-text, .arco-btn-text[type='button'], .arco-btn-text[type='submit']) {
  background-color: #8c8c8c;
}

:deep(.arco-btn-text:hover, .arco-btn-text[type='button'], .arco-btn-text[type='submit']) {
  background-color: #4e4b4b;
}

:deep(.arco-btn-primary, .arco-btn-primary[type='button'], .arco-btn-primary[type='submit']) {
  background-color: #8c8c8c;
}

:deep(.arco-btn-primary:hover, .arco-btn-primary[type='button'], .arco-btn-primary[type='submit']) {
  background-color: #4e4b4b;
}

:deep(.arco-form-item-label-col > .arco-form-item-label) {
  color: #FFFFFF;
}

//:deep(.arco-modal-header){
//  border: none;
//}
//:deep(.arco-modal-body){
//  padding-top: 0;
//}
.custom-checkbox{
  display: flex;
  flex-direction: column;
  color: #FFFFFF;
  margin-top: 0.4rem;
}
:deep(.arco-checkbox-label){
  color: #FFFFFF;
}
:deep(.arco-checkbox-icon){
  border-radius: 50%;
}
</style>
