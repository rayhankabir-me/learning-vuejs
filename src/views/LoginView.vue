<script>
import { useAuthStore } from '../stores/auth'
export default {
  data() {
    return {
      email: 'rayhankabir.wp@gmail.com',
      password: '123456',
    }
  },
  setup() {
    const authStore = useAuthStore()
    return { authStore }
  },
  computed: {
    isAuthenticated() {
      return this.authStore.authenticated
    },
  },

  methods: {
    handleLogin() {
      this.authStore.login({
        email: this.email,
        password: this.password,
      })
    },
  },
}
</script>

<template>
  <div class="bg-white shadow dark:bg-gray-900 py-36">
    <div class="w-2/5 bg-white shadow dark:bg-gray-800 p-10 mx-auto">
      <form @submit.prevent="handleLogin" class="w-full">
        <div class="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your email</label
          >
          <input
            type="email"
            v-model="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
          />
          <p class="mt-2 text-sm text-green-600 dark:text-green-500">
            <span class="font-medium">Alright!</span> Username available!
          </p>
        </div>
        <div class="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your Password</label
          >
          <input
            type="password"
            v-model="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <p class="mt-2 text-sm text-red-600 dark:text-red-500">
            <span class="font-medium">Oops!</span> Username already taken!
          </p>
        </div>
        <div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>
          <!-- Access the authStore state directly
          <p v-if="isAuthenticated">Authenticated!</p>
          <p>Token: {{ authStore.token }}</p>
          <p>User: {{ authStore.user }}</p> -->
        </div>
      </form>
    </div>
  </div>
</template>
