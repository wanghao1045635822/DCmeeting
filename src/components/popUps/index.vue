<template>
  <a-modal v-model:visible="visible" @ok="handleOk" @cancel="handleCancel">
    <template #title>

    </template>
    <Member></Member>
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
  const handleOk = () => {
    visible.value = false;
  };
  const handleCancel = () => {
    visible.value = false;
  }
  defineExpose({visible});

  onMounted(() => {

  });

</script>
