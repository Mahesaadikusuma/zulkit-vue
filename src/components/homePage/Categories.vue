<script setup>
import { reactive } from 'vue'
import CategoryCard from '../card/CategoryCard.vue'

const categories = reactive([
  {
    id: 1,
    title: 'Mobile UI Kit',
    image: '/src/assets/img/categories-1.jpg',
    count: 12,
  },

  {
    id: 2,
    title: 'Fonts',
    image: '/src/assets/img/categories-2.jpg',
    count: 12,
  },

  {
    id: 3,
    title: 'Icon Set',
    image: '/src/assets/img/categories-3.jpg',
    count: 12,
  },

  {
    id: 4,
    title: 'Website UI Kit',
    image: '/src/assets/img/categories-4.jpg',
    count: 12,
  },
])
</script>

<template>
  <div class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">Top Categories</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <CategoryCard
        v-for="category in categories"
        :key="category.id"
        :id="category.id"
        :title="category.title"
        :image="category.image"
        :count="category.count"
      />
    </div>
  </div>
</template>
