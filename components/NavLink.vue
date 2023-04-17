<template>
  <li>
    <NuxtLink
      :class="class"
      :activeClass="activeClass"
      :href="href"
      :target="blank ? '_blank' : ''"
    >
      <span v-if="text">{{ text }}</span>
      <Icon v-else-if="imgSrc" :name="imgSrc" :icon="imgSrc" />
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
type NavLink = {
  href: string;
  text?: string;
  imgSrc?: string;
  class?: string;
  activeClass?: string;
  blank?: boolean;
};
defineProps<NavLink>();
</script>
