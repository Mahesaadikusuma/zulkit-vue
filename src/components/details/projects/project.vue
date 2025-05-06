<script setup>
defineProps({
  show: {
    type: Boolean,
    required: false,
  },
})
</script>

<template>
  <div v-if="show" class="mb-4">
    <div class="flex mb-2">
      <div v-if="$slots.image">
        <slot name="image"></slot>
      </div>
      <div class="block mt-1 ml-4">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
