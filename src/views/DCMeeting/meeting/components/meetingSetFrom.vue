<template>
  <div class="container-today">
    <!--        数据统计-->
    <div class="container-today-title">
      <div class="container-today-title-text">
        功能设置
        <!--        <input type="text" v-model="meetingform.meetingName" placeholder="输入会议名称">-->
      </div>
    </div>
    <a-form
      :model="meetingform"
      ref="formRef"
      label-align="left"
      :label-col-props="{ span: 4 }"
      :wrapper-col-props="{ span: 20 }"
    >
      <div class="container-list-meeting">
        <div class="MeetingSetFrom"
             v-if="selectedMeetingRoom.screenTypeA || selectedMeetingRoom.screenTypeB || selectedMeetingRoom.screenTypeC ||selectedMeetingRoom.screenTypeD"
        >
          <div class="leftTitle">
            <span>屏幕</span>
          </div>
          <div class="rightFrom">
            <div class="rightFromText" v-if="selectedMeetingRoom.screenTypeA">
              <a-form-item field="screenTypeA" label="A：">
                <a-space size="large">
                  <a-radio-group v-model="meetingform.screenTypeA">
                    <a-radio :value="1">投屏</a-radio>
                    <a-radio :value="2">投票</a-radio>
                    <a-radio :value="3">发言人</a-radio>
                  </a-radio-group>
                </a-space>
              </a-form-item>
            </div>
            <div class="rightFromText" v-if="selectedMeetingRoom.screenTypeB">
              <a-form-item field="screenTypeB" label="B：">
                <a-space size="large">
                  <a-radio-group v-model="meetingform.screenTypeB">
                    <a-radio :value="1">投屏</a-radio>
                    <a-radio :value="2">投票</a-radio>
                    <a-radio :value="3">发言人</a-radio>
                  </a-radio-group>
                </a-space>
              </a-form-item>
            </div>
            <div class="rightFromText" v-if="selectedMeetingRoom.screenTypeC">
              <a-form-item field="screenTypeC" label="C：">
                <a-space size="large">
                  <a-radio-group v-model="meetingform.screenTypeC">
                    <a-radio :value="1">投屏</a-radio>
                    <a-radio :value="2">投票</a-radio>
                    <a-radio :value="3">发言人</a-radio>
                  </a-radio-group>
                </a-space>
              </a-form-item>
            </div>
            <div class="rightFromText" v-if="selectedMeetingRoom.screenTypeD">
              <a-form-item field="screenTypeD" label="D：">
                <a-space size="large">
                  <a-radio-group v-model="meetingform.screenTypeD">
                    <a-radio :value="1">投屏</a-radio>
                    <a-radio :value="2">投票</a-radio>
                    <a-radio :value="3">发言人</a-radio>
                  </a-radio-group>
                </a-space>
              </a-form-item>
            </div>
          </div>
        </div>
      </div>
      <div class="container-today-line"
           v-if="selectedMeetingRoom.screenTypeA || selectedMeetingRoom.screenTypeB || selectedMeetingRoom.screenTypeC ||selectedMeetingRoom.screenTypeD"
      ></div>
      <div class="container-list-meeting">
        <div class="MeetingSetFrom">
          <div class="leftTitle">
            <span>展示区</span>
          </div>
          <div class="rightFrom">
            <div class="rightFromText">
              <a-form-item label="A：">
                <a-space size="large">
                  <span>{{ fileName1 }}</span>
                  <a-button
                    :disabled="onFileSelectedLoading"
                    @click="selectFile"
                    type="text"
                    style="border-radius: 24px"
                  >
                    上传
                    <input
                      ref="fileInput"
                      type="file"
                      style="display: none"
                      @change="onFileSelected"
                    />
                  </a-button>
                </a-space>
              </a-form-item>
            </div>
            <div class="rightFromText">
              <a-form-item label="B：">
                <a-space size="large">
                  <span>{{ fileName1 }}</span>
                  <a-button
                    :disabled="onFileSelectedLoading"
                    @click="selectFile"
                    type="text"
                    style="border-radius: 24px"
                  >
                    上传
                    <input
                      ref="fileInput"
                      type="file"
                      style="display: none"
                      @change="onFileSelected"
                    />
                  </a-button>
                </a-space>
              </a-form-item>
            </div>
          </div>
        </div>
      </div>
      <div class="container-today-line"></div>
      <div class="container-list-meeting">
        <div class="MeetingSetFrom">
          <div class="leftTitle">
            <span>A坐席</span>
          </div>
          <div class="rightFrom" style="flex-direction: column;">
            <div class="rightFromText">
              <a-form-item label="名称：">
                <a-input v-model="meetingform.seatRuleA.seatName" placeholder="输入坐席名称" />
              </a-form-item>
              <a-form-item label="获取条件：">
                <a-radio-group v-model="meetingform.seatRuleA.getType" style="width: 30vw">
                  <a-radio :value="1">邀请</a-radio>
                  <!--                  <a-radio :value="2">申请</a-radio>-->
                  <a-radio :value="3">售卖</a-radio>
                </a-radio-group>
                <a-input v-if="meetingform.seatRuleA.getType===3"
                         v-number-only
                         v-model="meetingform.seatRuleA.price"
                         placeholder="输入价格，0为免费" />
              </a-form-item>
              <a-form-item label="坐席编号：">
                <a-radio-group v-model="meetingform.seatRuleA.snType" style="width: 30vw">
                  <!--                  <a-radio :value="1">自由落座</a-radio>-->
                  <a-radio :value="2">随机分配</a-radio>
                  <!--                  <a-radio :value="3">固定分配</a-radio>-->
                </a-radio-group>
              </a-form-item>
            </div>
          </div>
        </div>
      </div>
      <div class="container-today-line"></div>
      <div class="container-list-meeting">
        <div class="MeetingSetFrom">
          <div class="leftTitle">
            <span>B坐席</span>
          </div>
          <div class="rightFrom" style="flex-direction: column;">
            <div class="rightFromText">
              <a-form-item label="名称：">
                <a-input v-model="meetingform.seatRuleB.seatName" placeholder="输入坐席名称" />
              </a-form-item>
              <a-form-item label="获取条件：">
                <a-radio-group v-model="meetingform.seatRuleB.getType" style="width: 30vw">
                  <a-radio :value="1">邀请</a-radio>
                  <!--                  <a-radio :value="2">申请</a-radio>-->
                  <a-radio :value="3">售卖</a-radio>
                </a-radio-group>
                <a-input v-if="meetingform.seatRuleB.getType===3"
                         v-number-only
                         v-model="meetingform.seatRuleB.price"
                         placeholder="输入价格，0为免费" />
              </a-form-item>
              <a-form-item label="坐席编号：">
                <a-radio-group v-model="meetingform.seatRuleB.snType" style="width: 30vw">
                  <!--                  <a-radio :value="1">自由落座</a-radio>-->
                  <a-radio :value="2">随机分配</a-radio>
                  <!--                  <a-radio :value="3">固定分配</a-radio>-->
                </a-radio-group>
              </a-form-item>
            </div>
          </div>
        </div>
      </div>
      <div class="container-today-line"></div>
      <div class="container-list-meeting">
        <div class="MeetingSetFrom">
          <div class="leftTitle">
            <span>C坐席</span>
          </div>
          <div class="rightFrom" style="flex-direction: column;">
            <div class="rightFromText">
              <a-form-item label="名称：">
                <a-input v-model="meetingform.seatRuleC.seatName" placeholder="输入坐席名称" />
              </a-form-item>
              <a-form-item label="获取条件：">
                <a-radio-group v-model="meetingform.seatRuleC.getType" style="width: 30vw">
                  <a-radio :value="1">邀请</a-radio>
                  <!--                  <a-radio :value="2">申请</a-radio>-->
                  <a-radio :value="3">售卖</a-radio>
                </a-radio-group>
                <a-input v-if="meetingform.seatRuleC.getType===3"
                         v-number-only
                         v-model="meetingform.seatRuleC.price"
                         placeholder="输入价格，0为免费" />
              </a-form-item>
              <a-form-item label="坐席编号：">
                <a-radio-group v-model="meetingform.seatRuleC.snType" style="width: 30vw">
                  <!--                  <a-radio :value="1">自由落座</a-radio>-->
                  <a-radio :value="2">随机分配</a-radio>
                  <!--                  <a-radio :value="3">固定分配</a-radio>-->
                </a-radio-group>
              </a-form-item>
            </div>
          </div>
        </div>
      </div>
      <div class="container-today-line"></div>
      <div class="container-list-meeting">
        <div class="MeetingSetFrom">
          <div class="leftTitle">
            <span>D坐席</span>
          </div>
          <div class="rightFrom" style="flex-direction: column;">
            <div class="rightFromText">
              <a-form-item label="名称：">
                <a-input v-model="meetingform.seatRuleD.seatName" placeholder="输入坐席名称" />
              </a-form-item>
              <a-form-item label="获取条件：">
                <a-radio-group v-model="meetingform.seatRuleD.getType" style="width: 30vw">
                  <a-radio :value="1">邀请</a-radio>
                  <!--                  <a-radio :value="2">申请</a-radio>-->
                  <a-radio :value="3">售卖</a-radio>
                </a-radio-group>
                <a-input v-if="meetingform.seatRuleD.getType===3"
                         v-number-only
                         v-model="meetingform.seatRuleD.price"
                         placeholder="输入价格，0为免费" />
              </a-form-item>
              <a-form-item label="坐席编号：">
                <a-radio-group v-model="meetingform.seatRuleD.snType" style="width: 30vw">
                  <!--                  <a-radio :value="1">自由落座</a-radio>-->
                  <a-radio :value="2">随机分配</a-radio>
                  <!--                  <a-radio :value="3">固定分配</a-radio>-->
                </a-radio-group>
              </a-form-item>
            </div>
          </div>
        </div>
      </div>
      <div class="container-today-line"></div>
      <div class="container-list-meeting">
        <div class="MeetingSetFrom">
          <div class="leftTitle">
            <span>观众区</span>
          </div>
          <div class="rightFrom">
            <div class="rightFromText">
              <a-form-item label="名称：">
                <a-input v-model="meetingform.audienceAreaRule.seatName" placeholder="输入坐席名称" />
              </a-form-item>
              <a-form-item label="获取条件：">
                <a-radio-group v-model="meetingform.audienceAreaRule.getType" style="width: 30vw">
                  <!--                  <a-radio :value="2">申请</a-radio>-->
                  <a-radio :value="3">售卖</a-radio>
                </a-radio-group>
                <a-input v-if="meetingform.audienceAreaRule.getType===3"
                         v-number-only
                         v-model="meetingform.audienceAreaRule.price"
                         placeholder="输入价格，0为免费" />
              </a-form-item>
            </div>
          </div>
        </div>
      </div>
      <div class="container-today-line"></div>
      <div class="container-list-meeting">
        <div class="MeetingSetFrom">
          <div class="leftTitle">
            <span>场景</span>
          </div>
          <div class="rightFrom">
            <div class="rightFromText">
              <a-form-item label="移动：">
                <a-space size="large">
                  <a-checkbox-group v-model="meetingform.sceneRule.isRun">
                    <a-checkbox :value="1">跑步</a-checkbox>
                  </a-checkbox-group>
                  <a-checkbox-group v-model="meetingform.sceneRule.isJump">
                    <a-checkbox :value="1">跳跃</a-checkbox>
                  </a-checkbox-group>
                </a-space>
              </a-form-item>
<!--              <a-form-item label="服装：">-->
<!--                <a-space size="large">-->
<!--                  <a-checkbox-group v-model="meetingform.sceneRule.isFormalWear">-->
<!--                    <a-checkbox :value="1">正装</a-checkbox>-->
<!--                  </a-checkbox-group>-->
<!--                  <a-checkbox-group v-model="meetingform.sceneRule.isMask">-->
<!--                    <a-checkbox :value="1">面具</a-checkbox>-->
<!--                  </a-checkbox-group>-->
<!--                </a-space>-->
<!--              </a-form-item>-->
              <a-form-item label="规则：">
                <a-space size="large">
                  <a-checkbox-group v-model="meetingform.sceneRule.isAudienceAreaLimit">
                    <a-checkbox :value="1">观众区区域限定</a-checkbox>
                  </a-checkbox-group>
                  <a-checkbox-group v-model="meetingform.sceneRule.isEnterSpeechArea">
                    <a-checkbox :value="1">不能进入演讲区</a-checkbox>
                  </a-checkbox-group>
                  <a-checkbox-group v-model="meetingform.sceneRule.isMeetingStartCanMove">
                    <a-checkbox :value="1">会议开始不能走动</a-checkbox>
                  </a-checkbox-group>
                </a-space>
              </a-form-item>
            </div>
          </div>
        </div>
      </div>
      <div class="container-today-line"></div>
      <div class="container-list-meeting">
        <div class="MeetingSetFrom">
          <div class="leftTitle">
            <span>演讲</span>
          </div>
          <div class="rightFrom">
            <div class="rightFromText">
              <a-form-item label="获取条件：">
                <a-radio-group v-model="meetingform.speechRule.getType" style="width: 30vw">
                  <a-radio :value="1">邀请</a-radio>
                  <!--                  <a-radio :value="2">申请</a-radio>-->
<!--                  <a-radio :value="3">售卖</a-radio>-->
                </a-radio-group>
<!--                <a-input v-if="meetingform.speechRule.getType===3" v-model="meetingform.speechRule.price"-->
<!--                         placeholder="输入价格，0为免费" />-->
              </a-form-item>
              <a-checkbox-group v-model="meetingform.speechRule.isSpeakerForScreen">
                <a-checkbox :value="1">演讲者投屏权限</a-checkbox>
              </a-checkbox-group>
              <a-checkbox-group v-model="meetingform.speechRule.isSpeakerVote">
                <a-checkbox :value="1">演讲者发起投票权限</a-checkbox>
              </a-checkbox-group>
              <a-checkbox-group v-model="meetingform.speechRule.isBanSpeak">
                <a-checkbox :value="1">禁止发言</a-checkbox>
              </a-checkbox-group>
              <a-checkbox-group v-model="meetingform.speechRule.isBanTalk">
                <a-checkbox :value="1">禁止聊天</a-checkbox>
              </a-checkbox-group>
              <a-checkbox-group v-model="meetingform.speechRule.isBanGift">
                <a-checkbox :value="1">禁止送礼</a-checkbox>
              </a-checkbox-group>
            </div>
          </div>
        </div>
      </div>
      <div class="container-today-line"></div>
    </a-form>
  </div>

</template>

<script lang="ts" setup>
import { onBeforeMount, onBeforeUnmount, onMounted, reactive, ref } from "vue";
import { useToggle } from "@vueuse/core";
import { Organization } from "@/api/authority";
import { uploadWithoutKb } from "@/api/session";
import { Message } from "@arco-design/web-vue";
import EventBus from "@/utils/EventBus";


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


let selectedMeetingRoom = reactive({});//选择的会议室信息包括会议时间

let meetingform = ref<Organization>({
  // 初始化表单数据
  screenTypeA: 0,// 会议室A类屏幕类型 0.无该类屏幕 1.投屏 2.投票 3.发言人
  screenTypeB: 0,// 会议室B类屏幕类型 0.无该类屏幕 1.投屏 2.投票 3.发言人
  screenTypeC: 0,// 会议室c类屏幕类型 0.无该类屏幕 1.投屏 2.投票 3.发言人
  screenTypeD: 0,// 会议室d类屏幕类型 0.无该类屏幕 1.投屏 2.投票 3.发言人
  //坐席
  seatRuleA: {
    seatName: "A坐席",// 坐席名称
    getType: 1,// 获取条件 1.邀请 2.申请 3.售卖
    price: "10",// 价格
    snType: 2// 坐席编号类型 0.无 1.自由落座 2.随机分配 3.固定分配
  },
  seatRuleB: {
    seatName: "B坐席",// 坐席名称
    getType: 1,// 获取条件 1.邀请 2.申请 3.售卖
    price: "10",// 价格
    snType: 2// 坐席编号类型 0.无 1.自由落座 2.随机分配 3.固定分配
  },
  seatRuleC: {
    seatName: "C坐席",// 坐席名称
    getType: 1,// 获取条件 1.邀请 2.申请 3.售卖
    price: "10",// 价格
    snType: 2// 坐席编号类型 0.无 1.自由落座 2.随机分配 3.固定分配
  },
  seatRuleD: {
    seatName: "D坐席",// 坐席名称
    getType: 1,// 获取条件 1.邀请 2.申请 3.售卖
    price: "10",// 价格
    snType: 2// 坐席编号类型 0.无 1.自由落座 2.随机分配 3.固定分配
  },
  // 观众
  audienceAreaRule: {
    seatName: "观众席",// 坐席名称
    getType: 3,// 获取条件 1.邀请 2.申请 3.售卖
    price: "10",// 价格
    snType: 2// 坐席编号类型 0.无 1.自由落座 2.随机分配 3.固定分配
  },
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


});


console.log(JSON.stringify(meetingform.value), "打印表单对象");


const file = ref("");
const fileName1 = ref("");
const fileName2 = ref("");
const fileInput = ref(null);
const uploaditemList = ref([]);
const selectFile = () => {
  fileInput.value.click();
};

let onFileSelectedLoading = ref(false);
const onFileSelected = (event) => {
  const file = event.target.files[0];
  uploaditemList.value = [
    {
      name: file.name,
      size: file.size
    }
  ];
  if (file) {
    // onFileSelectedLoading.value = true;
    const formData = new FormData();
    formData.append("file", file);
    fileName1.value = file.name;
    console.log(file.name);
    // Message.normal('上传成功');

  }
};

defineExpose({
  meetingform
});

onBeforeMount(() => {

});
onMounted(() => {
  EventBus.on("getSelectRoomFun", (data) => {
    console.log(data, "传来的选择会议室");
    Object.assign(selectedMeetingRoom, data);
  });
});
onBeforeUnmount(() => {
  EventBus.off("getSelectRoomFun");
});

</script>

<style scoped lang="less">
.container-today {
  width: 96%;
  height: 80%;
  padding-top: 10px;
  padding-bottom: 50px;
  overflow: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 和 Edge */

  .container-today-title {
    width: 94%;
    text-align: center;
    border-bottom: 1px solid #605c5c;
    padding: 1vw;
    margin-left: 3%;
  }

  .container-list-meeting {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .MeetingSetFrom {
      width: 100%;
      display: flex;

      .leftTitle {
        width: 20%;
        text-align: center;
        height: 2.2rem;
        line-height: 2.2rem;
      }

      .rightFrom {
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        flex-direction: column;

        .rightFromText {
          margin-right: 4vw;
        }
      }
    }
  }

  .container-today-line {
    width: 94%;
    text-align: center;
    border-bottom: 1px solid #605c5c;
    margin-left: 3%;
  }
}

.container-today::-webkit-scrollbar {
  width: 0; /* Safari 和 Chrome */
}

:deep(.arco-radio-label) {
  color: #cccccc;
}

:deep(.arco-checkbox-label) {
  color: #cccccc;
}

:deep(.arco-form-item) {
  margin-bottom: 6px;
}
</style>
