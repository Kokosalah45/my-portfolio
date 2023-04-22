<template>
  <main class="h-screen bg-black-eerie grid grid-cols-[125px_1fr] font-mono">
    <aside
      :class="`lg:col-start-1 pt-3 lg:col-end-2 lg:flex lg:static inset-0 fixed lg:bg-black-soft bg-black-soft/90 flex-col  justify-around h-screen z-50 ${
        !isSideBarOpen ? 'hidden' : 'flex'
      }`"
    >
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
                  aria-label="Kerolous's social links"
                />
              </template>
            </NavLinks>
          </template>
        </Sidebar>
      </slot>
    </aside>

    <section
      class="col-start-1 lg:col-start-2 col-end-3 h-full overflow-auto bg-black-eerie relative lg:px-10 px-2 scroll-smooth"
    >
      <slot name="section" />
    </section>

    <button
      @click="isSideBarOpen = !isSideBarOpen"
      class="fixed z-[99] p-2 top-6 right-6 bg-black-soft shadow-2xl rounded-md lg:hidden"
    >
      <Icon size="30" class="text-white" name="simple-line-icons:menu" />
    </button>
  </main>
</template>

s
<script lang="ts" setup>
import Sidebar from "~/components/Sidebar.vue";
import NavLink from "~/components/NavLink.vue";

const isSideBarOpen = ref(false);

const internalLinks = [
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
