<template>
  <a-button type="primary" @click="handleClick" style="margin-left: 10px">
    <template #icon>
      <icon-plus />
    </template>
  </a-button>
  <a-modal
    v-model:visible="visible"
    title="创建解析块"
    @before-open="handleOpened"
    @cancel="handleCancel"
    :footer="false"
    title-align="start"
  >
    <a-form
      ref="formRef"
      :rules="rules"
      :model="form"
      @submit="handleSubmit"
      layout="vertical"
    >
      <a-form-item field="content_with_weight" label="解析块">
        <a-textarea
          v-model="form.content_with_weight"
          placeholder=""
          style="height: 100px"
          auto-size
        />
      </a-form-item>
      <a-form-item field="important_kwd_key" label="关键词 *">
        <div style="width: auto">
          <a-tag
            v-for="(item, index) in form.important_kwd"
            :key="index"
            closable
            bordered
            @close="form.important_kwd.splice(index, 1)"
            style="margin-right: 10px"
          >
            {{ item }}
          </a-tag>

          <a-input
            ref="formInput"
            v-show="keyVisible"
            v-model="form.important_kwd_key"
            placeholder=""
            size="small"
            style="width: 80px; margin-right: 16px"
            @blur="inputChange"
          />
          <a-button type="dashed" shape="circle" size="small" @click="addKey">
            <icon-plus />
          </a-button>
        </div>
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
  import { achunkCreate } from '@/api/kbList';

  const props = defineProps(['item']);
  const emit = defineEmits(['canplaythrough']);
  const visible = ref(false);
  const keyVisible = ref(false);
  const loading = ref(false);
  const form = reactive({
    content_with_weight: '',
    important_kwd: [],
    important_kwd_key: '',
  });
  const formRef = ref(null);
  const formInput = ref(null);
  const rules = {
    content_with_weight: [
      {
        required: true,
        message: '请输入值！',
      },
    ],
  };

  const handleSubmit = async ({ values, errors }) => {
    if (!errors) {
      const res = await achunkCreate({
        content_with_weight: values.content_with_weight,
        important_kwd: values.important_kwd,
        doc_id: props.item.id,
      });
      if (res.code === 0) {
        visible.value = false;
        emit('canplaythrough');
      }
    }
  };

  const handleClick = () => {
    visible.value = true;
  };
  const handleBeforeOk = (done) => {
    formRef.value.validate().then((res) => {
      console.log('form:', form);
    });
  };
  const handleCancel = () => {
    visible.value = false;
  };

  const handleOpened = (el) => {
    Object.assign(form, {
      content_with_weight: '',
      important_kwd: [],
      important_kwd_key: '',
    });
    formRef.value.resetFields();
    keyVisible.value = false;
  };

  const addKey = () => {
    form.important_kwd_key = '';
    formInput.value.focus();
    keyVisible.value = true;
  };

  const inputChange = (e) => {
    if (
      !form.important_kwd.includes(form.important_kwd_key) &&
      form.important_kwd_key
    ) {
      form.important_kwd.push(form.important_kwd_key);
    } else {
    }
    keyVisible.value = false;
  };

  onBeforeMount(() => {});
  onMounted(() => {});
</script>
