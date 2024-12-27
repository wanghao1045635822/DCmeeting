<template>
  <div class="main-container">
    <div style="position: absolute;top: 0;left: 0;width: 100%;padding: 0 20px">
      <h4 style="margin-bottom: 10px"></h4>
      <div style="color: #666666;">在这里更新您的知识库详细信息，尤其是解析方法。</div>
      <a-divider style="margin-top: 20px" />
    </div>
    <div class="main-container-lf">
      <div class="main-container-lf-down">
        <a-form ref="formRef" :rules="rules" :model="form" :style="{width:'100%'}" layout="vertical"
                @submit="handleSubmit">
          <a-form-item field="name" label="知识库名称">
            <a-input v-model="form.name" placeholder="请输入" />
          </a-form-item>
          <a-form-item field="section" label="知识库图片">
            <a-space direction="vertical" :style="{ width: '100%' }">
              <a-upload
                :auto-upload="false"
                :fileList="file ? [file] : []"
                :show-file-list="false"
                @change="onChange"
                @progress="onProgress"
              >
                <template #upload-button>
                  <div
                    :class="`arco-upload-list-item${
                      file && file.status === 'error' ? ' arco-upload-list-item-error' : ''
                    }`"
                  >
                    <div
                      class="arco-upload-list-picture custom-upload-avatar"
                      v-if="file && file.url"
                    >
                      <img :src="form.avatar" />
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
          <a-form-item field="section" label="描述">
            <a-textarea placeholder=""  v-model="form.description" allow-clear />
          </a-form-item>
<!--          <a-form-item field="section" label="语言" :rules="[{match:/section one/,message:'请选择'}]">-->
<!--            <a-select v-model="form.section" placeholder="请选择" allow-clear>-->
<!--              <a-option value="0">中文</a-option>-->
<!--              <a-option value="1">英文</a-option>-->
<!--            </a-select>-->
<!--          </a-form-item>-->
          <a-form-item field="embd_id" label="嵌入模型">
            <a-space direction="vertical" size="large">
              <a-select :size="'large'" v-model="form.embd_id" :style="{width:'100%'}" placeholder="请选择 ..." :disabled="kbObj.chunk_num==0 && kbObj.token_num==0" allow-clear>
                <a-optgroup  :label="index" v-for="(item,index) in modelList" :key=index>
                  <a-option
                    v-for="(obj) in item"
                    :key='obj.fid'
                    :value="obj.llm_name"
                  >
                    {{obj.llm_name}}
                  </a-option>
                </a-optgroup>
              </a-select>
            </a-space>
          </a-form-item>
          <a-form-item field="parser_id" label="解析方法">
            <a-select v-model="form.parser_id" placeholder="请选择" :disabled="kbObj.chunk_num==0 && kbObj.token_num==0" allow-clear>
              <a-option v-for="item in parser_ids" :key="item.value" :label="item.name" :value="item.value"></a-option>
            </a-select>
          </a-form-item>
          <a-form-item field="slider" label="块Token数">
            <a-slider v-model="form.chunk_token_num" :min="0" :max="2048"  show-input />
          </a-form-item>
          <a-form-item  label="布局识别" >
            <a-space direction="vertical">
              <a-switch v-model="form.layout_recognize" size="small" />
            </a-space>
          </a-form-item>
          <a-form-item field="raptor" label="使用召回增强RAPTOR策略">
            <a-space direction="vertical" >
              <a-switch v-model="form.use_raptor" size="small" />
            </a-space>
          </a-form-item>
          <div v-if="form.use_raptor">
            <a-form-item field="prompt" label="提示词">
              <a-textarea
                v-model="form.prompt"
                style="height: 10rem;border: 1px solid  var(--color-fill-3);border-radius: 4px" placeholder="请填写提示词"  />
            </a-form-item>
            <a-form-item field="slider" label="最大token数">
              <a-slider v-model="form.max_token" :min="0" :max="2048" show-input/>
            </a-form-item>
            <a-form-item field="slider" label="阈值" >
              <a-slider v-model="form.threshold"  :step="0.01" :min="0" :max="1"  show-input/>
            </a-form-item>
            <a-form-item field="slider" label="最大聚类数">
              <a-slider v-model="form.max_cluster" :min="1" :max="1024" show-input/>
            </a-form-item>
            <a-form-item field="slider" label="随机种子" v-model="form.random_seed">
              <a-input-number v-model="form.random_seed" :style="{width:'300px',marginRight:'1rem',borderRadius:'4px'}"
                              placeholder="请输入" class="input-demo" :min="10" :max="100" />
              <a-button type="primary" @click="randomNumber">
                <icon-plus />
              </a-button>
            </a-form-item>

          </div>


          <a-form-item>
            <div style="width: 100%;text-align: right">
              <a-space>
                <a-button @click="cancelConfig">取消</a-button>
                <a-button type="primary" html-type="submit">保存</a-button>
              </a-space>
            </div>
          </a-form-item>
        </a-form>
      </div>
    </div>
    <div class="main-container-rt">
      <section data-inspector-line="34" data-inspector-column="4"
               data-inspector-relative-path="src\pages\add-knowledge\components\knowledge-setting\category-panel.tsx"
               class="categoryPanelWrapper___yI4rY"><h4
        class="ant-typography topTitle___tNiB9 css-dev-only-do-not-override-1wxecgq" data-inspector-line="37"
        data-inspector-column="10"
        data-inspector-relative-path="src\pages\add-knowledge\components\knowledge-setting\category-panel.tsx">"General"
        分块方法说明</h4>
        <p data-inspector-line="40" data-inspector-column="10"
           data-inspector-relative-path="src\pages\add-knowledge\components\knowledge-setting\category-panel.tsx"><p>
          支持的文件格式为<b>DOCX、EXCEL、PPT、IMAGE、PDF、TXT</b>。</p>
          <p>此方法将简单的方法应用于块文件：</p>
          <p>
          </p>
          <li>系统将使用视觉检测模型将连续文本分割成多个片段。</li>
          <li>接下来，这些连续的片段被合并成Token数不超过“Token数”的块。</li>
          <p></p></p>
        <h4 class="ant-typography css-dev-only-do-not-override-1wxecgq" data-inspector-line="45"
            data-inspector-column="10"
            data-inspector-relative-path="src\pages\add-knowledge\components\knowledge-setting\category-panel.tsx">
          "General" 示例</h4><span class="ant-typography css-dev-only-do-not-override-1wxecgq" data-inspector-line="48"
                                   data-inspector-column="10"
                                   data-inspector-relative-path="src\pages\add-knowledge\components\knowledge-setting\category-panel.tsx">提出以下屏幕截图以促进理解。</span>
        <div data-inspector-line="49" data-inspector-column="10"
             data-inspector-relative-path="src\pages\add-knowledge\components\knowledge-setting\category-panel.tsx"
             class="ant-row imageRow___C3Xpb css-dev-only-do-not-override-1wxecgq"
             style="margin-left: -5px; margin-right: -5px; row-gap: 10px;display: flex; margin-top: 20px;width: 100%">
          <img
            data-inspector-line="32" data-inspector-column="8"
            data-inspector-relative-path="src\components\svg-icon.tsx" src="../../../assets/images/step1.png" alt=""
            width="50%">
          <img
            data-inspector-line="32" data-inspector-column="8"
            data-inspector-relative-path="src\components\svg-icon.tsx" src="../../../assets/images/step2.png" alt=""
            width="50%">
        </div>
        <h4 class="ant-typography css-dev-only-do-not-override-1wxecgq" data-inspector-line="60"
            data-inspector-column="10"
            data-inspector-relative-path="src\pages\add-knowledge\components\knowledge-setting\category-panel.tsx">
          General 对话示例</h4>
        <div class="ant-divider css-dev-only-do-not-override-1wxecgq ant-divider-horizontal" data-inspector-line="63"
             data-inspector-column="10"
             data-inspector-relative-path="src\pages\add-knowledge\components\knowledge-setting\category-panel.tsx"
             role="separator"></div>
        <a-divider style="margin-top: 20px" />
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeMount, reactive, ref } from "vue";
import { Message } from "@arco-design/web-vue";
import { queryModelList,kbUpdate } from "@/api/kbList";
import message from "@arco-design/web-vue/es/message";
import useLoading from "@/hooks/loading";
const { loading,setLoading } = useLoading(true);

const props =  defineProps(['kbtenantInfo'])
const emit =  defineEmits(['cancleConfig','saveConfig'])
// 解析方法列表
let parser_ids = props.kbtenantInfo.parser_ids.split(",").map((item) => {
  const [value1, value2] = item.split(":");
  return {
    name: value2,
    value: value1
  };
});

let kbObj = reactive({});

const form = reactive({
  name: kbObj.name,
  avatar: '',//
  max_token: 600,
  threshold: 0.32,
  max_cluster: 233,
  random_seed: 1500,
  chunk_token_num: 384,
  use_raptor: false,
  pages: {},
  prompt: "请总结以下段落。 小心数字，不要编造。 段落如下：\n" +
    "      {cluster_content}\n" +
    "以上就是你需要总结的内容。",
  description: "",
  language: "English",
  permission: "",
  embd_id: "BAAI/bge-large-zh-v1.5",
  parser_id: kbObj.parser_id,
  layout_recognize: true
});

const rules = {
  name: [
    {
      required: true,
      message:'知识库名称不允许为空',
    },
  ],
  embd_id: [
    {
      required: true,
      message:'请选择',
    },
  ],
  parser_id: [
    {
      required: true,
      message:'请选择',
    },
  ],
  prompt: [
    {
      required: true,
      message:'提示词不允许为空',
    },
  ],
}
let visible = ref(false);
const formRef = ref(null);
const modelList = ref({});
const file = ref();

const onChange = (_, currentFile) => {
  file.value = currentFile;
  convertImageToBase64(file.value.file).then((result)=>{
    form.avatar = result;
  })
};

function convertImageToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = function() {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

const onProgress = (currentFile) => {
  file.value = currentFile;
};


const handleSubmit = async ({ values, errors }) => {
  if (errors){
    return;
  }
  let parms = {
      name: form.name,
      avatar: form.avatar,
      description: form.description,
      language: form.language,
      permission: form.permission,
      embd_id: form.embd_id,
      parser_id: form.parser_id,
      parser_config: {
        chunk_token_num: form.chunk_token_num,
        layout_recognize: form.layout_recognize,
      },
      kb_id: kbObj.id,
   }
   if(form.use_raptor){
     parms.parser_config.raptor = {
       use_raptor: form.use_raptor,
       prompt: form.prompt,
       max_token: form.max_token,
       threshold: form.threshold,
       max_cluster: form.max_cluster,
       random_seed: form.random_seed,
     };
   }
   try {
    
    const data = await kbUpdate(parms);
    if(data.code == '0'){
      Message.success("配置成功");
      // window.location.reload();
      emit('saveConfig')

    }
    // emit('upTabdateItem')

  } catch (err) {
    Message.error(err.message);
  }



};

const cancelConfig = () => {
    emit('cancleConfig')
}


function randomNumber() {
  // 生成一个介于min和max之间的随机整数（包含min和max）
  const min = 1; // 最小值
  const max = 10000; // 最大值
  form.random_seed = Math.floor(Math.random() * (max - min + 1)) + min;
}

const handleBeforeOk = (done) => {
  formRef.value.validate().then(res => {
    console.log("form:", form);
    if (!form.name) {
      done(false);
    } else {
      console.log("请求数据");

    }
  });
};
const handleOpened =(el) => {
  Object.assign(form,{

  });
  formRef.value.resetFields();
}

const queryModel = async (params) => {
  try {
    const data = await queryModelList(params);
    // console.log(data.data, '大模型列表');
    modelList.value = data.data
  } catch (err) {
    // you can report use errorHandler or other
  } finally {

  }
};

const changekbObj = (value) => {
  formRef.value.resetFields();
  kbObj = value;
  console.log(kbObj, 'kbObj');
  if(kbObj.avatar){
    file.value.url = kbObj.avatar
  }else{
    // file.value.url = '';
  }
  let configObj = {
    name: kbObj.name,
    avatar: kbObj.avatar,
    pages:  kbObj.parser_config.pages,
    description: kbObj.description,
    language: "English",
    permission: kbObj.permission,
    embd_id: props.kbtenantInfo.embd_id || kbObj.embd_id,
    parser_id: kbObj.parser_id,
    layout_recognize: true,
  }
  let raptor = {}
  if(kbObj.parser_config && kbObj.parser_config.raptor){
    raptor = kbObj.parser_config.raptor;
    Object.assign(form,{
      ...configObj,
      ...raptor,
      use_raptor: kbObj.parser_config.raptor.use_raptor,
    });
  }else{
    Object.assign(form,configObj);
  }
  console.log(form,'配置页面表单信息');
}

defineExpose({
  changekbObj
})


onBeforeMount(()=>{
  queryModel({})
})
onMounted(()=>{


})

</script>

<script lang="ts">
import { IconEdit, IconPlus } from "@arco-design/web-vue/es/icon";

export default {
  name: "config",
  components: { IconPlus, IconEdit },
  methods: {}
};
</script>
<style scoped lang="less">
.main-container {
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 100%;
  overflow: auto;
  //background: #626aea;
  background: var(--color-bg-2);
  padding-top: 80px;

  &-lf {
    width: 40%;
    //height: 100%;
    //border: 1px solid #cccccc;
    border-radius: 10px;
    //border: 1px solid var(--color-fill-3);
    &-top {
      width: 100%;
      height: 60px;
      line-height: 60px;
      //background: rgb(var(--primary-6));
      //color: #ffffff;
      //text-align: center;
    }

    &-down {
      padding: 20px;
      width: 100%;
    }
  }

  &-form-item-extra {
    width: 100%;
    height: 20rem;
    border: 1px solid var(--color-fill-3);
    border-radius: 6px;
    overflow: hidden;

    &-top {
      width: 100%;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid var(--color-fill-3);
      //background: rgb(var(--primary-6));
      color: #999999;
      text-align: center;
    }

    &-down {
      width: 92%;
      margin-left: 4%;
      margin-top: 30px;
    }

    &-btn {
      width: 96%;
      text-align: right;
      margin-top: 1rem;
    }
  }

  &-rt {
    width: 60%;
    //background: #626aea;
    //border: 1px solid #cccccc;
    border-radius: 10px;
    overflow: hidden;
    padding: 20px;
    section {
      width: 100%;
      //color: #333333;
      color: var(--color-text-1);
    }
  }
}
</style>