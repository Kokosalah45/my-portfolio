<template>
  <div class="flex flex-col items-center capitalize font-mono">
    <NuxtLink href="/">
      <nuxt-img src="/images/K.png" width="120" height="120"></nuxt-img>
      <h2 class="text-2xl text-center text-[#9AEB22]">Kerolous</h2>
      <h3 class="text-xs text-center text-[#9AEB22]">software dev.</h3>
    </NuxtLink>
  </div>
  <div
    class="text-white text-xl font-bold capitalize flex-1 flex flex-col justify-evenly"
  >
    <nav>
      <slot name="navLinks" />
    </nav>
    <nav>
      <slot name="socialLinks" />
    </nav>
  </div>
</template>

<script setup lang="ts"></script>
