<template>
  <div class="container">
    <authheader :items="menuTips"></authheader>
    <a-row :gutter="20">
      <a-col :span="8">
        <a-card
          :title="$t('menu.resource.title')"
          :bordered="false"
          style=" 'width': '100%';   height: calc(100vh - 250px); overflow-y:auto "
        >
          <a-tree
            class="tree-demo"
            draggable
            blockNode
            :default-expand-all=true
            :data="treeData"
            :show-line="showLine"
            :fieldNames="{
              key: 'menuId',
              title: 'menuName',
              children: 'children',
            }"
            @drop="onDrop"
            @select="showDetail"
          >
            <template #extra="nodeData"  >
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
              <a-popconfirm v-if="nodeData.menuName!='root'"
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
                "  />
              </a-popconfirm>
            </template>
          </a-tree>
        </a-card>
      </a-col>
      <a-col :span="16">
        <a-card
          :title="$t('menu.resource.detail')"
          :bordered="false"
          :style="{ width: '100%' }"
        >
          <a-form :model="resourceform" layout="horizontal" ref="formRef">
            <a-form-item field="parentName" label="上级资源" disabled>
              <a-input v-model="resourceform.parentName" />
            </a-form-item>
            <a-form-item field="status" label="资源状态">
              <a-switch
                checked-value="0"
                unchecked-value="1"
                v-model="resourceform.status"
              ></a-switch>
            </a-form-item>
            <a-form-item field="menuName" label="资源名称"  :rules="[{required:true,message:'资源名称必填'},{maxLength:50,message:'长度不超过50'}]">
              <a-input v-model="resourceform.menuName" />
            </a-form-item>
            <a-form-item field="menuName" label="资源图标">
              <Upload
                :action="uploadAction"
                :limit="1"
                :url="resourceform.icon"
                @update:fileList="updateFileList"
                @success="handleSuccess"
              ></Upload>
            </a-form-item>
            <a-form-item field="menuType" label="资源类型"  :rules="[{required:true,message:'资源类型必填'}]">
              <a-select
                v-model="resourceform.menuType"
                :options="options"
                :field-names="fieldNames"
                :style="{ width: '320px' }"
                placeholder="请选择"
              />
            </a-form-item>
            <a-form-item field="description" label="提示词">
              <a-input
                v-model="resourceform.description"
                placeholder="请输入提示词"
              />
            </a-form-item>
            <a-form-item field="perms" label="资源控制权限字符"  :rules="[{required:true,message:'资源控制权限字符必填'},{maxLength:50,message:'长度不超过50'}]">
              <a-input v-model="resourceform.perms" />
            </a-form-item>
            <a-form-item
              field="component"
              label="资源地址"
              style="align: start"
              :rules="[{required:true,message:'资源地址必填'},{maxLength:50,message:'长度不超过50'}]"
            >
              <a-input v-model="resourceform.component" />
            </a-form-item>
            <a-form-item>
              <a-space>
                <a-button @click="editresource">保存</a-button>
                <a-button @click="reset(resourceform.menuId)">重置</a-button>
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
      @ok="addresource"
    >
      <a-form  :model="resourceform" layout="horizontal" ref="addFormRef">
        <a-form-item field="parentName" label="上级资源" disabled>
          <a-input v-model="resourceform.parentName" />
        </a-form-item>
        <a-form-item field="status" label="资源状态">
          <a-switch
            checked-value="0"
            unchecked-value="1"
            v-model="resourceform.status"
          ></a-switch>
        </a-form-item>
        <a-form-item field="menuName" label="资源名称" :rules="[{required:true,message:'资源名称必填'},{maxLength:50,message:'长度不超过50'}]">
          <a-input v-model="resourceform.menuName" />
        </a-form-item>
        <a-form-item field="icon" label="资源图标">
          <Upload
            :action="uploadAction"
            :limit="1"
            :url="resourceform.icon"
            @update:fileList="updateFileList"
            @success="handleSuccess"
          ></Upload>
        </a-form-item>
        <a-form-item field="menuType" label="资源类型" :rules="[{required:true,message:'资源类型必填'}]">
          <a-select
            v-model="resourceform.menuType"
            :options="options"
            :field-names="fieldNames"
            :style="{ width: '320px' }"
            placeholder="请选择"
          />
        </a-form-item>
        <a-form-item field="description" label="提示词">
          <a-input
            v-model="resourceform.description"
            placeholder="请输入提示词"
          />
        </a-form-item>
        <a-form-item field="perms" label="资源控制权限字符" :rules="[{required:true,message:'资源控制权限字符必填'},{maxLength:50,message:'长度不超过50'}]">
          <a-input v-model="resourceform.perms" />
        </a-form-item>
        <a-form-item field="component" label="资源地址" style="align: start" :rules="[{required:true,message:'资源地址必填'},{maxLength:50,message:'长度不超过50'}]">
          <a-input v-model="resourceform.component" />
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
    OrganizationAdd, OrganizationUpdate,
    Resource,
    ResourceAdd,
    ResourceById,
    ResourceDelete,
    ResourceList,
    ResourceUpdate
  } from "@/api/authority";
  import Authheader from '@/views/authority/components/authheader.vue';
  import { Modal } from '@arco-design/web-vue';
  import { userModelState } from '@/store';

  const modelStore = userModelState();
  let formRef = ref();
  let addFormRef= ref();
  let visible = ref(false);
  let treeData = ref([]);
  let showLine = ref(true);
  let menuTips = ref(['权限管理', '资源']);
  const fieldNames = { value: 'key', label: 'value' };
  // 0目录 1菜单 2按钮
  let options = ref([
    {
      key: '3',
      value: '目录',
    },
    {
      key: '0',
      value: '菜单',
    },
    {
      key: '1',
      value: '按钮',
    },
  ]);
  let resourceform = ref<Resource>({
    component: '',
    createTime: '',
    description: '',
    icon: '',
    menuId: '',
    menuName: '',
    menuType: '',
    orderNum: '0',
    parentId: '',
    parentName: '',
    children: [],
    path: '',
    perms: '',
    status: '',
    syesourcetype: '',
    target: '',
    updateTime: '',
  });


  const onIconClick = (nodeData) => {
    if (nodeData) {
      resourceform.value.parentId = nodeData.menuId;
      resourceform.value.parentName = nodeData.menuName;
    }
    resourceform.value.component = '';
    resourceform.value.createTime = '';
    resourceform.value.description = '';
    resourceform.value.icon = '';
    resourceform.value.menuId = '';
    resourceform.value.menuName = '';
    resourceform.value.menuType = '';
    resourceform.value.orderNum = '0';
    resourceform.value.path = '';
    resourceform.value.perms = '';
    resourceform.value.status = '';
    resourceform.value.syesourcetype = '';

    visible.value = true;
  };

  //图片上传
  const uploadAction = '/api/v1/llm/upload'; // 替换为你的上传API
  const fileList = ref([]);
  const imageUrls = ref([]);
  const uploadUrl = ref([]);
  const httpUrl = modelStore.hrefUrl;
  const updateFileList = (newFileList) => {
    fileList.value = newFileList;
  };

  const handleSuccess = (urls) => {
    uploadUrl.value = urls;

    const urlsArr = urls.map((url) => {
      return httpUrl + url;
    });
    imageUrls.value = urlsArr; // 拿到上传的图片地址
  };

  const addCb = async (err) => {
    if (err) {
      visible.value = true;
    } else {
      resourceform.value.icon = uploadUrl.value[0] || '';
      await ResourceAdd({
        ...resourceform.value,
      } as unknown as Resource).then((res) => {
        ResourceData('');
      });
    }
  }

  const addresource = async (done) => {
    addFormRef.value.validate(addCb);
  };

  const onIconClickDelete = (nodeData) => {
    ResourceDelete(nodeData.menuId).then(() => {
      ResourceData('');
    });
  };

  const showDetail = (id) => {
    ResourceById(id).then((res) => {
      resourceform.value = { ...res.data };
      resourceform.value.icon = res.data.icon;

      imageUrls.value.push(httpUrl + res.data.icon);
    });
  };
  const cb = async (err) => {
    if (err) {

    } else {
      resourceform.value.icon = uploadUrl.value[0] || '';
      ResourceUpdate({
        ...resourceform.value,
      } as unknown as Resource).then((res) => {
        ResourceData('');
        Modal.success({
          title: '保存成功',
          content: '保存成功',
        });
      });
    }
  }
  const editresource = () => {
    formRef.value.validate(cb);

  };
  const reset = (id) => {
    ResourceById(id).then((res) => {
      resourceform.value = { ...res.data };
    });
  };

  const onDrop = ({ dragNode, dropNode, dropPosition }) => {
    const data = treeData.value;
    ResourceUpdate({
      orderNum: '0',
      parentId: dropNode.menuId,
      menuId: dragNode.menuId,
    });
    const loop = (data, key, callback) => {
      data.some((item, index, arr) => {
        if (item.menuId === key) {
          callback(item, index, arr);
          return true;
        }
        if (item.children) {
          return loop(item.children, key, callback);
        }
        return false;
      });
    };

    loop(data, dragNode.menuId, (_, index, arr) => {
      arr.splice(index, 1);
    });

    if (dropPosition === 0) {
      loop(data, dropNode.menuId, (item) => {
        item.children = item.children || [];
        item.children.push(dragNode);
      });
    } else {
      loop(data, dropNode.menuId, (_, index, arr) => {
        arr.splice(dropPosition < 0 ? index : index + 1, 0, dragNode);
      });
    }
  };

  const handleCancel = (type) => {
    if (type == 1) {
      visible.value = false;
    }
  };

  const ResourceData = async (key) => {
    await ResourceList(key).then((res) => {
      treeData.value = [...res.rows];
    });
  };

  ResourceData('');
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
