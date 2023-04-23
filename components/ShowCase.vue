<template>
  <div
    :class="[
      'p-5 flex flex-col items-center border-transparent bg-black-mute rounded-md border-2 cursor-grab transition-all',
      isHovered ? onHoverClasses : '',
    ]"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <NuxtImg :src="img" :alt="imageName" width="150" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  img: string;
  onHoverClasses: string;
  imageName: string;
  creator?: {
    href: string;
    name: string;
  };
}>();
const isHovered = ref(false);
</script>
