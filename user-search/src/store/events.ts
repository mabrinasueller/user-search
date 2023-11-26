import { defineStore } from "pinia";
import { User } from "../types/types";

export const useMyStore = defineStore("users", {
  state: () => ({
    users: [] as User[],
    selectedUser: null as User | null,
    filters: {
      gender: "all",
      search: "",
    },
    loading: false,
  }),
  actions: {
    initializeStoreFromLocalStorage() {
      const storedState = localStorage.getItem("appState");
      if (storedState) {
        const parsedState = JSON.parse(storedState);
        this.users = parsedState.users || [];
        this.selectedUser = parsedState.selectedUser || null;
        this.filters = parsedState.filters || { gender: "all", search: "" };
      }
    },

    saveStoreToLocalStorage() {
      const stateToSave = {
        users: this.users,
        selectedUser: this.selectedUser,
        filters: this.filters,
      };
      localStorage.setItem("appState", JSON.stringify(stateToSave));
    },
  },
});
