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
                >+ 新建账户</a-button
              >
            </a-space></div
          >
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
              type="outline"
              status="success"
              @click="operation(1, record)"
              >重置密码</a-button
            >
            <a-button type="outline" @click="operation(2, record)"
              >编辑</a-button
            >
            <a-popconfirm
              content="请确认是否删除？"
              type="success"
              @ok="operation(3, record)"
            >
              <a-button type="outline" status="danger">删除</a-button>
            </a-popconfirm>
            <a-button
              type="dashed"
              status="warning"
              @click="operation(4, record)"
              >查看权限</a-button
            >
            <a-button status="success" @click="operation(5, record)"
              >部门配置</a-button
            >
          </a-space>
        </template>
      </a-table>
    </a-card>
    <a-modal
      v-model:visible="visible"
      :title="save"
      @cancel="handleCancel(1)"
      @ok="editHandleOk"
      width="48%"
    >
      <a-form ref="formRef" :model="editform">
        <a-row :gutter="20">
          <a-col :span="10">
            <a-form-item   field="loginName" label="用户名" :rules="[{required:true,message:'用户名必填'},{maxLength:50,message:'长度不超过50'}]"
                           >
              <a-input  v-model="editform.loginName" />
            </a-form-item>
          </a-col>
          <a-col :span="10">
            <a-form-item field="userName" label="姓名">
              <a-input v-model="editform.userName" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="20">
          <a-col :span="10">
            <a-form-item field="phoneNumber" label="手机号">
              <a-input v-model="editform.phoneNumber" />
            </a-form-item>
          </a-col>
          <a-col :span="10">
            <a-form-item required  field="email" label="邮箱" :rules="[{required:true,message:'邮箱必填'},{maxLength:50,message:'长度不超过50'}]" >
              <a-input v-model="editform.email" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="20">
          <a-col :span="10">
            <a-form-item field="psw" label="密码">
              <a-input v-model="editform.psw" />
            </a-form-item>
          </a-col>
          <a-col :span="10">
            <a-form-item required  field="role" label="角色" :rules="[{required:true,message:'角色必选'}]" >
              <a-select
                v-model="editform.role"
                :options="roles"
                :field-names="fieldNames"
                @change="roleChange"
              >
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-modal>
    <a-modal
      width="50%"
      v-model:visible="deptvisible"
      title="部门配置"
      @cancel="handleCancel(2)"
      @ok="editDeptHandleOk"
    >
      <div :style="{ display: 'flex' }">
        <a-card
          :style="{ 'width': '460px', 'height': '500px', 'overflow-y': 'auto' }"
          title="机构"
          hoverable
        >
          <a-tree
            class="tree-demo"
            v-model:checked-keys="checkedKeys"
            v-model:expanded-keys="expandKdys"
            :checkable="true"
            :data="treeData"
            :show-line="showLine"
            @check="onCheck"
            :fieldNames="{
              key: 'deptId',
              title: 'deptName',
              children: 'children',
            }"
          >
          </a-tree>
        </a-card>
        <a-card class="card-demo" title="用户所属机构" hoverable>
          <a-space wrap>
            <a-tag
              v-for="(tag, index) of checkStrictly"
              :key="tag.deptId"
              @close="handleRemove(tag)"
            >
              {{ tag.deptName }}
            </a-tag>
          </a-space>
        </a-card>
      </div>
    </a-modal>
    <a-modal
      width="50%"
      v-model:visible="resourcevisible"
      v-if="resourcevisible"
      title="用户所有权限"
      okText="关闭"
      hide-Cancel="true"
      @ok="handleCancel(3)"
    >
      <div :style="{ 'display': 'flex', 'flex-direction': 'column' }">
        <a-card
          :style="{
            'width': '100%',
            'height': '40%',
            'overflow-y': 'auto',
            'margin': '1px',
          }"
          class="card-demo"
          title="用户所有权限"
          hoverable
        >
          <a-space wrap>
            菜单功能：
            <a-tag
              v-for="(tag, index) of checkStrictlyMenu"
              :key="tag.menuId"
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
            >
              {{ tag.dialogName }}
            </a-tag>
            <a-tag
              v-for="(tag, index) of checkStrictlyAgent"
              :key="tag.agentId"
            >
              {{ tag.agentName }}
            </a-tag>
          </a-space>
        </a-card>
      </div>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
  import { computed, reactive, ref, h, onMounted } from 'vue';
  import { useI18n } from 'vue-i18n';
  import useLoading from '@/hooks/loading';
  import { Pagination } from '@/types/global';
  import type { TableColumnData } from '@arco-design/web-vue/es/table/interface';
  import {
    DialogList,
    KnowledgeList,
    OrganizationList,
    ResourceList, Role, RoleList,
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
  import { create } from 'lodash';
  import { queryCanvasList } from "@/api/Agent";

  const fieldNames = { value: 'roleId', label: 'roleName' };
  const roles = ref([]);

  let treeData = ref([]);
  let checkedKeys = ref([]);
  let expandKdys = ref([]);
  let checkStrictly = ref([]);
  let checkStrictlyMenu = ref([]);
  let checkStrictlyKnowledge = ref([]);
  let checkStrictlyDialog = ref([]);
  let checkStrictlyAgent = ref([]);
  let formRef = ref();

  let menuTips = ref(['权限管理', '账号']);
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
  let renderData = ref<User[]>([]);
  let formModel = ref(generateFormModel());
  let editform = ref<User>({
    createTime: '',
    dept: undefined,
    deptName: '',
    email: '',
    nickName: '',
    phoneNumber: '',
    status: '',
    userId: '',
    loginName:'',
    userName: '',
    psw:'',
    role:'',
  });

  let size = ref<SizeProps>('medium');
  let visible = ref(false);
  let deptvisible = ref(false);
  let resourcevisible = ref(false);
  let selectUser = ref({});

 const loadRole=async () => {
   await RoleList(null).then((res) => {
     roles.value = res.rows;
   });
 }

  const roleChange = (val) => {
    editform.value.role = val;
  };

  const onCheck = (newCheckedKeys, event) => {
    let o = { deptId: event.node.deptId, deptName: event.node.deptName };
    if (event.checked) {
      checkStrictly.value.push(o);
    } else {
      checkStrictly.value.forEach((val, idx, array) => {
        // val: 当前值
        if (val.deptId == event.node.deptId) {
          checkStrictly.value.splice(idx, 1);
          return true;
        }
      });
    }
  };

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
      title: t('用户名'),
      dataIndex: 'loginName',
    },
    {
      title: t('角色'),
      dataIndex: 'roleName',
    },
    {
      title: t('所属部门'),
      dataIndex: 'deptName',
      slotName: 'deptName',
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
    await Userstatus(record.userId, value).then((res) => {});
  };

  const handleCancel = (type) => {
    if (type == 1) {
      visible.value = false;
    }
    if (type == 2) {
      deptvisible.value = false;
    }
  };

  const editDeptHandleOk = async () => {
    let depts: Array = [],
      user: User = { userId: selectUser.value.userId };
    checkStrictly.value.forEach((val) => {
      depts.push(val.deptId);
    });
    user.dept = depts;
    await UserEdit(user).then((res) => {
      fetchData();
    });
  };


  const cb = async (err) => {
    if (err) {
      visible.value = true;
    } else {
      if (editform.value.userId.length > 0) {
        await UserEdit({
          ...editform.value
        } as unknown as User).then((res) => {
          fetchData();
        });
      } else {
        await UserAdd({
          ...editform.value
        } as unknown as User).then((res) => {
          fetchData();
        });
      }
    }

  };
  const editHandleOk = () => {
    formRef.value.validate(cb);
  };
  const operation = async (t, record) => {
    if (t == 0) {
      save.value = '新增';
      visible.value = true;
      editform.value.userId = '';
      editform.value.userName = '';
      editform.value.loginName = '';
      editform.value.nickName = '';
      editform.value.email = '';
      editform.value.phoneNumber = '';
      editform.value.role = '';
    }
    //重置密码
    if (t == 1) {
      await UserChangePwd(record.userId).then((res) => {
        if (res.code == 20000) {
          Modal.success({
            title: '重置密码',
            content: '该用户密码重置为000000',
          });
        } else {
          Modal.error({
            title: '重置密码',
            content: '该用户密码重置失败',
          });
        }
      });
    }
    //编辑
    if (t == 2) {
      visible.value = true;
      save.value = '编辑';
      editform.value.userId = record.userId;
      editform.value.userName = record.userName;
      editform.value.loginName = record.loginName;
      editform.value.email = record.email;
      editform.value.phoneNumber = record.phoneNumber;
      if (record.roles?.length>0) {
        editform.value.role = record.roles[0].roleId;
      }
    }
    //删除
    if (t == 3) {
      await UserDelete(record.userId).then((res) => {
        if (res.code == 200) {
          fetchData();
        }
      });
    }
    //权限
    if (t == 4) {
      resourcevisible.value = true;
      checkStrictlyMenu.value = [];
      checkStrictlyKnowledge.value = [];
      checkStrictlyDialog.value = [];
      checkStrictlyAgent.value = [];
      selectUser.value = record;

      let agents;
      if (record.agents){
        agents=record.agents
      }else{
        agents = record.roles ? record.roles[0].agents : null;
      }
      if (agents) {
        agents.forEach((val) => {
          checkStrictlyAgent.value.push({
            agentId: val.id,
            agentName: val.title,
          });

        });
      }
      let resources;
      if (record.resources){
        resources=record.resources
      }else{
        resources = record.roles ? record.roles[0].resources : null;
      }
      if (resources) {
        resources.forEach((val) => {
          checkStrictlyMenu.value.push({
            menuId: val.menuId,
            menuName: val.menuName,
          });

        });
      }
      let knowledges;
      if (record.knowledges) {
        knowledges = record.knowledges;
      } else {
        knowledges = record.roles ? record.roles[0].knowledges : null;
      }
      if (knowledges) {
        knowledges.forEach((val) => {
          checkStrictlyKnowledge.value.push({
            knowledgeId: val.id,
            knowledgeName: val.name,
          });
        });
      }
      let dialogs = record.roles ? record.roles[0].dialogs : null;
      if (dialogs) {
        dialogs.forEach((val) => {
          checkStrictlyDialog.value.push({
            dialogId: val.id,
            dialogName: val.name,
          });
        });
      }
    }
    //机构
    if (t == 5) {
      deptvisible.value = true;
      checkedKeys.value = [];
      expandKdys.value = [];
      checkStrictly.value = [];
      selectUser.value = record;
      expandKdys.value.push('0');
      if (record.dept) {
        record.dept.forEach((val) => {
          checkStrictly.value.push({
            deptId: val.deptId,
            deptName: val.deptName,
          });
          checkedKeys.value.push(val.deptId);
          expandKdys.value.push(val.deptId);
        });
      }
    }
  };

  const fetchData = async (
    params: Pagination = { current: 1, pageSize: 20 }
  ) => {
    setLoading(true);
    try {
      await UserList(params).then((res) => {
        for (const user of res.rows) {
          if (user.dept) {
            for (const d of user.dept) {
              if (user.deptName) {
                user.deptName += d.deptName + ',';
              } else {
                user.deptName = d.deptName + ',';
              }
            }
          }
          if (user.roles) {
            for (const r of user.roles) {
              if (user.roleName) {
                user.roleName += r.roleName + ",";
              } else {
                user.roleName = r.roleName + ",";
              }
            }
          }
        }
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

  const OrganizationData = async (key) => {
    await OrganizationList(key).then((res) => {
      treeData.value = [...res.rows];
    });
  };


  fetchData();
  OrganizationData('');
  loadRole()

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
  .space_select_all {
    display: flex;
    justify-content: end;
    margin-bottom: 15px;
  }
  .table_box {
    display: flex;

    border: 1px solid #e8e8e8;
    border-bottom: none;
    .row1_clo {
      min-width: 200px;
      display: flex;
      padding-left: 20px;
      border-right: 1px solid #e8e8e8;
    }
    .table_row1 {
      width: 100%;
      .row1_list {
        display: flex;
        min-height: 40px;
        border-bottom: 1px solid #e8e8e8;
        // line-height: 40px;
      }
    }
    .row1_clo2 {
      width: 100%;
      border-top: none;
      .row2_clo2_1 {
        display: flex;
        width: 100%;
        min-height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #e8e8e8;
        .row1_clo2_1 {
          border-right: 1px solid #e8e8e8;
          min-width: 310px;
          padding-left: 20px;
        }
        .row1_clo2_2 {
          border-top: none;
          border-right: none;
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          div {
            margin-left: 20px;
          }
        }
      }
    }
    .row2_clo2_1:last-child {
      border-bottom: none;
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
