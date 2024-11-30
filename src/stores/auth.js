import axios from 'axios'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    user: null,
  }),

  getters: {
    authenticated() {
      return !!this.token && !!this.user
    },
  },

  actions: {
    async getUser(accessToken) {
      this.token = accessToken
      try {
        const userData = await axios.get('https://learning-laravel.test/api/user', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        this.user = userData.data
      } catch (error) {
        const errorMessage = error.message || 'An error occurred'
        console.log(errorMessage)
      }
    },

    async login(formData) {
      try {
        const response = await axios.post('https://learning-laravel.test/api/login', formData)
        await this.getUser(response.data.access_token)
      } catch (error) {
        const errorMessage = error.message || 'An error occurred'
        console.log(errorMessage)
      }
    },
  },
})
