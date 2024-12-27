<template>
  <div class="container">
    <authheader :items="menuTips"></authheader>
    <a-card ref="account" class="general-card">
      <div class="table-page-search-wrapper">
        <div class="search-wrapper">
          <div>
            <a-input
              v-model="formModel.name"
              :style="{ width: '320px' }"
              :placeholder="$t('请输入')"
            />
          </div>
          <div>
            <a-button
              type="primary"
              @click="search"
              style="margin-right: 20px; margin-left: 10px"
            >
              <template #icon>
                <icon-search />
              </template>
              {{ $t('searchTable.form.search') }}
            </a-button>
            <a-button @click="reset">
              <template #icon>
                <icon-refresh />
              </template>
              {{ $t('searchTable.form.reset') }}
            </a-button>
          </div>
        </div>
        <div class="search-wrapper">
          <div>
            <a-space>
              <a-button type="primary" :align="'right'" @click="operation(0)"
                >+ 新建角色</a-button
              >
            </a-space>
          </div>
          <div class="wrapper-icon">
            <a-tooltip :content="$t('searchTable.actions.refresh')">
              <div class="action-icon" @click="search">
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
          </div>
        </div>
      </div>
      <a-table
        row-key="id"
        :loading="loading"
        :pagination="pagination"
        :columns="columns"
        :data="renderData"
        :bordered="false"
        :size="size"
        @page-change="onPageChange"
      >
        <template #index="{ rowIndex }">
          {{ rowIndex + 1 + (pagination.current - 1) * pagination.pageSize }}
        </template>
        <template #status="{ record }">
          <a-switch
            checked-value="1"
            unchecked-value="0"
            @change="statusChange(record.status, record)"
            v-model="record.status"
          />
        </template>
        <template #operations="{ record }">
          <a-space>
            <a-button
              type="dashed"
              status="warning"
              @click="operation(4, record)"
            >角色权限</a-button>
            <a-popconfirm
              content="请确认是否删除？"
              type="success"
              @ok="operation(3, record)"
            >
              <a-button type="outline" status="danger">删除</a-button>
            </a-popconfirm>


          </a-space>
        </template>
      </a-table>
    </a-card>
    <a-modal
      v-model:visible="visible"
      :title="save"
      @cancel="handleCancel(1)"
      @ok="editHandleOk"
    >
      <a-form  ref="formRef" :model="editform">
        <a-form-item required field="roleName" label="角色名" :rules="[{required:true,message:'角色名必填'},{maxLength:50,message:'长度不超过50'}]">
          <a-input v-model="editform.roleName" />
        </a-form-item>
        <a-form-item field="remark" label="备注">
          <a-input v-model="editform.remark" />
        </a-form-item>
      </a-form>
    </a-modal>
    <a-modal
      width="30%"
      v-model:visible="resourcevisible"
      title="权限配置"
      @cancel="handleCancel(3)"
      @ok="editResourceHandleOk"
    >
      <div :style="{ 'display': 'flex', 'flex-direction': 'column' }">
        <a-tabs
          :style="{ 'width': '100%', 'height': '500px', 'overflow-y': 'auto' }"
        >
          <a-tab-pane key="1">
            <template #title>
              <icon-calendar />
              菜单
            </template>
            <a-tree
              class="tree-demo"
              v-model:checked-keys="checkedKeysMenu"
              v-model:expanded-keys="expandKdysMenu"
              :only-check-leaf=true
              :checkable="true"
              :data="treeDataMenu"
              @check="onCheckMenu"
              :fieldNames="{
                key: 'menuId',
                title: 'menuName',
                children: 'children',
              }"
            >
            </a-tree>
          </a-tab-pane>
          <a-tab-pane key="2">
            <template #title>
              <icon-clock-circle />
              知识库
            </template>
            <a-space direction="vertical" size="large">
              <a-checkbox-group
                v-model="checkedKeysKnowledge"
                @change="onCheckKnowledge"
              >
                <a-checkbox
                  v-for="(knowledg, index) of knowledgeList"
                  :value="knowledg.id"
                  :lable="knowledg.name"
                  @change="onCheckKnowledge"
                  style="width:150px">
                  {{ knowledg.name }}
                </a-checkbox>
              </a-checkbox-group>
            </a-space>
          </a-tab-pane>
          <a-tab-pane key="3">
            <template #title>
              <icon-user />
              智能体
            </template>
            <a-checkbox-group
              v-model="checkedKeysDialog"
              @change="onCheckDialog"
            >
              <a-checkbox
                v-for="(dialog, index) of DialogsList"
                :value="dialog.id"
                :lable="dialog.name"
                @change="onCheckDialog"
                style="width:150px">
                {{ dialog.name }}
              </a-checkbox>
            </a-checkbox-group>
            <a-checkbox-group
              v-model="checkedKeysAgent"
              @change="onCheckAgent"
            >
              <a-checkbox
                v-for="(agent, index) of AgentList"
                :value="agent.id"
                :lable="agent.title"
                @change="onCheckAgent"
                style="width:150px">
                {{ agent.title }}
              </a-checkbox>
            </a-checkbox-group>
          </a-tab-pane>
        </a-tabs>
        <a-card
          :style="{
            'width': '100%',
            'height': '200px',
            'overflow-y': 'auto',
            'margin': '1px',
          }"
          class="card-demo"
          title="角色所有权限"
          hoverable
        >
          <a-space wrap>
            菜单功能：
            <a-tag
              v-for="(tag, index) of checkStrictlyMenu"
              :key="tag.menuId"
              @close="handleMenuRemove(tag)"
            >
              {{ tag.menuName }}
            </a-tag>
          </a-space>
          <a-divider />
          <a-space wrap>
            知识库:
            <a-tag
              v-for="(tag, index) of checkStrictlyKnowledge"
              :key="tag.knowledgeId"
              @close="handleKnowledgeRemove(tag)"
            >
              {{ tag.knowledgeName }}
            </a-tag>
          </a-space>
          <a-divider />
          <a-space wrap>
            智能体:
            <a-tag
              v-for="(tag, index) of checkStrictlyDialog"
              :key="tag.dialogId"
              @close="handleDialogRemove(tag)"
            >
              {{ tag.dialogName }}
            </a-tag>
            <a-tag
              v-for="(tag, index) of checkStrictlyAgent"
              :key="tag.agentId"
              @close="handleDialogRemove(tag)"
            >
              {{ tag.agentTitle }}
            </a-tag>
          </a-space>
        </a-card>
      </div>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
  import { computed, reactive, ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  import useLoading from '@/hooks/loading';
  import { Pagination } from '@/types/global';
  import type { TableColumnData } from '@arco-design/web-vue/es/table/interface';
  import {
    DialogList,
    KnowledgeList,
    OrganizationList,
    ResourceList, Role, RoleAdd, RoleDelete, RoleEdit, RoleList, Rolestatus,
    User,
    UserAdd,
    UserChangePwd,
    UserDelete,
    UserEdit,
    UserList,
    Userstatus
  } from "@/api/authority";
  import { Modal } from '@arco-design/web-vue';
  import Authheader from '@/views/authority/components/authheader.vue';
  import router from "@/router";
  import { queryCanvasList } from "@/api/Agent";
  import { getUserResources } from "@/utils/auth";
  import { forEach } from "lodash";

  let treeDataMenu = ref([]);
  let checkedKeysMenu = ref([]);
  let expandKdysMenu = ref([]);
  let checkStrictlyMenu = ref([]);

  let checkedKeysKnowledge = ref([]);
  let checkStrictlyKnowledge = ref([]);

  let checkedKeysDialog = ref([]);
  let checkStrictlyDialog = ref([]);

  let checkedKeysAgent = ref([]);
  let checkStrictlyAgent = ref([]);

  let knowledgeList = ref([]);
  let DialogsList = ref([]);
  let AgentList = ref([]);

  let menuTips = ref(['权限管理', '角色']);
  type SizeProps = 'mini' | 'small' | 'medium' | 'large';
  const account = ref(null);
  const generateFormModel = () => {
    return {
      name: '',
    };
  };
  let showLine = ref(true);
  const { loading, setLoading } = useLoading(true);
  const { t } = useI18n();
  let save = ref('新增');
  let renderData = ref<Role[]>([]);
  let formModel = ref(generateFormModel());
  let editform = ref<Role>({
    createTime: "",
    dataScope: "",
    iconCls: "",
    remark: "",
    roleId: "",
    roleKey: "",
    roleName: "",
    roleSort: "0",
    status: "",
    updateTime: ""
  });

  let size = ref<SizeProps>('medium');
  let visible = ref(false);
  let resourcevisible = ref(false);
  let selectRole = ref({});


  const eachChildrenAdd=(node)=>{
    if (node.children?.length > 0) {
      node.children.forEach((child) => {
        checkStrictlyMenu.value.push({ menuId: child.menuId, menuName: child.menuName });
        eachChildrenAdd(child);
      });
    }
  }

  const findChild = (node, val): boolean => {
    let isExist = false;
    if (node.children?.length > 0) {
      node.children.forEach((child) => {
        if (val.menuId == child.menuId) {
          isExist = isExist || true;
        } else {
          isExist = isExist || findChild(child, val);
        }
      });
    }
    return isExist;
  };

  const onCheckMenu = (newCheckedKeys, event) => {
    let o = { menuId: event.node.menuId, menuName: event.node.menuName };
    if (event.checked) {
      checkStrictlyMenu.value.push(o);
      eachChildrenAdd(event.node);
      if (event.halfCheckedNodes?.length > 0) {
        event.halfCheckedNodes.forEach((child) => {
          let e = { menuId: child.menuId, menuName: child.menuName };
          if (checkStrictlyMenu.value.find((item) => item.menuId === e.menuId) == undefined) {
            checkStrictlyMenu.value.push(e);
          }
        });
      }
    } else {
      let menus=[];
      checkStrictlyMenu.value.forEach((val, idx, array) => {
        if (val.menuId != event.node.menuId && !findChild(event.node, val)) {
          menus.push({ menuId: val.menuId, menuName: val.menuName });
        }
      });
      checkStrictlyMenu.value = menus;
    }
  };
  const onCheckKnowledge = (newCheckedKeys, event) => {
    let o = {
      knowledgeId: event.target.value,
      knowledgeName: event.target.labels[0].innerText,
    };
    if (event.target.checked) {
      checkStrictlyKnowledge.value.push(o);
    } else {
      checkStrictlyKnowledge.value.forEach((val, idx, array) => {
        // val: 当前值
        if (val.knowledgeId == event.target.value) {
          checkStrictlyKnowledge.value.splice(idx, 1);
          return true;
        }
      });
    }
  };
  const onCheckAgent = (newCheckedKeys, event) => {
    let o = {
      agentId: event.target.value,
      agentTitle: event.target.labels[0].innerText,
    };
    if (event.target.checked) {
      checkStrictlyAgent.value.push(o);
    } else {
      checkStrictlyAgent.value.forEach((val, idx, array) => {
        // val: 当前值
        if (val.agentId == event.target.value) {
          checkStrictlyAgent.value.splice(idx, 1);
          return true;
        }
      });
    }
  };
  const onCheckDialog = (newCheckedKeys, event) => {
    let o = {
      dialogId: event.target.value,
      dialogName: event.target.labels[0].innerText,
    };
    if (event.target.checked) {
      checkStrictlyDialog.value.push(o);
    } else {
      checkStrictlyDialog.value.forEach((val, idx, array) => {
        // val: 当前值
        if (val.dialogId == event.target.value) {
          checkStrictlyDialog.value.splice(idx, 1);
          return true;
        }
      });
    }
  };


  const handleMenuRemove = (key) => {
    checkStrictlyMenu.value = checkStrictlyMenu.value.filter(
      (tag) => tag !== key
    );
  };
  const handleKnowledgeRemove = (key) => {
    checkStrictlyKnowledge.value = checkStrictlyKnowledge.value.filter(
      (tag) => tag !== key
    );
  };
  const handleDialogRemove = (key) => {
    checkStrictlyDialog.value = checkStrictlyDialog.value.filter(
      (tag) => tag !== key
    );
  };
  let formRef = ref();
  const basePagination: Pagination = {
    current: 1,
    pageSize: 15,
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
      title: t('序号'),
      dataIndex: 'index',
      slotName: 'index',
    },
    {
      title: t('角色名'),
      dataIndex: 'roleName',
    },
    {
      title: t('状态'),
      dataIndex: 'status',
      slotName: 'status',
    },
    {
      title: t('searchTable.columns.operations'),
      dataIndex: 'operations',
      slotName: 'operations',
    },
  ]);

  const statusChange = async (value, record) => {
    await Rolestatus(record.roleId, value).then((res) => {});
  };

  const handleCancel = (type) => {
    if (type == 1) {
      visible.value = false;
    }
    if (type == 2) {
      resourcevisible.value = false;
    }
  };


  const editResourceHandleOk = async () => {
    let resources: Array = [],
      dialogs: Array = [],
      agents: Array = [],
      Knowledges: Array = [],
      role: Role = { roleId: selectRole.value.roleId };
    checkStrictlyMenu.value.forEach((val) => {
      resources.push(val.menuId);
    });
    role.resources = resources;

    checkStrictlyKnowledge.value.forEach((val) => {
      Knowledges.push(val.knowledgeId);
    });
    role.knowledges = Knowledges;

    checkStrictlyDialog.value.forEach((val) => {
      dialogs.push(val.dialogId);
    });
    role.dialogs = dialogs;

    checkStrictlyAgent.value.forEach((val) => {
      agents.push(val.agentId);
    });
    role.agents = agents;

    await RoleEdit(role).then((res) => {
      fetchData();
    });
  };

  const cb = async (err) => {
    if (err) {
      visible.value = true;
    } else {
      if (editform.value.roleId.length > 0) {
        await RoleEdit({
          ...editform.value,
        } as unknown as Role).then((res) => {
          fetchData();
        });
      } else {
        await RoleAdd({
          ...editform.value,
        } as unknown as Role).then((res) => {
          fetchData();
        });
      }
    }

  };

  const editHandleOk =  () => {
    formRef.value.validate(cb);
  };
  const operation = async (t, record) => {
    if (t == 0) {
      save.value = '新增';
      visible.value = true;
      editform.value.roleName = "";
      editform.value.roleKey = "";
      editform.value.remark = "";
    }

    //删除
    if (t == 3) {
      await RoleDelete(record.roleId).then((res) => {
        if (res.code == 200) {
          fetchData();
        }
      });
    }
    //权限
    if (t == 4) {
      resourcevisible.value = true;
      checkedKeysMenu.value = [];
      expandKdysMenu.value = [];
      checkStrictlyMenu.value = [];
      checkStrictlyKnowledge.value = [];
      checkedKeysKnowledge.value = [];
      checkStrictlyDialog.value = [];
      checkedKeysDialog.value = [];
      selectRole.value = record;
      if (record.resources) {
        record.resources.forEach((val) => {
          checkStrictlyMenu.value.push({
            menuId: val.menuId,
            menuName: val.menuName,
          });
          checkedKeysMenu.value.push(val.menuId);
          expandKdysMenu.value.push(val.menuId);
        });
      }
      if (record.knowledges) {
        record.knowledges.forEach((val) => {
          checkStrictlyKnowledge.value.push({
            knowledgeId: val.id,
            knowledgeName: val.name,
          });
          checkedKeysKnowledge.value.push(val.id);
        });
      }
      if (record.dialogs) {
        record.dialogs.forEach((val) => {
          checkStrictlyDialog.value.push({
            dialogId: val.id,
            dialogName: val.name,
          });
          checkedKeysDialog.value.push(val.id);
        });
      }
      if (record.agents) {
        record.agents.forEach((val) => {
          checkStrictlyAgent.value.push({
            agentId: val.id,
            agentTitle: val.title,
          });
          checkedKeysAgent.value.push(val.id);
        });
      }
    }
  };

  const fetchData = async (
    params: Pagination = { current: 1, pageSize: 20 }
  ) => {
    setLoading(true);
    try {
      await RoleList(params).then((res) => {
        renderData.value = res.rows;
        console.log(renderData);
        pagination.current = params.current;
        pagination.total = res.total;
      });
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
    } as unknown as Pagination);
  };

  const onPageChange = (current: number) => {
    fetchData({ ...basePagination, current });
  };


  let userResources = JSON.parse(getUserResources());
  const isExist = (val): boolean => {
    let isok = false;
    userResources.forEach((r) => {
      if (val == r.menuId) {
        isok = true;
      }
    });
    return isok;
  };
  const removeChild = (nodes,newT) => {
    nodes.forEach((child) => {
      if (isExist(child.menuId)){
        newT.push(child);
        let nt = [];
        if (child.children?.length > 0) {
          removeChild(child.children, nt);
          child.children = nt;
        }
      }
    });
  };

  const MenuData = async (key) => {
    await ResourceList(key).then((res) => {
      let newTree=[]
      removeChild(res.rows,newTree)
      treeDataMenu.value = [...res.rows];
    });
  };

  KnowledgeList().then((res) => {
    knowledgeList.value = res.data;
  });

  DialogList().then((res) => {
    DialogsList.value = res.data;
  });
  queryCanvasList(null).then((canvas) => {
    AgentList= canvas.data
  });
  fetchData();
  MenuData();

  const reset = () => {
    formModel.value = generateFormModel();
  };

  const handleSelectDensity = (
    val: string | number | Record<string, any> | undefined,
    e: Event
  ) => {
    size.value = val as SizeProps;
  };
</script>

<style scoped lang="less">
  .card-demo {
    width: 460px;
    margin-left: 24px;
    transition-property: all;
  }

  .card-demo:hover {
    transform: translateY(-4px);
  }
  .table-page-search-wrapper {
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e8e8e8;
    .search-wrapper {
      display: flex;
      .wrapper-icon {
        display: flex;
        align-items: center;
        margin-left: 40px;
        // margin-right: 40px;
      }
    }
  }
</style>
<style lang="less">
  .ant-table-wrapper {
    .ant-table-tbody {
      tr {
        td {
          .ant-table-row-cell-break-word {
            .ant-table-column-sorter {
              display: none;
            }
          }
        }
      }
    }

    .search-wrapper {
      display: flex;
      .wrapper-icon {
        display: flex;
        align-items: center;
        margin-left: 40px;
        // margin-right: 40px;
      }
    }
  }
</style>
<style lang="less">
  .ant-table-wrapper {
    .ant-table-tbody {
      tr {
        td {
          .ant-table-row-cell-break-word {
            .ant-table-column-sorter {
              display: none;
            }
          }
        }
      }
    }
  }
</style>
<style lang="less" scoped>
  .table-page-search-wrapper {
    .ant-form-inline {
      :deep(.ant-form-item) {
        display: flex;
      }
    }
  }
</style>
