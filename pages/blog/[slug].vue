<template>
  <NuxtLayout :name="layout">
    <template #section>
      <div class="max-w-5xl text-white m-auto font-mono p-3">
        <NuxtLink class="translate-y-12 underline text-green-lizard" to="/blog"
          >Return to Main Page</NuxtLink
        >
        <ContentDoc />
      </div>
    </template>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const layout = "base";
</script>
