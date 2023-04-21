<template>
  <NuxtLayout :name="layout">
    <template #section>
      <div class="max-w-5xl text-white m-auto font-mono">
        <ContentDoc />
      </div>
    </template>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const layout = "base";
const route = useRoute();
</script>
