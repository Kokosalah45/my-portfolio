<template>
  <ul :class="class">
    <slot name="links" :links="links" />
  </ul>
</template>

<script setup lang="ts">
type NavLink = { href: string; text?: string; imgSrc?: string };

type Props = {
  links: NavLink[];
  class: string;
};

defineProps<Props>();
</script>
