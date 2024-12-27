<template>
  <div class="list-wrap">
    <a-typography-title class="block-title" :heading="6">
      {{ $t('cardList.tab.title.content') }}
    </a-typography-title>
    <a-button class="add-button" type="primary" @click="addCard">添加</a-button>

    <a-row class="list-row" :gutter="24">
      <a-col
        :xs="12"
        :sm="12"
        :md="12"
        :lg="6"
        :xl="6"
        :xxl="6"
        class="list-col"
      >
        <div class="card-wrap empty-wrap">
          <a-card :bordered="false" hoverable>
            <a-result :status="null" title="Xinference模型是个很厉害的模型">
              <template #icon>
                <icon-plus style="font-size: 20px" />
              </template>
            </a-result>
          </a-card>
        </div>
      </a-col>
      <a-col
        v-for="item in renderData"
        :key="item.id"
        class="list-col"
        :xs="12"
        :sm="12"
        :md="12"
        :lg="6"
        :xl="6"
        :xxl="6"
      >
        <CardWrap
          :loading="loading"
          :title="item.title"
          :description="item.description"
          :default-value="item.enable"
          :action-type="item.actionType"
          :icon="item.icon"
          :open-txt="$t('cardList.content.inspection')"
          :close-txt="$t('cardList.content.delete')"
          :show-tag="false"
        >
          <a-descriptions
            style="margin-top: 16px"
            :data="item.data"
            layout="inline-horizontal"
            :column="2"
          />
          <template #skeleton>
            <a-skeleton :animation="true">
              <a-skeleton-line
                :widths="['50%', '50%', '100%', '40%']"
                :rows="4"
              />
              <a-skeleton-line :widths="['40%']" :rows="1" />
            </a-skeleton>
          </template>
        </CardWrap>
      </a-col>
    </a-row>

    <a-modal v-model:visible="visible" @Ok="handleOk" @cancel="handleCancel">
      <template #title> 添加LLM </template>
      <a-form
        ref="formRef"
        :size="form.size"
        :model="form"
        auto-label-width
        @submit="handleSubmit"
      >
        <a-form-item
          field="type"
          label="模型类型"
          :rules="[{ required: true, message: '不能为空' }]"
          :validate-trigger="['change', 'input']"
        >
          <a-select
            v-model="form.type"
            placeholder="请选择模型类型"
            allow-clear
          >
            <a-option>chartGpt 4</a-option>
            <a-option>chartGpt o</a-option>
            <a-option>LLM</a-option>
          </a-select>
        </a-form-item>

        <a-form-item
          field="UID"
          label="模型UID"
          :rules="[
            { required: true, message: '不能为空' },
            { minLength: 1, message: '至少一个字符' },
          ]"
          :validate-trigger="['change', 'input']"
        >
          <a-input v-model="form.UID" placeholder="请输入模型UID" />
        </a-form-item>

        <a-form-item
          field="Url"
          label="基础Url"
          :rules="[
            { required: true, message: '不能为空' },
            { minLength: 1, message: '至少一个字符' },
          ]"
          :validate-trigger="['change', 'input']"
        >
          <a-input v-model="form.Url" placeholder="请输入基础Url" />
        </a-form-item>

        <a-form-item
          field="vision"
          label="是否支持 vision"
          :validate-trigger="['change', 'input']"
        >
          <a-switch v-model="form.vision" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
  import { nextTick, reactive, ref } from 'vue';
  import { queryInspectionList, ServiceRecord } from '@/api/list';
  import useRequest from '@/hooks/request';
  import CardWrap from './card-wrap.vue';

  const defaultValue: ServiceRecord[] = new Array(3).fill({});
  const { loading, response: renderData } = useRequest<ServiceRecord[]>(
    queryInspectionList,
    defaultValue
  );
  const visible = ref(false);
  const addCard = () => {
    visible.value = true;
  };

  const formRef = ref(null);
  const form = reactive({
    size: 'medium',
    type: '',
    UID: '',
    Url: '',
    vision: false,
  });
  const handleOk = () => {
    formRef.value.validate().then((res) => {
      if (res) {
        return;
      }
      renderData.value = renderData.value.concat({
        id: renderData.value.length + 1,
        title: form.type,
        description: form.Url,
        icon: 'icon-setting',
        actionType: 'inspection',
        enable: true,
        data: [
          {
            label: '待质检数',
            value: '120',
          },
          {
            label: '积压时长',
            value: '60s',
          },
          {
            label: '待抽检数',
            value: '0',
          },
        ],
      });
      visible.value = false;
    });
    nextTick(() => {
      visible.value = true;
    });
    return false;
  };
  const handleCancel = () => {
    formRef.value.resetFields();
    visible.value = false;
  };
</script>

<style scoped lang="less">
  .card-wrap {
    height: 100%;
    transition: all 0.3s;
    border: 1px solid var(--color-neutral-3);
    &:hover {
      transform: translateY(-4px);
    }
    :deep(.arco-card-meta-description) {
      color: rgb(var(--gray-6));
      .arco-descriptions-item-label-inline {
        font-weight: normal;
        font-size: 12px;
        color: rgb(var(--gray-6));
      }
      .arco-descriptions-item-value-inline {
        color: rgb(var(--gray-8));
      }
    }
  }
  .empty-wrap {
    height: 200px;
    border-radius: 4px;
    :deep(.arco-card) {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      .arco-result-title {
        color: rgb(var(--gray-6));
      }
    }
  }

  .list-wrap {
    position: relative;

    .block-title {
      height: 36px;
      lin-height: 36px;
    }

    .add-button {
      position: absolute;
      right: 20px;
      top: 0;
    }
  }
</style>
