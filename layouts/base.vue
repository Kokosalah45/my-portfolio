<template>
  <main class="min-h-screen bg-[#1a1a1a] grid grid-cols-[150px_1fr]">
    <aside class="bg-[#1c1c1c] flex-col flex col-start-1 col-end-2">
      <slot name="aside" />
      <slot>
        <Sidebar>
          <template #navLinks>
            <ul class="flex flex-col text-black font-mono">
              <NavLink
                v-for="{ href, text } in internalLinks"
                :href="href"
                defaultClasses="w-full inline-block p-3 text-center border-black border-b-[1px] bg-[#9AEB22] hover:bg-[#77BB11] transition-all"
                activeClasses="bg-[#77BB11]"
                :text="text"
              />
            </ul>
          </template>
          <template #socialLinks>
            <ul class="flex gap-2 justify-center">
              <NavLink
                v-for="{ href, imgSrc } in externalLinks"
                :href="href"
                defaultClasses="m-2 inline-block"
                :blank="true"
                :imgSrc="imgSrc"
              />
            </ul>
          </template>
        </Sidebar>
      </slot>
    </aside>
    <section class="col-start-2 bg-black-mute">
      <slot name="section" />
    </section>
  </main>
</template>

s
<script lang="ts" setup>
import Sidebar from "~/components/Sidebar.vue";
import NavLink from "~/components/NavLink.vue";
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
