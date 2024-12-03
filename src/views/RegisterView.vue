<script>
import { useRegisterStore } from '@/stores/register'

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
    }
  },
  setup() {
    const registerStore = useRegisterStore()
    return { registerStore }
  },

  computed: {
    getErrors() {
      return this.registerStore.errors
    },
    isLoading() {
      return this.registerStore.loading
    },
    isSuccess() {
      return this.registerStore.succuss
    },
  },

  methods: {
    async handleRegister() {
      try {
        await this.registerStore.register({
          username: this.username,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
        })
        if (this.registerStore.succuss) {
          this.username = ''
          this.email = ''
          this.password = ''
          this.password_confirmation = ''
        }
      } catch (error) {
        console.error('Registration failed:', error)
      }
    },
  },
}
</script>

<template>
  <div class="bg-white shadow dark:bg-gray-900 py-20">
    <div class="w-2/5 bg-white shadow dark:bg-gray-800 p-10 mx-auto">
      <form @submit.prevent="handleRegister" class="w-full">
        <div class="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your Username</label
          >
          <input
            type="text"
            v-model="username"
            name="username"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="jhondoe"
          />
          <p
            v-if="getErrors?.data?.errors?.username"
            class="mt-2 text-sm text-red-600 dark:text-red-500"
          >
            <span class="font-medium">Oops!</span> {{ getErrors?.data?.errors?.username[0] }}
          </p>
        </div>
        <div class="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your Email</label
          >
          <input
            type="email"
            v-model="email"
            name="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="jhon@example.com"
          />
          <p
            v-if="getErrors?.data?.errors?.email"
            class="mt-2 text-sm text-red-600 dark:text-red-500"
          >
            <span class="font-medium">Oops!</span> {{ getErrors?.data?.errors?.email[0] }}
          </p>
        </div>
        <div class="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Password</label
          >
          <input
            type="password"
            v-model="password"
            name="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <p
            v-if="getErrors?.data?.errors?.password"
            class="mt-2 text-sm text-red-600 dark:text-red-500"
          >
            <span class="font-medium">Oops!</span> {{ getErrors?.data?.errors?.password[0] }}
          </p>
        </div>
        <div class="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Confirm Password</label
          >
          <input
            type="password"
            v-model="password_confirmation"
            name="password_confirmation"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <p
            v-if="getErrors?.data?.errors?.password_confirmation"
            class="mt-2 text-sm text-red-600 dark:text-red-500"
          >
            <span class="font-medium">Oops!</span>
            {{ getErrors?.data?.errors?.password_confirmation[0] }}
          </p>
        </div>
        <div>
          <button
            v-if="!isLoading"
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register
          </button>

          <!-- success message badge -->
          <div
            v-if="isSuccess"
            class="mt-4 flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-900 dark:text-green-400"
            role="alert"
          >
            <svg
              class="flex-shrink-0 inline w-4 h-4 me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
              />
            </svg>
            <span class="sr-only">Info</span>
            <div><span class="font-medium">Success alert!</span> {{ isSuccess }}</div>
          </div>

          <!-- loading spinner -->
          <div v-if="isLoading" role="status">
            <svg
              aria-hidden="true"
              class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
