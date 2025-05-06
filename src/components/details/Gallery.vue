<script setup>
// import Flicking from '@egjs/vue3-flicking'
// import '@egjs/vue3-flicking/dist/flicking.css' // penting: untuk gaya scroll horizontal

import { ref, watch } from 'vue'

const props = defineProps({
  defaultImage: {
    type: String,
    required: true,
  },
  Galleries: {
    type: Array,
    required: true,
  },
})

// Buat local state agar bisa diubah di komponen
const currentImage = ref(props.defaultImage)

// Update local image saat props berubah
watch(
  () => props.defaultImage,
  (newVal) => {
    currentImage.value = newVal
  },
)

// Method untuk mengganti image
function changeImage(image) {
  currentImage.value = image
}
</script>

<template>
  <section id="gallery">
    <img :src="currentImage" alt="" class="w-full mt-6 rounded-2xl" />

    <Flicking :options="{ moveType: 'freeScroll', bound: true }" class="mt-4">
      <div
        v-for="gallery in Galleries"
        :key="gallery.id"
        class="mr-4 shrink-0 cursor-pointer rounded-2xl overflow-hidden w-32 p-1"
        @click="changeImage(gallery.url)"
      >
        <img
          :src="gallery.url"
          alt=""
          class="w-full h-auto"
          :class="{ 'ring-2 ring-indigo-500': currentImage === gallery.url }"
        />
      </div>
    </Flicking>
  </section>
</template>
