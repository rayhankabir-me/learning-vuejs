import axios from 'axios'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    user: null,
    errors: null,
    loading: false,
  }),

  getters: {
    authenticated() {
      return !!this.token && !!this.user
    },
  },

  actions: {
    async getUser(accessToken) {
      this.token = accessToken
      localStorage.setItem('access_token', accessToken)
      try {
        const userData = await axios.get('api/user')
        this.user = userData.data
      } catch (error) {
        const errorMessage = error.message || 'An error occurred'
        console.log(errorMessage)
      }
    },

    async login(formData) {
      this.errors = null
      this.loading = true
      try {
        const response = await axios.post('https://learning-laravel.test/api/login', formData)
        await this.getUser(response.data.access_token)
        this.loading = false
      } catch (error) {
        this.errors = error.response
        this.loading = false
      }
    },
  },
})
