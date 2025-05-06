<script setup>
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
    <div class="overflow-hidden border border-gray-200 rounded-xl">
      <RouterLink :to="{ name: 'category-items', params: { id: id } }">
        <div class="m-4 overflow-hidden rounded-xl">
          <img class="block w-full h-auto" :alt="title" :src="image" />
        </div>
      </RouterLink>

      <header class="px-4 mb-4 leading-tight">
        <h1 class="text-lg">
          <RouterLink :to="{ name: 'category-items', params: { id: id } }" class="font-semibold text-black no-underline hover:underline">
            {{ title }}
          </RouterLink>
        </h1>
        <span class="block text-sm font-light text-gray-500 no-underline"> {{ count }} items </span>
      </header>
    </div>
  </div>
</template>
