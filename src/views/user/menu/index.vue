<template>
  <div class="container">
    <Breadcrumb :items="['个人中心', '菜单管理']" />
    <a-card  ref="account" class="general-card" :title="$t('菜单管理')">
      <a-row>
        <a-col :flex="1" :span="12">
          <a-form
            :model="formModel"
            :label-col-props="{ span: 6 }"
            :wrapper-col-props="{ span: 18 }"
            label-align="left"
          >
            <a-row :gutter="16">
              <a-col :span="8">
                <a-form-item
                  field="number"
                  :label="$t('菜单名称')"
                >
                  <a-input
                    v-model="formModel.number"
                    :placeholder="$t('请输入')"
                  />
                </a-form-item>
              </a-col>
<!--              <a-col :span="8">-->
<!--                <a-form-item field="name" :label="$t('searchTable.form.name')">-->
<!--                  <a-input-->
<!--                    v-model="formModel.name"-->
<!--                    :placeholder="$t('searchTable.form.name.placeholder')"-->
<!--                  />-->
<!--                </a-form-item>-->
<!--              </a-col>-->
              <a-col :span="8">
                <a-form-item
                  field="contentType"
                  :label="$t('状态')"
                >
                  <a-select
                    v-model="formModel.contentType"
                    :options="contentTypeOptions"
                    :placeholder="$t('searchTable.form.selectDefault')"
                  />
                </a-form-item>
              </a-col>
<!--              <a-col :span="8">-->
<!--                <a-form-item-->
<!--                  field="filterType"-->
<!--                  :label="$t('searchTable.form.filterType')"-->
<!--                >-->
<!--                  <a-select-->
<!--                    v-model="formModel.filterType"-->
<!--                    :options="filterTypeOptions"-->
<!--                    :placeholder="$t('searchTable.form.selectDefault')"-->
<!--                  />-->
<!--                </a-form-item>-->
<!--              </a-col>-->
<!--              <a-col :span="8">-->
<!--                <a-form-item-->
<!--                  field="createdTime"-->
<!--                  :label="$t('searchTable.form.createdTime')"-->
<!--                >-->
<!--                  <a-range-picker-->
<!--                    v-model="formModel.createdTime"-->
<!--                    style="width: 100%"-->
<!--                  />-->
<!--                </a-form-item>-->
<!--              </a-col>-->
<!--              <a-col :span="8">-->
<!--                <a-form-item-->
<!--                  field="status"-->
<!--                  :label="$t('searchTable.form.status')"-->
<!--                >-->
<!--                  <a-select-->
<!--                    v-model="formModel.status"-->
<!--                    :options="statusOptions"-->
<!--                    :placeholder="$t('searchTable.form.selectDefault')"-->
<!--                  />-->
<!--                </a-form-item>-->
<!--              </a-col>-->
            </a-row>
          </a-form>
        </a-col>
        <a-divider style="height: 40px" direction="vertical" />
        <a-col :flex="'200px'" style="text-align: right">
          <a-button @click="reset" style="margin-right: 20px">
            <template #icon>
              <icon-refresh />
            </template>
            {{ $t('searchTable.form.reset') }}
          </a-button>
          <a-button type="primary" @click="search">
            <template #icon>
              <icon-search />
            </template>
            {{ $t('searchTable.form.search') }}
          </a-button>
        </a-col>
      </a-row>
      <a-divider style="margin-top: 0" />
      <a-row style="margin-bottom: 16px">
        <a-col :span="12">
          <a-space>
<!--            新建-->
            <add edit="add" />
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
          style="display: flex; align-items: center; justify-content: end"
        >
<!--          <a-button>-->
<!--            <template #icon>-->
<!--              <icon-download />-->
<!--            </template>-->
<!--            {{ $t('searchTable.operation.download') }}-->
<!--          </a-button>-->
          <a-tooltip :content="$t('searchTable.actions.refresh')">
            <div class="action-icon" @click="search"
              ><icon-refresh size="18"
            /></div>
          </a-tooltip>
          <a-dropdown @select="handleSelectDensity">
            <a-tooltip :content="$t('searchTable.actions.density')">
              <div class="action-icon"><icon-line-height size="18" /></div>
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
      <a-table :columns="columns"
               :data="data"
               :load-more="loadMore"
               :bordered="false"
               >
        <template #filterType="{ record }">
          {{ $t(`searchTable.form.filterType.${record.filterType}`) }}
        </template>
        <template #status="{ record }">
          <span v-if="record.status === 'offline'" class="circle"></span>
          <span v-else class="circle pass"></span>
          {{ $t(`searchTable.form.status.${record.status}`) }}
        </template>
        <template #operations="{ record }">
          <add edit="edit" :record = 'record' />
          <a-popconfirm content="确定删除吗？" type="warning" @ok="deleteItem(record)">
            <a-button v-permission="['admin']" type="text" size="small">
              {{ $t('删除') }}
            </a-button>
          </a-popconfirm>
        </template>
      </a-table>
    </a-card>

  </div>
</template>

<script lang="ts" setup>
  import { computed, ref, reactive, watch, nextTick } from 'vue';
  import { useI18n } from 'vue-i18n';
  import useLoading from '@/hooks/loading';
  import { queryPolicyList, PolicyRecord, PolicyParams } from '@/api/list';
  import { Pagination } from '@/types/global';
  import type { SelectOptionData } from '@arco-design/web-vue/es/select/interface';
  import type { TableColumnData } from '@arco-design/web-vue/es/table/interface';
  import cloneDeep from 'lodash/cloneDeep';
  import Sortable from 'sortablejs';
  import add from '@/views/user/menu/add.vue'
  import { deleteAccount } from "@/api/account";
  type SizeProps = 'mini' | 'small' | 'medium' | 'large';
  type Column = TableColumnData & { checked?: true };
  const account = ref(null)
  const generateFormModel = () => {
    return {
      number: '',
      name: '',
      contentType: '1',
      filterType: '',
      createdTime: [],
      status: '',
    };
  };
  const { loading, setLoading } = useLoading(true);
  const { t } = useI18n();
  const renderData = ref<PolicyRecord[]>([]);
  const formModel = ref(generateFormModel());
  const cloneColumns = ref<Column[]>([]);
  const showColumns = ref<Column[]>([]);
  const edit = ref('add');

  const size = ref<SizeProps>('medium');
  let visible = ref(false)
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
  const columns = [{
    title: '菜单名称',
    dataIndex: 'name',
  }, {
    title: '权限标识',
    dataIndex: 'salary',
  }, {
    title: '组件',
    dataIndex: 'address',
  }, {
    title: '状态',
    dataIndex: 'email',
  }];
  const data = reactive([{
    key: '1',
    name: 'Jane Doe',
    salary: 23000,
    address: '32 Park Road, London',
    email: 'jane.doe@example.com',
    children: [{
      key: '2',
      name: 'Alisa Ross',
      salary: 25000,
      address: '35 Park Road, London',
      email: 'alisa.ross@example.com',
    }, {
      key: '5',
      name: 'Alisa Ross',
      salary: 25000,
      address: '35 Park Road, London',
      email: 'alisa.ross@example.com',
      isLeaf: true,
    }]
  }, {
    key: '6',
    name: 'Alisa Ross',
    salary: 25000,
    address: '35 Park Road, London',
    email: 'alisa.ross@example.com',
  }, {
    key: '7',
    name: 'Kevin Sandra',
    salary: 22000,
    address: '31 Park Road, London',
    email: 'kevin.sandra@example.com',
    isLeaf: true,
  }, {
    key: '8',
    name: 'Ed Hellen',
    salary: 17000,
    address: '42 Park Road, London',
    email: 'ed.hellen@example.com',
    isLeaf: true,
  }, {
    key: '9',
    name: 'William Smith',
    salary: 27000,
    address: '62 Park Road, London',
    email: 'william.smith@example.com',
    isLeaf: true,
  }])

  const loadMore = (record, done) => {
    window.setTimeout(() => {
      done([
        {
          key: `${record.key}-1`,
          name: 'Ed Hellen',
          salary: 17000,
          address: '42 Park Road, London',
          email: 'ed.hellen@example.com',
          isLeaf: true,
        }, {
          key: `${record.key}-2`,
          name: 'William Smith',
          salary: 27000,
          address: '62 Park Road, London',
          email: 'william.smith@example.com',
          isLeaf: true,
        }
      ])
    }, 2000)
  }


  const contentTypeOptions = computed<SelectOptionData[]>(() => [
    {
      label: t('启用'),
      value: '1',
    },
    {
      label: t('停用'),
      value: '0',
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
  const fetchData = async (
    params: PolicyParams = { current: 1, pageSize: 20 }
  ) => {
    setLoading(true);
    try {
      const { data } = await queryPolicyList(params);
      renderData.value = data.list;
      console.log(renderData);
      pagination.current = params.current;
      pagination.total = data.total;
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };

  const search = () => {
    fetchData({
      ...basePagination,
      ...formModel.value,
    } as unknown as PolicyParams);
  };

  const handleClick = ()=>{
    visible.value = true;
  }

  const onPageChange = (current: number) => {
    fetchData({ ...basePagination, current });
  };

  fetchData();
  const reset = () => {
    formModel.value = generateFormModel();
  };

  const handleSelectDensity = (
    val: string | number | Record<string, any> | undefined,
    e: Event
  ) => {
    size.value = val as SizeProps;
  };

  const handleChange = (
    checked: boolean | (string | boolean | number)[],
    column: Column,
    index: number
  ) => {
    if (!checked) {
      cloneColumns.value = showColumns.value.filter(
        (item) => item.dataIndex !== column.dataIndex
      );
    } else {
      cloneColumns.value.splice(index, 0, column);
    }
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

  const   deleteItem =  async (row)=>{
    console.log(row);
    // let data = await deleteAccount({id: row.number})
    account.value.$messageSuccess('删除成功')
    //
    // if(data.code == 200){
    //   this.$messageSuccess('删除成功')
    // }
  }
</script>

<script lang="ts">
  export default {
    name: 'SearchTable',
    methods: {

    }
  };
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px 20px 20px;
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
