<script setup>
import ZulkitDB from '@/Api/data/zulkitData'
import { onMounted, ref } from 'vue'
import ItemCard from '../card/ItemCard.vue'

const items = ref([])
const loading = ref(null)
const error = ref(null)

async function fetchProducts() {
  loading.value = true
  try {
    const response = await ZulkitDB.getProducts()
    items.value = response.data
  } catch (err) {
    error.value = err.toString()
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchProducts()
})
</script>

<template>
  <div class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">New Items</h2>
    <div v-if="loading" class="loading">
        loading...
      </div>
      <div v-if="error" class="error">{{ error }}</div>
    <div v-if="items.length > 0" class="flex flex-wrap -mx-1 lg:-mx-4">
      <ItemCard
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :title="item.name"
        :image="item.thumbnails"
        :description="item.description"
        :subTitle="item.subtitle"
      />
    </div>
    <div v-else class="">
      <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg text-center">No Product Found</h2>
    </div>
  </div>
</template>
