<template>
  <!-- 添加模型 -->
  <a-modal
    v-model:visible="addTabVisible"
    :title="title"
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
      <a-form-item field="name" label="模型框架">
        <!-- <a-input v-model="form.name" placeholder="请输入模型名称" /> -->
        <a-select
          v-model="form.name"
          placeholder="请选择模型框架"
          allow-create
          allow-search
        >
          <a-option
            v-for="(item, index) in modalList"
            :value="item.name"
            :label="item.name"
            :disabled="item.added"
          ></a-option>
        </a-select>
      </a-form-item>
      <!-- <a-form-item field="apiKey" label="API-Key">
        <a-input v-model="form.apiKey" placeholder="API-Key" />
      </a-form-item>
      <a-form-item field="baseUrl" label="Base-Url">
        <a-input v-model="form.baseUrl" placeholder="Base-Url" />
      </a-form-item> -->
      <a-form-item field="tags" label="模型描述">
        <a-textarea
          v-model="form.tags"
          placeholder="请输入模型描述"
          :max-length="50"
          allow-clear
        />
      </a-form-item>

      <a-form-item field="logo" label="模型图片">
        <a-space
          v-model="form.logo"
          direction="vertical"
          :style="{ width: '100%' }"
        >
          <Upload
            :action="uploadAction"
            :limit="1"
            :url="form.urlS"
            @handleRemove="deleteRemove"
            @update:fileList="updateFileList"
            @success="handleSuccess"
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
  import {
    onMounted,
    onBeforeMount,
    watchEffect,
    reactive,
    ref,
    computed,
  } from 'vue';
  import {
    getFactories,
    addLlmFactory,
    getLlmDetail,
    editLlmFactory,
  } from '@/api/model';

  import { Message } from '@arco-design/web-vue';
  import { userModelState } from '@/store';

  const modelStore = userModelState();

  const addTabVisible = defineModel('tabShow');

  const httpUrl = modelStore.hrefUrl;
  const loading = ref(false);
  const props = defineProps({
    task_id: {
      type: Number,
      default: null,
    },
    nameList: {
      type: Object,
      default: {},
    },
    title: {
      type: String,
      default: '添加模型',
    },
  });
  const editList = computed(() => props.nameList);

  const form = reactive({
    size: 'medium',
    name: '',
    describe: '',
    api_base: '',
    tags: '',
    logo: '',
    urlS: '',
  });
  const formRef = ref();

  const rules = {
    name: [
      {
        required: true,
        message: '模型框架不允许为空',
      },
    ],
    tags: [
      {
        required: true,
        message: '描述不允许为空',
      },
    ],
    logo: [
      {
        required: true,
        message: '模型图片不能为空',
      },
    ],
  };

  const handleSubmit = ({ values, errors }) => {
    console.log(editList, 9999);
    formRef.value.validate().then(async (res) => {
      if (!res) {
        if (props.title == '编辑模型') {
          await editLlmFactory({
            name: form.name,
            tags: form.tags,
            api_base: form.api_base,
            // all_params: all_params,
            logo: uploadUrl.value[0] || '',
          })
            .then((resData) => {
              if ((resData as any).code === 200) {
                emit('refresh-parent',form.name);
                addTabVisible.value = false;
              }
            })
            .catch(() => {});
        } else {
          await addLlmFactory({
            name: form.name,
            tags: form.tags,
            api_base: form.api_base,
            // all_params: all_params,
            logo: uploadUrl.value[0],
          })
            .then((resData) => {
              if ((resData as any).code === 200) {
                emit('refresh-parent', form.name);
                addTabVisible.value = false;
                Message.success('添加成功');
              }
            })
            .catch(() => {
              Message.error('添加失败');
            });
        }
      }
    });
  };
  const emit = defineEmits(['refresh-parent']);
  const handleClick = () => {
    addTabVisible.value = true;
  };

  const handleCancel = () => {
    addTabVisible.value = false;
  };
  //图片上传
  const uploadAction = '/api/v1/llm/upload'; // 替换为你的上传API
  const fileList = ref([]);
  const imageUrls = ref([]);
  const uploadUrl = ref([]);
  const updateFileList = (newFileList) => {
    fileList.value = newFileList;
  };

  const deleteRemove = () => {
    form.logo = '';
    uploadUrl.value = [];
    imageUrls.value = [];
  };

  const handleSuccess = (urls) => {
    uploadUrl.value = urls;
    form.logo = urls[0];

    const urlsArr = urls.map((url) => {
      return httpUrl + url;
    });
    imageUrls.value = urlsArr; // 拿到上传的图片地址
  };

  const handleOpened = (el) => {
    Object.assign(form, {
      name: '', // 用户名
      nameJoin: '', // 昵称
      post: '', // 岗位
      txt: '', // 备注
    });
    formRef.value?.resetFields();
  };
  const modalList = ref([]);
  const queryModel = async () => {
    const res = await getFactories();
    modalList.value = res.data;
  };
  queryModel();

  watchEffect(() => {
    if (props.nameList && props.title == '编辑模型') {
      form.name = props.nameList.llm_factory;
      form.tags = props.nameList.tags;
      form.urlS = props.nameList.logo;
    }
  });
</script>

<script lang="ts">
  export default {
    name: 'add',
    methods: {},
  };
</script>
