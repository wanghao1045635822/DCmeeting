<template>
  <!-- 添加编辑子模型 -->
  <a-modal
    v-model:visible="addPageModelVisible"
    :title="title"
    @before-open="handleOpened"
    @cancel="handleCancel"
    :footer="false"
    title-align="start"
    width="600px"
  >
    <a-form
      ref="form_ref"
      :rules="rules"
      :model="form"
      @submit="handleSubmit"
      :style="{ width: '90%', margin: '0 auto' }"
      layout="vertical"
    >
      <div>
        <div v-for="(item, index) in form.formData.params" :key="index">
          <div v-if="item.value_type === 'select'">
            <a-form-item
              :field="item.key"
              :label="item.name"
              :required="item.required"
            >
              <a-select v-model="form[item.key]" placeholder="请选择">
                <a-option
                  v-for="(list, v) in item.options"
                  :value="v"
                  :label="v"
                ></a-option>
              </a-select>
            </a-form-item>
          </div>
          <div v-else-if="item.value_type === 'input'">
            <a-form-item
              :field="item.key"
              :label="item.name"
              :required="item.required"
            >
              <a-input v-model="form[item.key]" placeholder="请输入" />
            </a-form-item>
          </div>
        </div>
        <!-- <a-form-item
          field="raptor"
          label="是否支持 Vision"
          v-if="form.model_type === 'chat'"
        >
          <a-switch v-model="form.raptor" />
        </a-form-item> -->
        <a-form-item field="logo" label="模型图片">
          <a-space
            direction="vertical"
            v-model="form.logo"
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
        <!-- <a-form-item field="all_params" label="增加其它参数配置">
          <a-button
            type="primary"
            @click="handleAddClick"
            style="margin-left: 10px"
          >
            <template #icon>
              <icon-plus />
            </template>
          </a-button>
        </a-form-item> -->

        <a-form-item v-for="(item, index) in form.addFomList" :key="index">
          <div class="addInput">
            <a-input
              style="width: 230px"
              v-model="item.name"
              placeholder="请输入key"
            />
            ：
            <a-input v-model="item.value" placeholder="请输入value" />

            <a-button
              status="danger"
              @click="handleDelInput(index)"
              style="margin-left: 10px"
            >
              <template #icon>
                <icon-minus size="22" />
              </template>
            </a-button>
          </div>
        </a-form-item>
      </div>

      <a-form-item>
        <div style="width: 100%; text-align: right">
          <a-button @click="addPageModelVisible = false">取消</a-button>
          <a-button style="margin-left: 10px" type="primary" html-type="submit"
            >确定</a-button
          >
        </div>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts" setup>
  import { reactive, ref, computed, watch, watchEffect, onMounted } from 'vue';
  import { addLlm, getLlmDetail, editLlm, getFactoryDetail } from '@/api/model';
  import { Modal, Message } from '@arco-design/web-vue';
  import message from '@arco-design/web-vue/es/message';
  import { resolveUnref } from '@vueuse/core';
  import { userModelState } from '@/store';

  const modelStore = userModelState();

  const addPageModelVisible = defineModel('show');
  const loading = ref(false);
  const props = defineProps({
    task_id: {
      type: Number,
      default: null,
    },
    type: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: '',
    },
    editList: {
      type: Object,
      default: {},
    },
  });

  const isType = computed(() => props.type);
  const editList = computed(() => props.editList);

  const form = reactive({
    size: 'medium',
    name: '',
    formData: { logo: '' },
    llm_factory: '',
    llm_name: '',
    api_base: '',
    volc_ak: '',
    volc_sk: '',
    logo: '',
    radio: 'radio one',
    urlS: '',
    slider: 5,
    score: 5,
    switch: false,
    raptor: false,
    addFomList: <any[]>[],
  });

  const form_ref = ref();

  const rules = {
    logo: [
      {
        required: true,
        message: '模型图片不能为空',
      },
    ],
  };

  const uploadAction = '/api/v1/llm/upload'; // 替换为你的上传API
  const fileList = ref([]);
  const imageUrls = ref<any[]>([]);
  const uploadUrl = ref([]);
  const httpUrl = modelStore.hrefUrl;

  const updateFileList = (newFileList) => {
    fileList.value = newFileList;
  };

  const handleSuccess = (urls) => {
    uploadUrl.value = urls;
    form.logo = urls[0];

    const urlsArr = urls.map((url) => {
      return httpUrl + url;
    });
    imageUrls.value = urlsArr; // 拿到上传的图片地址
  };
  const deleteRemove = () => {
    form.logo = '';
    uploadUrl.value = [];
    imageUrls.value = [];
  };

  const emit = defineEmits(['refresh-parent']);
  const handleSubmit = ({ values, errors }) => {
    const all_params = form.addFomList.map((item) => {
      return item.name + ':' + item.value;
    });
    console.log(form, 9999);
    form_ref.value
      ?.validate()
      .then(async (res) => {
        if (!res) {
          form.formData.logo = uploadUrl.value[0] || '';
          form.llm_factory = editList.value.llm_factory;
          delete form.formData;
          if (props.title == '编辑') {
            const data = await editLlm(form);

            if ((data as any).code == 200) {
              message.success('添加成功');
              addPageModelVisible.value = false;
              emit('refresh-parent', editList.value.llm_factory);
            } else {
              message.error('添加失败');
            }
          } else {
            const data = await addLlm(form);

            if ((data as any).code == 200) {
              message.success('添加成功');
              addPageModelVisible.value = false;
              emit('refresh-parent', editList.value.llm_factory);
            } else {
              message.error('添加失败');
            }
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   const addPageModelVisible = ref(false);
  const handleAddPageModel = () => {
    addPageModelVisible.value = true;
  };

  const handleClick = () => {
    addPageModelVisible.value = true;
  };
  const handleBeforeOk = (done) => {
    form_ref.value?.validate().then((res) => {
      console.log('form:', form);
      if (!form.name) {
        done(false);
      } else {
        console.log('请求数据');
      }
    });
  };

  //增加其他参数
  const handleAddClick = () => {
    form.addFomList.push({ name: '', value: '' });
  };

  //减少其他参数
  const handleDelInput = (index) => {
    form.addFomList.splice(index, 1);
  };
  const handleCancel = () => {
    addPageModelVisible.value = false;
  };

  const handleOpened = (el) => {
    Object.assign(form, {
      name: '', // 用户名
      nameJoin: '', // 昵称
      post: '', // 岗位
      txt: '', // 备注
    });
    form_ref.value?.resetFields();
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

  //获取详情
  const getDetail = async () => {
    const data = await getLlmDetail(
      editList.value.llm_factory,
      editList.value.name
    );

    form.llm_name = data.data.llm_name;
    form.model_type = data.data.model_type;
    form.volc_ak = data.data.volc_ak;
    form.volc_sk = data.data.volc_sk;
    form.api_base = data.data.api_base;
    form.raptor = data.data.raptor;
    form.urlS = data.data.logo;
    if (JSON.parse(data.data.all_params).length > 0) {
      form.addFomList = JSON.parse(data.data.all_params).map((item) => {
        return { name: item.split(':')[0], value: item.split(':')[1] };
      });
    }

    imageUrls.value.push(httpUrl + data.data.logo);
  };
  const getFactory = async () => {
    const { data } = await getFactoryDetail({
      factory_name: editList.value.llm_factory,
    });
    form.formData = data;
  };
  onMounted(() => {
    getFactory();
  });

  watchEffect(() => {
    if (props.editList.name) {
      getDetail();
    }
  });
</script>
<style scoped lang="less">
  .addInput {
    display: flex;
    width: 100%;
  }
</style>
