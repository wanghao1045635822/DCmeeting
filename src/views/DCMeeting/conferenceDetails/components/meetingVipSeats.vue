<template>
  <div class="container-today">
    <div class="container-lf glass">
      <div class="container-lf-title">
        贵宾席审核列表
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
              批准
            </a-button>
            <a-divider direction="vertical" />
            <a-button type="text" style="color: #FFFFFF">
              拒绝
            </a-button>
          </template>
        </a-table>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { onBeforeMount, onBeforeUnmount, onMounted, reactive, ref } from "vue";
import { useToggle } from "@vueuse/core";

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
    title: "用户名",
    dataIndex: "name",
    // width: 150,
    // minWidth: 100,
    align: "center",
    headerCellClass: "text-center",
  },
  {
    title: "公司",
    dataIndex: "gongsi",
    // width: 120,
    // minWidth: 80,
    align: "center"
  },
  {
    title: "职位",
    dataIndex: "zhiwei",
    // width: 300,
    align: "center"
  },
  {
    title: "联系方式",
    dataIndex: "tel",
    // width: 300,
    align: "center"
  },
  {
    title: "操作",
    dataIndex: "action",
    slotName: "action",
    align: "center",
    width: 180,
  }
]);

const data = reactive([{
  key: "1",
  name: "王浩",
  zhiwei: "CEO",
  gongsi: "神州数码",
  tel: "123456789"
}, {
  key: "2",
  name: "钱多多",
  zhiwei: "CEO",
  gongsi: "快来集团",
  tel: "123456789"
}, {
  key: "3",
  name: "聚发财",
  zhiwei: "CEO",
  gongsi: "元知科技",
  tel: "123456789"
}, {
  key: "4",
  name: "钱快来",
  zhiwei: "CEO",
  gongsi: "问界",
  tel: "123456789"
}, {
  key: "5",
  name: "任天堂",
  zhiwei: "CEO",
  gongsi: "任天堂",
  tel: "123456789"
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

  .container-lf{
    width: 80%;
    padding: 2vw;

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
  //background-color:#333a4b;
  background-color: rgba(0, 0, 0, 0.2); /* 白色背景，50% 透明度 */
}
.text-center{
  //color: #9c5eff;
}
</style>
