<script setup>
import ZulkitDB from '@/Api/data/zulkitData'
import { useUserStore } from '@/stores/user'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const form = reactive({
  name: '',
  email: '',
  password: '',
  title: 'Designer',
})

const loading = ref(false)
const error = ref(null)

const router = useRouter()
const userStore = useUserStore()

async function Register() {
  error.value = null
  if (!form.name || !form.email || !form.password) {
    error.value = 'Harap lengkapi semua field'
    return
  }

  if (form.password.length < 6) {
    error.value = 'Password minimal 6 karakter'
    return
  }

  loading.value = true
  try {
    const response = await ZulkitDB.AuthRegister({ ...form })
    localStorage.setItem('tokenAuth', response.access_token)
    localStorage.setItem('token_type', response.token_type)

    await userStore.fetchUser()
    router.push('/')
  } catch (err) {
    error.value = err.response?.data?.message || 'Terjadi kesalahan saat registrasi.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form @submit.prevent="Register">
    <div v-if="error" class="mb-4 text-sm text-red-600">
      {{ error }}
    </div>

    <div class="mb-4">
      <label class="block mb-1" for="name">Name</label>
      <input
        v-model.trim="form.name"
        placeholder="Type your full name"
        id="name"
        type="text"
        name="name"
        class="block w-full py-3 mt-2 border border-gray-300 rounded-full shadow-sm px-7"
      />
    </div>
    <div class="mb-4">
      <label class="block mb-1" for="email">Email Address</label>
      <input
        v-model.trim="form.email"
        placeholder="Type your email"
        id="email"
        type="email"
        name="email"
        class="block w-full py-3 mt-2 border border-gray-300 rounded-full shadow-sm px-7"
      />
    </div>
    <div class="mb-4">
      <label class="block mb-1" for="password">Password</label>
      <input
        v-model.trim="form.password"
        placeholder="Type your password"
        id="password"
        type="password"
        name="password"
        class="block w-full py-3 mt-2 border border-gray-300 rounded-full shadow-sm px-7"
      />
    </div>
    <div class="mt-6">
      <button
        :disabled="loading"
        type="submit"
        class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700"
      >
        <span v-if="loading">Registering...</span>
        <span v-else>Continue Sign Up</span>
      </button>

      <RouterLink
        to="/login"
        class="inline-flex items-center justify-center w-full px-8 py-3 mt-2 text-base font-medium text-black bg-gray-200 border border-transparent rounded-full hover:bg-gray-300"
      >
        Sign In
      </RouterLink>
    </div>
  </form>
</template>
