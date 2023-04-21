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
          <div class="grid grid-cols-dynamic">
            <ContentList path="/blog" :query="computedQuery" v-slot="{ list }">
              <div v-for="blog in list" :key="blog._path">
                <NuxtLink :to="blog._path">
                  <div
                    class="text-white hover:-translate-y-3 border-transparent hover:border-green-lizard border-2 transition-all my-2 rounded-md p-5 capitalize flex flex-col gap-4 overflow-hidden"
                  >
                    <NuxtImg
                      class="rounded-md"
                      :src="`/images/content/${blog.mainTopic}.webp`"
                    />
                    <h2 class="text-3xl font-semibold text-green-lizard">
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
        <template v-if="uniqueMainTopics.size > 1">
          <aside class="text-white p-5 bg-black-soft rounded-lg">
            <h2 class="text-3xl font-semibold mb-6">Topics</h2>
            <div class="flex flex-col text-lg gap-3">
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
    </template>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import dateToWords from "@/utils/dateToWords";
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

const chosenMainTopics = ref<Set<string>>(new Set());
const sort = ref(-1);

let uniqueMainTopics = computed(() => {
  const temp = new Set<string>();

  if (!pending.value && mainTopics.value) {
    mainTopics.value.forEach(({ mainTopic }) => temp.add(mainTopic));
  }
  return temp;
});
const computedChosenMainTopics = computed(() => {
  const temp: object[] = [];
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
</script>
