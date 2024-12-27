<template>
  <a-button type="primary" @click="handleClick" style="margin-left: 10px">
    <template #icon>
      <icon-plus />
    </template>
  </a-button>
  <a-modal
    v-model:visible="visible"
    title="添加模式"
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
      <a-form-item field="name" label="模型类型">
        <a-select v-model="form.section" placeholder="请选择">
          <a-option value="section one">Section One</a-option>
          <a-option value="section two">Section Two</a-option>
          <a-option value="section three">Section Three</a-option>
        </a-select>
      </a-form-item>
      <a-form-item field="name" label="模型名称">
        <a-input v-model="form.name" placeholder="请输入名称" />
      </a-form-item>
      <a-form-item field="section" label="模型图片">
        <a-space direction="vertical" :style="{ width: '100%' }">
          <a-upload
            action="/"
            :fileList="file ? [file] : []"
            :show-file-list="false"
            @change="onChange"
            @progress="onProgress"
          >
            <template #upload-button>
              <div
                :class="`arco-upload-list-item${
                  file && file.status === 'error'
                    ? ' arco-upload-list-item-error'
                    : ''
                }`"
              >
                <div
                  class="arco-upload-list-picture custom-upload-avatar"
                  v-if="file && file.url"
                >
                  <img :src="file.url" />
                  <div class="arco-upload-list-picture-mask">
                    <IconEdit />
                  </div>
                  <a-progress
                    v-if="file.status === 'uploading' && file.percent < 100"
                    :percent="file.percent"
                    type="circle"
                    size="mini"
                    :style="{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transform: 'translateX(-50%) translateY(-50%)',
                    }"
                  />
                </div>
                <div class="arco-upload-picture-card" v-else>
                  <div class="arco-upload-picture-card-text">
                    <IconPlus />
                    <div style="margin-top: 10px; font-weight: 600">上传</div>
                  </div>
                </div>
              </div>
            </template>
          </a-upload>
        </a-space>
      </a-form-item>
      <a-form-item field="name" label="基础Url">
        <a-input v-model="form.name" placeholder="请输入名称" />
      </a-form-item>
      <a-form-item field="raptor" label="是否支持 Vision">
        <a-switch v-model="form.raptor" />
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

  const visible = ref(false);
  const loading = ref(false);
  const form = reactive({
    size: "medium",
    name: "",
    age: undefined,
    section: "0",
    province: "haidian",
    options: [],
    date: "",
    time: "",
    radio: "radio one",
    slider: 5,
    score: 5,
    switch: false,
    multiSelect: ["section one"],
    treeSelect: "",
    raptor: false,
    prompt: '请总结以下段落。 小心数字，不要编造。 段落如下：\n' +
      '      {cluster_content}\n' +
      '以上就是你需要总结的内容。',
  });
  const formRef = ref(null);

  const rules = {
    name: [
      {
        required: true,
        message:'名称不允许为空',
      },
    ],
  }


  const handleSubmit = ({values, errors}) => {
    console.log('values:', values, '\nerrors:', errors)
  }

  const handleClick = () => {
    visible.value = true;
  };
  const handleBeforeOk = (done) => {
      formRef.value.validate().then(res => {
        console.log('form:', form)
        if (!form.name) {
          done(false)
        }else {
          console.log('请求数据');
        }
      })
  };
  const handleCancel = () => {
    visible.value = false;
  }

  const handleOpened =(el) => {
    Object.assign(form,{
      name: '',// 用户名
      nameJoin: '',// 昵称
      post: '',// 岗位
      txt: '',// 备注
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
        nameJoin: '', // 昵称
        post: '', // 岗位
        txt: '', // 备注
      });
      formRef.value.resetFields();
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

    onBeforeMount(() => {});
    onMounted(() => {});
</script>
