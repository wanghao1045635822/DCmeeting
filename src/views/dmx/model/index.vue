<template>
  <div class="container">
    <Breadcrumb :items="['大模型', '模型管理']" />

    <a-row :gutter="20" align="stretch">
      <a-col :span="24">
        <a-card
          class="general-card"
          style="min-height: 130px"
          :title="$t('大模型管理')"
        >
          <a-row justify="space-between">
            <a-col :span="24" class="table_add_clore" v-if="loading">
              <a-tabs
                type="line"
                :default-active-key="tabKey"
                v-model:activeKey="tabKey"
                :editable="true"
                @tab-click="changeTabs"
                @add="handleAdd"
                @delete="handleDelete"
                show-add-button
              >
                <a-tab-pane
                  v-for="(item, index) in tabData"
                  :key="index"
                  :title="index"
                  :closable="Object.keys(tabData).length >= 4"
                >
                  <a-scrollbar
                    style="height: calc(100vh - 320px); overflow: auto"
                  >
                    <div class="card_content">
                      <div class="content_top">
                        <div class="card_wrap_box">
                          <!-- <div class="wrap_box_add">
                            <a-button
                              type="primary"
                              @click="handleAddModel"
                              :disabled="addBtn"
                            >
                              <template #icon>
                                <icon-plus />
                              </template>
                              添加
                            </a-button>
                          </div> -->
                          <div class="box_user_content">
                            <div class="box_usr_img">
                              <div class="card_wrap_box_img">
                                <img
                                  alt="暂无图片"
                                  :src="
                                    item.logo ? httpUrl + item.logo : pdfImg
                                  "
                                />
                              </div>
                              <div class="arco-content-title">
                                <div class="title_name"> {{ item.tags }}</div>

                                <div class="create_time">
                                  创建时间：
                                  <span> {{ item.create_date }} </span>
                                </div>
                              </div>
                            </div>
                            <div class="box_user_btn">
                              <a-space class="btn-group">
                                <!-- <editModel></editModel> -->
                                <a-button
                                  type="primary"
                                  @click="handleAddModel"
                                  :disabled="addBtn"
                                >
                                  <template #icon>
                                    <icon-plus />
                                  </template>
                                  添加
                                </a-button>
                                <a-button
                                  type="outline"
                                  @click="handleEditModel(item, 1)"
                                >
                                  编辑
                                </a-button>
                                <a-button
                                  @click="handleDeleteModel(item, 1)"
                                  class="btn_delete"
                                >
                                  删除
                                </a-button>
                              </a-space>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div v-if="item.llm?.length > 0" class="no_data"></div>
                      <div class="subset_list" v-if="item.llm?.length > 0">
                        <div
                          class="card-wrap"
                          v-for="(list, index) of item.llm"
                          :key="index"
                        >
                          <div class="card_wrap_box">
                            <div class="card_wrap_box_img">
                              <img
                                :style="{
                                  width: '100%',
                                }"
                                alt="暂无图片"
                                :src="list.logo ? httpUrl + list.logo : pdfImg"
                              />
                            </div>
                            <a-card :bordered="false" hoverable>
                              <div class="arco-card-body-content">
                                <div class="arco-card-body-content-title">
                                  {{ list.name }}
                                </div>
                                <div class="arco-card-body-content-dec">{{
                                  list.type
                                }}</div>
                              </div>
                            </a-card>
                            <div class="arco-btn-group">
                              <a-space class="btn-group">
                                <div class="create_time_list">
                                  创建时间：
                                  <span> {{ list.create_date }} </span>
                                </div>
                                <a-button @click="handleDeleteModel(list)">
                                  删除
                                </a-button>
                                <!-- <a-button
                                type="primary"
                                @click="handleEditModel(list)"
                              >
                                编辑
                              </a-button> -->

                                <!-- <editModel></editModel> -->
                              </a-space>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a-scrollbar>
                </a-tab-pane>
              </a-tabs>
            </a-col>
            <div> </div>
            <!-- <div class="box_right" v-if="Object.keys(tabData).length > 0">
              <div>
                <a-button
                  type="primary"
                  @click="handleAddModel"
                  :disabled="addBtn"
                >
                  <template #icon>
                    <icon-plus />
                  </template>
                  添加
                </a-button>
              </div>
            </div> -->
          </a-row>
        </a-card>
      </a-col>
    </a-row>
    <!-- 添加模型 -->
    <addPageModel
      v-model:show="show"
      :task_id="task_id"
      :type="modelType"
      :title="title"
      :editList="editList"
      @refresh-parent="refreshParentMethod"
      v-if="show"
    ></addPageModel>
    <!-- 添加tab模式 -->
    <addTableName
      v-model:tabShow="tabShow"
      :nameList="editList"
      :title="title"
      @refresh-parent="refreshParentMethod"
      v-if="tabShow"
    ></addTableName>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive, nextTick } from 'vue';
  import editModel from '@/views/dmx/model/components/editModel.vue';
  import addPageModel from './components/addPageModel.vue';
  import addTableName from './components/addTableName.vue';
  import {
    modelList,
    modelmyLlms,
    deleteLlm,
    deleteLlmFactory,
    getFactoryDetail,
  } from '@/api/model';
  import { Modal, Message } from '@arco-design/web-vue';
  import { userModelState } from '@/store';

  import pdfImg from '@/assets/images/icon-chart.png';

  const modelStore = userModelState();
  let count = 5;
  const addBtn = ref(false);
  const activeKey = ref(1);
  const data = ref([
    {
      key: 1,
      title: 'key',
      content: 'Content of Tab Panel 1',
    },
    {
      key: 2,
      title: 'Ollama',
      content: 'Content of Tab Panel 2',
    },
    {
      key: 3,
      title: 'Xinference',
      content: 'Content of Tab Panel 3',
    },
  ]);
  const tabData = ref({
    key: {
      tags: '添加key',
      id: 1,
      live: 1,
    },
  });

  const isDeleteDialogVisible = ref(false); //删除提醒

  const modalList = ref({});
  const tabKey = ref('');
  const changeTabs = async (val) => {
    tabKey.value = val;
    await getFactory();
  };

  const httpUrl = modelStore.hrefUrl;
  const show = ref(false);
  const tabShow = ref(false);
  const title = ref('添加模式');
  const task_id = ref(1);
  const modelType = ref(1);
  const handleAdd = () => {
    tabShow.value = true;
    title.value = '添加模型';
    editList.value.llm_factory = tabKey.value;
  };
  const editList = ref<any>({ llm_factory: '' });
  //增加模型子类
  const handleAddModel = () => {
    modelType.value = 2;
    editList.value = [{ llm_factory: '' }];
    editList.value.llm_factory = tabKey.value;
    show.value = true;
    title.value = '添加模式';
  };
  //编辑模型子类
  const handleEditModel = (val, type) => {
    if (type == 1) {
      tabShow.value = true;
      editList.value = val;
      title.value = '编辑模型';
      editList.value.llm_factory = tabKey.value;
    } else {
      modelType.value = 2;
      task_id.value = val.id;
      show.value = true;
      title.value = '编辑';
      editList.value = val;
      editList.value.llm_factory = tabKey.value;
    }
  };

  //删除模型
  const handleDeleteModel = (val, type) => {
    const factory = tabKey.value;
    if (type == 1) {
      handleDelete(val);
    } else {
      Modal.confirm({
        title: '警告',
        content: '确认删除吗',
        okText: '确定',
        cancelText: '取消',
        onOk: async () => {
          const res = await deleteLlm({
            llm_factory: tabKey.value,
            llm_name: val.name,
          });

          if ((res as any).code == 0) {
            await queryModel('');
          } else {
          }
        },
        onCancel: () => {},
      });
    }
  };

  //父级模型
  const handleDelete = async (key: any) => {
    if (tabData.value[key] && tabData.value[key].llm.length > 0) {
      Message.error('请先删除子模型');
      return;
    }

    const res = await deleteLlmFactory(tabKey.value);
    if ((res as any).code == 200) {
      // Reflect.deleteProperty(tabData.value, tabKey.value);

      await queryModel(null);

      Message.success('删除成功');
    }
  };

  const visible = ref(false);
  const formRef = ref();

  const form = reactive({
    size: 'medium',
    name: '',
  });
  const handleOk = () => {
    // count += 1;
    // formRef.value?.validate().then((res) => {
    //   if (res) {
    //     return;
    //   }
    //   data.value = data.value.concat({
    //     key: count,
    //     title: `${form.name}`,
    //     content: ``,
    //   });
    //   visible.value = false;
    //   activeKey.value = count;
    // });
    // nextTick(() => {
    //   visible.value = true;
    // });
    // return false;
  };

  //获取模型列表
  const loading = ref(false);
  const queryModel = async (name) => {
    const res = await modelmyLlms();
    modalList.value = res.data;
    loading.value = true;
    // tabData.value = Object.assign({}, tabData.value, res.data);

    await filterObject(res.data, 1, name);

    await getFactory();
  };
  queryModel(null);
  //返回满足条件的对象
  const filterObject = (obj, threshold, name) => {
    tabData.value = '';
    tabKey.value = '';
    const objs = Object.keys(obj)
      .filter((key) => obj[key].added == 1)
      .reduce((result, key) => {
        result[key] = obj[key];
        return result;
      }, {});

    tabData.value = objs;
    if (name) {
      tabKey.value = name;
    } else {
      tabKey.value = Object.keys(tabData.value)[0];
    }
    console.log(tabKey.value, 6766);
  };

  const refreshParentMethod = async (name) => {
    // console.log(name, 678776);

    await queryModel(name);
    // tabKey.value = name;
    // 这里执行需要的操作
  };

  const getFactory = async () => {
    const { data } = await getFactoryDetail({
      factory_name: tabKey.value,
    });

    if (data.set_type == 2) {
      addBtn.value = true;
    } else {
      addBtn.value = false;
    }

    // if (!name) {
    //   tabKey.value = Object.keys(tabData.value)[0];
    // } else {
    //   tabKey.value = name;
    // }
    console.log(tabKey.value, 9787);
  };
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
  :deep(.arco-tabs-nav-tab) {
    flex: none;
    width: 60%;
  }
  .table_add_clore {
    :deep(.arco-tabs-nav-add-btn .arco-icon-hover::before) {
      top: 50%;
      left: 50%;
      width: 20px;
      height: 20px;
      transform: translate(-50%, -50%);
      border-radius: 0;
      background-color: #165dff;
    }

    :deep(.arco-tabs-nav-add-btn .arco-icon-hover .arco-icon) {
      color: #fff;
    }
    // :deep(.arco-tabs-nav) {
    //   max-width: 60%;
    // }

    :deep(.arco-icon-hover::before) {
      top: 50%;
      left: 50%;
      width: 20px;
      height: 20px;
      transform: translate(-50%, -50%);
      // border-radius: 0;
      // background-color: #eee;
    }
    :deep(.arco-tabs-tab-close-btn) {
      display: none;
    }
    :deep(.arco-tabs-tab-close-btn .arco-icon) {
      color: #666;
    }
  }
  .box_right {
    position: absolute;
    top: 60px;
    right: 20px;
    display: flex;
    .search_input {
      margin-right: 10px;
    }
  }
  .arco-card-body-content {
    .arco-card-body-content-title {
      font-size: 16px;
      color: #333;
      margin-bottom: 10px;
      font-weight: 400;
    }
  }
  .content_top {
    border-radius: 18px;
    border: 1px solid #eaecf0;
    background: #e6e7eb;
    box-shadow: 0 1px 2px #1018280d;
    .card_wrap_box {
      padding: 10px 20px;

      .wrap_box_add {
        // text-align: right;
      }
      .card_wrap_box_img {
        width: 60px;
        height: 60px;
        border-radius: 50%;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .box_user_content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .box_usr_img {
          display: flex;
          align-items: center;

          .arco-content-title {
            line-height: 34px;
            margin-left: 20px;
            .title_name {
              font-size: 16px;
              color: #333;
            }
          }
        }
        .box_user_btn {
          text-align: right;
          // .btn_delete {
          //   margin-left: 10px;
          // }
        }
      }
    }
  }
  .content_bottom {
    margin-top: 20px;
    .card_content {
      .card_wrap_box {
        padding: 20px;
        .card_wrap_box_img {
          width: 80px;
          height: 80px;
        }
      }
    }
  }
  .card_content {
    .card_wrap_box_img {
      // min-height: 200px;
      height: 200px;
      width: 100%;
      img {
        width: 100%; /* 或者其他固定宽度 */
        height: 100%; /* 或者其他固定高度 */
        object-fit: cover; /* 不会变形，但可能裁剪图片 */
      }
    }
    .subset_list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      // border-top: 1px solid #f0f0f0;
    }
    .no_data {
      border-top: 1px solid #f0f0f0;
      height: 30px;
      line-height: 30px;
      margin-top: 10px;
      font-size: 16px;
      color: #333;
    }
    .card_wrap_box {
      // position: relative;
      .arco-btn-group {
        position: absolute;
        right: 10px;
        top: 87%;
        .create_time {
          text-align: left;
          width: 155px;
        }
        .create_time_list {
          text-align: left;
          width: 223px;
        }
      }
    }
  }

  .card-wrap {
    width: 320px;
    height: 350px;
    margin: 20px 30px;
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
</style>
