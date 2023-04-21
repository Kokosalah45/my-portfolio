<template>
  <main class="h-screen bg-[#1a1a1a] grid grid-cols-[125px_1fr]">
    <aside class="bg-[#1c1c1c] flex-col flex col-start-1 col-end-2">
      <slot name="aside" />
      <slot>
        <Sidebar>
          <template #navLinks>
            <NavLinks
              :links="internalLinks"
              class="flex flex-col text-black font-mono"
            >
              <template #links="{ links }">
                <NavLink
                  v-for="{ href, text } in links"
                  :href="href"
                  class="w-full inline-block p-2 text-center border-black border-b-[1px] bg-[#9AEB22] hover:bg-[#6da31b] transition-all"
                  activeClass="bg-[#6da31b]"
                  :text="text"
                />
              </template>
            </NavLinks>
          </template>
          <template #socialLinks>
            <NavLinks :links="externalLinks" class="flex gap-2 justify-center">
              <template #links="{ links }">
                <NavLink
                  v-for="{ href, imgSrc } in links"
                  :href="href"
                  class="m-2 inline-block"
                  :blank="true"
                  :imgSrc="imgSrc"
                />
              </template>
            </NavLinks>
          </template>
        </Sidebar>
      </slot>
    </aside>

    <section
      class="col-start-2 h-full overflow-auto bg-black-mute relative px-10"
    >
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
];
const externalLinks = [
  { href: "https://github.com/Kokosalah45", imgSrc: "grommet-icons:github" },
  {
    href: "https://www.linkedin.com/in/keroloussalah/",
    imgSrc: "grommet-icons:linkedin",
  },
];
</script>
