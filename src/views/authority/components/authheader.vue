<template>
  <Breadcrumb :items="items" />
</template>
<script lang="ts" setup>
import { PropType } from 'vue';

defineProps({
  items: {
    type: Array as PropType<string[]>,
    default() {
      return [];
    },
  },
});
</script>