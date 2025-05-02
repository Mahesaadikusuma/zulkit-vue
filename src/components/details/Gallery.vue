<script setup>
import { ref } from 'vue'

const defaultImage = ref('gallery-1.png')

const Galleries = ref([
  { id: 1, Image: 'gallery-1.png' },
  { id: 2, Image: 'gallery-2.png' },
  { id: 3, Image: 'gallery-3.png' },
  { id: 4, Image: 'gallery-4.png' },
])

function changeImage(image) {
  defaultImage.value = image
}
</script>

<template>
  <section id="gallery">
    <img :src="'/src/assets/img/' + defaultImage" alt="" class="w-full mt-6 rounded-2xl" />
    <div class="grid grid-cols-4 gap-4 mt-4">
      <template v-for="gallery in Galleries" :key="gallery.id">
        <div
          @click="changeImage(gallery.Image)"
          class="overflow-hidden cursor-pointer rounded-2xl"
          :class="{ 'ring-2 ring-indigo-500': defaultImage === gallery.Image }"
        >
          <img :src="'/src/assets/img/' + gallery.Image" class="w-full" alt="" />
        </div>
      </template>
    </div>
  </section>
</template>
