<template>
  <a-modal
    v-model:visible="visible"
    title=" "
    @before-open="handleOpened"
    @cancel="handleCancel"
    :footer="false"
    title-align="start"
    width="900px"
  >
    <a-tabs default-active-key="1">
      <a-tab-pane key="1">
        <template #title>
          <icon-calendar />
          解析方法
        </template>
        <div style="width: 100%">
          <div style="display: flex; align-items: center">
            <div> 解析方法:</div>
            <div style="margin-left: 10px">
              <a-select v-model="form.parser_id" placeholder="请选择">
                <a-option
                  v-for="item in parser_ids"
                  :key="item.value"
                  :label="item.name"
                  :value="item.value"
                ></a-option>
              </a-select>
            </div>
          </div>
          <div class="parser">
            <a-form
              ref="formRef"
              :rules="rules"
              :model="form"
              auto-label-width
              @submit="handleSubmit"
            >
              <a-divider
                style="margin-top: 10px"
                v-if="form.parser_id === 'naive'"
              />
              <a-form-item
                field="slider"
                label="块Token数"
                v-if="form.parser_id === 'naive'"
              >
                <a-slider
                  v-model="form.chunk_token_num"
                  :min="0"
                  :max="2048"
                  show-input
                />
              </a-form-item>
              <a-divider
                style="margin-top: 10px"
                v-if="
                  form.parser_id === 'naive' ||
                  form.parser_id === 'qa' ||
                  form.parser_id === 'manual' ||
                  form.parser_id === 'laws' ||
                  form.parser_id === 'book'
                "
              />
              <a-form-item
                field="raptor"
                label="使用召回增强RAPTOR策略"
                v-if="
                  form.parser_id === 'naive' ||
                  form.parser_id === 'qa' ||
                  form.parser_id === 'manual' ||
                  form.parser_id === 'laws' ||
                  form.parser_id === 'book'
                "
              >
                <a-switch
                  v-model="form.use_raptor"
                  @change="onChangeRAPTOR"
                  size="small"
                />
              </a-form-item>
              <div v-if="form.use_raptor">
                <a-form-item field="prompt" label="提示词">
                  <a-textarea
                    v-model="form.prompt"
                    style="
                      height: 10rem;
                      border: 1px solid var(--color-fill-3);
                      border-radius: 4px;
                    "
                    placeholder="请填写提示词"
                  />
                </a-form-item>
                <a-form-item field="slider" label="最大token数">
                  <a-slider
                    v-model="form.max_token"
                    :min="0"
                    :max="2048"
                    show-input
                  />
                </a-form-item>
                <a-form-item field="slider" label="阈值">
                  <a-slider
                    v-model="form.threshold"
                    :step="0.01"
                    :min="0"
                    :max="1"
                    show-input
                  />
                </a-form-item>
                <a-form-item field="slider" label="最大聚类数">
                  <a-slider
                    v-model="form.max_cluster"
                    :min="1"
                    :max="1024"
                    show-input
                  />
                </a-form-item>
                <a-form-item
                  field="slider"
                  label="随机种子"
                  v-model="form.random_seed"
                  :rules="[
                    { type: 'number', min: 5, message: 'slider is min than 5' },
                  ]"
                >
                  <a-input-number
                    v-model="form.random_seed"
                    :style="{
                      width: '300px',
                      marginRight: '1rem',
                      borderRadius: '4px',
                    }"
                    placeholder="请输入"
                    class="input-demo"
                    :min="10"
                    :max="100"
                  />
                  <a-button type="primary" @click="randomNumber">
                    <icon-plus />
                  </a-button>
                </a-form-item>
              </div>
              <a-form-item>
                <div style="width: 100%; text-align: right">
                  <a-button @click="visible = false">取消</a-button>
                  <a-button
                    style="margin-left: 10px"
                    type="primary"
                    html-type="submit"
                    >确定
                  </a-button>
                </div>
              </a-form-item>
            </a-form>
          </div>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2">
        <template #title>
          <icon-clock-circle />
          创建解析块
        </template>
        <div class="details">
          <div class="details-header">
            <div
              style="
                display: flex;
                align-items: center;
                justify-content: flex-end;
              "
            >
              <a-radio-group
                v-model="radio"
                type="button"
                style="margin-right: 10px"
                @change="onRadioChange"
              >
                <a-radio value="1">全文</a-radio>
                <a-radio value="2">省略</a-radio>
              </a-radio-group>
              <a-popover position="bottom">
                <a-button
                  type="outline"
                  class="button"
                  style="margin-right: 10px"
                  >批量
                  <icon-down style="margin-left: 4px" />
                </a-button>
                <template #content>
                  <a-space direction="vertical">
                    <a-checkbox
                      :model-value="checkedAll"
                      :indeterminate="indeterminate"
                      @change="handleChangeAll"
                      style="margin-left: 10px"
                    >
                      选择所有
                    </a-checkbox>
                  </a-space>
                  <a-divider style="margin: 10px 0" />
                  <p>
                    <a-button
                      type="text"
                      class="button"
                      style="color: #2a2a2b"
                      @click="addBlock(1)"
                    >
                      <template #icon>
                        <icon-check-circle />
                      </template>
                      启用选定的
                    </a-button>
                  </p>
                  <p>
                    <a-button
                      type="text"
                      class="button"
                      style="color: #2a2a2b"
                      @click="addBlock(0)"
                    >
                      <template #icon>
                        <icon-close-circle />
                      </template>
                      禁用选定的
                    </a-button>
                  </p>
                  <a-divider style="margin: 10px 0" />
                  <p>
                    <a-button
                      type="text"
                      class="button"
                      style="color: #2a2a2b"
                      @click="addBlock(3)"
                    >
                      <template #icon>
                        <icon-delete />
                      </template>
                      删除选定的
                    </a-button>
                  </p>
                </template>
              </a-popover>
              <a-space
                direction="vertical"
                size="large"
                style="margin-right: 10px"
                class="space_search"
                v-show="!isBtn"
              >
                <a-input-search
                  :style="{ width: '220px' }"
                  v-model="form.keywords"
                  @input="getList()"
                  allow-clear
                  @clear.stop="getList()"
                  placeholder="搜索"
                />
              </a-space>
              <a-button
                type="outline"
                class="button"
                style="margin-right: 10px"
                v-show="isBtn"
                @click.stop="isBtn = !isBtn"
              >
                <template #icon>
                  <icon-search />
                </template>
              </a-button>
              <a-popover position="bottom">
                <a-button
                  type="outline"
                  class="button"
                  style="margin-right: 10px"
                >
                  <icon-sort />
                </a-button>
                <template #content>
                  <a-radio-group
                    v-model="available_int"
                    direction="vertical"
                    size="large"
                    @change="onChangeavailable"
                  >
                    <a-radio :value="''">所有</a-radio>
                    <a-radio :value="1">启用</a-radio>
                    <a-radio :value="0">禁用</a-radio>
                  </a-radio-group>
                </template>
              </a-popover>
              <addDetails
                :item="item"
                @canplaythrough="canplaythrough"
              ></addDetails>
            </div>
          </div>
          <a-divider style="margin-top: 10px" />
          <div class="groupMain">
            <a-spin :loading="isLoading" :tip="tip">
              <a-checkbox-group v-model="data" @change="handleChange">
                <div
                  class="groupList"
                  :class="{
                    groupActive: keyBg == index,
                    groupNoActive: keyBg != index,
                  }"
                  v-for="(item, index) in listData"
                  :key="index"
                >
                  <a-checkbox :value="item.chunk_id"></a-checkbox>
                  <div
                    class="groupList-content emphaRed"
                    @click="groupListContentClick(index)"
                    @dblclick="contentClick(item)"
                    v-html="item.content_with_weight"
                  >
                  </div>
                  <div class="groupList-right">
                    <a-switch
                      v-model="item.available_int"
                      :checked-value="1"
                      :unchecked-value="0"
                      @change="handleChangeStatus(item)"
                      size="small"
                    />
                  </div>
                </div>
              </a-checkbox-group>
            </a-spin>
          </div>
        </div>
        <eidtDetails
          ref="eidtDil"
          :item="eidtDilinfo"
          v-model:eidtDilVisible="eidtDilVisible"
          @canplaythrough="canplaythrough"
        ></eidtDetails>
      </a-tab-pane>
    </a-tabs>
  </a-modal>
</template>

<script lang="ts" setup>
  import {
    onMounted,
    onBeforeMount,
    reactive,
    ref,
    computed,
    watch,
  } from 'vue';
  import { Message } from '@arco-design/web-vue';
  import {
    kbdocumentchangeparser,
    achunkCreate,
    queryChunkList,
    chunkSwitch,
    chunkRm,
    achunkGet,
  } from '@/api/kbList';
  import addDetails from '@/views/dmx/knowledgeLib/addDetails.vue';
  import eidtDetails from '@/views/dmx/knowledgeLib/eidtDetails.vue';

  const visible = ref(false);
  const loading = ref(false);
  const radio = ref('1');
  const keyBg = ref('');
  const eidtDil = ref();
  const eidtDilVisible = ref(false);
  const eidtDilinfo = reactive({});

  const props = defineProps(['kbtenantInfo', 'item', 'kbdetail']);
  // const emit =  defineEmits(['upTabdateItem'])

  let threshold = computed(() => {
    return form.threshold / 100;
  });

  const kbtenantInfo = props.kbtenantInfo;

  let parser_ids = kbtenantInfo.parser_ids.split(',').map((item) => {
    const [value1, value2] = item.split(':');
    return {
      name: value2,
      value: value1,
    };
  });

  // 过滤解析方法

  const filterParserArr = [
    'naive',
    'qa',
    'resume',
    'manual',
    'book',
    'laws',
    'one',
  ];

  const isBtn = ref(true);

  const closeSlelct = () => {
    window.addEventListener('click', (event) => {
      if (!event.target.closest('.space_search') && !isBtn.value) {
        isBtn.value = true;
        // form.keywords = '';
      }
    });
  };

  watch(isBtn, (val) => {
    if (!val) {
      closeSlelct();
    }
  });

  const form = reactive({
    parser_id: '',
    doc_id: props.item.id,
    max_token: 698,
    threshold: 0.3,
    max_cluster: 233,
    random_seed: 1500,
    chunk_token_num: 128,
    use_raptor: false,
    keywords: '',
    pages: {},
    prompt:
      '请总结以下段落。 小心数字，不要编造。 段落如下：\n' +
      '      {cluster_content}\n' +
      '以上就是你需要总结的内容。',
  });
  const formRef = ref(null);
  const rules = {
    prompt: [
      {
        required: true,
        message: '提示词不允许为空',
      },
    ],
  };

  const listData = ref([]);

  const formatter = (value) => {
    return value / 100;
  };

  function randomNumber() {
    // 生成一个介于min和max之间的随机整数（包含min和max）
    const min = 1; // 最小值
    const max = 10000; // 最大值
    form.random_seed = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleSubmit = async ({ values, errors }) => {
    if (!errors) {
      let data = await kbdocumentchangeparser({
        parser_id: form.parser_id,
        doc_id: props.item.id,
        parser_config: {
          raptor: {
            use_raptor: form.use_raptor,
            prompt: form.prompt,
            max_token: form.max_token,
            threshold: form.threshold,
            max_cluster: form.max_cluster,
            random_seed: form.random_seed,
          },
          chunk_token_num: form.chunk_token_num,
          pages: [],
        },
      });
      if (data.code == 0) {
        Message.success('配置成功');
      } else {
        Message.error('配置失败');
      }
      visible.value = false;
    }
  };

  const handleClick = () => {
    visible.value = true;
  };
  const handleCancel = () => {
    visible.value = false;
  };

  const contentClick = async (item) => {
    try {
      const data = await achunkGet({
        chunk_id: item.chunk_id,
      });
      // console.log(data.data);
      Object.assign(eidtDilinfo, data.data);
      eidtDilVisible.value = true;
    } catch (error) {
      Message.error('获取失败');
    }
  };
  const handleOpened = (el) => {
    console.log('kbtenantInfo',props.kbtenantInfo);
    console.log('item', props.item);
    console.log('kbdetail',props.kbdetail);
    console.log(parser_ids, 'parser_ids');
    let parser_id = props.item.parser_id;
    parser_ids.forEach((item) => {
      if (item.name == parser_id) {
        form.parser_id = item.value;
      }
    });
    getList();
  };

  const onChangeRAPTOR = () => {};

  const indeterminate = ref(false);
  const checkedAll = ref(false);
  const data = ref([]);
  const switchType = ref(false);
  const available_int = ref('');
  const onRadioChange = () => {
    console.log(radio.value);
  };
  //批量操作
  const handleChangeAll = (value) => {
    indeterminate.value = false;
    if (value) {
      checkedAll.value = true;
      listData.value.forEach((item) => {
        data.value.push(item.chunk_id);
      });
    } else {
      checkedAll.value = false;
      data.value = [];
    }
  };

  const handleChange = (values) => {
    data.value = values;
  };

  //批量启用删除禁用
  const addBlock = (type) => {
    if (data.value.length == 0) {
      Message.error('请选择要操作的数据');
      return;
    }
    if (type == 3) {
      deleteChunk();
    } else {
      let params = {
        chunk_ids: data.value,
        available_int: type,
        doc_id: props.item.id,
      };
      chunkSwitch(params).then((res) => {
        if (res.code == 0) {
          Message.success('操作成功');
          getList();
          checkedAll.value = false;
          data.value = [];
        } else {
          Message.error('操作失败');
        }
      });
    }
  };

  const groupListContentClick = (value) => {
    keyBg.value = value;
  };

  const onChangeavailable = () => {
    getList();
  };

  const handleChangeStatus = (val) => {
    updateChunkStatus(val);
  };
  const isLoading = ref(true);
  // 自定义加载提示文本
  const tip = '加载中，请稍候...';
  //获取列表
  const getList = async () => {
    let params = {
      doc_id: props.item.id,
      keywords: form.keywords,
      page: 1,
      size: 10000,
    };
    if (available_int.value !== '') {
      params.available_int = available_int.value;
    }
    await queryChunkList(params).then((res) => {
      if (res.code == 0) {
        listData.value = res.data.chunks;
        isLoading.value = false;
        listData.value = listData.value.map((item) => {
          item.available_int = parseInt(item.available_int);
          return item;
        });
      }
    });
  };
  //更新列表
  const canplaythrough = () => {
    getList();
  };

  //启用禁用
  const updateChunkStatus = (val) => {
    let params = {
      chunk_ids: [val.chunk_id],
      available_int: val.available_int,
      doc_id: props.item.id,
    };
    chunkSwitch(params).then((res) => {
      console.log(res);
      if (res.code == 0) {
        Message.success('更新成功');
        getList();
      } else {
        Message.error('更新失败');
      }
    });
  };

  //删除
  const deleteChunk = () => {
    let params = {
      chunk_ids: data.value,
      doc_id: props.item.id,
    };
    chunkRm(params).then((res) => {
      console.log(res);
      if (res.code == 0) {
        Message.success('删除成功');
        getList();
      } else {
        Message.error('删除失败');
      }
    });
  };

  onBeforeMount(() => {

  });
  onMounted(() => {});

  defineExpose({
    handleClick
  })


</script>

<style scoped lang="less">
  .parser {
    width: 100%;

    .arco-btn-outline:hover,
    .arco-btn-outline,
    .arco-btn-outline[type='button'] {
      color: #2a2a2b;
      border: 1px solid #2a2a2b;
    }

    .button {
      //color: #2a2a2b!important;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .groupMain {
    width: 100%;
    height: 500px;
    overflow: auto;
    display: flex;
    justify-content: center;

    .groupList {
      display: flex;
      padding: 24px;
      border-radius: 8px;
      //background: #eff8ff;
      border: 1px solid #f0f0f0;
      margin-bottom: 20px;
      overflow: auto;

      .groupList-content {
        width: 700px;
        //height: 100px;
        overflow: auto;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: #2a2a2b;
        font-size: 14px;
        font-family: Inter;
        position: relative;
      }
    }
  }

  :deep(.emphaRed em) {
    color: red !important;
  }

  .groupActive {
    background: #eff8ff;
  }

  .groupNoActive {
    background: var(--color-bg-1);
    color: var(--color-text-1);
  }
</style>
