import { defineStore } from 'pinia'

export const userInfoStore = defineStore('userInfo', {
  state: () => ({
    name: 'zwc',
    age: 18,
  }),
  getters: {
    doubleAge: state => state.age * 2,
  },
  actions: {
    increaseAge() {
      this.age += 1
    },
  },
})
