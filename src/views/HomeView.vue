<script setup>
import Categories from '@/components/homePage/Categories.vue'
import Hero from '@/components/homePage/Hero.vue'
import Items from '@/components/homePage/Items.vue'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

// const route = useRoute()

// onMounted(() => {
//   if (route.params.id) {
//     document.title = `Product - ${route.params.id}`
//   } else {
//     document.title = 'Home'
//   }
// })
</script>

<template>
  <main>
    <Hero />
    <Categories />
    <Items />
  </main>
</template>

<style></style>
