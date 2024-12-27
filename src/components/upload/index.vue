<template>
  <a-upload
    v-model:fileList="fileList"
    list-type="picture-card"
    :limit="limit"
    :action="action"
    @change="handleChange"
    @before-remove="beforeRemove"
    image-preview
  />
</template>

<script setup>
  import { computed, ref, onMounted, watch, watchEffect } from 'vue';
  import { useUserStore } from '@/store';

  const userStore = useUserStore();
  const props = defineProps({
    limit: {
      type: Number,
      default: 1,
    },
    action: String, // 上传的服务器地址
    url: String, //回显的文件地址
  });

  const emit = defineEmits(['update:fileList', 'success', 'handleRemove']);
  const urls = computed(() => props.url);
  const fileList = ref([]);

  watch(
    () => props.url,
    (newVal) => {
      if (newVal) {
        fileList.value = newVal.split(',').map((item) => ({
          uid: item,
          name: item,
          status: 'done',
          url: item,
        }));
      }
    },
    {
      deep: true, // 开启深度监听
    }
  );

  onMounted(() => {
    if (urls.value) {
      fileList.value = urls.value.split(',').map((item) => ({
        uid: item,
        name: item,
        status: 'done',
        url: item,
      }));
    }

    // console.log(
    //   window.location.origin,
    //   import.meta.env.VITE_API_BASE_URL,
    //   8988
    // );
  });

  // console.log(urls.value, 8988);
  const beforeRemove = (file) => {
    emit('handleRemove');
    fileList.value = [];
  };

  const handleChange = (fileList) => {
    emit('update:fileList', fileList);
    const successFiles = fileList.filter((item) => item.status === 'done');
    if (successFiles.length > 0) {
      emit(
        'success',
        successFiles.map((item) => item.response.data)
      );
    }
  };
</script>
