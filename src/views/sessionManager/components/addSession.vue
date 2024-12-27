<script setup lang="ts">
  import { defineProps, ref, watch, defineEmits, onMounted } from 'vue';
  import { Message } from '@arco-design/web-vue';
  import { addSessionApi, getDialogListApi } from '@/api/session';
  const props = defineProps({
    modalObj: Object,
    dialogId: String,
  });
  const conversation = ref({ dialog_id: '', conversation_desc: '' });
  const dialogList = ref([]);
  const emit = defineEmits(['addSession']);
  const queryDialogList = async () => {
    const { code, data } = await getDialogListApi();
    if (code === 200) {
      dialogList.value = data;
      conversation.value.dialog_id = data[0].id;
    }
  };

  const rules = {
    dialog_id: [
      {
        required: true,
        message: '智能助手不能为空',
      },
    ],
    // conversation_desc: [
    //   {
    //     required: true,
    //     message: '描述不能为空',
    //   },
    // ],
  };
  onMounted(() => {
    queryDialogList();
  });
  const formRef = ref();
  const handleOk = () => {
    formRef.value.validate().then(async (res) => {
      if (!res) {
        if (!conversation.value.conversation_desc) {
          conversation.value.conversation_desc = '未命名会话';
        }

        const { code } = await addSessionApi({ ...conversation.value });
        if (code === 200) {
          Message.success('添加成功');
          emit('addSession');
          setTimeout(() => {
            props.modalObj.add = false;
          }, 500);
        } else {
          Message.warning('添加失败');
        }
      }
    });

    return false;
  };
  const destroyData = () => {
    formRef.value.resetFields();
  };
  // const conversation_desc = ref('');

  // watch(
  //   () => conversation.value.dialog_id,
  //   (newVal) => {
  //     conversation.value.conversation_desc = dialogList.value.find(
  //       (item) => item.id === newVal
  //     )?.name;
  //   }
  // );

  watch(
    () => props.dialogId,
    (newVal, oldVal) => {
      conversation.value.dialog_id = newVal;
    }
  );
</script>

<template>
  <div>
    <a-modal
      v-model:visible="modalObj.add"
      @before-ok="handleOk"
      @cancel="modalObj.add = false"
      @before-close="destroyData"
    >
      <template #title> 新增会话 </template>
      <a-form ref="formRef" :model="conversation" :rules="rules">
        <a-form-item label="助手关联:" field="dialog_id">
          <a-select
            style="width: 80%"
            v-model="conversation.dialog_id"
            placeholder="请选择关联助手"
            disabled
          >
            <a-option
              v-for="dialog in dialogList"
              :key="dialog.id"
              :value="dialog.id"
              >{{ dialog.name }}</a-option
            >
          </a-select>
        </a-form-item>
        <a-form-item label="名字:">
          <a-textarea
            placeholder="请输入名字"
            :max-length="100"
            show-word-limit
            :auto-size="{ minRows: 4, maxRows: 5 }"
            v-model="conversation.conversation_desc"
            style="width: 80%"
          ></a-textarea>
          <!-- <a-input
            placeholder="关联助手名字"
            disabled
            v-model="conversation.conversation_desc"
            style="width: 80%"
          ></a-input> -->
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<style scoped lang="scss"></style>
