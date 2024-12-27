<template>
  <div class="container">
    <Breadcrumb :items="['menu.dmx', 'menu.dmx.setting']" />
    <a-row :gutter="20" align="stretch">
      <a-col :span="24">
        <a-card class="general-card" :title="$t('menu.list.cardList')">
          <a-row justify="space-between">
            <a-col :span="24">
              <a-tabs
                :active-key="activeKey"
                type="line"
                :editable="true"
                show-add-button
                @tab-click="changeTabs"
                @add="handleAdd"
                @delete="handleDelete"
              >
                <!--                <a-tab-pane key="1" :title="$t('cardList.tab.title.all')">-->
                <!--                  <QualityInspection />-->
                <!--                  <TheService />-->
                <!--                  <RulesPreset />-->
                <!--                </a-tab-pane>-->
                <!--                <a-tab-pane key="2" :title="$t('cardList.tab.title.content')">-->
                <!--                  <QualityInspection />-->
                <!--                </a-tab-pane>-->
                <!--                <a-tab-pane key="3" :title="$t('cardList.tab.title.service')">-->
                <!--                  <TheService />-->
                <!--                </a-tab-pane>-->
                <!--                <a-tab-pane key="4" :title="$t('cardList.tab.title.preset')">-->
                <!--                  <RulesPreset />-->
                <!--                </a-tab-pane>-->

                <a-tab-pane
                  v-for="(item, index) of data"
                  :key="item.key"
                  :title="item.title"
                  :closable="index >= 4"
                >
                  <QualityInspection v-if="activeKey === 1" />
                  <TheService v-if="activeKey === 1" />
                  <RulesPreset v-if="activeKey === 1" />

                  <QualityInspection v-if="activeKey === 2" />

                  <TheService v-if="activeKey === 3" />
                  <RulesPreset v-if="activeKey === 4" />
                  <CustomSettings v-if="activeKey > 4" />
                </a-tab-pane>
              </a-tabs>
            </a-col>
            <div> </div>
            <a-input-search
              :placeholder="$t('cardList.searchInput.placeholder')"
              style="width: 240px; position: absolute; top: 60px; right: 20px"
            />
          </a-row>
        </a-card>
      </a-col>
    </a-row>

    <a-modal v-model:visible="visible" @Ok="handleOk" @cancel="handleCancel">
      <template #title> 添加框架 </template>
      <a-form
        ref="formRef"
        :size="form.size"
        :model="form"
        @submit="handleSubmit"
      >
        <a-form-item
          field="name"
          label="标签名"
          :rules="[
            { required: true, message: '不能为空' },
            { minLength: 1, message: '至少一个字符' },
          ]"
          :validate-trigger="['change', 'input']"
        >
          <a-input v-model="form.name" placeholder="请输入标签名" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive, nextTick } from 'vue';

  import QualityInspection from './components/quality-inspection.vue';
  import TheService from './components/the-service.vue';
  import RulesPreset from './components/rules-preset.vue';
  import CustomSettings from './components/custom-settings.vue';

  let count = 5;
  const activeKey = ref(1);
  const data = ref([
    {
      key: 1,
      title: '全部',
      content: 'Content of Tab Panel 1',
    },
    {
      key: 2,
      title: '内容质检',
      content: 'Content of Tab Panel 2',
    },
    {
      key: 3,
      title: '开通服务',
      content: 'Content of Tab Panel 3',
    },
    {
      key: 4,
      title: '规则预置',
      content: 'Content of Tab Panel 4',
    },
  ]);
const changeTabs = (val) => {
  activeKey.value = val;
}
  const handleAdd = () => {
    visible.value = true;
  };
  const handleDelete = (key: any) => {
    data.value = data.value.filter((item) => item.key !== key);
  };

  const visible = ref(false);
  const formRef = ref(null);
  const form = reactive({
    size: 'medium',
    name: '',
  });
  const handleOk = () => {
    count += 1;
    formRef.value.validate().then((res) => {
      if (res) {
        return;
      }
      data.value = data.value.concat({
        key: count,
        title: `${form.name}`,
        content: ``,
      });
      visible.value = false;
      activeKey.value = count;
    });
    nextTick(() => {
      visible.value = true;

    })
    return false;
  };
  const handleCancel = () => {
    formRef.value.resetFields();
    visible.value = false;
  };
  const handleSubmit = ({ values, errors }) => {
    this.$refs.formRef.validate().then((res, a, b) => {
      debugger;
      console.log('values', values);
    });
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
</style>
