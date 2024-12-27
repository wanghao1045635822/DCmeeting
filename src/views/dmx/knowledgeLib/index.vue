<template>
  <div class="container">
    <Breadcrumb :items="['dmx.list.index', 'dmx.list.kbm']" />
    <div class="main-container">
      <div class="lf-container">
        <div class="lf-container-top">
          <a-input-search
            :placeholder="$t('cardList.searchInput.placeholder')"
            style="width: 130px"
          />
          <addKnow
            @getknowledge="getknowledge"
            @getKbdetail="getKbdetail"
          ></addKnow>
        </div>
        <a-spin :loading="listloading" class="lf-container-down">
          <a-scrollbar style="height: calc(100vh - 300px); overflow: auto">
            <div
              class="tab"
              v-for="(tab, index) in tabs"
              :key="index"
              @click="selectTab(index, tab)"
              :class="{ active: selectedTab === index }"
            >
              {{ tab.name }}
              <a-popover position="bl">
                <icon-more
                  :style="{ position: 'absolute', top: '10px', right: '10px' }"
                />
                <template #content>
                  <!--                  <a-popconfirm content="确定删除吗?" @ok="deleteKnowledge(tab.id)" type="warning">-->
                  <!--                    <span style="cursor: pointer;color: #4977ba;font-size: 12px"><icon-delete style="font-size: 14px"/>删除</span>-->
                  <!--                  </a-popconfirm>-->
                  <span
                    style="cursor: pointer; color: #4977ba; font-size: 12px"
                    @click="deleteKnowledge(tab.id)"
                    ><icon-delete style="font-size: 14px" />删除</span
                  >
                </template>
              </a-popover>
            </div>
          </a-scrollbar>
        </a-spin>
      </div>
      <div class="rt-container" v-if="tabs.length > 0">
        <a-tabs :active-key="activeKey" @change="handleTabChange">
          <a-tab-pane key="1" :title="t('dmx.list.DataSet')">
            <a-scrollbar
              class="rt-container-main"
              :style="{ height: documentHeight + 70 + 'px' }"
              style="overflow: auto"
            >
              <a-card
                ref="account"
                class="general-card"
                title=""
                style="padding-top: 20px"
              >
                <a-row>
                  <a-col :flex="1" :span="12">
                    <a-form
                      :model="formModel"
                      :label-col-props="{ span: 6 }"
                      :wrapper-col-props="{ span: 18 }"
                      label-align="left"
                    >
                      <a-row :gutter="16">
                        <a-col
                          :span="24"
                          style="
                            margin-bottom: 10px;
                            display: flex;
                            justify-content: space-between;
                          "
                        >
                          <a-popover
                            position="bottom"
                            v-model="checkedArr.length"
                            trigger="click"
                          >
                            <a-button :disabled="checkedArr.length == 0" border
                              >批量
                              <icon-down style="margin-left: 4px" />
                            </a-button>
                            <template #content>
                              <p>
                                <a-button
                                  type="text"
                                  class="button"
                                  style="color: #2a2a2b"
                                  @click="enableDisable(1)"
                                >
                                  <template #icon>
                                    <icon-play-circle />
                                  </template>
                                  启用
                                </a-button>
                              </p>
                              <p>
                                <a-button
                                  type="text"
                                  class="button"
                                  style="color: #2a2a2b"
                                  @click="enableDisable(0)"
                                >
                                  <template #icon>
                                    <icon-record color="" />
                                  </template>
                                  禁用
                                </a-button>
                              </p>
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
                                  启动
                                </a-button>
                              </p>
                              <p>
                                <a-button
                                  type="text"
                                  class="button"
                                  style="color: #2a2a2b"
                                  @click="addBlock(2)"
                                >
                                  <template #icon>
                                    <icon-close-circle />
                                  </template>
                                  取消
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
                                  删除
                                </a-button>
                              </p>
                            </template>
                          </a-popover>
                          <span>
                            <a-input-search
                              :placeholder="
                                $t('cardList.searchInput.placeholder')
                              "
                              style="width: 200px; margin-right: 10px"
                              v-model="keywords"
                              @change="search"
                            />
                            <!--新建-->
                            <add
                              :kbobj="kbobj"
                              @changeFetchData="changeFetchData"
                            />
                          </span>
                        </a-col>
                      </a-row>
                    </a-form>
                  </a-col>
                </a-row>
                <a-divider style="margin-top: 0" />
                <a-row style="margin-bottom: 16px">
                  <a-col :span="12">
                    <a-space>
                      <!--            <a-button type="primary"  @click="handleClick">-->
                      <!--              <template #icon>-->
                      <!--                <icon-plus />-->
                      <!--              </template>-->
                      <!--              {{ $t('searchTable.operation.create') }}-->
                      <!--            </a-button>-->
                      <!--            <a-upload action="/">-->
                      <!--              <template #upload-button>-->
                      <!--                <a-button>-->
                      <!--                  {{ $t('searchTable.operation.import') }}-->
                      <!--                </a-button>-->
                      <!--              </template>-->
                      <!--            </a-upload>-->
                    </a-space>
                  </a-col>
                  <a-col
                    :span="12"
                    style="
                      display: flex;
                      align-items: center;
                      justify-content: end;
                    "
                  >
                    <!--          <a-button>-->
                    <!--            <template #icon>-->
                    <!--              <icon-download />-->
                    <!--            </template>-->
                    <!--            {{ $t('searchTable.operation.download') }}-->
                    <!--          </a-button>-->
                    <a-tooltip :content="$t('searchTable.actions.refresh')">
                      <div class="action-icon">
                        <icon-refresh size="18" />
                      </div>
                    </a-tooltip>
                    <a-dropdown @select="handleSelectDensity">
                      <a-tooltip :content="$t('searchTable.actions.density')">
                        <div class="action-icon">
                          <icon-line-height size="18" />
                        </div>
                      </a-tooltip>
                      <template #content>
                        <a-doption
                          v-for="item in densityList"
                          :key="item.value"
                          :value="item.value"
                          :class="{ active: item.value === size }"
                        >
                          <span>{{ item.name }}</span>
                        </a-doption>
                      </template>
                    </a-dropdown>
                    <!--          <a-tooltip :content="$t('searchTable.actions.columnSetting')">-->
                    <!--            <a-popover-->
                    <!--              trigger="click"-->
                    <!--              position="bl"-->
                    <!--              @popup-visible-change="popupVisibleChange"-->
                    <!--            >-->
                    <!--              <div class="action-icon"><icon-settings size="18" /></div>-->
                    <!--              <template #content>-->
                    <!--                <div id="tableSetting">-->
                    <!--                  <div-->
                    <!--                    v-for="(item, index) in showColumns"-->
                    <!--                    :key="item.dataIndex"-->
                    <!--                    class="setting"-->
                    <!--                  >-->
                    <!--                    <div style="margin-right: 4px; cursor: move">-->
                    <!--                      <icon-drag-arrow />-->
                    <!--                    </div>-->
                    <!--                    <div>-->
                    <!--                      <a-checkbox-->
                    <!--                        v-model="item.checked"-->
                    <!--                        @change="-->
                    <!--                          handleChange($event, item as TableColumnData, index)-->
                    <!--                        "-->
                    <!--                      >-->
                    <!--                      </a-checkbox>-->
                    <!--                    </div>-->
                    <!--                    <div class="title">-->
                    <!--                      {{ item.title === '#' ? '序列号' : item.title }}-->
                    <!--                    </div>-->
                    <!--                  </div>-->
                    <!--                </div>-->
                    <!--              </template>-->
                    <!--            </a-popover>-->
                    <!--          </a-tooltip>-->
                  </a-col>
                </a-row>
                <a-table
                  row-key="id"
                  :loading="loading"
                  :pagination="pagination"
                  :columns="cloneColumns"
                  :data="renderData"
                  :bordered="false"
                  :size="size"
                  @page-change="onPageChange"
                  :max-height="documentHeight"
                  :scroll="{ x: 1000 }"
                  :row-selection="{
                    type: 'checkbox',
                    showCheckedAll: true,
                    onlyCurrent: false,
                  }"
                  @select-all="selectTabAll"
                  @selection-change="selectTabChange"
                >
                  <template #name="{ record }">
                    <!--                    <icon-file style="color: #0960bd;margin-right: 4px;" />-->
                    <icon-file style="margin-right: 4px" />
                    <!--                    <span style="color: #0960bd;cursor: pointer" @click="fileClick">-->
                    <!--                      {{record.name}}-->
                    <!--                    </span>-->
                    {{ record.name }}
                  </template>
                  <template #create_time="{ record }">
                    <span>{{ parseTime(record.create_time) }}</span>
                  </template>
                  <!--                  <template #parser_id="{ record }">-->
                  <!--                    <span>{{ parser_ids[record.parser_id]}}</span>-->
                  <!--                  </template>-->
                  <template #status="{ record }">
                    <a-switch
                      v-model="record.status"
                      :disabled="!getAut('/kb/data_status')"
                      size="small"
                      checked-value="1"
                      unchecked-value="0"
                      @change="handleChangeStatus(record)"
                    />
                  </template>
                  <template #run="{ record }">
                    <div style="display: flex; align-items: center">
                      <div style="width: 100px">
                        <a-popover title="" v-if="record.run == '4'">
                          <a-tag
                            :loading="record.loading"
                            :color="'blue'"
                            border
                            >{{ $t('dmx.list.complete') }}</a-tag
                          >
                          <template #content>
                            <p>流程开始于：{{ record.process_begin_at }}</p>
                            <p
                              >过程持续时间:{{
                                record.process_duation.toFixed(2)
                              }}</p
                            >
                            <div>
                              <p
                                >进度消息：<span
                                  v-html="
                                    record.progress_msg.replace(/\n/g, '<br/>')
                                  "
                                ></span
                              ></p>
                            </div>
                          </template>
                        </a-popover>
                        <a-popover title="" v-if="record.run == '3'">
                          <a-tag
                            :loading="record.loading"
                            :color="'blue'"
                            border
                            >{{ $t('dmx.list.complete') }}</a-tag
                          >
                          <template #content>
                            <p>流程开始于：{{ record.process_begin_at }}</p>
                            <p
                              >过程持续时间:{{
                                record.process_duation.toFixed(2)
                              }}</p
                            >
                            <div>
                              <p
                                >进度消息：<span
                                  v-html="
                                    record.progress_msg.replace(/\n/g, '<br/>')
                                  "
                                ></span
                              ></p>
                            </div>
                          </template>
                        </a-popover>
                        <a-popover title="" v-if="record.run == '1'">
                          <a-tag
                            :loading="record.loading"
                            :color="'blue'"
                            border
                            >解析中...</a-tag
                          >
                          <template #content>
                            <p>流程开始于：{{ record.process_begin_at }}</p>
                            <p
                              >过程持续时间:{{
                                record.process_duation.toFixed(2)
                              }}</p
                            >
                            <div>
                              <p
                                >进度消息：<span
                                  v-html="
                                    record.progress_msg.replace(/\n/g, '<br/>')
                                  "
                                ></span
                              ></p>
                            </div>
                          </template>
                        </a-popover>
                        <a-popover title="" v-if="record.run == '2'">
                          <a-tag
                            :loading="record.loading"
                            :color="'gold'"
                            border
                            >{{ $t('dmx.list.cancel') }}</a-tag
                          >
                          <template #content>
                            <p>流程开始于：{{ record.process_begin_at }}</p>
                            <p
                              >过程持续时间:{{
                                record.process_duation.toFixed(2)
                              }}</p
                            >
                            <div>
                              <p
                                >进度消息：<span
                                  v-html="
                                    record.progress_msg.replace(/\n/g, '<br/>')
                                  "
                                ></span
                              ></p>
                            </div>
                          </template>
                        </a-popover>
                        <a-popover title="" v-if="record.run == '0'">
                          <a-tag
                            :loading="record.loading"
                            :color="'green'"
                            border
                            >{{ $t('dmx.list.NotStarted') }}
                          </a-tag>
                          <template #content>
                            <p>流程开始于：{{ record.process_begin_at }}</p>
                            <p
                              >过程持续时间：{{
                                record.process_duation.toFixed(2)
                              }}</p
                            >
                            <div>
                              <p
                                >进度消息：<span
                                  v-html="
                                    record.progress_msg.replace(/\n/g, '<br/>')
                                  "
                                ></span
                              ></p>
                            </div>
                          </template>
                        </a-popover>
                      </div>
                      <div>
                        <a-button
                          type="text"
                          size="large"
                          @click="run(record)"
                          v-hasPermi="'/kb/data_analysis'"
                          :loading="record.loading"
                        >
                          <template #icon>
                            <icon-sync v-if="record.run == '4'" />
                            <icon-sync v-if="record.run == '3'" />
                            <icon-sync
                              style="color: green"
                              v-if="record.run == '2'"
                            />
                            <a-button
                              status="warning"
                              shape="circle"
                              v-if="record.run == '1'"
                              size="small"
                            >
                              <icon-close />
                            </a-button>
                            <icon-play-circle
                              style="color: green"
                              v-if="record.run == '0'"
                            />
                          </template>
                        </a-button>
                      </div>
                    </div>
                  </template>
                  <template #action="{ record }">
                    <a-button
                      type="text"
                      :disabled="record.run == '1'"
                      @click="handleClick(record)"
                      v-hasPermi="'/kb/data_update'"
                      size="small"
                    >
                      <template #icon>
                        <icon-tool />
                      </template>
                    </a-button>
                    <edit
                      :item="record"
                      v-hasPermi="'/kb/rename'"
                      @upTabdateItem="upTabdateItem"
                    />
                    <a-popconfirm
                      :content="'确定删除吗'"
                      type="warning"
                      @ok="deleteItem(record)"
                    >
                      <a-button
                        type="text"
                        size="small"
                        :disabled="record.run == '1'"
                        v-hasPermi="'/kb/data_delete'"
                      >
                        <template #icon>
                          <icon-delete />
                        </template>
                      </a-button>
                    </a-popconfirm>
                    <a-button
                      type="text"
                      size="small"
                      v-hasPermi="'/kb/data_download'"
                      :disabled="record.run == '1'"
                      @click="onDownloadDocument(record)"
                    >
                      <template #icon>
                        <icon-download />
                      </template>
                    </a-button>

                    <!-- <a-button
                      type="text"
                      size="small"
                      :disabled="record.run == '1'"
                      @click="previewArea(record)"
                    >
                      <template #icon>
                        <icon-eye />
                      </template>
                    </a-button> -->
                  </template>
                </a-table>
              </a-card>
            </a-scrollbar>
          </a-tab-pane>
          <a-tab-pane
            key="2"
            :title="t('dmx.list.test')"
            v-if="getAut('/kb/test')"
          >
            <a-scrollbar
              class="rt-container-main"
              :style="{ height: documentHeight + 70 + 'px' }"
              style="overflow: auto"
            >
              <test ref="testForm"></test>
            </a-scrollbar>
          </a-tab-pane>
          <a-tab-pane
            key="3"
            :title="t('dmx.list.disposition')"
            v-if="getAut('/kb/update')"
          >
            <a-scrollbar
              class="rt-container-main"
              :style="{ height: documentHeight + 70 + 'px' }"
              style="overflow: auto"
            >
              <config
                ref="configForm"
                :kbtenantInfo="kbtenantInfo"
                @cancleConfig="cancleConfig"
                @saveConfig="saveConfig"
              ></config>
            </a-scrollbar>
          </a-tab-pane>
        </a-tabs>
        <!--        <div v-if="detailsShow" class="details">-->
        <!--          <div class="details-header">-->
        <!--            <div style="display: flex;align-items: center">-->
        <!--              <span><icon-arrow-left size="20px" style="cursor: pointer;color: #0960bd;margin: 10px" @click="goBackClick" /></span>-->
        <!--              <icon-file style="color: #0960bd;margin-right: 4px;" />-->
        <!--              <span style="">123.docx</span>-->
        <!--            </div>-->
        <!--            <div style="display: flex; align-items: center;">-->
        <!--              <a-radio-group v-model="position" type="button" style="margin-right: 10px">-->
        <!--                <a-radio value="top">{{'dmx.list.EntireArticle'}}</a-radio>-->
        <!--                <a-radio value="right">{{'dmx.list.omit'}}</a-radio>-->
        <!--              </a-radio-group>-->
        <!--              <a-popover position="bottom">-->
        <!--                <a-button type="outline" class="button" style="margin-right: 10px">{{'dmx.list.batch'}} <icon-down style="margin-left: 4px" /></a-button>-->
        <!--                <template #content>-->
        <!--                  <p>Here is the text content</p>-->
        <!--                  <p>Here is the text content</p>-->
        <!--                </template>-->
        <!--              </a-popover>-->
        <!--              <a-button type="outline" class="button" style="margin-right: 10px">-->
        <!--                <template #icon>-->
        <!--                  <icon-search />-->
        <!--                </template>-->
        <!--              </a-button>-->
        <!--              <a-popover position="bottom">-->
        <!--                <a-button type="outline" class="button" style="margin-right: 10px"><icon-sort /></a-button>-->
        <!--                <template #content>-->
        <!--                  <p>Here is the text content</p>-->
        <!--                  <p>Here is the text content</p>-->
        <!--                </template>-->
        <!--              </a-popover>-->
        <!--              <addDetails></addDetails>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--          <a-divider style="margin-top: 10px" />-->
        <!--        </div>-->
      </div>
    </div>
    <a-modal title=" " v-model:visible="visible" :footer="false" fullscreen>
      <!--      <docx  previewSrc="http://192.168.20.116:1080/v1/document/get/405c3efa4d8c11ef97560242ac120006"></docx>-->
      <docx v-if="documenttype == 'docx'" :previewSrc="previewSrc"></docx>
      <excel v-if="documenttype == 'excel'" :previewSrc="previewSrc"></excel>
      <txtPdf v-if="documenttype == 'txtPdf'" :previewSrc="previewSrc"></txtPdf>
    </a-modal>
    <tool
      ref="toolForm"
      :kbtenantInfo="kbtenantInfo"
      :item="setObj"
      :kbdetail="kbdetail"
    />
  </div>
</template>

<script lang="ts" setup>
  import {
    computed,
    ref,
    reactive,
    watch,
    nextTick,
    onBeforeMount,
    onMounted,
    onBeforeUnmount,
  } from 'vue';
  import { useI18n } from 'vue-i18n';
  import useLoading from '@/hooks/loading';
  import {
    queryKbList,
    PolicyRecord,
    PolicyParams,
    queryKbDocumentList,
    deleteKnow,
    queryKbdetail,
    queryKbtenantInfo,
    kbdocumentrm,
    kbdocumentchangeparser,
    kbdocumentrun,
    kbdocumentchangeStatus,
    downloadFile,
    chunkSwitch,
    changeStatus,
  } from '@/api/kbList';
  import { Pagination } from '@/types/global';
  import type { SelectOptionData } from '@arco-design/web-vue/es/select/interface';
  import type { TableColumnData } from '@arco-design/web-vue/es/table/interface';
  import cloneDeep from 'lodash/cloneDeep';
  import Sortable from 'sortablejs';
  import add from '@/views/dmx/knowledgeLib/add.vue';
  import edit from '@/views/dmx/knowledgeLib/edit.vue';
  import addKnow from '@/views/dmx/knowledgeLib/addKnow.vue';
  import config from '@/views/dmx/knowledgeLib/config.vue';
  import test from '@/views/dmx/knowledgeLib/test.vue';
  import tool from '@/views/dmx/knowledgeLib/tool.vue';
  import docx from '@/views/dmx/knowledgeLib/components/docx.vue';
  import excel from '@/views/dmx/knowledgeLib/components/excel.vue';
  import txtPdf from '@/views/dmx/knowledgeLib/components/txtPdf.vue';
  import { Message, Modal } from '@arco-design/web-vue';
  import { documentHeight, parseTime } from '@/utils';
  import { deleteLlm } from '@/api/model';
  import { userModelState } from '@/store';
  import { getUserResources } from '@/utils/auth';

  let modelStore = userModelState();
  const httpUrl = modelStore.hrefUrl;
  type SizeProps = 'mini' | 'small' | 'medium' | 'large';
  type Column = TableColumnData & { checked?: true };
  const account = ref(null);
  const generateFormModel = () => {
    return {
      number: '',
      name: '',
      contentType: '',
      filterType: '',
      createdTime: [],
      status: '',
    };
  };
  const { loading, setLoading } = useLoading(true);
  const { t } = useI18n();
  const renderData = ref([]);
  const formModel = ref(generateFormModel());
  const cloneColumns = ref([]);
  const showColumns = ref<Column[]>([]);
  let setObj = reactive({});

  const size = ref<SizeProps>('medium');
  let visible = ref(false);
  let listloading = ref(false);
  let keywords = ref('');
  let activeKey = ref('1');
  let detailsShow = ref(false);
  let checkedAll = ref(false);
  let checkedArr = ref([]);
  let selectedTab = ref(0);
  let testForm = ref(null);
  let configForm = ref(null);
  let documenttype = ref('docx');
  let previewSrc = ref('');
  let kbId = ref('');
  let kbobj = reactive({});
  let kbdetail = reactive({});
  let parser_ids = reactive({});
  let seeObj = reactive({});
  let toolForm = ref(null);
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
  let tabs = ref([]);
  let timer = null; // 定时器

  const selectTab = (index, item) => {
    selectedTab.value = index;
    checkedArr.value = [];
    // console.log(item.id);
    kbobj = item;
    kbId = kbobj.id;
    basePagination.page = 1;
    fetchData({
      kb_id: kbobj.id,
      ...basePagination,
    });
    getKbdetail(kbobj.id);
  };

  const getAut = (val) => {
    const roleData = JSON.parse(getUserResources());
    const roleBtn = roleData.map((item: any) => item.component);
    return roleBtn.includes(val);
  };

  const basePagination: Pagination = {
    page: 1,
    page_size: 10,
  };
  const pagination = reactive({
    ...basePagination,
  });
  const densityList = computed(() => [
    {
      name: t('searchTable.size.mini'),
      value: 'mini',
    },
    {
      name: t('searchTable.size.small'),
      value: 'small',
    },
    {
      name: t('searchTable.size.medium'),
      value: 'medium',
    },
    {
      name: t('searchTable.size.large'),
      value: 'large',
    },
  ]);
  const columns = computed<TableColumnData[]>(() => [
    {
      title: t('dmx.column.name'),
      dataIndex: 'name',
      slotName: 'name',
      width: 300,
    },
    {
      title: t('分快数'),
      dataIndex: 'chunk_num',
      width: 90,
    },
    {
      title: t('dmx.column.UploadTime'),
      dataIndex: 'create_time',
      slotName: 'create_time',
      width: 200,
    },
    {
      title: t('解析方法'),
      dataIndex: 'parser_id',
      slotName: 'parser_id',
      width: 150,
    },
    {
      title: t('启用'),
      dataIndex: 'status',
      slotName: 'status',
      width: 100,
    },
    {
      title: t('解析状态'),
      dataIndex: 'run',
      slotName: 'run',
      width: 100,
    },
    {
      title: t('dmx.column.Operate'),
      dataIndex: 'action',
      slotName: 'action',
      width: 200,
      minWidth: 200,
    },
  ]);
  const contentTypeOptions = computed<SelectOptionData[]>(() => [
    {
      label: t('searchTable.form.contentType.img'),
      value: 'img',
    },
    {
      label: t('searchTable.form.contentType.horizontalVideo'),
      value: 'horizontalVideo',
    },
    {
      label: t('searchTable.form.contentType.verticalVideo'),
      value: 'verticalVideo',
    },
  ]);
  const filterTypeOptions = computed<SelectOptionData[]>(() => [
    {
      label: t('searchTable.form.filterType.artificial'),
      value: 'artificial',
    },
    {
      label: t('searchTable.form.filterType.rules'),
      value: 'rules',
    },
  ]);
  const statusOptions = computed<SelectOptionData[]>(() => [
    {
      label: t('searchTable.form.status.online'),
      value: 'online',
    },
    {
      label: t('searchTable.form.status.offline'),
      value: 'offline',
    },
  ]);
  const fetchData = async (params) => {
    setLoading(true);
    try {
      const data = await queryKbDocumentList(params);
      if (data.code == '0') {
        parser_ids = kbtenantInfo.parser_ids.split(',').reduce((acc, pair) => {
          const [key, value] = pair.split(':');
          acc[key] = value;
          return acc;
        }, {});
        // console.log(parser_ids, 'parser_ids');
        kbtenantInfo.parser_idObj = parser_ids;
        renderData.value = data.data.docs || [];
        renderData.value = renderData.value.map((item) => {
          return {
            ...item,
            loading: false,
            parser_id: parser_ids[item.parser_id],
          };
        });
        // console.log(renderData.value, 'renderData');

        pagination.page = params.page;
        pagination.current = params.page;
        pagination.total = data.data.total;

        if (timer) {
          clearInterval(timer);
        }
        // 定时器查询文档
        timer = setInterval(async () => {
          let params = { ...basePagination, kb_id: kbobj.id };
          const data = await queryKbDocumentList(params);
          if (data.code == '0') {
            parser_ids = kbtenantInfo.parser_ids
              .split(',')
              .reduce((acc, pair) => {
                const [key, value] = pair.split(':');
                acc[key] = value;
                return acc;
              }, {});
            // console.log(parser_ids, 'parser_ids');
            kbtenantInfo.parser_idObj = parser_ids;
            renderData.value = data.data.docs || [];
            renderData.value = renderData.value.map((item) => {
              return {
                ...item,
                loading: false,
                parser_id: parser_ids[item.parser_id],
              };
            });
            // console.log(renderData.value, 'renderData');
          }
        }, 10000);
      }
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };

  const search = () => {
    basePagination.page = 1;
    fetchData({
      kb_id: kbobj.id,
      ...basePagination,
      keywords: keywords.value,
    });
  };

  const handleClick = (data) => {
    Object.assign(setObj, data);
    toolForm.value.handleClick(data);
  };

  const onPageChange = (current: number) => {
    basePagination.page = current;
    fetchData({ ...basePagination, kb_id: kbobj.id });
  };

  const selectTabAll = (val) => {
    console.log(val, '全选');
    checkedAll.value = val;
  };
  const selectTabChange = (val) => {
    console.log(val, '单选');
    checkedArr.value = val;
  };

  const knowledgeData = async (params = { page: 1, page_size: 10 }) => {
    listloading.value = true;
    try {
      const { data } = await queryKbList(params);
      // console.log(data, 'data');
      tabs.value = data;
      // console.log(tabs.value, 'tabs');
      if (tabs.value.length > 0 && tabs.value[0]) {
        kbobj = tabs.value[0];
        kbId = kbobj.id;
        activeKey.value = '1';
        basePagination.page = 1;
        fetchData({
          kb_id: kbobj.id,
          ...basePagination,
        });
        getKbdetail(kbobj.id);
      } else {
      }
      // renderData.value = data.list;
      // console.log(renderData, 'renderData');
      // pagination.current = params.current;
      // pagination.total = data.total;
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      listloading.value = false;
    }
  };

  const getKbdetail = async (kb_id) => {
    //   查询知识库详情
    const data = await queryKbdetail({
      kb_id: kb_id,
    });
    kbdetail = data.data;
    testForm.value.changekbid(kbdetail.id);
    configForm.value.changekbObj(kbdetail);
  };

  const getknowledge = async (id) => {
    setLoading(true);
    try {
      const { data } = await queryKbList({ page: 1, page_size: 10 });
      console.log(data, '查询知识库列表');
      tabs.value = data;
      if (tabs.value.length > 0) {
        // 定位到新增的知识库单元
        selectedTab.value = tabs.value.findIndex((item) => item.id == id);
        getKbdetail(id); // 获取详情
        activeKey.value = '3';
      }
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };

  const deleteKnowledge = (id) => {
    Modal.confirm({
      title: '提示信息',
      content: '确认删除吗',
      okText: '确定',
      cancelText: '取消',
      hideTitle: true,
      onOk: async () => {
        let data = await deleteKnow({
          kb_id: id,
        });
        if (data.code == 0) {
          Message.success('删除成功');
          knowledgeData();
        }
      },
      onCancel: () => {},
    });
  };
  const reset = () => {
    formModel.value = generateFormModel();
  };

  function handleTabChange(key) {
    // 处理标签改变事件
    console.log('Changed to tab:', key);
    activeKey.value = key;
  }

  const handleSelectDensity = (
    val: string | number | Record<string, any> | undefined,
    e: Event
  ) => {
    size.value = val as SizeProps;
  };

  const cancleConfig = () => {
    activeKey.value = '1';
    let id = tabs.value[selectedTab.value].id;
    // basePagination.page = 1;
    // fetchData({
    //   kb_id: id,
    //   ...basePagination,
    // });
  };

  const saveConfig = async () => {
    activeKey.value = '1';
    let id = tabs.value[selectedTab.value].id;
    const { data } = await queryKbList({ page: 1, page_size: 10 });
    tabs.value = data;
    fetchData({
      kb_id: id,
      ...basePagination,
    });
    getKbdetail(id); // 获取详情
  };

  const enableDisable = async (type) => {
    Promise.all(
      checkedArr.value.map(async (item) => {
        await changeStatus({
          doc_id: item,
          status: type,
        });
      })
    ).then(() => {
      Message.success('更新成功');
      getKbList();
    });
  };

  //批量启用删除禁用
  const addBlock = async (type) => {
    if (type != 3) {
      //启动和取消
      let data = await kbdocumentrun({
        doc_ids: checkedArr.value,
        run: type,
      });
      if (data.code == 0) {
        checkedArr.value.forEach(async (item) => {
          tabs.value.forEach(async (items) => {
            if (items.id == item) {
              items.loading = true;
            }
          });
        });
        getKbList();
      } else {
        // Message.error('解析失败');
        // row.run = '1';
      }
    } else {
      //批量删除
      Modal.confirm({
        title: '提示信息',
        content: '确认删除吗',
        okText: '确定',
        cancelText: '取消',
        hideTitle: true,
        onOk: async () => {
          let data = await kbdocumentrm({ doc_id: checkedArr.value });
          if (data.code == 0) {
            Message.success('删除成功');
            getKbList();
          }
        },
        onCancel: () => {},
      });
    }
  };

  const getKbList = async () => {
    await fetchData({
      kb_id: tabs.value[selectedTab.value].id,
      ...basePagination,
    });
  };

  const exchangeArray = <T extends Array<any>>(
    array: T,
    beforeIdx: number,
    newIdx: number,
    isDeep = false
  ): T => {
    const newArray = isDeep ? cloneDeep(array) : array;
    if (beforeIdx > -1 && newIdx > -1) {
      // 先替换后面的，然后拿到替换的结果替换前面的
      newArray.splice(
        beforeIdx,
        1,
        newArray.splice(newIdx, 1, newArray[beforeIdx]).pop()
      );
    }
    return newArray;
  };

  const popupVisibleChange = (val: boolean) => {
    if (val) {
      nextTick(() => {
        const el = document.getElementById('tableSetting') as HTMLElement;
        const sortable = new Sortable(el, {
          onEnd(e: any) {
            const { oldIndex, newIndex } = e;
            exchangeArray(cloneColumns.value, oldIndex, newIndex);
            exchangeArray(showColumns.value, oldIndex, newIndex);
          },
        });
      });
    }
  };

  const fileClick = () => {
    detailsShow.value = true;
  };

  const goBackClick = () => {
    detailsShow.value = false;
  };

  function upTabdateItem(id, newName) {
    console.log(id, newName);
    const itemToUpdate = renderData.value.find((item) => item.id === id);
    if (itemToUpdate) {
      itemToUpdate.name = newName;
    }
  }

  const deleteItem = async (row) => {
    console.log(row);
    let data = await kbdocumentrm({ doc_id: row.id });
    if (data.code == 0) {
      Message.success('删除成功');
      // console.log(kbobj, 'kbobj');
      fetchData({
        kb_id: kbobj.id,
        ...basePagination,
      });
    }
  };
  const onDownloadDocument = async (record) => {
    console.log(record);
    await downloadFile({
      url: `/api/v1/document/get/${record.id}`,
      filename: record.name,
    });
  };
  const previewArea = async (row) => {
    Object.assign(seeObj, row);
    // console.log(seeObj.name, 'seeObj');
    let type = row.name.split('.')[1];
    console.log(type);
    if (type == 'pdf') {
      documenttype.value = 'txtPdf';
    } else if (type == 'docx') {
      documenttype.value = 'docx';
    } else if (type == 'xlsx') {
      documenttype.value = 'excel';
    } else if (type == 'txt') {
      documenttype.value = 'txtPdf';
    } else {
      return false;
    }

    previewSrc.value = `${import.meta.env.VITE_API_BASE_URL}/v1/document/get/${
      row.id
    }`;
    // previewSrc.value = `${ httpUrl }/v1/document/get/${row.id}`
    visible.value = true;
  };

  const handleChangeStatus = async (row) => {
    console.log(row);
    let data = await kbdocumentchangeStatus({
      doc_id: row.id,
      status: row.status,
    });
    if (data.code == 0) {
      Message.success('操作成功');
    }
  };

  const run = async (row) => {
    row.loading = true;
    let run;
    if (row.run == '0') {
      run = '1';
    } else if (row.run == '1') {
      run = '2';
    } else if (row.run == '2') {
      run = '1';
    } else {
      run = '1';
    }
    let data = await kbdocumentrun({
      doc_ids: [row.id],
      run: run,
    });
    if (data.code == 0) {
      // 定时器查询当前列表
      fetchData({
        kb_id: tabs.value[selectedTab.value].id,
        ...basePagination,
      });
    } else {
      // Message.error('解析失败');
      // row.run = '1';
    }

    row.loading = false;
  };

  const changeFetchData = async (row) => {
    basePagination.page = 1;
    fetchData({
      kb_id: kbobj.id,
      ...basePagination,
    });
  };
  watch(
    () => columns.value,
    (val) => {
      // alert(columns.value)
      cloneColumns.value = cloneDeep(val);
      cloneColumns.value.forEach((item, index) => {
        item.checked = true;
      });
      showColumns.value = cloneDeep(cloneColumns.value);
    },
    { deep: true, immediate: true }
  );

  onBeforeMount(async () => {
    // const  {data}  = await queryKbtenantInfo();
    // Object.assign(kbtenantInfo,data);
    // console.log(kbtenantInfo,'kbtenantInfo的数据');
  });
  onMounted(() => {
    knowledgeData();
  });
  onBeforeUnmount(() => {
    clearInterval(timer);
  });
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px 20px 20px;

    .main-container {
      display: flex;
      width: 100%;

      .lf-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        //justify-content: space-evenly;
        border-radius: 8px;
        background: var(--color-bg-2);
        width: 200px;

        .lf-container-top {
          display: flex;
          margin: 10px 0;
        }

        .lf-container-down {
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          width: 90%;
          height: calc(100% - 80px);
          border: 1px solid var(--color-fill-3);
          border-radius: 8px;
          //padding: 10px;
          margin-bottom: 10px;
          //.tabs{
          //  width: 100%;
          //  height: 100%;
          //  overflow: auto;
          //}
          .tab {
            cursor: pointer;
            box-sizing: border-box;
            margin: 10px 10px;
            padding: 0 10px;
            padding-right: 20%;
            font-size: 14px;
            height: 40px;
            line-height: 40px;
            list-style: none;
            position: relative;
            color: var(--color-text-1);
            border: 1px solid var(--color-neutral-3);
            background: var(--color-bg-2);
            border-radius: 8px;
            overflow: hidden; /* 确保超出容器的文本被隐藏 */
            white-space: nowrap; /* 防止文本换行 */
            text-overflow: ellipsis; /* 超出部分显示省略号 */
          }

          .tab:hover {
            color: #2a2a2b;
            border: 1px solid var(--color-neutral-3);
            background: #e8e8ea;
            box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16),
              0 3px 6px 0 rgba(0, 0, 0, 0.12),
              0 5px 12px 4px rgba(0, 0, 0, 0.09);
          }

          .tab.active {
            color: #2a2a2b;
            border: 1px solid var(--color-neutral-1);
            background: #e8e8ea;
            cursor: pointer;
          }
        }
      }

      .rt-container {
        position: relative;
        //background: #626aea;
        margin-left: 20px;
        width: calc(100% - 200px);
        overflow: hidden;

        .rt-container-main {
          overflow: auto;
        }

        .details {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #ffffff;

          .details-header {
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
            padding-right: 20px;
          }
        }
      }
    }
  }

  :deep(.arco-table-th) {
    &:last-child {
      .arco-table-th-item-title {
        margin-left: 16px;
      }
    }
  }

  .action-icon {
    margin-left: 12px;
    cursor: pointer;
  }

  .active {
    color: #0960bd;
    background-color: #e3f4fc;
  }

  .setting {
    display: flex;
    align-items: center;
    width: 200px;

    .title {
      margin-left: 12px;
      cursor: pointer;
    }
  }
</style>
