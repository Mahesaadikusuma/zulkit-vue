<script setup>
import { useUserStore } from '@/stores/user'
import { onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore()

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
})

const show = ref(false)
const dropdownRef = ref(null)

function toggleDropdown() {
  show.value = !show.value
}

function handleClickOutside(event) {
  // console.log(event.target)
  if (
    dropdownRef.value &&
    !dropdownRef.value.contains(event.target) &&
    !event.target.closest('#user-menu-button')
  ) {
    show.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

function logout() {
  localStorage.removeItem('token_type')
  localStorage.removeItem('tokenAuth')
  // userStore.fetchUser()
  userStore.resetUser()
  router.push('/login')
}
</script>

<template>
  <div v-if="user" class="md:order-2">
    <div class="flex items-center">
      <div class="mr-2 text-sm font-regular dark:text-white">Halo, {{ user.name }}</div>
      <button
        type="button"
        class="flex mr-3 text-sm cursor-pointer bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="dropdown"
        @click="toggleDropdown"
      >
        <span class="sr-only">Open user menu</span>
        <img
          class="w-8 h-8 rounded-full"
          src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
          alt="user photo"
        />
      </button>
    </div>

    <div
      class="z-50 fixed right-0 top-10 my-4 w-52 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
      id="dropdown"
      :class="{ hidden: !show }"
      ref="dropdownRef"
    >
      <div class="px-4 py-3">
        <span class="block text-sm text-gray-900 dark:text-white">{{ user.name }}</span>
        <span class="block text-sm text-gray-500 truncate font-regular dark:text-gray-400">
          {{ user.email }}
        </span>
      </div>
      <ul class="py-1" aria-labelledby="dropdown">
        <li>
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >Subscriptions</a
          >
        </li>
        <li>
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >Settings</a
          >
        </li>
        <li>
          <button
            @click="logout"
            type="button"
            class="block w-full text-left cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Sign out
          </button>
        </li>
      </ul>
    </div>

    <!-- Mobile button lainnya -->
    <button
      data-collapse-toggle="mobile-menu-2"
      type="button"
      class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="mobile-menu-2"
      aria-expanded="false"
    >
      <span class="sr-only">Open main menu</span>
      <svg
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        />
      </svg>
      <svg
        class="hidden w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </div>

  <div class="" v-else>Tidak Ada User</div>
</template>
