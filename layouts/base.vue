<template>
  <main class="h-screen bg-[#1a1a1a] grid grid-cols-[125px_1fr]">
    <aside class="bg-[#1c1c1c] flex-col flex col-start-1 col-end-2">
      <slot name="aside" />
      <slot>
        <Sidebar>
          <template #navLinks>
            <ul class="flex flex-col text-black font-mono">
              <NavLink
                v-for="{ href, text } in internalLinks"
                :href="href"
                class="w-full inline-block p-2 text-center border-black border-b-[1px] bg-[#9AEB22] hover:bg-[#6da31b] transition-all"
                activeClass="bg-[#6da31b]"
                :text="text"
              />
            </ul>
          </template>
          <template #socialLinks>
            <ul class="flex gap-2 justify-center">
              <NavLink
                v-for="{ href, imgSrc } in externalLinks"
                :href="href"
                class="m-2 inline-block"
                :blank="true"
                :imgSrc="imgSrc"
              />
            </ul>
          </template>
        </Sidebar>
      </slot>
    </aside>

    <section class="col-start-2 h-full overflow-auto bg-black-mute relative">
      <slot name="section" />

      <LoadingComponent />
    </section>
  </main>
</template>

s
<script lang="ts" setup>
import Sidebar from "~/components/Sidebar.vue";
import NavLink from "~/components/NavLink.vue";
import LoadingComponent from "~/components/LoadingComponent.vue";
const internalLinks = [
  { href: "/about", text: "about" },
  { href: "/experience", text: "experience" },
  { href: "/contact", text: "contact" },
  { href: "/projects", text: "projects" },
  { href: "/blog", text: "blog" },
] as const;

const externalLinks = [
  { href: "https://github.com/Kokosalah45", imgSrc: "grommet-icons:github" },
  {
    href: "https://www.linkedin.com/in/keroloussalah/",
    imgSrc: "grommet-icons:linkedin",
  },
] as const;
</script>
