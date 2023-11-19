import { defineStore } from "pinia";

export const useMyStore = defineStore("myStore", {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++;
    },
  },
});
