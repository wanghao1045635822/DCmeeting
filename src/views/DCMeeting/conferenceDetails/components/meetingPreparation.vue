<template>
  <div class="container-today">
    <div class="container-lf glass">
      <div class="container-lf-title">
        与会统计
      </div>
      <div class="container-lf-body">
        <a-table :columns="columns"
                 :data="data"
                 class="transparent-table"
                 column-resizable
                 :bordered="{cell:true}"
                 :pagination="false"
                 :hoverable="false"
        >
          <!--          按钮-->
          <template #action="{ record, rowIndex }">
            <a-button type="text" style="color: #FFFFFF">
              邀请
            </a-button>
          </template>
        </a-table>
      </div>
    </div>
    <div class="container-rt glass">
      <div class="container-lf-title">
        投票设定
      </div>
      <div class="container-lf-body">
        <a-table :columns="columns1"
                 :data="data1"
                 class="transparent-table"
                 column-resizable
                 :bordered="{cell:true}"
                 :pagination="false"
                 :hoverable="false"
        >

        </a-table>
      </div>
      <img class="meeting-time-list-item-right-btn" src="@/assets/images/meeting/conferenceDetails/toupiao.png" alt="" @click="votingPops.visible = true">
    </div>
    <voting-pop ref="votingPops"></voting-pop>
  </div>

</template>

<script lang="ts" setup>
import { onBeforeMount, onBeforeUnmount, onMounted, reactive, ref } from "vue";
import { useToggle } from "@vueuse/core";
import votingPop from "@/views/DCMeeting/conferenceDetails/components/votingPop.vue"


let visible = ref(false);
let votingPops = ref<any>(null);

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

const columns = reactive([
  {
    title: "坐席",
    dataIndex: "name",
    // width: 150,
    // minWidth: 100,
    align: "center"
  },
  {
    title: "获取方式",
    dataIndex: "getType",
    // width: 120,
    // minWidth: 80,
    align: "center"
  },
  {
    title: "销售",
    dataIndex: "num",
    // width: 300,
    align: "center"
  },
  {
    title: "操作",
    dataIndex: "action",
    slotName: "action",
    align: "center",
    width: 100,
    minWidth: 100
  }
]);

const data = reactive([{
  key: "1",
  name: "演讲者",
  num: 23000,
  getType: "邀请"
}, {
  key: "2",
  name: "专家席",
  num: 25000,
  getType: "邀请"
}, {
  key: "3",
  name: "贵宾席",
  num: 22000,
  getType: "申请（2000快币）"
}, {
  key: "4",
  name: "普通席",
  num: 17000,
  getType: "购票（500快币）"
}, {
  key: "5",
  name: "观众席",
  num: 27000,
  getType: "免费"
}]);

const columns1 = reactive([
  {
    title: "编号",
    dataIndex: "key",
    // width: 150,
    // minWidth: 100,
    align: "center"
  },
  {
    title: "投票内容",
    dataIndex: "getType",
    // width: 120,
    // minWidth: 80,
    align: "center"
  },
  {
    title: "编辑者",
    dataIndex: "name",
    // width: 300,
    align: "center"
  },
  {
    title: "状态",
    dataIndex: "status",
    slotName: "action",
    align: "center",
    width: 150,
    minWidth: 150
  }
]);

const data1 = reactive([{
  key: "1",
  name: "演讲者",
  num: 23000,
  getType: "您当前从事什么工作",
  status: "通过"
}, {
  key: "2",
  name: "专家席",
  num: 25000,
  getType: "下次会议你希望听到什么内容",
  status: "审核中"
}, {
  key: "3",
  name: "贵宾席",
  num: 22000,
  getType: "说说你的使用个习惯",
  status: "审核中"
}, {
  key: "4",
  name: "普通席",
  num: 17000,
  getType: "平常是否有说脏话的习惯",
  status: "审批未通过"
}, {
  key: "5",
  name: "观众席",
  num: 27000,
  getType: "你有以下哪些生活习惯",
  status: "通过"
}]);

onBeforeMount(() => {

});
onMounted(() => {

});
onBeforeUnmount(() => {

});

</script>

<style scoped lang="less">
.container-today {
  width: 100%;
  height: 90%;
  margin: 0 auto;
  margin-top: 2%;
  overflow: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 和 Edge */
  //background-color: #9c5eff;
  display: flex;
  justify-content: space-evenly;

  .container-lf ,.container-rt{
    width: 48%;
    padding: 2vh;
    position: relative;
    .container-lf-title {
      font-size: 20px;
      color: #FFFFFF;
      width: 100%;
      height: 10vh;
      text-align: center;
      line-height: 10vh;
      //background-color: #9c5eff;
    }
  }
  .meeting-time-list-item-right-btn{
    //width: 6vw;
    height: 4vh;
    cursor: pointer;
    position: absolute;
    top: 5vh;
    right: 2vw;
  }
  .meeting-time-list-item-right-btn:active{
    //background-image: url("@/assets/images/meeting/conferenceDetails/up.png");
    //background-size: cover;
    border: 2px solid transparent;
  }

  .container-rt {
    width: 48%;
    //padding: 10px;
    display: flex;
    flex-direction: column;
  }
}

//修改表格背景
:deep(.arco-table-th) {
  /* 设置半透明背景 */
  background-color: rgba(0, 0, 0, 0.2); /* 白色背景，50% 透明度 */
  //border-radius: 20px;
  overflow: hidden;
  //border: none;
  color: #FFFFFF;

}

:deep(.arco-table-td) {
  background: transparent;
  color: #FFFFFF;
}

:deep(.arco-table-border .arco-table-tr .arco-table-th){
  border-color: #A59D9DFF;
}
:deep(.arco-table-border .arco-table-tr .arco-table-td){
  border-color: #A59D9DFF;
}
:deep(.arco-table-border .arco-table-container){
  border-color: #A59D9DFF;
}
:deep(.arco-table-th){
  border-color: #A59D9DFF;
}
:deep(.arco-table .arco-table-cell){
  padding: 2vh 16px;
}
:deep(.arco-btn-text:hover, .arco-btn-text[type='button']:hover, .arco-btn-text[type='submit']:hover){
  background-color: rgba(0, 0, 0, 0.2); /* 白色背景，50% 透明度 */
}
</style>
