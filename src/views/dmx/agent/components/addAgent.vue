<template>
  <!--  <a-button type="primary" @click="handleClick" style="margin-left: 10px">-->
  <!--    <template #icon>-->
  <!--      <icon-plus />-->
  <!--    </template>-->
  <!--  </a-button>-->
  <a-modal
    v-model:visible="visible"
    title="创建智能体"
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
      <a-form-item field="name" label="智能体名称">
        <a-input v-model="form.name" placeholder="请输入名称" />
      </a-form-item>
      <a-form-item label="你希望智能体的角色是什么，具体完成什么任务？">
        <a-textarea
          v-model="form.prompt_config.system"
          placeholder=""
          style="height: 180px"
        />
      </a-form-item>
      <a-form-item>
        <div style="width: 100%; text-align: right">
          <a-button @click="visible = false">取消</a-button>
          <a-button style="margin-left: 10px" type="primary" html-type="submit"
            >确定</a-button
          >
          <editAgent
            ref="editAgentKuai"
            typeAngint="add"
            :formData="form"
            @cancelModal="handleCancel"
          ></editAgent>
        </div>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts" setup>
  import { onMounted, onBeforeMount, reactive, ref } from 'vue';
  import editAgent from '@/views/dmx/IntelligentAgent/components/editAgent.vue';

  const visible = ref(false);
  const loading = ref(false);
  const editAgentKuai = ref();
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
        '3. …\n',
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
  const formRef = ref(null);

  const rules = {
    name: [
      {
        required: true,
        message: '名称不允许为空',
      },
    ],
  };

  const handleSubmit = ({ values, errors }) => {
    console.log('values:', values, '\nerrors:', errors);
    if (!errors) {
      editAgentKuai.value.handleClick(form);
    }
  };

  const handleClick = () => {
    visible.value = true;
  };
  defineExpose({
    handleClick,
  });

  const handleCancel = () => {
    visible.value = false;
    formRef.value.resetFields();
    form.name = '';
  };

  const handleOpened = (el) => {
    // Object.assign(form,{
    //   name: '',// 用户名
    //   nameJoin: '',// 昵称
    //   post: '',// 岗位
    //   txt: '',// 备注
    // });
    formRef.value.resetFields();
    form.name = '';
    form.prompt_config.system =
      '示例：\n' +
      '你是 XX，具有 XX 经验，擅长 XX，…\n' +
      '你的任务是 XX ，需要按照以下步骤执行：\n' +
      '1. XX\n' +
      '2. XX\n' +
      '3. …\n'+
      '{knowledge}';
  };

  const file = ref();

  onBeforeMount(() => {});
  onMounted(() => {});
</script>
