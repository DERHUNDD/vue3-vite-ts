<template>
  <a-result status="500" title="500" sub-title="抱歉，服务器出现错误！">
    <template #extra>
      <a-button type="primary" @click="toHome"> 返回 </a-button>
    </template>
  </a-result>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'Exception500',
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
