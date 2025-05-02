<script setup>
import { reactive } from 'vue'
import ItemCard from '../card/ItemCard.vue'

const items = reactive([
  {
    id: 1,
    title: 'Mobile UI Kit',
    image: '/src/assets/img/items-1.jpg',
    description: 'Mobile UI Kit',
  },

  {
    id: 2,
    title: 'Online Doctor Consultation',
    image: '/src/assets/img/items-2.jpg',
    description: ' Website UI Kit',
  },

  {
    id: 3,
    title: 'Banking Crypto',
    image: '/src/assets/img/items-3.jpg',
    description: 'Mobile UI Kit',
  },
])
</script>

<template>
  <div class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">New Items</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <ItemCard
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :image="item.image"
        :description="item.description"
      />
    </div>
  </div>
</template>
