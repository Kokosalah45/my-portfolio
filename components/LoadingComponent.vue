<template>
  <Transition>
    <div v-if="loading" class="absolute inset-0 z-50 bg-slate-400"></div>
  </Transition>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp();
const loading = ref(false);
nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
</script>
