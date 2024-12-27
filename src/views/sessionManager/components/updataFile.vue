<template>
  <a-popover title="" trigger="click" position="tl">
    <a-button
      :disabled="onFileSelectedLoading"
      type="text"
      style="border-radius: 24px"
    >
      <icon-attachment
        size="28"
        style="color: #0960bd"
      />
    </a-button>
    <template #title>
      <div style="display: flex; justify-content: space-between">
        <div>上传文件</div>
        <div>
          <icon-upload />
        </div>
      </div>
    </template>
    <template #content>
      <a-upload
        draggable
        action="/"
        style="width: 100%"
        :auto-upload="false"
        ref="uploadRef"
        @change="onChange"
        multiple
      />
      <div style="width: 100%;margin-top: 10px;display: flex; justify-content: space-between;">
        <div>
          <span>解析方法: </span>
          <a-radio-group v-model="parser_id">
            <a-radio
              v-for="item in parser_ids"
              :key="item.value"
              :value="item.value"
              style="margin-right: 10px"
            >{{item.name}}</a-radio>
          </a-radio-group>
        </div>
        <a-button
          :disabled="chatDis"
          @click="upDataFile"
          type="primary"
          size="mini"
          style="border-radius: 24px;"
        >
          <span style="font-size: 12px;">
            上传
          </span>
        </a-button>
      </div>
    </template>
  </a-popover>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeMount, reactive, ref, computed, watch } from "vue";
import axios from "axios";
import { Message } from "@arco-design/web-vue";
import { uploadWithoutKb } from "@/api/session";

const visible = ref(false);
const loading = ref(false);
const chatDis = ref(false);
const directory = ref(false);
const formRef = ref(null);
const onFileSelectedLoading = ref(false);
const parser_id = ref("");
const parser_ids = ref([]);
const uploaditemList = ref([]);
const activeSessionId = ref('');
let kbtenantInfo = reactive({
  asr_id: 'paraformer-realtime-8k-v1',
  embd_id: 'BAAI/bge-large-zh-v1.5',
  img2txt_id: 'qwen-vl-max',
  llm_id: 'qwen-plus',
  name: 'wanghaos Kingdom',
  parser_ids:
    'naive:General,qa:Q&A,resume:Resume,manual:Manual,table:Table,paper:Paper,book:Book,laws:Laws,presentation:Presentation,picture:Picture,one:One',
  rerank_id: 'BAAI/bge-reranker-v2-m3',
  role: 'owner',
  tenant_id: '948fc6fa41ab11ef8fb80242ac120004',
  parser_idObj: {},
});
const uploadList = ref([]);
const parser = reactive({
  naive: {
    "chunk_token_num": 676,
    "layout_recognize": true,
    "raptor": {
      "use_raptor": true,
      "prompt": "请总结以下段落。 小心数字，不要编造。 段落如下：\n      {cluster_content}\n以上就是你需要总结的内容。",
      "max_token": 600,
      "threshold": 0.32,
      "max_cluster": 233,
      "random_seed": 1500
    }
  }, // 用户名

});
const props = defineProps(["sessionId"]);
const emit = defineEmits(["changeFetchData"]);
const uploadRef = ref();
const files = ref([]);
const filesArr = ref([]);
const acceptNameList = computed(() => {
  return ".word, .pdf, .ppt, .excel, .txt, .zip, .rar, .7z, .doc, .docx, .xls, .xlsx, .pptx, .ppt, .pdf, .mp4, .avi, .mp3,.wav, .wma, .wmv, .rm,";
});

const init = () => {
  parser_ids.value = kbtenantInfo.parser_ids.split(",").map((item) => {
    const [value1, value2] = item.split(":");
    return {
      name: value2,
      value: value1
    };
  });
}

const onChange = (fileList) => {
  files.value = fileList;
};


const upDataFile = () => {
  console.log(files.value, "files");
  console.log(parser_ids.value, "解析方法");

  uploaditemList.value = files.value.map((item)=>{
    // filesArr.value.push(item.file);
    return {
      name: item.name,
      size: (item.file.size/1024).toFixed(2) + 'K',
    }
  })


  onFileSelectedLoading.value = true;
  const formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    formData.append('file', files[i], files[i].name);
  }
  formData.append('file', filesArr.value);
  formData.append('conversation_id', activeSessionId.value);
  // formData.append('parser_id', parser_id.value);
  // formData.append('conversation_id', activeSessionId.value);
  uploadWithoutKb(formData).then((res) => {
    // console.log(res);
    if (res.code == 200) {
      // console.log(res);
      // console.log(uploaditemList.value);
      // onFileSelectedLoading.value = false;
      // fileInput.value.value = '';
      // uploaditemList.value = [];
      // Message.success('上传成功');
    } else {
      // Message.error('上传失败');
    }
  });



};


onBeforeMount(() => {
  init();



});
onMounted(() => {
});

watch(
  ()=>props.sessionId,
  (value, oldValue)=>{
     activeSessionId.value = value;
  }
)


</script>

<style scoped lang="less">
.aUpload {
  width: 100%;
  max-height: 500px;
  overflow: hidden;
  overflow-y: auto;
}
</style>
