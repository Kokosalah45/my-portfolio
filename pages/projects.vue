<template>
  <NuxtLayout :name="layout">
    <template #section>
      <div class="grid place-items-center text-white text-5xl font-bold h-full">
        <div class="flex flex-col items-center">
          <NuxtImg src="/images/under-construction.svg" width="200" />
          <h2 class="mt-7">Under Construction</h2>
        </div>
      </div></template
    >
  </NuxtLayout>
</template>

<script lang="ts" setup>
const layout = "base";
</script>
