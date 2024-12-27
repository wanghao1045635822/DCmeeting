<template>
  <a-button
    v-hasPermi="'/kb/create'"
    type="primary"
    @click="handleClick"
    style="margin-left: 10px"
  >
    <template #icon>
      <icon-plus />
    </template>
  </a-button>
  <a-modal
    v-model:visible="visible"
    title="创建知识库"
    @before-open="handleOpened"
    @cancel="handleCancel"
    :footer="false"
    title-align="start"
  >
    <a-form ref="formRef" :rules="rules" :model="form" @submit="handleSubmit">
      <a-form-item field="name" label="名称">
        <a-input v-model="form.name" placeholder="请输入名称" />
      </a-form-item>
      <a-form-item>
        <div style="width: 100%; text-align: right">
          <a-button @click="visible = false">取消</a-button>
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
  import { kbcreate } from '@/api/kbList';
  import { Message } from '@arco-design/web-vue';

  const visible = ref(false);
  const form = reactive({
    name: '', // 用户名
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

  const emit = defineEmits(['getknowledge', 'getKbdetail']);

  const handleSubmit = async ({ values, errors }) => {
    if (errors) return;
    let data = await kbcreate({
      name: values.name,
    });
    if (data.code == 0) {
      visible.value = false;
      Message.success('创建成功');
      // emit('getKbdetail',data.data.kb_id);
      emit('getknowledge', data.data.kb_id);
    }
  };

  const handleClick = () => {
    visible.value = true;
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
    visible.value = false;
  };

  const handleOpened = (el) => {
    Object.assign(form, {
      name: '', // 用户名
    });
    formRef.value.resetFields();
  };

  onBeforeMount(() => {});
  onMounted(() => {});
</script>
