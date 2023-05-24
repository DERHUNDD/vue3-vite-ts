<template>
  <a-result status="404" title="404" sub-title="抱歉，访问的页面不存在！">
    <template #extra>
      <a-button type="primary" @click="goBack"> 返回 </a-button>
    </template>
  </a-result>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'Exception404',
  setup() {
    // const router = useRouter();
    const goBack = () => {
      // router.go(-1)
      history.back();
    };
    return {
      goBack,
    };
  },
});
</script>
