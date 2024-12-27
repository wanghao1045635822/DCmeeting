<template>
  <iframe :src="previewSrc"></iframe>
</template>

<script setup>
  //	获取父组件传递的资源url
  const props = defineProps({
    previewSrc: {
      type: String,
      required: false,
      default: () => '',
    },
  });
  //引入VueOfficeExcel组件相关
  import VueOfficeExcel from '@vue-office/excel';
  import '@vue-office/excel/lib/index.css';

  const comStyle = {
    width: '100%',
    height: '100%',
  };

  const renderedHandler = () => {
    console.log('rendered');
  };
  const errorHandler = (err) => {
    console.log('error', err);
  };
</script>

<style scoped lang="less">
  .aUpload {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
