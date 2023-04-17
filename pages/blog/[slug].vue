<template>
  <NuxtLayout :name="layout">
    <template #section>{{ route.params.id }}</template>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const layout = "base";
const route = useRoute();
</script>
