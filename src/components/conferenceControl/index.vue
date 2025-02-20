<template>
  <a-modal
      v-model:visible="visible"
      @ok="handleOk"
      @open="handleOpen"
      @cancel="handleCancel"
      :bodyStyle="{padding: '0'}"
      :style="{background: '#ccc'}"
      :footer="null"
      fullscreen
  >
    <template #title>
      快来会议
    </template>
    <div class="content">
      <div class="content-top">

      </div>
      <div class="content-main"></div>
      <div class="content-top"></div>
    </div>
  </a-modal>
</template>

<script setup>
  import { computed, ref, onMounted, watch, watchEffect } from 'vue';
  import { useUserStore } from '@/store';
  import Member from '@/components/member/index.vue';

  const userStore = useUserStore();
  const props = defineProps({
    limit: {
      type: Number,
      default: 1,
    },
    action: String, // 上传的服务器地址
    url: String, //回显的文件地址
  });

  const visible = ref(false);

  const handleClick = () => {
    visible.value = true;
  };
  const show = ()=>{
    visible.value = true;
  }
  const handleOk = () => {
    visible.value = false;
  };
  const handleOpen = () => {

  }
  const handleCancel = () => {
    visible.value = false;
  }
  defineExpose({visible,show});

  onMounted(() => {

  });

</script>

<style lang="less" scoped>
  .content{
    width: 100%;
    height: calc(100vh - 4rem);
    //background-color: #4b89ff;
    .content-top{
      width: 100%;
      height: 2rem;
      background-color: #eeeeee;
    }
  }
  :deep(.arco-modal-container) {
    background-color: #e43a73;
  }
</style>