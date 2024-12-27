<template>
  <div class="container">
    <Breadcrumb :items="['大模型', '智能体管理']" />
    <a-row :gutter="20" align="stretch">
      <a-col :span="24">
        <a-card class="general-card" :title="$t('')" style="padding-top: 50px">
          <div style="display: flex; justify-content: right">
            <a-input-search
              :placeholder="$t('cardList.searchInput.placeholder')"
              style="width: 240px"
              @change="queryList"
            />
            <a-button
              type="primary"
              @click="handleClick"
              style="margin-left: 10px"
            >
              <template #icon>
                <icon-plus />
              </template>
              新建智能体
            </a-button>
          </div>
          <a-divider style="margin: 10px 0" />
          <a-row justify="space-between">
            <a-col :span="24">
              <a-spin :loading="loading" style="width: 100%">
                <a-scrollbar
                  style="
                    display: flex;
                    flex-wrap: wrap;
                    align-content: flex-start;
                    overflow: auto;
                    height: calc(100vh - 300px);
                  "
                  :style="{ height: documentHeight + 'px' }"
                >
<!--                  智能体列表-->
                  <div
                    class="card-wrap"
                    v-for="(item, index) of agentList"
                    :key="item.id"
                  >
                    <a-card :bordered="false" hoverable>
                      <a-avatar :style="{ backgroundColor: '#5b99da' }">
                        <img
                          :style="{ width: '100%' }"
                          alt="dessert"
                          :src="item.icon || imgSrc"
                        />
                      </a-avatar>
                      <a-switch
                        v-model="item.off"
                        style="position: absolute; top: 10px; right: 10px"
                        size="medium"
                        @change="handleChange(item)"
                      >
                        <template #checked> 上线 </template>
                        <template #unchecked> 下线 </template>
                      </a-switch>
                      <div class="arco-card-body-content">
                        <div class="arco-card-body-content-top">
                          <span style="font-size: 18px; font-weight: 900">
                            {{ item.name }}
                          </span>
                        </div>
                        <div class="arco-card-body-content-down">
                          {{ item.prompt_config.prologue }}
                        </div>
                      </div>
                      <div
                        style="position: absolute; bottom: 1.4rem; left: 1rem"
                      >
                        <icon-user />
                        <span style="font-size: 12px">
                          <!--                      {{ item.name }}-->
                        </span>
                      </div>
                      <div
                        style="position: absolute; bottom: 1rem; right: 1rem"
                      >
                        <a-space>
                          <span v-show="!item.off">
                              <a-button
                                type="text"
                                size="small"
                                @click="editClick(item)"
                              >
                              <template #icon>
                                <icon-tool />
                              </template>
                            </a-button>
                          </span>
                          <a-popconfirm
                            :content="'确定删除吗'"
                            type="warning"
                            @ok="deleteItem(item)"
                          >
                            <a-button type="text">
                              <template #icon>
                                <icon-delete />
                              </template>
                            </a-button>
                          </a-popconfirm>
                        </a-space>
                      </div>
                    </a-card>
                  </div>
<!--                  agent列表-->
                  <div
                    class="card-wrap"
                    v-for="(item, index) of agentNewList"
                    :key="item.id"
                  >
                    <a-card :bordered="false" hoverable>
                      <a-avatar :style="{ backgroundColor: '#5b99da' }">
                        <img
                          :style="{ width: '100%' }"
                          alt="dessert"
                          :src="item.avatar || imgSrc"
                        />
                      </a-avatar>
<!--                      <a-switch-->
<!--                        v-model="item.off"-->
<!--                        style="position: absolute; top: 10px; right: 10px"-->
<!--                        size="medium"-->
<!--                        @change="handleChange(item)"-->
<!--                      >-->
<!--                        <template #checked> 上线 </template>-->
<!--                        <template #unchecked> 下线 </template>-->
<!--                      </a-switch>-->
                      <div class="arco-card-body-content">
                        <div class="arco-card-body-content-top">
                          <span style="font-size: 18px; font-weight: 900">
                            {{ item.title }}
                          </span>
                        </div>
<!--                        <div class="arco-card-body-content-down">-->
<!--                          {{ item.prompt_config.prologue }}-->
<!--                        </div>-->
                      </div>
                      <div
                        style="position: absolute; bottom: 1.4rem; left: 1rem"
                      >
                        <icon-calendar-clock />
                        <span style="font-size: 12px;margin-left: 10px">
                        {{ moment(item.create_date).format('YYYY-MM-DD HH:mm:ss') }}
                        </span>
                      </div>
<!--                      <div-->
<!--                        style="position: absolute; bottom: 1rem; right: 1rem"-->
<!--                      >-->
<!--                        <a-space>-->
<!--                          <a-popconfirm-->
<!--                            :content="'确定删除吗'"-->
<!--                            type="warning"-->
<!--                            @ok="deleteItem(item)"-->
<!--                          >-->
<!--                            <a-button type="text">-->
<!--                              <template #icon>-->
<!--                                <icon-delete />-->
<!--                              </template>-->
<!--                            </a-button>-->
<!--                          </a-popconfirm>-->
<!--                        </a-space>-->
<!--                      </div>-->
                    </a-card>
                  </div>
                </a-scrollbar>
                <!--                <div-->
                <!--                  class="card-wrap"-->
                <!--                  style="cursor: pointer"-->
                <!--                  @click="handleAdd"-->
                <!--                >-->
                <!--                  <a-card :bordered="false" hoverable>-->
                <!--                    <div style="margin-top: 30px; text-align: center">-->
                <!--                      <a-avatar style="background: #3370ff">-->
                <!--                        <icon-plus />-->
                <!--                      </a-avatar>-->
                <!--                    </div>-->
                <!--                    <div class="arco-card-body-content">-->
                <!--                      <div style="text-align: center; margin-top: 10px">-->
                <!--                        新建智能体-->
                <!--                      </div>-->
                <!--                      <div-->
                <!--                        style="-->
                <!--                          text-align: center;-->
                <!--                          margin-top: 10px;-->
                <!--                          font-size: 12px;-->
                <!--                          color: #999999;-->
                <!--                        "-->
                <!--                      >-->
                <!--                        通过描述角色和任务来创建你的智能体<br />-->
                <!--                        智能体可以调用多个工作流和工具-->
                <!--                      </div>-->
                <!--                    </div>-->
                <!--                    <add-agent ref="addAgents"></add-agent>-->
                <!--                    &lt;!&ndash;                    <div style="position: absolute; bottom: 1rem; right: 1rem;">&ndash;&gt;-->
                <!--                    &lt;!&ndash;                      <a-space>&ndash;&gt;-->
                <!--                    &lt;!&ndash;                      </a-space>&ndash;&gt;-->
                <!--                    &lt;!&ndash;                    </div>&ndash;&gt;-->
                <!--                  </a-card>-->
                <!--                </div>-->
              </a-spin>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
    </a-row>
    <agent-config
      ref="editAgentKuai"
      :typeAngint="addType"
      :formData="itemObj"
      @queryList="queryList"
    ></agent-config>
  </div>
</template>

<script lang="ts" setup>
  import {
    ref,
    reactive,
    nextTick,
    onBeforeMount,
    onMounted,
    onBeforeUnmount,
  } from 'vue';
  import { Message } from '@arco-design/web-vue';
  import { deletedialog, queryCanvasList, querydialogdetail, querydialogList } from "@/api/Agent";
  import useLoading from '@/hooks/loading';
  const { loading, setLoading } = useLoading(true);
  import EventBus from '@/utils/EventBus';
  import AgentConfig from '@/views/dmx/IntelligentAgent/components/agentConfig.vue';
  import logo from '../../../assets/images/model.png';
  import { documentHeight, parseTime } from "@/utils";
  import moment from "moment";
  // console.log(documentHeight,'高度');
  let count = 5;
  const activeKey = ref(1);
  const addAgents = ref();
  const editAgentKuai = ref(null);
  const imgSrc = ref(logo);
  const agentList = ref([]);
  const agentNewList = ref([]);
  const changeTabs = (val) => {
    activeKey.value = val;
  };
  const handleAdd = () => {
    addAgents.value.handleClick();
  };

  const visible = ref(false);
  const formRef = ref(null);
  let addType = ref('add');
  let itemObj = reactive({});
  const form = reactive({});


  const handleClick = () => {
    addType.value = 'add';
    editAgentKuai.value.handleClick();
  };

  const editClick = async(data) => {
    let res = await querydialogdetail({
      dialog_id: data.id
    })
    Object.assign(itemObj, res.data);
    addType.value = 'edit';
    editAgentKuai.value.editClick();
  };


  const queryList = async (params = {}) => {
    setLoading(true);
    try {
      const { data } = await querydialogList(params);
      console.log(data, 'data');
      agentList.value = data.map((item) => {
        return {
          ...item,
          off: true,
        };
      });
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };


  const queryCanvas = async (params = {}) => {
    setLoading(true);
    try {
      const { data } = await queryCanvasList(params);
      console.log(data, 'agent');
      agentNewList.value = data.map((item) => {
        return {
          ...item,
          off: true,
        };
      });
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };

  const deleteItem = async (row) => {
    console.log(row);
    let data = await deletedialog({ dialog_ids: [row.id] });
    if (data.code == 0) {
      Message.success('删除成功');
      queryList();
    }
  };
  const handleChange = async (item) => {
    if (item) {
      Object.assign(form, item);
    }
  };
  const handleCancel = () => {
    queryList();
  };
  onBeforeMount(() => {
    queryList();
    queryCanvas();
  });
  onMounted(() => {
    EventBus.on('queryList', () => {
      queryList();
    });
  });
  onBeforeUnmount(() => {
    EventBus.off('queryList');
  });
</script>

<script lang="ts">
  export default {
    name: 'Card',
  };
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px 20px 20px;
    :deep(.arco-list-content) {
      overflow-x: hidden;
    }

    :deep(.arco-card-meta-title) {
      font-size: 14px;
    }
  }
  :deep(.arco-list-col) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  :deep(.arco-list-item) {
    width: 33%;
  }

  :deep(.block-title) {
    margin: 0 0 12px 0;
    font-size: 14px;
  }
  :deep(.list-wrap) {
    // min-height: 140px;
    .list-row {
      align-items: stretch;
      .list-col {
        margin-bottom: 16px;
      }
    }
    :deep(.arco-space) {
      width: 100%;
      .arco-space-item {
        &:last-child {
          flex: 1;
        }
      }
    }
  }
  .card-wrap {
    width: 23%;
    height: 200px;
    margin: 1%;
    transition: all 0.3s;
    border: 1px solid var(--color-neutral-3);
    border-radius: 4px;
    position: relative;
    &:hover {
      transform: translateY(-4px);
      // box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
    }
    :deep(.arco-card) {
      height: 100%;
      border-radius: 4px;
      .arco-card-body {
        height: 100%;
        .arco-space {
          width: 100%;
          height: 100%;
          .arco-space-item {
            height: 100%;
            &:last-child {
              flex: 1;
            }
            .arco-card-meta {
              height: 100%;
              display: flex;
              flex-flow: column;
              .arco-card-meta-content {
                flex: 1;
                .arco-card-meta-description {
                  margin-top: 8px;
                  color: rgb(var(--gray-6));
                  line-height: 20px;
                  font-size: 12px;
                }
              }
              .arco-card-meta-footer {
                margin-top: 0;
              }
            }
          }
        }
      }
    }
    :deep(.arco-card-meta-title) {
      display: flex;
      align-items: center;

      // To prevent the shaking
      line-height: 28px;
    }
    :deep(.arco-skeleton-line) {
      &:last-child {
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;
      }
    }
  }
  .arco-card-body-content {
    .arco-card-body-content-top {
      margin-top: 10px;
      text-align: center;
    }
    .arco-card-body-content-down {
      // text-align: center;
      margin-top: 10px;
      font-size: 12px;
      color: #999999;
      width: 100%;
      height: 60px;
    }
  }
</style>
