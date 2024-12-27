<template>
  <a-button
    v-if="typeAngint == 'edit'"
    type="text"
    size="small"
    @click="editClick"
  >
    <template #icon>
      <icon-tool />
    </template>
  </a-button>
  <!--  <a-button v-if="typeAngint=='add'" style="margin-left: 10px" type="primary" @click="handleClick">确定</a-button>-->
  <a-modal
    v-model:visible="visible"
    title=""
    @before-open="handleOpened"
    @cancel="handleCancel"
    :footer="false"
    title-align="start"
    fullscreen
  >
  <div class="main-container">
    <div class="main-container-lf">
      <div style="padding: 10px;font-size: 16px;background: var(--color-neutral-3);">智能体配置</div>
      <div style="display: flex;width: 100%;" :style="{height:height}">
        <div style="width: 50%;height: 100%">
          <div style="padding: 10px;font-size: 12px;color: #2a2a2b;">智能体画像</div>
          <div>
            <a-textarea v-model="system" placeholder="" disabled style="height: 400px;"  />
          </div>

        </div>
        <div style="width: 50%;border: 1px solid var(--color-neutral-3);background:  var(--color-neutral-3)">
          <a-form ref="formRef" :rules="rules" :model="form" @submit="handleSubmit"  layout="vertical" >
            <a-collapse :default-active-key="['1']">
              <a-collapse-item header="基础信息" key="0" v-if="typeAngint == 'edit'">
                <a-input v-model="form.name" placeholder="请输入智能体名称"  style="width:200px;margin-top: 10px" />
              </a-collapse-item>
              <a-collapse-item header="AI模型配置" key="1">
                <a-form-item field="llm_id" label="模型">
                  <a-space direction="vertical" size="large">
                    <a-select :size="'large'" field="llm_id" v-model="form.llm_id" :style="{width:'25rem'}" placeholder="请选择 ...">
                      <a-optgroup
                        :label="index"
                        v-for="(item, index) in modelList"
                        :key="index"
                      >
                        <a-option
                          v-for="obj in item"
                          :key="obj.fid"
                          :disabled="!obj.available"
                          :value="obj.llm_id"
                        >
                          {{ obj.llm_name }}
                        </a-option>
                      </a-optgroup>
                    </a-select>
                  </a-space>
                </a-form-item>
                </a-collapse-item>
                <a-collapse-item header="开场引导" :key="'2'" disabled>
                </a-collapse-item>
                <a-collapse-item  header="知识库" key="3">
                  <a-form-item field="kb_ids" label="知识库">
                    <a-select
                      v-model="form.kb_ids"
                      :style="{ width: '25rem' }"
                      placeholder="请选择 ..."
                      multiple
                    >
                      <a-option
                        v-for="item in tabs"
                        :key="item.id"
                        :value="item.id"
                      >{{ item.name }}</a-option
                      >
                    </a-select>
                  </a-form-item>
                </a-collapse-item>
                <a-collapse-item header="工具" key="4" disabled>
                </a-collapse-item>
                <a-collapse-item header="工作流" key="5" disabled>
                </a-collapse-item>
              </a-collapse>

              <a-form-item>
                <div
                  style="
                    position: absolute;
                    right: 10px;
                    top: 0px;
                    z-index: 99999;
                  "
                >
                  <!--                <a-button @click="visible = false">取消</a-button>-->
                  <a-button
                    style="margin-left: 10px"
                    type="primary"
                    html-type="submit"
                    >保存</a-button
                  >
                </div>
              </a-form-item>
            </a-form>
          </div>
        </div>
      </div>
      <div class="main-container-rt">
        <sessionAction></sessionAction>
      </div>
    </div>
  </a-modal>
</template>

<script lang="ts" setup>
  import { onMounted, onBeforeMount, reactive, ref, nextTick } from 'vue';
  import { IconSend } from '@arco-design/web-vue/es/icon';
  import { queryKbList, queryModelList } from '@/api/kbList';
  import useLoading from '@/hooks/loading';
  import { dialogSet } from '@/api/Agent';
  import { Message } from '@arco-design/web-vue';
  import EventBus from "@/utils/EventBus";
  import sessionAction  from "@/views/dmx/IntelligentAgent/components/sessionAction.vue";
  const { setLoading } = useLoading(true);
  const props = defineProps(['typeAngint', 'formData']);
  const visible = ref(false);
  const loading = ref(false);
  const form = reactive({
    name: '',
    icon: '',
    language: 'English',
    prompt_config: {
      empty_response: '',
      prologue: '你好！ 我是你的助理，有什么可以帮到你的吗？',
      quote: true,
      self_rag: true,
      system:
        '示例：\n' +
        '你是 XX，具有 XX 经验，擅长 XX，…\n' +
        '你的任务是 XX ，需要按照以下步骤执行：\n' +
        '1. XX\n' +
        '2. XX\n' +
        '3. …\n' +
        '{knowlege}',
      parameters: [
        {
          key: 'knowledge',
          optional: false,
        },
      ],
    },
    kb_ids: [],
    llm_id: 'qwen-plus',
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
  });
  const system = ref('');
  const embdId = ref('');
  const modelList = ref({});
  const renderData = ref([]);
  const formRef = ref(null);
  let tabs = ref([]);
  const height = ref('calc(100vh - 150px)');
  const emit = defineEmits(['cancelModal']);
  const rules = {
    name: [
      {
        required: true,
        message: '名称不允许为空',
      },
    ],
    llm_id: [
      {
        required: true,
        message: '模型不能为空',
      },
    ],
    kb_ids: [
      {
        required: true,
        message: '知识库不能为空',
      },
    ],
  };

  const handleSubmit = async ({ values, errors }) => {
    // console.log('values:', values, '\nerrors:', errors)
    if(!errors){
      let title = '创建成功';
      let formNew = { ...form };
      if (props.typeAngint == 'edit') {
        formNew.dialog_id = form.id;
        delete formNew.id;
        delete formNew.off;
        title = '修改成功';
      }
      const data = await dialogSet(formNew);
      if (data.code == 0) {
        Message.success(title);
        handleCancel();
        EventBus.emit('queryList');
      }
    }
  };

  const editClick = (data) => {
    visible.value = true;
    console.log(props.formData);
    Object.assign(form, props.formData);
    console.log(form);
    system.value = form.prompt_config.system;
  };

  const handleClick = (data) => {
    visible.value = true;
    nextTick(() => {
      Object.assign(form, data);
      console.log(form,'传值');
      system.value = form.prompt_config.system;
      if(tabs.value && tabs.value.length>0){
        form.kb_ids = [tabs.value[0].id];
      }
    });
  };
  defineExpose({
    handleClick,
  });
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
    visible.value = false;
    emit('cancelModal');
  };

  const handleOpened = (el) => {
    // formRef.value.resetFields();
  };
  const queryModel = async (params) => {
    try {
      const data = await queryModelList(params);
      // console.log(data.data, '大模型列表');
      modelList.value = data.data;
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
    }
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

  const knowledgeData = async (params = { page: 1, page_size: 20 }) => {
    setLoading(true);
    try {
      const { data } = await queryKbList(params);
      console.log(data, 'data');
      nextTick(() => {
        tabs.value = data;
        console.log(tabs.value, 'tabs');
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
</script>

<style scoped lang="less">
  .main-container {
    width: 100%;
    display: flex;
    .main-container-lf {
      width: 60%;
    }
    .main-container-rt {
      position: relative;
      width: 40%;
    }
  }
  .bottom {
    width: 100%;
    position: absolute;
    bottom: 40px;
    left: 0;
    .input {
      margin-left: 20%;
      width: 60%;
    }
    .text {
      margin-left: 40%;
      font-size: 12px;
      color: lightgrey;
      line-height: 40px;
    }
  }
  :deep(.arco-textarea-wrapper.arco-textarea-disabled){
      background: var(--color-bg-2);
      color: var(--color-text-1);
  }
</style>
