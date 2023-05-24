<template>
  <div class="layout-container">BaseLayout</div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
defineComponent({
  name: 'BaseLayout',
});
</script>

<style lang="scss" scoped>
.layout-container {
  color: $test-color;
}
</style>
