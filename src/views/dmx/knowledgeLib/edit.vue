<template>
  <a-button
    type="text"
    v-hasPermi="'/kb/rename'"
    :disabled="props.item.run == '1'"
    @click="handleClick"
    size="small"
  >
    <template #icon>
      <icon-edit />
    </template>
  </a-button>
  <a-modal
    v-model:visible="visible"
    title="重命名"
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
  import { kbdocumentrename, kbdocumentrm } from '@/api/kbList';
  import { Message } from '@arco-design/web-vue';

  const visible = ref(false);
  const loading = ref(false);
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

  const props = defineProps(['item']);

  const emit = defineEmits(['upTabdateItem']);

  const handleSubmit = async ({ values, errors }) => {
    if (errors) return;
    let data = await kbdocumentrename({
      doc_id: props.item.id,
      name: form.name,
    });
    if (data.code == 0) {
      Message.success('操作成功');
      visible.value = false;
      emit('upTabdateItem', props.item.id, form.name);
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
    console.log(props.item, 'props.item');
    Object.assign(form, props.item);
    // formRef.value.resetFields();
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
