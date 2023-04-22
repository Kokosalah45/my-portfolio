<template>
  <NuxtLayout :name="layout">
    <template #section>
      <div class="px-5">
        <section
          id="welcome"
          class="min-h-screen relative grid grid-cols-2 items-center text-white gap-8"
        >
          <div
            class="flex flex-col justify-center flex-1 col-start-1 col-end-3 xl:col-end-2"
          >
            <h2 class="md:text-6xl text-3xl mb-6 font-bold leading-snug">
              Hi My Name is <span class="text-green-lizard">Kerolous</span>
            </h2>
            <p
              class="max-w-[80ch] text-gray-400 opacity-60 md:text-base text-xs md:leading-7 leading-6"
            >
              Welcome to my portfolio! As a full-stack software engineer, I'm
              passionate about crafting elegant and efficient solutions to
              complex problems. I love the challenge of tackling new projects
              and finding creative ways to improve user experiences. When I'm
              not coding, you can often find me gaming, listening to music, or
              taking long walks to clear my head. With a strong foundation in
              both front-end and back-end development, I specialize in creating
              dynamic web applications that deliver seamless user experiences.
              Please take a moment to browse my portfolio and see some examples
              of my work. I look forward to the opportunity to work with you!
            </p>
          </div>
          <div class="xl:block hidden col-start-2 col-end-3 mb-11 mr-6">
            <client-only>
              <Lottie
                animationLink="/animations/hello.json"
                :height="600"
                :width="600"
              />
            </client-only>
          </div>
          <NuxtLink
            :to="{
              path: '/',
              hash: route.hash === '#what-i-know' ? '#welcome' : '#what-i-know',
            }"
            class="fixed bottom-9 left-1/2 p-3 bg-green-lizard rounded-full text-black-eerie flex justify-center items-center animate-bounce"
            :external="true"
          >
            <Icon
              :class="`${
                route.hash === '#what-i-know' ? 'rotate-180' : ''
              } transition-all`"
              size="25"
              name="tabler:arrow-big-down-filled"
            />
          </NuxtLink>
        </section>
        <section id="what-i-know" class="p-5 h-[65vh]">
          <h2 class="text-white text-4xl text-center p-3 mb-5 font-bold">
            What I Know 🥳
          </h2>
          <ul class="grid grid-cols-dynamic gap-2">
            <li
              v-for="{ imageName, onHoverClasses } in technologies.imagesName"
            >
              <ShowCase
                :on-hover-classes="onHoverClasses"
                :img="`${technologies.imageBaseSrc}${imageName}.${technologies.extenstion}`"
                :image-name="imageName"
              />
            </li>
          </ul>
        </section>
      </div>
    </template>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const layout = "base";
const route = useRoute();

const technologies = {
  onHoverClasses: "",
  imageBaseSrc: "/images/technologies/",
  imagesName: [
    { imageName: "typescript", onHoverClasses: "!border-blue-400" },
    { imageName: "nextjs", onHoverClasses: "!border-white" },
    { imageName: "react", onHoverClasses: "!border-blue-400" },
    { imageName: "nuxtjs", onHoverClasses: "!border-green-400" },
    { imageName: "vue", onHoverClasses: "!border-green-400" },
    { imageName: "go", onHoverClasses: "!border-blue-400" },
    { imageName: "expressjs", onHoverClasses: "!border-white" },
    { imageName: "nestjs", onHoverClasses: "!border-red-400" },
    { imageName: "mongodb", onHoverClasses: "!border-green-400" },
    { imageName: "postgreSQL", onHoverClasses: "!border-blue-400" },
    { imageName: "prisma", onHoverClasses: "!border-white" },
  ],
  extenstion: "svg",
};
</script>
