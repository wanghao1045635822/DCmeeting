<template>
  <a-modal
    v-model:visible="visible"
    title="编辑解析块"
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
          style="height: 100px;overflow: auto;"
          auto-size
        />
      </a-form-item>
      <a-form-item field="important_kwd_key" label="关键词 *">
        <div style="width: auto">
          <a-tag
            v-for="(item, index) in form.important_kwd"
            :key="item"
            closable
            bordered
            @close="deleteKey(item)"
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

<!--      <div>-->
<!--        <a-divider style="margin: 10px 0" />-->
<!--        <a-switch size="small" />-->
<!--        <span style="color: var(&#45;&#45;color-text-2)">启用</span>-->
<!--        <a-button type="text" style="color: var(&#45;&#45;color-text-2)">-->
<!--          <template #icon>-->
<!--            <icon-delete />-->
<!--          </template>-->
<!--          删除-->
<!--        </a-button>-->
<!--      </div>-->
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
import { onMounted, onBeforeMount, reactive, ref, nextTick } from "vue";
import { achunkCreate, achunkSet } from "@/api/kbList";

  const props = defineProps(['item']);
  const visible =defineModel('eidtDilVisible');
  const emit = defineEmits(['canplaythrough']);
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
      const res = await achunkSet({
        content_with_weight: values.content_with_weight,
        important_kwd: values.important_kwd,
        doc_id: props.item.doc_id,
        chunk_id: props.item.chunk_id,
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
    console.log(props.item);
    nextTick(()=>{
      Object.assign(form, props.item);
      console.log(form.important_kwd);
    })
    formRef.value.resetFields();
    keyVisible.value = false;
  };

  const deleteKey = (row) => {
    console.log(form.important_kwd);
    console.log(row);
    // form.important_kwd.splice(index, 1);
    form.important_kwd = form.important_kwd.filter((item) => item !== row);
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
