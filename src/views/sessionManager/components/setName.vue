
<template>
  <a-button
    type="text"
    class="button"
    style="color: #2a2a2b"
    @click="handleClick()"
  >
    <template #icon>
      <icon-edit />
    </template>
    修改名称
  </a-button>
  <a-modal v-model:visible="visible" title="修改名称" @before-open="handleOpened" @cancel="handleCancel" :footer="false" title-align="start">
    <a-form ref="formRef" :rules="rules" :model="form" @submit="handleSubmit" >
      <a-form-item field="name" label="名称">
        <a-input v-model="form.name" placeholder="请输入名称"/>
      </a-form-item>
      <a-form-item>
        <div style="width: 100%;text-align: right">
          <a-button @click="visible = false">取消</a-button>
          <a-button style="margin-left: 10px" type="primary" html-type="submit">确定</a-button>
        </div>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeMount, reactive, ref, watch } from "vue";
import { Message } from '@arco-design/web-vue';
import { addSessionApi, getSessionDetailsApi } from "@/api/session";

const visible = ref(false);
const form = reactive({
  name: '',// 用户名
});
const formRef = ref(null);
const chatObj = reactive({})
const rules = {
  name: [
    {
      required: true,
      message:'名称不允许为空',
    },
  ],
}


const emit =  defineEmits(['queryNewSessionDetail'])
const props = defineProps(['activeSessionId'])

const handleSubmit = async({values, errors}) => {
  if(errors) return;
  chatObj.name = form.name;

  const { code, data } = await addSessionApi(chatObj);
  if (data) {
    Message.success("修改成功");
    handleCancel()
    emit('queryNewSessionDetail',props.activeSessionId);
  }
}

const handleClick = () => {
  visible.value = true;
};
const handleCancel = () => {
  visible.value = false;
}

const handleOpened =(el) => {
  // Object.assign(form,{
  //   name: '',// 用户名
  // });
  // formRef.value.resetFields();
}


const getSessionDetails = async ()=>{
  const res = await getSessionDetailsApi(props.activeSessionId);
  Object.assign(chatObj, res.data);
  console.log(chatObj, "修改名称");
  form.name = chatObj.name;
}

onBeforeMount(()=>{
  getSessionDetails();
})
onMounted(()=>{


})
</script>