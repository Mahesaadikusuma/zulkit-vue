<script setup>
import ZulkitDB from '@/Api/data/zulkitData'
import { useUserStore } from '@/stores/user'
import { reactive, ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const form = reactive({
  email: '',
  password: '',
})
const loading = ref(null)
const error = ref(null)
const router = useRouter()
const userStore = useUserStore()

async function Login() {
  loading.value = true
  try {
    const data = {
      email: form.email,
      password: form.password,
    }
    const response = await ZulkitDB.AuthLogin(data)
    localStorage.setItem('tokenAuth', response.access_token)
    localStorage.setItem('token_type', response.token_type)

    await userStore.fetchUser()
    router.push('/')
  } catch (err) {
    error.value = err.toString()
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form>
    <div class="mb-4">
      <label class="block mb-1" for="email">Email Address</label>
      <input
        v-model.lazy="form.email"
        placeholder="Type your email"
        id="email"
        type="text"
        name="email"
        class="block w-full py-3 mt-2 border border-gray-300 rounded-full shadow-sm px-7 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-100"
      />
    </div>
    <div class="mb-4">
      <label class="block mb-1" for="password">Password</label>
      <input
        v-model.lazy="form.password"
        placeholder="Type your password"
        id="password"
        type="password"
        name="password"
        class="block w-full py-3 mt-2 border border-gray-300 rounded-full shadow-sm px-7 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-100"
      />
    </div>
    <div class="mt-6">
      <button
        @click.prevent="Login"
        type="submit"
        class="inline-flex cursor-pointer items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-lg md:px-10 hover:shadow"
      >
        Sign In
      </button>
      <RouterLink
        to="/register"
        class="inline-flex items-center justify-center w-full px-8 py-3 mt-2 text-base font-medium text-black bg-gray-200 border border-transparent rounded-full hover:bg-gray-300 md:py-2 md:text-lg md:px-10 hover:shadow"
      >
        Create New Account
      </RouterLink>
    </div>
  </form>
</template>
