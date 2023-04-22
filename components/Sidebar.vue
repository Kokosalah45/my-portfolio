<template>
  <div class="flex flex-col items-center capitalize font-mono">
    <NuxtLink href="/" aria-label="Kerolous's logo">
      <NuxtImg
        src="/images/K.png"
        width="90"
        height="90"
        class="p-2"
        alt="kerolous's logo"
      />
    </NuxtLink>
    <h2 class="text-xl select-none text-center text-[#9AEB22]">Kerolous</h2>
    <h3 class="text-[.7rem] select-none text-center text-[#9AEB22]">
      software dev.
    </h3>
  </div>
  <div
    class="text-white text-lg font-bold capitalize flex-1 flex flex-col justify-evenly"
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
