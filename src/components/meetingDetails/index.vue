<template>
  <div class="content">
    <a-descriptions
        :data="data"
        size="small"
        title=""
        :column="1"
    />
    <div class="footer">
      <a-button type="primary">
        进入会议
      </a-button>
      <a-button type="primary">
        关闭
      </a-button>
    </div>
  </div>
</template>

<script setup>
import {
  computed,
  ref,
  onMounted,
  watch,
  watchEffect,
  onBeforeMount,
  onBeforeUnmount,
  onUnmounted,
  onUpdated, onBeforeUpdate
} from 'vue';
import {useUserStore} from '@/store';
const props = defineProps({
  limit: {
    type: Number,
    default: 1,
  },
  action: String, // 上传的服务器地址
  url: String, //回显的文件地址
});

const data = [{
  label: '会议标题',
  value: '新快来会议',
}, {
  label: '开始时间',
  value: '2025年2月17日 18:00',
}, {
  label: '结束时间',
  value: '2025年2月17日 23:00',
}, {
  label: '发起人',
  value: '王浩',
}, {
  label: '参与人',
  value: 'Yingdu Building, Zhichun Road, Beijing'
}];

onBeforeMount(() => {
  console.log('onBeforeMount');
});

onMounted(() => {
  console.log('onMounted');
});

onBeforeUpdate(() => {
  console.log('onBeforeUpdate');
});

onUpdated(() => {
  console.log('onUpdated');
})

onBeforeUnmount(() => {
  console.log('onBeforeUnmount');
});

onUnmounted(() => {
  console.log('onUnmounted');
});


</script>

<style lang="less" scoped>
.content {
  .footer{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 1vh;
  }
}
//:deep(.arco-btn-primary, .arco-btn-primary[type='button'], .arco-btn-primary[type='submit']) {
//  background-color: #4b89ff!important;
//}
//
//:deep(.arco-btn-primary:hover, .arco-btn-primary[type='button'], .arco-btn-primary[type='submit']) {
//  background-color: #4b89ff!important;
//}
</style>
