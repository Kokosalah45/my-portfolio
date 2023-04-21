<template>
  <h1 class="text-green-lizard font-mono text-5xl font-semibold my-9" :id="id">
    <a v-if="id && generate" :href="`#${id}`">
      <slot />
    </a>
    <slot v-else />
  </h1>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from "#imports";
defineProps<{ id?: string }>();
const heading = 1;
const { anchorLinks } = useRuntimeConfig().public.content;
const generate =
  anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading);
</script>
