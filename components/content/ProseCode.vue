<script lang="ts">
import { defineComponent } from "#imports";

export default defineComponent({
  props: {
    code: {
      type: String,
      default: "",
    },
    language: {
      type: String,
      default: null,
    },
    filename: {
      type: String,
      default: null,
    },
    highlights: {
      type: Array as () => number[],
      default: () => [],
    },
    meta: {
      type: String,
      default: null,
    },
  },
});
</script>

<template>
  <div class="bg-black-soft p-5 overflow-auto rounded-md my-4">
    <slot />
  </div>
</template>
