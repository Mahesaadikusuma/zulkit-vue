<script setup>
const props = defineProps({
  description: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section class="" id="orders">
    <h1 class="mt-8 mb-3 text-lg font-semibold">About</h1>
    <div class="text-gray-500">
      <p class="pb-4" v-html="description"></p>
    </div>
  </section>
</template>
