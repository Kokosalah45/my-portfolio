<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: "",
  },
  target: {
    type: String,
    default: undefined,
    required: false,
  },
});
</script>

<template>
  <NuxtLink
    class="underline text-green-lizard hover:text-olive-drab"
    :href="href"
    :target="target"
  >
    <slot />
  </NuxtLink>
</template>
