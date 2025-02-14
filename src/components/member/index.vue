<template>
  <a-transfer
      :data="data"
      :default-value="value"
      one-way
      :title="['待选人员', '已选人员']"
      :show-search="true"
  />
</template>

<script setup>
  import { computed, ref, onMounted, watch, watchEffect } from 'vue';
  import { useUserStore } from '@/store';

  const data = Array(8).fill(undefined).map((_, index) => ({
    value: `option${index + 1}`,
    label: `Option ${index + 1}`
  }));
  const value = ['option1', 'option3', 'option5'];

  onMounted(() => {

  });

</script>
