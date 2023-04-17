<template>
  <ul :class="class">
    <slot name="links" />
  </ul>
</template>

<script setup lang="ts">
type NavLink = { href: string; text?: string; imgSrc?: string };

type Props = {
  links: NavLink[];
  linksClass: string;
  class: string;
};

defineProps<Props>();
</script>
