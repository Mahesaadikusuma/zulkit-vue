<script setup>
import ZulkitDB from '@/Api/data/zulkitData'
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import CategoryCard from '../card/CategoryCard.vue'

const categories = ref([])
const loading = ref(null)
const error = ref(null)
const router = useRoute()

async function fetchCategories() {
  loading.value = true
  try {
    const response = await ZulkitDB.getCategories({ limit: 20 })
    categories.value = response.data
  } catch (err) {
    error.value = err.toString()
  } finally {
    loading.value = false
  }
}

watchEffect(() => {
  fetchCategories()
})
</script>

<template>
  <div class="container px-4 mx-auto my-16 md:px-12" id="categories">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">All Categories</h2>
     <div v-if="loading" class="loading">
        loading...
      </div>
      <div v-if="error" class="error">{{ error }}</div>
    <div v-if="categories.length > 0" class="flex flex-wrap -mx-1 lg:-mx-4">
      <CategoryCard
        v-for="category in categories"
        :key="category.id"
        :id="category.id"
        :title="category.name"
        :image="category.thumbnails"
        :count="category.products_count"
      />
    </div>

    <div v-else class="">
      <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg text-center">No Product Found</h2>
    </div>
  </div>
</template>
