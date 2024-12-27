<template>
  <div class="container">
    <authheader :items="menuTips"></authheader>

    <a-row :gutter="20">
      <a-col :span="8">
        <a-card
          :title="$t('menu.organization.title')"
          :bordered="false"
          style=" 'width': '100%';   height: calc(100vh - 250px); overflow-y:auto "
        >
          <a-tree
            class="tree-demo"
            draggable
            blockNode
            :data="treeData"
            :show-line="showLine"
            :fieldNames="{
              key: 'deptId',
              title: 'deptName',
              children: 'children',
            }"
            @drop="onDrop"
            @select="showDetail"
          >
            <template #extra="nodeData">
              <IconPlus
                style="
                  position: absolute;
                  right: 60px;
                  font-size: 12px;
                  top: 10px;
                  color: #3370ff;
                "
                @click="() => onIconClick(nodeData)"
              />
              <a-popconfirm v-if="nodeData.deptName!='root'"
                content="请确认是否删除？"
                type="success"
                @ok="() => onIconClickDelete(nodeData)"
              >
                <IconDelete
                  style="
                  position: absolute;
                  right: 40px;
                  font-size: 12px;
                  top: 10px;
                  color: #3370ff;
                " />
              </a-popconfirm>
            </template>
          </a-tree>
        </a-card>
      </a-col>
      <a-col :span="16">
        <a-card
          :title="$t('menu.organization.detail')"
          :bordered="false"
          :style="{ width: '100%' }"
        >
          <a-form :model="deptform" layout="horizontal" ref="formRef">
            <a-form-item field="parentName" label="上级机构" disabled>
              <a-input v-model="deptform.parentName" />
            </a-form-item>
            <a-form-item field="status" label="机构状态">
              <a-switch
                checked-value="0"
                unchecked-value="1"
                v-model="deptform.status"
              ></a-switch>
            </a-form-item>
            <a-form-item field="deptName" label="机构名称" :rules="[{required:true,message:'机构名称必填'},{maxLength:50,message:'长度不超过50'}]">
              <a-input v-model="deptform.deptName" />
            </a-form-item>
            <a-form-item field="leader" label="联系人" :rules="[{required:true,message:'联系人必填'},{maxLength:50,message:'长度不超过50'}]">
              <a-input v-model="deptform.leader" />
            </a-form-item>
            <a-form-item field="phone" label="联系电话" :rules="[{required:true,message:'联系电话必填'},{maxLength:50,message:'长度不超过50'}]">
              <a-input v-model="deptform.phone" />
            </a-form-item>
            <a-form-item field="address" label="机构地址" style="align: start">
              <a-input v-model="deptform.address" />
            </a-form-item>
            <a-form-item>
              <a-space>
                <a-button @click="editdept">保存</a-button>
                <a-button @click="reset(deptform.deptId)">重置</a-button>
              </a-space>
            </a-form-item>
          </a-form>
        </a-card>
      </a-col>
    </a-row>
    <a-modal
      width="50%"
      v-model:visible="visible"
      title="新增"
      @cancel="handleCancel"
      @ok="addDept"
    >
      <a-form :model="deptform" layout="horizontal" ref="addFormRef">
        <a-form-item field="parentName" label="上级机构" disabled>
          <a-input v-model="deptform.parentName" />
        </a-form-item>
        <a-form-item field="status" label="机构状态">
          <a-switch
            checked-value="0"
            unchecked-value="1"
            v-model="deptform.status"
          ></a-switch>
        </a-form-item>
        <a-form-item field="deptName" label="机构名称" :rules="[{required:true,message:'机构名称必填'},{maxLength:50,message:'长度不超过50'}]">
          <a-input v-model="deptform.deptName" />
        </a-form-item>
        <a-form-item field="leader" label="联系人" :rules="[{required:true,message:'联系人必填'},{maxLength:50,message:'长度不超过50'}]">
          <a-input v-model="deptform.leader" />
        </a-form-item>
        <a-form-item field="phone" label="联系电话" :rules="[{required:true,message:'联系电话必填'},{maxLength:50,message:'长度不超过50'}]">
          <a-input v-model="deptform.phone" />
        </a-form-item>
        <a-form-item field="address" label="机构地址" style="align: start">
          <a-input v-model="deptform.address" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { IconPlus } from '@arco-design/web-vue/es/icon';
  import {
    Organization,
    OrganizationAdd,
    OrganizationById,
    OrganizationDelete,
    OrganizationList,
    OrganizationUpdate, User, UserAdd, UserEdit
  } from "@/api/authority";
  import Authheader from '@/views/authority/components/authheader.vue';
  import { Modal } from '@arco-design/web-vue';

  let formRef = ref();
  let addFormRef= ref();
  let visible = ref(false);
  let treeData = ref([]);
  let showLine = ref(true);
  let menuTips = ref(['权限管理', '机构']);
  let deptform = ref<Organization>({
    deptName: '',
    email: '',
    leader: '',
    orderNum: '0',
    parentId: '',
    parentName: '',
    phone: '',
    status: '',
    address: '',
    deptId: '',
  });

  const onIconClick = (nodeData) => {
    deptform.value.deptName = "";
    deptform.value.email = "";
    deptform.value.leader = "";
    deptform.value.orderNum = "0";
    deptform.value.phone = "";
    deptform.value.status = "";
    deptform.value.address = "";
    deptform.value.deptId = "";
    deptform.value.parentName = nodeData.deptName;
    deptform.value.parentId = nodeData.deptId;

    visible.value = true;
  };

  const addCb = async (err) => {
    if (err) {
      visible.value=true;
    } else {
      await OrganizationAdd({
        ...deptform.value,
      } as unknown as Organization).then((res) => {
        OrganizationData('');
      });
    }
    ;
  }

  const addDept = async () => {
    addFormRef.value.validate(addCb);
  };

  const onIconClickDelete = (nodeData) => {
    OrganizationDelete(nodeData.deptId).then(() => {
      OrganizationData('');
    });
  };

  const showDetail = (id) => {
    OrganizationById(id).then((res) => {
      deptform.value = { ...res.data };
    });
  };
  const cb = async (err) => {
    if (err) {

    } else {
      OrganizationUpdate({
        ...deptform.value,
      } as unknown as Organization).then((res) => {
        OrganizationData('');
        Modal.success({
          title: '保存成功',
          content: '保存成功',
        });
      });
    }
    ;
  }
  const editdept = () => {
    formRef.value.validate(cb);
  };
  const reset = (id) => {
    OrganizationById(id).then((res) => {
      deptform.value = { ...res.data };
    });
  };

  const onDrop = ({ dragNode, dropNode, dropPosition }) => {
    const data = treeData.value;
    OrganizationUpdate({
      orderNum: '0',
      parentId: dropNode.deptId,
      deptId: dragNode.deptId,
    });
    const loop = (data, key, callback) => {
      data.some((item, index, arr) => {
        if (item.deptId === key) {
          callback(item, index, arr);
          return true;
        }
        if (item.children) {
          return loop(item.children, key, callback);
        }
        return false;
      });
    };

    loop(data, dragNode.deptId, (_, index, arr) => {
      arr.splice(index, 1);
    });

    if (dropPosition === 0) {
      loop(data, dropNode.deptId, (item) => {
        item.children = item.children || [];
        item.children.push(dragNode);
      });
    } else {
      loop(data, dropNode.deptId, (_, index, arr) => {
        arr.splice(dropPosition < 0 ? index : index + 1, 0, dragNode);
      });
    }
  };

  const handleCancel = (type) => {
    if (type == 1) {
      visible.value = false;
    }
  };

  const OrganizationData = async (key) => {
    await OrganizationList(key).then((res) => {
      treeData.value = [...res.rows];
    });
  };

  OrganizationData('');
</script>

<style scoped>
  .tree-demo :deep(.tree-node-dropover) > :deep(.arco-tree-node-title),
  .tree-demo :deep(.tree-node-dropover) > :deep(.arco-tree-node-title):hover {
    animation: blinkBg 0.4s 2;
  }

  @keyframes blinkBg {
    0% {
      background-color: transparent;
    }

    100% {
      background-color: var(--color-primary-light-1);
    }
  }
</style>
