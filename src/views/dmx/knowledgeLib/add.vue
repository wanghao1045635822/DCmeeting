<template>
  <a-button type="primary" v-hasPermi="'/kb/data_add'" @click="handleClick">
    <template #icon>
      <icon-plus />
    </template>
    新增文件
  </a-button>
  <a-modal
    v-model:visible="visible"
    title="上传文件"
    @open="handleOpened"
    @cancel="handleCancel"
    :ok-loading="loading"
    @before-ok="handleBeforeOk"
    title-align="start"
  >
    <a-tabs :default-active-key="activeKey" @change="activeKeyChange">
      <a-tab-pane key="1" title="文件"> </a-tab-pane>
      <a-tab-pane key="2" title="文件夹"> </a-tab-pane>
    </a-tabs>
    <div class="aUpload">
      <!--          <a-upload :file-list="uploadList" draggable accept=".word, .pdf, .ppt, .excel, .txt, .zip, .rar, .7z, .doc, .docx, .xls, .xlsx, .pptx, .ppt, .pdf, .mp4, .avi, .mp3,.wav, .wma, .wmv, .rm," :custom-request="customRequest" />-->
      <a-upload
        action="/"
        :auto-upload="false"
        ref="uploadRef"
        :file-list="uploadList"
        draggable
        :directory="directory"
        @change="onChange"
        multiple
      />
    </div>
  </a-modal>
</template>

<script lang="ts" setup>
  import { onMounted, onBeforeMount, reactive, ref, computed } from 'vue';
  import axios from 'axios';
  import { kbdocumentupload } from '@/api/kbList';
  import { Message } from '@arco-design/web-vue';
  let CancelToken = axios.CancelToken;
  let source = null;
  const visible = ref(false);
  const loading = ref(false);
  const directory = ref(false);
  const activeKey = ref('1');
  const formRef = ref(null);
  const uploadList = ref([]);
  const form = reactive({
    name: '', // 用户名
    nameJoin: '', // 昵称
    post: '', // 岗位
    txt: '', // 备注
  });
  const props = defineProps(['kbobj']);
  const emit = defineEmits(['changeFetchData']);
  const uploadRef = ref();
  const files = ref([]);
  console.log(props.kbobj);
  const acceptNameList = computed(() => {
    return '.word, .pdf, .ppt, .excel, .txt, .zip, .rar, .7z, .doc, .docx, .xls, .xlsx, .pptx, .ppt, .pdf, .mp4, .avi, .mp3,.wav, .wma, .wmv, .rm,';
  });
  // 上传文件
  const submitForm = async (done) => {
    if (files.value && files.value.length > 0) {
      files.value.map((item) => {
        const formData = new FormData();
        formData.append('file', item.file);
        formData.append('kb_id', props.kbobj.id);
        kbdocumentupload(formData).then((res) => {
          if (res.code == 0) {
            emit('changeFetchData');
            Message.success('上传成功');
            handleCancel();
          }
        });
      });
      done(false);
    } else {
      done(false);
    }
  };

  const handleSubmit = ({ values, errors }) => {};

  const onChange = (fileList) => {
    files.value = fileList;
  };

  const handleClick = () => {
    visible.value = true;
  };
  const handleBeforeOk = (done) => {
    submitForm(done);
  };
  const handleCancel = () => {
    visible.value = false;
  };

  const handleOpened = (el) => {
    // console.log(props.kbobj);
    uploadList.value = [];
    files.value = [];
    loading.value = false;
  };
  const activeKeyChange = (value) => {
    activeKey.value = value;
    directory.value = value == '2' ? true : false;
  };
  onBeforeMount(() => {});
  onMounted(() => {});
</script>

<script lang="ts">
  export default {
    name: 'add',
    methods: {},
  };
</script>

<style scoped lang="less">
  .aUpload {
    width: 100%;
    max-height: 500px;
    overflow: hidden;
    overflow-y: auto;
    :deep(.arco-upload-progress) {
      display: none;
    }
  }
</style>
