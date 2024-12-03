import axios from 'axios'
import { defineStore } from 'pinia'

export const useRegisterStore = defineStore('register', {
  state: () => ({
    errors: null,
    loading: false,
    succuss: '',
  }),

  actions: {
    async register(formData) {
      this.errors = null
      this.loading = true
      try {
        const response = await axios.post('https://learning-laravel.test/api/register', formData)
        if (response.status) {
          this.succuss = response.data.msg
          this.loading = false
        }
      } catch (error) {
        this.errors = error.response
        this.loading = false
      }
    },
  },
})
