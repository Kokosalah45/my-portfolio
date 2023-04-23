<template>
  <NuxtLayout :name="layout">
    <template #section>
      <div class="flex h-full py-5">
        <div class="max-w-[85rem] text-white flex-1 p-4 mx-auto gap-5">
          <div class="py-3 border-b-2 border-white mb-5">
            <h3 class="text-xl font-semibold mb-2">Sort By :</h3>
            <div class="flex gap-2">
              <button
                class="px-4 flex items-center gap-2 py-2 rounded-lg shadow-lg text-base bg-black-soft"
                @click="sort = sort * -1"
              >
                <span>Date</span>
                <Icon v-if="sort === 1" name="icons8:arrows-long-up" />
                <Icon v-else-if="sort === -1" name="icons8:arrows-long-down" />
              </button>
            </div>
          </div>
          <div class="flex h-[80vh] gap-3 lg:flex-row flex-col">
            <div class="flex flex-col flex-1 capitalize order-2">
              <div class="items-center gap-2 mb-3 lg:hidden flex">
                <h3 class="text-lg pl-1">Searched Topics :</h3>
                <template v-if="computedChosenMainTopics.length">
                  <ul>
                    <li
                      class="mt-[.1rem]"
                      v-for="{ mainTopic } in computedChosenMainTopics"
                    >
                      {{ mainTopic }}
                    </li>
                  </ul>
                </template>
                <p v-else>All</p>
              </div>
              <div
                class="grid grid-cols-dynamic overflow-auto gap-4 h-full p-1"
              >
                <ContentList
                  path="/blog"
                  :query="computedQuery"
                  v-slot="{ list }"
                >
                  <div v-for="blog in list" :key="blog._path">
                    <NuxtLink :to="blog._path">
                      <div
                        class="text-white hover:translate-y-1 border-transparent hover:border-green-lizard border-2 transition-all rounded-md p-5 capitalize flex flex-col gap-4 overflow-hidden"
                      >
                        <NuxtImg
                          class="rounded-md"
                          :src="`/images/content/${blog.mainTopic}.webp`"
                        />
                        <h2 class="text-2xl font-semibold text-green-lizard">
                          {{ blog.title }}
                        </h2>
                        <p class="opacity-30 text-xl">
                          {{ dateToWords(blog.date) }}
                        </p>
                      </div>
                    </NuxtLink>
                  </div>
                </ContentList>
              </div>
            </div>
            <template v-if="uniqueMainTopics.size > 0">
              <aside
                class="text-white lg:p-5 p-3 bg-black-soft rounded-lg order-1 relative"
              >
                <div
                  class="text-3xl font-semibold lg:mb-6 flex items-center justify-between"
                >
                  <h2>Topics</h2>
                  <button
                    @click="isTopicsTabOpen = !isTopicsTabOpen"
                    :class="`lg:hidden w-11 flex rounded-full items-center justify-center h-11 bg-black-mute ${
                      isTopicsTabOpen ? 'rotate-180' : ''
                    } transition-all`"
                  >
                    <Icon
                      size="30"
                      class="text-white"
                      name="icons8:angle-down"
                    />
                  </button>
                </div>
                <div
                  :class="`lg:flex flex-col text-lg gap-3 lg:static lg:p-0 lg:bg-transparent lg:translate-y-0 absolute w-full p-8 bg-black-mute left-0 translate-y-8 rounded-lg h-32 overflow-y-auto ${
                    !isTopicsTabOpen ? 'hidden' : 'flex'
                  }`"
                >
                  <button
                    @click="addRemoveTopic(mainTopic)"
                    :class="`rounded-md cursor-pointer capitalize hover:-translate-y-1 transition-all ${
                      chosenMainTopics.has(mainTopic)
                        ? ' bg-teal-500'
                        : 'bg-teal-300'
                    }`"
                    v-for="mainTopic in uniqueMainTopics"
                  >
                    {{ mainTopic }}
                  </button>
                </div>
              </aside>
            </template>
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import dateToWords from "@/utils/dateToWords";
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

const chosenMainTopics = ref<Set<string>>(new Set());
const sort = ref(-1);
const isTopicsTabOpen = ref(false);

let uniqueMainTopics = computed(() => {
  const temp = new Set<string>();

  if (!pending.value && mainTopics.value) {
    mainTopics.value.forEach(({ mainTopic }) => temp.add(mainTopic));
  }
  return temp;
});
const computedChosenMainTopics = computed(() => {
  const temp: { mainTopic: string }[] = [];
  chosenMainTopics.value.forEach((mainTopic) => temp.push({ mainTopic }));
  return temp;
});

const { data: mainTopics, pending } = await useAsyncData(
  "mainTopics",
  async () => await queryContent("blog").only("mainTopic").find()
);

const addRemoveTopic = (mainTopic: string) => {
  chosenMainTopics.value.has(mainTopic)
    ? chosenMainTopics.value.delete(mainTopic)
    : chosenMainTopics.value.add(mainTopic);
};

const computedQuery: QueryBuilderParams = computed(() => ({
  path: "/blog",
  where: computedChosenMainTopics.value.length
    ? [{ $or: computedChosenMainTopics.value }]
    : undefined,
  sort: [{ date: sort.value }],
}));

const layout = "base";

definePageMeta({
  keepalive: true,
});
</script>
