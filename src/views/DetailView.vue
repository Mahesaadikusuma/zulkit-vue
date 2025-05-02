<script setup>
import About from '@/components/details/About.vue'
import Gallery from '@/components/details/Gallery.vue'
import Project from '@/components/details/projects/project.vue'
</script>

<template>
  <main>
    <div class="container p-2 mx-auto my-10 max-w-7xl">
      <div class="flex flex-row flex-wrap py-4">
        <main role="main" class="w-full px-4 pt-1 sm:w-2/3 md:w-2/3">
          <h1
            class="mb-2 text-3xl font-bold leading-normal tracking-tight text-gray-900 sm:text-4xl md:text-4xl"
          >
            RoboCrypto UI Kit
          </h1>
          <p class="text-gray-500">Build your next coin startup</p>
          <Gallery />
          <About />
        </main>
        <aside class="w-full px-4 sm:w-1/3 md:w-1/3">
          <div class="sticky top-0 w-full pt-4 md:mt-24">
            <div class="p-6 border rounded-2xl">
              <Project>
                <template #image>
                  <img src="@/assets/img/icon-figma.png" alt="" class="w-16" />
                </template>

                <h3 class="font-semibold text-md">Figma</h3>
                <p class="text-gray-400 text-md">Project Included</p>
              </Project>

              <Project>
                <template #image>
                  <img src="@/assets/img/icon-sketch.png" alt="" class="w-16" />
                </template>

                <h3 class="font-semibold text-md">Sketch</h3>
                <p class="text-gray-400 text-md">Project Included</p>
              </Project>

              <div>
                <h1 class="mt-5 mb-3 font-semibold text-md">Great Features</h1>
                <ul class="mb-6 text-gray-500">
                  <li class="mb-2">
                    Customizable layers
                    <img src="@/assets/img/icon-check.png" class="float-right w-5 mt-1" alt="" />
                  </li>
                  <li class="mb-2">
                    Documentation
                    <img src="@/assets/img/icon-check.png" class="float-right w-5 mt-1" alt="" />
                  </li>
                  <li class="mb-2">
                    Icon set design
                    <img src="@/assets/img/icon-check.png" class="float-right w-5 mt-1" alt="" />
                  </li>
                  <li class="mb-2">
                    Pre-built UI screens
                    <img src="@/assets/img/icon-check.png" class="float-right w-5 mt-1" alt="" />
                  </li>
                </ul>
              </div>
              <RouterLink
                to="/pricing"
                class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-md md:px-10 hover:shadow"
              >
                Download Now
              </RouterLink>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </main>
</template>
