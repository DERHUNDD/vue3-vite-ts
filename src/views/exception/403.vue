<template>
  <a-result status="403" title="403" sub-title="抱歉，您没有权限访问此页面！">
    <template #extra>
      <a-button type="primary" @click="toHome"> 返回 </a-button>
    </template>
  </a-result>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'Exception403',
  setup() {
    const router = useRouter();
    const toHome = () => {
      router.push({ path: '/' });
    };
    return {
      toHome,
    };
  },
});
</script>
