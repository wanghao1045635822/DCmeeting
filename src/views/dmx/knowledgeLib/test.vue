
<template>
    <div class="main-container">
      <div class="main-container-lf">
        <div class="main-container-lf-top">检索测试</div>
        <div class="main-container-lf-down">
          <div style="color: #999;">最后一步！ 成功后，剩下的就交给Infiniflow AI吧。</div>
          <a-divider style="margin-top: 10px" />
          <a-form ref="formRef"  :model="form" :style="{width:'100%'}" layout="vertical"  @submit="handleSubmit">
            <a-form-item field="similarity_threshold" label="相似度阈值">
              <a-slider v-model="form.similarity_threshold" :step="0.01" :min="0" :max="1"  />
            </a-form-item>
            <a-form-item field="slider" label="关键字相似度权重" >
              <a-slider v-model="form.vector_similarity_weight" :step="0.01" :min="0" :max="1"  />
            </a-form-item>
            <a-form-item field="section" label="Rerank模型" >
              <a-space direction="vertical" size="large">
                <a-select :size="'large'" v-model="form.rerank_id" :style="{width:'100%'}" placeholder="请选择 ..." allow-clear>
                  <a-optgroup  :label="index" v-for="(item,index) in modelList" :key=index>
                    <a-option
                      v-for="(obj) in item"
                      :key="obj.fid"
                      :disabled="!obj.available"
                      :value="obj.llm_name"
                    >
                      {{obj.llm_name}}
                    </a-option>
                  </a-optgroup>
                </a-select>
              </a-space>
            </a-form-item>
            <a-form-item field="slider" label="Top-K" v-if="form.rerank_id">
              <a-slider v-model="form.top_k" :min="1" :max="2048" />
            </a-form-item>
            <a-form-item >
              <div class="main-container-form-item-extra">
                <div class="main-container-form-item-extra-top">测试文本</div>
                <div class="main-container-form-item-extra-down">
                  <a-textarea v-model="form.question" style="height: 10rem;border: 1px solid  var(--color-fill-3);border-radius: 4px" placeholder="" allow-clear/>
                </div>
                <div class="main-container-form-item-extra-btn">
                  <a-button :disabled="!form.question" :loading="loading" type="primary" html-type="submit">测试</a-button>
                </div>
              </div>
            </a-form-item>
          </a-form>
        </div>
      </div>
      <div class="main-container-rt">
        <a-collapse style="width: 96%;margin-top: 1rem;margin-left: 2%">
          <a-collapse-item header="0/0 选定的文件" key="3">
            <template #extra>
              <a-tag size="small">命中数</a-tag>
              <a-tag size="small">看法</a-tag>
            </template>
            <div>
              <a-empty />
            </div>
          </a-collapse-item>
        </a-collapse>
      </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeMount, reactive, ref, watch } from "vue";
import { Message } from '@arco-design/web-vue';
import { kbretrievalTest, queryModelList } from "@/api/kbList";
// const props = defineProps(['kbId'])

// watch(() => props.kbId, (newValue, oldValue) => {
//   console.log('kbId 变化了', newValue, oldValue);
// },{
//   deep:true,
// });


let visible = ref(false);
let loading = ref(false);
const formRef = ref(null);
const kbid = ref('');
const modelList = ref({});
let form = reactive({
  page: 1,
  question: '',
  rerank_id: '',
  similarity_threshold: 0.2,
  size: 10,
  top_k: 1024,
  vector_similarity_weight: 0.7,
});


const formatter = (value) => {
  // return String(Math.round(value / 100))
};

const handleSubmit = async ({values, errors}) => {
  // console.log(props.kbobj, 'props.kbobj');
  if (!form.question){
    return
  }
  let formObj = {
    ...form,
    kb_id:kbid.value,
    vector_similarity_weight:(1 - form.vector_similarity_weight).toFixed(2),
  }
  if(!formObj.rerank_id){
    delete formObj.top_k;
    delete formObj.rerank_id;
  }
  try {
    loading.value = true;
    const data = await kbretrievalTest(formObj);
    if(data.code == 0){
      Message.success('测试成功');
    }else{
      Message.error('测试失败');
    }
    loading.value = false;
  }catch (err){
    Message.error(err.message);
    loading.value = false;
  }

}

const handleClick = () => {
  visible.value = true;
};
const handleCancel = () => {
  visible.value = false;
}

const handleOpened =(el) => {
  Object.assign(form,{

  });
  formRef.value.resetFields();
}

const changekbid = (value) => {
  console.log(value, 'kbid的value');
  kbid.value = value;
}

const queryModel = async (params) => {
  try {
    const data = await queryModelList(params);
    // console.log(data.data, '大模型列表');
    modelList.value = {
      BAAI: [data.data.BAAI[1]],
      Jina: data.data.Jina,
      youdao: data.data.youdao
    };
  } catch (err) {
    // you can report use errorHandler or other
  } finally {

  }
};


defineExpose({
  changekbid
})

onBeforeMount(()=>{
  queryModel({})
})
onMounted(()=>{


})


</script>

<script lang="ts">
export default {
  name: 'config',
  methods: {

  }
};
</script>
<style scoped lang="less">
  .main-container{
    display: flex;
    justify-content: space-between;
    height: 100%;
    &-lf{
      width: 30%;
      height: 100%;
      //border: 1px solid var(--color-fill-3);
      background: var(--color-bg-2);
      border-radius: 10px;
      overflow: auto;
      &-top{
        width: 100%;
        height: 60px;
        line-height: 60px;
        background: rgb(var(--primary-6));
        color: #ffffff;
        text-align: center;
      }
      &-down{
        padding: 20px;
        width: 100%;
      }
    }
    &-form-item-extra{
      width: 100%;
      height: 20rem;
      border: 1px solid var(--color-fill-3);
      border-radius: 6px;
      overflow: hidden;
      &-top{
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid  var(--color-fill-3);
        //background: rgb(var(--primary-6));
        color: #999999;
        text-align: center;
      }
      &-down{
        width: 92%;
        margin-left: 4%;
        margin-top: 30px;
      }
      &-btn{
        width: 96%;
        text-align: right;
        margin-top: 1rem;
      }
    }
    &-rt{
      width: 69%;
      height: 100%;
      //background: #626aea;
      //border: 1px solid var(--color-fill-3);
      background: var(--color-bg-2);
      border-radius: 10px;
    }
  }
</style>