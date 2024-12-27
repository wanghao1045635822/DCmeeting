<template>
  <a-modal
    v-model:visible="addTabVisible"
    title="添加模式"
    @before-open="handleOpened"
    @cancel="handleCancel"
    :footer="false"
    title-align="start"
    width="600px"
  >
    <a-form
      ref="formRef"
      :rules="rules"
      :model="form"
      @submit="handleSubmit"
      :style="{ width: '90%', margin: '0 auto' }"
      layout="vertical"
    >
      <a-form-item field="name" label="模型名称">
        <a-input v-model="form.name" placeholder="请输入模型名称" />
      </a-form-item>
      <a-form-item field="describe" label="模型描述">
        <a-textarea placeholder="请输入模型描述" allow-clear />
      </a-form-item>

      <a-form-item field="section" label="模型图片">
        <a-space direction="vertical" :style="{ width: '100%' }">
          <Upload
            :limit="1"
            @update:fileList="updateFileList"
            :oploadUrl="uploadAction"
            @success="handleChange"
          ></Upload>
        </a-space>
      </a-form-item>
      <a-form-item>
        <div style="width: 100%; text-align: right">
          <a-button @click="addTabVisible = false">取消</a-button>
          <a-button style="margin-left: 10px" type="primary" html-type="submit"
            >确定</a-button
          >
        </div>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts" setup>
  import { onMounted, onBeforeMount, reactive, ref } from 'vue';

  const addTabVisible = defineModel('tabShow');
  const loading = ref(false);
  const props = defineProps({
    task_id: {
      type: Number,
      default: null,
    },
  });

  const form = reactive({
    size: 'medium',
    name: '',
    describe: '',
    age: undefined,
    section: '0',
    province: 'haidian',
    options: [],
    date: '',
    time: '',
    radio: 'radio one',
    slider: 5,
    score: 5,
    switch: false,
    multiSelect: ['section one'],
    treeSelect: '',
    raptor: false,
    prompt:
      '请总结以下段落。 小心数字，不要编造。 段落如下：\n' +
      '      {cluster_content}\n' +
      '以上就是你需要总结的内容。',
  });
  const formRef = ref(null);

  const rules = {
    name: [
      {
        required: true,
        message: '名称不允许为空',
      },
    ],
    describe: [
      {
        required: true,
        message: '描述不允许为空',
      },
    ],
  };

  const handleSubmit = ({ values, errors }) => {
    console.log('values:', values, '\nerrors:', errors);
  };

  const handleClick = () => {
    addTabVisible.value = true;
  };
  const handleBeforeOk = (done) => {
    formRef.value.validate().then((res) => {
      console.log('form:', form);
      if (!form.name) {
        done(false);
      } else {
        console.log('请求数据');
      }
    });
  };
  const handleCancel = () => {
    addTabVisible.value = false;
  };
  //图片上传
  const fileList = ref([]);
  const imageUrls = ref([]);
  const uploadAction = ref('/api/v1/llm/upload');
  const updateFileList = (newFileList) => {
    fileList.value = newFileList;
  };
  const handleChange = (urls) => {
    console.log(urls, 9999);
  };

  const handleOpened = (el) => {
    Object.assign(form, {
      name: '', // 用户名
      nameJoin: '', // 昵称
      post: '', // 岗位
      txt: '', // 备注
    });
    formRef.value.resetFields();
  };

  const file = ref();

  const onChange = (_, currentFile) => {
    file.value = {
      ...currentFile,
      // url: URL.createObjectURL(currentFile.file),
    };
  };
  const onProgress = (currentFile) => {
    file.value = currentFile;
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
