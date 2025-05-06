import ZulkitDB from '@/Api/data/zulkitData'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

// composition Api
export const useUserStore = defineStore('user', () => {
  const user = ref(false)

  const isLoggedIn = computed(() => user.value !== false)
  const getUser = computed(() => user.value)

  const token = localStorage.getItem('tokenAuth')
  const type = localStorage.getItem('token_type')

  if (!token || !type) {
    user.value = false
    return
  }

  async function fetchUser() {
    try {
      const { data } = await ZulkitDB.AuthUserProfile()
      user.value = data
    } catch (error) {
      user.value = false
      console.log('Pinia Store Error', error)
    }
  }

  function resetUser() {
    user.value = false
  }

  return { user, isLoggedIn, getUser, fetchUser, resetUser }
})

// option Api
// export const useUserStore = defineStore({
//   id: 'user',
//   state: () => ({
//     user: false,
//   }),
//   getters: {
//     isLoggedIn: (state) => state.user !== false,
//     getUser: (state) => state.user,
//   },
//   actions: {
//     async fetchUser() {
//       try {
//         const { data } = await axios.get('https://zullkit-backend.test/api/user', {
//           headers: {
//             Authorization:
//               localStorage.getItem('token_type') + ' ' + localStorage.getItem('tokenAuth'),
//           },
//         })
//         this.user = data
//       } catch (error) {
//         this.user = false
//       }
//     },
//   },
// })
