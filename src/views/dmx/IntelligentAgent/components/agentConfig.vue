<template>
  <a-modal
    v-model:visible="visible"
    title="智能体配置"
    @before-open="handleOpened"
    @cancel="handleCancel"
    :ok-loading="loading"
    @before-ok="handleBeforeOk"
    :footer="true"
    title-align="start"
    width="600px"
  >
    <a-row class="">
      <a-col :span="24">
        <a-tabs
          type="capsule"
          size="large"
          :active-key="activeKey"
          @change="handleTabChange"
        >
          <a-tab-pane key="1" title="助理设置">
            <a-divider style="margin-bottom: 20px; margin-top: 0" />
            <div style="width: 100%" :style="{ height: height }">
              <a-form
                ref="formRef"
                :rules="rules"
                :model="form"
                @submit="handleSubmit"
                :style="{ width: '90%', margin: '0 auto' }"
              >
                <a-form-item field="name" label="智能体名称">
                  <a-input v-model="form.name" placeholder="请输入名称" />
                </a-form-item>
                <a-form-item label="智能体图标">
                  <a-space direction="vertical" :style="{ width: '100%' }">
                    <Upload
                      v-if="avatarShow"
                      :action="uploadAction"
                      :limit="1"
                      :url="form.icon ? httpUrl + form.icon : ''"
                      @update:fileList="updateFileList"
                      @success="handleSuccess"
                    ></Upload>
                  </a-space>
                </a-form-item>
                <a-form-item label="空回复">
                  <a-input
                    v-model="form.prompt_config.empty_response"
                    placeholder=""
                  />
                </a-form-item>
                <a-form-item label="设置开场白">
                  <a-textarea
                    v-model="form.prompt_config.prologue"
                    placeholder=""
                    style="height: 100px"
                  />
                </a-form-item>
                <a-form-item label="显示引文">
                  <a-space direction="vertical">
                    <a-switch v-model="form.prompt_config.quote" size="small" />
                  </a-space>
                </a-form-item>
                <a-form-item label="Self-RAG">
                  <a-space direction="vertical">
                    <a-switch
                      v-model="form.prompt_config.self_rag"
                      size="small"
                    />
                  </a-space>
                </a-form-item>
                <a-form-item field="kb_ids" label="知识库">
                  <a-select
                    v-model="form.kb_ids"
                    placeholder="请选择 ..."
                    multiple
                  >
                    <a-option
                      v-for="item in tabs"
                      :key="item.id"
                      :value="item.id"
                    >
                      {{ item.name }}
                    </a-option>
                  </a-select>
                </a-form-item>
                <!--      <a-form-item>-->
                <!--        <div style="width: 100%; text-align: right">-->
                <!--          <a-button @click="visible = false">取消</a-button>-->
                <!--          <a-button style="margin-left: 10px" type="primary" html-type="submit"-->
                <!--            >确定</a-button-->
                <!--          >-->
                <!--        </div>-->
                <!--      </a-form-item>-->
              </a-form>
            </div>
          </a-tab-pane>
          <a-tab-pane key="2" title="提示引擎">
            <a-divider style="margin-bottom: 20px; margin-top: 0" />
            <a-scrollbar
              style="width: 100%; overflow: auto"
              :style="{ height: height }"
            >
              <a-form
                ref="formRef1"
                :rules="rules"
                :model="form"
                @submit="handleSubmit"
                :style="{ width: '90%', margin: '0 auto' }"
              >
                <a-form-item field="prompt_config.system" label="系统">
                  <a-textarea
                    v-model="form.prompt_config.system"
                    placeholder=""
                    style="height: 180px"
                  />
                </a-form-item>
                <a-divider style="margin: 0; margin-bottom: 10px" />
                <a-form-item label="相似度阈值">
                  <a-slider
                    v-model="form.similarity_threshold"
                    :step="0.01"
                    :min="0"
                    :max="1"
                  />
                </a-form-item>
                <a-form-item label="关键字相似度权重">
                  <a-slider
                    v-model="form.vector_similarity_weight"
                    :step="0.01"
                    :min="0"
                    :max="1"
                  />
                </a-form-item>
                <a-form-item label="Top N">
                  <a-slider v-model="form.top_n" :min="0" :max="30" />
                </a-form-item>
                <a-form-item label="Rerank模型">
                  <a-space direction="vertical" size="large">
                    <a-select
                      :size="'large'"
                      v-model="form.rerank_id"
                      placeholder="请选择 ..."
                      allow-clear
                    >
                      <a-optgroup
                        :label="index"
                        v-for="(item, index) in rankModelList"
                        :key="index"
                      >
                        <a-option
                          v-for="obj in item"
                          :key="obj.fid"
                          :disabled="!obj.available"
                          :value="obj.llm_name"
                        >
                          {{ obj.llm_name }}
                        </a-option>
                      </a-optgroup>
                    </a-select>
                  </a-space>
                </a-form-item>
                <a-form-item v-if="form.rerank_id" label="Top-K">
                  <a-slider v-model="form.top_k" :min="1" :max="2048" />
                </a-form-item>
                <a-form-item label="变量">
                  <div style="width: 100%; text-align: right">
                    <a-button
                      type="outline"
                      @click="addVariable"
                      style=""
                      size="mini"
                      shape="round"
                    >
                      新建
                    </a-button>
                  </div>
                </a-form-item>
                <a-form-item label="">
                  <a-table
                    :columns="columns"
                    :data="form.prompt_config.parameters"
                    style="width: 100%"
                  >
                    <template #name="{ record, rowIndex }">
                      <a-input v-model="record.name" placeholder="" />
                      <!--                    <a-input v-model="form.prompt_config.parameters[rowIndex].key" />-->
                    </template>
                    <template #optional="{ record }">
                      <a-switch v-model="record.optional" size="small" />
                    </template>
                    <template #action="{ record }">
                      <a-button
                        type="text"
                        @click="deleteParameters(record)"
                        style="margin-left: 0"
                        size="small"
                      >
                        <template #icon>
                          <icon-delete />
                        </template>
                      </a-button>
                    </template>
                  </a-table>
                </a-form-item>
              </a-form>
            </a-scrollbar>
          </a-tab-pane>
          <a-tab-pane key="3" title="模型设置">
            <a-divider style="margin-bottom: 20px; margin-top: 0" />
            <div style="width: 100%" :style="{ height: height }">
              <a-form
                ref="formRef2"
                :rules="rules"
                :model="form"
                @submit="handleSubmit"
                :style="{ width: '90%', margin: '0 auto' }"
              >
                <a-form-item field="llm_id" label="模型">
                  <a-space direction="vertical" size="large">
                    <a-select
                      :size="'large'"
                      field="llm_id"
                      v-model="form.llm_id"
                      style="width: 400px"
                      placeholder="请选择"
                    >
                      <template v-for="(item, index) in modelList" :key="index">
                        <a-optgroup :label="index" v-if="item.length > 0">
                          <a-option
                            v-for="obj in item"
                            :key="obj.fid"
                            :value="obj.llm_name"
                          >
                            {{ obj.llm_name }}
                          </a-option>
                        </a-optgroup>
                      </template>
                    </a-select>
                  </a-space>
                </a-form-item>
                <a-divider style="margin-bottom: 20px; margin-top: 0" />
                <a-form-item label="自由">
                  <a-select
                    default-value="2"
                    :style="{ width: '400px' }"
                    placeholder=""
                  >
                    <a-option value="1">即兴创作</a-option>
                    <a-option value="2">精确</a-option>
                    <a-option value="3">平衡</a-option>
                  </a-select>
                </a-form-item>
                <a-form-item label="温度">
                  <a-switch size="small" v-model="temperature" />
                  <a-space direction="vertical" size="large">
                    <a-slider
                      :disabled="!temperature"
                      v-model="form.llm_setting.temperature"
                      :step="0.01"
                      :min="0"
                      :max="1"
                      :style="{
                        width: '350px',
                        marginLeft: '20px',
                        display: 'flex',
                      }"
                      show-input
                    />
                  </a-space>
                </a-form-item>
                <a-form-item label="top P">
                  <a-switch size="small" v-model="top_p" />
                  <a-space direction="vertical" size="large">
                    <a-slider
                      :disabled="!top_p"
                      v-model="form.llm_setting.top_p"
                      :step="0.01"
                      :min="0"
                      :max="1"
                      :style="{
                        width: '350px',
                        marginLeft: '20px',
                        display: 'flex',
                      }"
                      show-input
                    />
                  </a-space>
                </a-form-item>
                <a-form-item label="出席处罚">
                  <a-switch size="small" v-model="presence_penalty" />
                  <a-space direction="vertical" size="large">
                    <a-slider
                      :disabled="!presence_penalty"
                      v-model="form.llm_setting.presence_penalty"
                      :step="0.01"
                      :min="0"
                      :max="1"
                      :style="{
                        width: '350px',
                        marginLeft: '20px',
                        display: 'flex',
                      }"
                      show-input
                    />
                  </a-space>
                </a-form-item>
                <a-form-item label="频率处罚">
                  <a-switch size="small" v-model="frequency_penalty" />
                  <a-space direction="vertical" size="large">
                    <a-slider
                      :disabled="!frequency_penalty"
                      v-model="form.llm_setting.frequency_penalty"
                      :step="0.01"
                      :min="0"
                      :max="1"
                      :style="{
                        width: '350px',
                        marginLeft: '20px',
                        display: 'flex',
                      }"
                      show-input
                    />
                  </a-space>
                </a-form-item>
                <a-form-item label="最大token数">
                  <a-switch size="small" v-model="max_tokens" />
                  <a-space direction="vertical" size="large">
                    <a-slider
                      :disabled="!max_tokens"
                      v-model="form.llm_setting.max_tokens"
                      :min="0"
                      :max="2048"
                      :style="{
                        width: '350px',
                        marginLeft: '20px',
                        display: 'flex',
                      }"
                      show-input
                    />
                  </a-space>
                </a-form-item>
              </a-form>
            </div>
          </a-tab-pane>
        </a-tabs>
      </a-col>
    </a-row>
  </a-modal>
</template>

<script lang="ts" setup>
  import {
    onMounted,
    onBeforeMount,
    reactive,
    ref,
    nextTick,
    onUnmounted,
    onBeforeUnmount,
  } from 'vue';
  import { kbdocumentupload, queryKbList, queryModelList } from '@/api/kbList';
  import useLoading from '@/hooks/loading';
  import { Message } from '@arco-design/web-vue';
  import { dialogSet } from '@/api/Agent';
  import EventBus from '@/utils/EventBus';
  const { loading, setLoading } = useLoading(true);
  const visible = ref(false);
  const modelList = ref({});
  const rankModelList = ref({});
  let tabs = ref([]);
  const file = ref();
  const formRef = ref();
  const formRef1 = ref();
  const formRef2 = ref();
  const activeKey = ref('1');
  const form = reactive({
    name: '',
    icon: '',
    language: 'English',
    prompt_config: {
      empty_response: '',
      prologue: '你好！ 我是你的助理，有什么可以帮到你的吗？',
      quote: true,
      self_rag: false,
      system:
        '你是一个智能助手，请总结知识库的内容来回答问题，请列举知识库中的数据详细回答。当所有知识库内容都与问题无关时，你的回答必须包括“知识库中未找到您要的答案！”这句话。' +
        '回答需要考虑聊天历史。\n        以下是知识库：\n        {knowledge}\n        以上是知识库。',
      parameters: [
        {
          index: 0,
          name: 'knowledge',
          key: 'knowledge',
          optional: false,
        },
      ],
    },
    kb_ids: [],
    llm_id: undefined,
    llm_setting: {
      temperature: 0.1,
      top_p: 0.3,
      presence_penalty: 0.4,
      frequency_penalty: 0.7,
      max_tokens: 512,
    },
    similarity_threshold: 0.2,
    vector_similarity_weight: 0.30000000000000004,
    top_n: 8,
    rerank_id: '',
    top_k: 1024,
  });
  let temperature = ref(true);
  let top_p = ref(true);
  let presence_penalty = ref(true);
  let frequency_penalty = ref(true);
  let max_tokens = ref(true);
  const httpUrl = localStorage.getItem('httpUrl');
  let avatarShow = ref(true);

  const height = ref('calc(500px)');
  const props = defineProps(['typeAngint', 'formData']);
  const emit = defineEmits(['queryList']);
  const columns = [
    {
      title: '关键字',
      dataIndex: 'name',
      slotName: 'name',
    },
    {
      title: '可选',
      dataIndex: 'optional',
      slotName: 'optional',
    },
    {
      title: '操作',
      dataIndex: 'action',
      slotName: 'action',
    },
  ];

  const formatter = (value) => {
    return `${(value / 100).toFixed(2)}`;
  };

  const uploadAction = '/api/v1/llm/upload'; // 替换为你的上传API
  const fileList = ref([]);
  const imageUrls = ref([]);

  const updateFileList = (newFileList) => {
    fileList.value = newFileList;
    console.log(newFileList, 88);
  };

  const handleSuccess = (urls) => {
    imageUrls.value = urls; // 拿到上传的图片地址
    form.icon = urls[0];
  };

  const rules = {
    'name': [
      {
        required: true,
        message: '名称不允许为空',
      },
    ],
    'prompt_config.system': [
      {
        required: true,
        message: '系统不允许为空',
      },
    ],
    'llm_id': [
      {
        required: true,
        message: '模型不能为空',
      },
    ],
    'kb_ids': [
      {
        required: true,
        message: '知识库不能为空',
      },
    ],
  };

  const handleSubmit = ({ values, errors }) => {
    console.log('values:', values, '\nerrors:', errors);
    if (!errors) {
    }
  };

  const handleClick = () => {
    visible.value = true;
  };

  const handleCancel = () => {
    visible.value = false;
    formRef.value.resetFields();
    formRef1.value.resetFields();
    formRef2.value.resetFields();
    form.name = '';
    emit('queryList');
  };

  const handleOpened = (el) => {
    // Object.assign(form,{
    //   name: '',// 用户名
    //   nameJoin: '',// 昵称
    //   post: '',// 岗位
    //   txt: '',// 备注
    // });
    activeKey.value = '1';
    formRef.value.resetFields();
    formRef1.value.resetFields();
    formRef2.value.resetFields();
    nextTick(() => {
      if (props.typeAngint == 'add') {
        form.name = '';
        form.icon = '';
        form.prompt_config.system =
          '你是一个智能助手，请总结知识库的内容来回答问题，请列举知识库中的数据详细回答。当所有知识库内容都与问题无关时，你的回答必须包括“知识库中未找到您要的答案！”这句话。' +
          '回答需要考虑聊天历史。\n        以下是知识库：\n        {knowledge}\n        以上是知识库。';
      }
      // console.log(form, '新建智能体弹窗');
      avatarShow.value = false;
      setTimeout(() => {
        avatarShow.value = true;
      }, 100);
    });
  };

  const handleBeforeOk = async (done) => {
    formRef.value.validate().then((res) => {
      // console.log('res:', res)
    });
    formRef1.value.validate().then((res) => {
      // console.log('res:', res)
    });
    formRef2.value.validate().then((res) => {
      // console.log('res:', res)
    });
    if (
      form.name &&
      form.kb_ids.length > 0 &&
      form.prompt_config.system &&
      form.llm_id
    ) {
      let title = '创建成功';
      let formNew = { ...form };
      if (formNew.rerank_id) {
        delete formNew.top_k;
      }

      if (formNew.rerank_id) {
        delete formNew.top_k;
      }

      formNew.prompt_config.parameters = form.prompt_config.parameters.map(
        (item) => {
          return {
            ...item,
            key: item.name,
          };
        }
      );

      console.log(formNew, 'formNew');

      if (props.typeAngint == 'edit') {
        formNew.dialog_id = form.id;
        delete formNew.id;
        delete formNew.off;
        title = '修改成功';
      }
      setLoading(true);
      try {
        const data = await dialogSet(formNew);
        // console.log(data, 'data');
        if (data.code == 0) {
          Message.success(title);
          handleCancel();
          EventBus.emit('queryList');
        } else {
          Message.error(data.msg);
        }
        done(true);
        setLoading(false);
      } catch (err) {
        // you can report use errorHandler or other
        setLoading(false);
      }
    } else {
      Message.warning('请填写必填项');
      done(false);
    }
  };

  const editClick = (data) => {
    visible.value = true;
    nextTick(() => {
      // console.log(props.formData,'传入数据');
      Object.assign(form, props.formData);
      console.log(form, '表单数据');
    });
  };


  const addVariable = () => {
    form.prompt_config.parameters.push({
      index: form.prompt_config.parameters.length,
      key: '',
      name: '',
      optional: true,
    });
    nextTick(() => {
      formRef.value.validate();
    });
  };

  const deleteParameters = (record) => {
    // console.log(record, 'record');
    // console.log(form.prompt_config.parameters);
    form.prompt_config.parameters = form.prompt_config.parameters.filter(
      (item) => item.index !== record.index
    );
  };

  function handleTabChange(key) {
    // 处理标签改变事件
    activeKey.value = key;
  }

  const queryModel = async (params) => {
    try {
      const data = await queryModelList(params);
      const arrObj = {};
      for (const key in data.data) {
        if (Object.hasOwnProperty.call(data.data, key)) {
          const element = data.data[key];
          arrObj[key] = element.filter((item) => item.available === true);
        }
      }
      modelList.value = arrObj;
      rankModelList.value = {
        BAAI: [data.data.BAAI[1]],
        Jina: data.data.Jina,
        youdao: data.data.youdao,
      };
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
    }
  };

  const knowledgeData = async (params = { page: 1, page_size: 20 }) => {
    setLoading(true);
    try {
      const { data } = await queryKbList(params);
      // console.log(data, 'data');
      nextTick(() => {
        tabs.value = data;
        // console.log(tabs.value, 'tabs');
      });
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };

  onBeforeMount(() => {
    queryModel({});
    knowledgeData();
  });
  onMounted(() => {});

  onBeforeUnmount(() => {});

  defineExpose({
    handleClick,
    editClick
  });

</script>
<style lang="less" scoped>
  :deep(.arco-tabs-nav-tab-list) {
    width: 100%;

    .arco-tabs-tab {
      width: 33%;

      .arco-tabs-tab-title {
        width: 100%;
        display: inline-block;
        text-align: center;
      }
    }
  }
</style>
