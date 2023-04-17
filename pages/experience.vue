<template>
  <NuxtLayout :name="layout">
    <template #section>{{ x }}</template>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const layout = "base";
const x = await useFetch("https://pokeapi.co/api/v2/pokemon/ditto");
</script>
